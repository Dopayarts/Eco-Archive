// Train SCAN's species head on the photos gathered by fetch_photos.py.
//   cd tools/plant_id && npm install && node train.cjs <cache-folder>
// Writes identify/head.js (the trained head), identify/CREDITS.csv (every photo used)
// and identify/REPORT.txt (accuracy on held-out photos, per plant).
// The image model itself (identify/backbone.js) stays fixed; only the head is trained,
// so retraining after adding plants takes minutes on an ordinary computer.
const tf = require('@tensorflow/tfjs-node');
const fs = require('fs'), path = require('path'), zlib = require('zlib');

const cache = path.resolve(process.argv[2] || '');
const ROOT = path.join(__dirname, '..', '..'), OUT = path.join(ROOT, 'identify');
const FEATURES = 'module_apply_default/MobilenetV2/Logits/AvgPool', DIM = 1280, SIZE = 224;
const VIEWS = [[1, false], [0.7, false], [1, true], [0.85, true]]; // same views as js/identify.js
const EXTRA = ['photos', 'inbox'].map(d => path.join(ROOT, d)); // Peace's own photos (photos/<plant id>/, inbox/<plant id>/) train SCAN too

const tsv = f => { const [h, ...rows] = fs.readFileSync(f, 'utf8').trim().split('\n').map(l => l.split('\t')); return rows.map(r => Object.fromEntries(h.map((k, i) => [k, r[i]]))); };
const hash = s => { let h = 2166136261; for (const c of s) h = Math.imul(h ^ c.charCodeAt(0), 16777619); return (h >>> 0) / 4294967296; };

async function backbone() {
  global.EA = {};
  eval(fs.readFileSync(path.join(OUT, 'backbone.js'), 'utf8'));
  const bb = EA.idBackbone, w = Buffer.from(bb.weights, 'base64');
  return tf.loadGraphModel(tf.io.fromMemory({ modelTopology: bb.modelTopology, weightSpecs: bb.weightSpecs,
    weightData: w.buffer.slice(w.byteOffset, w.byteOffset + w.length) }));
}

// The four views of one photo, as a [4, 224, 224, 3] batch in 0..1.
function views(file) {
  return tf.tidy(() => {
    const img = tf.node.decodeImage(fs.readFileSync(file), 3).toFloat().div(255);
    const [H, W] = img.shape, side = Math.min(W, H);
    const boxes = VIEWS.map(([f]) => { const s = side * f, y = (H - s) / 2, x = (W - s) / 2; return [y / H, x / W, (y + s) / H, (x + s) / W]; });
    const crops = tf.image.cropAndResize(img.expandDims(0), boxes, [0, 0, 0, 0], [SIZE, SIZE]);
    return tf.concat(VIEWS.map(([, flip], i) => { const c = crops.slice([i], [1]); return flip ? tf.image.flipLeftRight(c) : c; }));
  });
}

async function embedAll(net, items) {
  const embDir = path.join(cache, 'emb'); fs.mkdirSync(embDir, { recursive: true });
  let done = 0, t0 = Date.now();
  for (const it of items) {
    const f = path.join(embDir, it.key + '.bin');
    if (fs.existsSync(f)) { it.emb = new Float32Array(fs.readFileSync(f).buffer.slice(0)); continue; }
    let x;
    try { x = views(it.file); } catch (e) { it.bad = true; continue; }
    const e = tf.tidy(() => { const v = net.execute(x, FEATURES).reshape([-1, DIM]); return v.div(v.norm('euclidean', 1, true).add(1e-6)); });
    it.emb = e.dataSync().slice(); x.dispose(); e.dispose();
    fs.writeFileSync(f, Buffer.from(it.emb.buffer));
    if (++done % 500 === 0) console.log(`  embedded ${done} new photos, ${((Date.now() - t0) / done).toFixed(0)} ms each`);
  }
  return items.filter(it => !it.bad);
}

function fit(items, n, epochs) {
  const xs = [], ys = [];
  for (const it of items) for (let v = 0; v < VIEWS.length; v++) { xs.push(it.emb.subarray(v * DIM, (v + 1) * DIM)); ys.push(it.y); }
  const count = new Array(n).fill(0); ys.forEach(y => count[y]++);
  const X = tf.tensor2d(Float32Array.from(xs.flatMap(a => Array.from(a))), [xs.length, DIM]);
  const Y = tf.oneHot(tf.tensor1d(ys, 'int32'), n).toFloat();
  const SW = tf.tensor1d(ys.map(y => Math.min(4, (xs.length / n) / count[y])));  // rare plants count more
  const model = tf.sequential({ layers: [tf.layers.dense({ inputShape: [DIM], units: n, kernelInitializer: 'zeros',
    kernelRegularizer: tf.regularizers.l2({ l2: 1e-5 }) })] });
  const opt = tf.train.adam(0.01);
  const N = xs.length, B = 512;
  for (let e = 0; e < epochs; e++) {
    const order = tf.util.createShuffledIndices(N);
    let loss = 0;
    for (let s = 0; s < N; s += B) {
      const idx = tf.tensor1d(Int32Array.from(order.slice(s, s + B)), 'int32');
      const l = opt.minimize(() => tf.tidy(() => {
        const x = X.gather(idx), y = Y.gather(idx), w = SW.gather(idx);
        const logits = model.apply(x, { training: true }).mul(30);  // features are unit length, so scale up
        const smooth = y.mul(0.9).add(0.1 / n);
        return tf.losses.softmaxCrossEntropy(smooth, logits, w).add(tf.addN(model.losses.map(f => f())));
      }), true);
      loss += l.dataSync()[0]; l.dispose(); idx.dispose();
    }
    if (e % 10 === 9) console.log(`  epoch ${e + 1}  loss ${(loss / Math.ceil(N / B)).toFixed(3)}`);
  }
  X.dispose(); Y.dispose(); SW.dispose();
  const [k, b] = model.getWeights();
  return { w: k.mul(30).arraySync(), b: b.mul(30).arraySync() };
}

// Average the softmax over the four views, as the app does.
function predict(head, emb) {
  return tf.tidy(() => {
    const x = tf.tensor2d(emb, [VIEWS.length, DIM]);
    return tf.softmax(x.matMul(tf.tensor2d(head.w)).add(tf.tensor1d(head.b))).mean(0).arraySync();
  });
}

(async () => {
  const names = JSON.parse(fs.readFileSync(path.join(cache, 'names.json')));
  // plants that share an iNaturalist taxon (orange and grapefruit) form one class
  const byTaxon = {};
  for (const [id, v] of Object.entries(names)) if (v) (byTaxon[v.taxon] = byTaxon[v.taxon] || []).push(id);
  const classes = Object.values(byTaxon).map(ids => ids.sort().join('+')).sort();
  const classOf = {}; classes.forEach((c, i) => c.split('+').forEach(id => classOf[id] = i));

  const photos = {}; for (const r of tsv(path.join(cache, 'photos.tsv'))) photos[r.photo_id] = r;
  const observers = {};
  for (const l of zlib.gunzipSync(fs.readFileSync(path.join(cache, 'observers.csv.gz'))).toString().split('\n').slice(1)) {
    const [id, login, name] = l.split('\t'); observers[id] = { login, name: (name || '').trim() };
  }

  const items = [], seen = new Set();
  for (const id of Object.keys(classOf)) {
    const dir = path.join(cache, 'img', id);
    if (!fs.existsSync(dir)) continue;
    for (const f of fs.readdirSync(dir)) {
      const pid = f.replace(/\.jpg$/, ''), meta = photos[pid];
      if (!meta || seen.has(classOf[id] + '/' + pid)) continue; // shared-taxon plants have the same photos
      seen.add(classOf[id] + '/' + pid);
      items.push({ key: 'inat-' + pid, file: path.join(dir, f), y: classOf[id], plant: id, meta, val: hash(meta.observation_uuid) < 0.15 });
    }
  }
  for (const dir of EXTRA) if (fs.existsSync(dir)) for (const id of fs.readdirSync(dir)) {
    if (!(id in classOf) || !fs.statSync(path.join(dir, id)).isDirectory()) continue;
    for (const f of fs.readdirSync(path.join(dir, id))) if (/\.(jpe?g|png)$/i.test(f))
      items.push({ key: `own-${id}-${f}-${fs.statSync(path.join(dir, id, f)).size}`, file: path.join(dir, id, f), y: classOf[id], plant: id, own: true, val: false });
  }
  console.log(`${items.length} photos, ${classes.length} classes`);

  const net = await backbone();
  const ok = await embedAll(net, items);
  const train = ok.filter(it => !it.val), val = ok.filter(it => it.val);

  console.log(`training on ${train.length} photos, checking on ${val.length} held-out photos`);
  const trial = fit(train, classes.length, 60);
  const per = classes.map(() => ({ n: 0, top1: 0, top3: 0 }));
  for (const it of val) {
    const p = predict(trial, it.emb), rank = p.map((v, i) => [v, i]).sort((a, b) => b[0] - a[0]).slice(0, 3).map(x => x[1]);
    const r = per[it.y]; r.n++; if (rank[0] === it.y) r.top1++; if (rank.includes(it.y)) r.top3++;
  }
  const tot = per.reduce((a, r) => ({ n: a.n + r.n, top1: a.top1 + r.top1, top3: a.top3 + r.top3 }), { n: 0, top1: 0, top3: 0 });
  const pct = (a, b) => b ? Math.round(100 * a / b) + '%' : '-';

  console.log('training the final head on every photo');
  const head = fit(ok, classes.length, 60);
  const n = classes.length, scale = new Array(n).fill(0), q = new Int8Array(DIM * n);
  for (let i = 0; i < DIM; i++) for (let j = 0; j < n; j++) scale[j] = Math.max(scale[j], Math.abs(head.w[i][j]) / 127);
  for (let i = 0; i < DIM; i++) for (let j = 0; j < n; j++) q[i * n + j] = Math.round(head.w[i][j] / (scale[j] || 1));
  const trained = new Date().toISOString().slice(0, 10);
  fs.writeFileSync(path.join(OUT, 'head.js'), `// SCAN's species head, trained ${trained} by tools/plant_id/train.cjs on ${ok.length} photos.\n` +
    'EA.idHead = ' + JSON.stringify({ trained, dim: DIM, photos: ok.length, top1: tot.top1 / tot.n, top3: tot.top3 / tot.n, classes,
      scale: scale.map(s => +s.toPrecision(5)), b: head.b.map(v => +v.toFixed(4)), w: Buffer.from(q.buffer).toString('base64') }) + ';\n');

  const counts = classes.map(() => 0); ok.forEach(it => counts[it.y]++);
  const missing = Object.entries(names).filter(([, v]) => !v).map(([id]) => id);
  fs.writeFileSync(path.join(OUT, 'REPORT.txt'),
    `SCAN accuracy, ${trained}\n${ok.length} photos (${ok.filter(i => i.own).length} of them your own), ${classes.length} classes.\n` +
    `Held-out photos: ${tot.n}. Right first guess: ${pct(tot.top1, tot.n)}. Right answer in the top 3: ${pct(tot.top3, tot.n)}.\n` +
    `Not in SCAN yet (no iNaturalist photos): ${missing.join(', ') || 'none'}\n\n` +
    'plant                          photos  checked  top1  top3\n' +
    classes.map((c, i) => `${c.padEnd(30)} ${String(counts[i]).padStart(6)}  ${String(per[i].n).padStart(7)}  ${pct(per[i].top1, per[i].n).padStart(4)}  ${pct(per[i].top3, per[i].n).padStart(4)}`)
      .sort((a, b) => parseInt(a.slice(48)) - parseInt(b.slice(48))).join('\n') + '\n');

  const esc = s => /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
  fs.writeFileSync(path.join(OUT, 'CREDITS.csv'), 'plant,photo,observer,licence\n' + ok.filter(it => it.meta).map(it => {
    const o = observers[it.meta.observer_id] || {};
    return [it.plant, `https://www.inaturalist.org/photos/${it.meta.photo_id}`, (o.name ? `${o.name} (${o.login})` : o.login) || it.meta.observer_id, it.meta.license].map(esc).join(',');
  }).join('\n') + '\n');
  console.log(`top1 ${pct(tot.top1, tot.n)}, top3 ${pct(tot.top3, tot.n)} on ${tot.n} held-out photos. Wrote identify/head.js, REPORT.txt, CREDITS.csv`);
})();
