// Train SCAN's species head.
//   cd tools/plant_id && npm install
//   node train.cjs                  retrain from the saved features plus your own photos (minutes)
//   node train.cjs <cache-folder>   re-read the iNaturalist photos from fetch_photos.py first
// Your own photos are photos/<plant id>/*.jpg and inbox/<plant id>/*.jpg; confirmed scans
// land in photos/ via pull_scans.cjs. Writes identify/head.js (the trained head),
// identify/REPORT.txt (accuracy on held-out photos, per plant), and with a cache folder
// also tools/plant_id/features.bin + features.json (each iNaturalist photo as 1280 numbers,
// so later retrains need no photo download) and identify/CREDITS.csv.
// The image model itself (identify/backbone.js) stays fixed; only the head is trained.
const tf = require('@tensorflow/tfjs-node');
const fs = require('fs'), path = require('path'), zlib = require('zlib');

const cache = process.argv[2] ? path.resolve(process.argv[2]) : null;
const ROOT = path.join(__dirname, '..', '..'), OUT = path.join(ROOT, 'identify');
const FEAT_BIN = path.join(__dirname, 'features.bin'), FEAT_JSON = path.join(__dirname, 'features.json');
const FEATURES = 'module_apply_default/MobilenetV2/Logits/AvgPool', DIM = 1280, SIZE = 224;
const SCALE = +(process.env.SCALE || 16), EPOCHS = +(process.env.EPOCHS || 40);
const VIEWS = [[1, false], [0.7, false], [1, true], [0.85, true]]; // same views as js/identify.js
const OWN = ['photos', 'inbox'].map(d => path.join(ROOT, d));

const tsv = f => { const [h, ...rows] = fs.readFileSync(f, 'utf8').trim().split('\n').map(l => l.split('\t')); return rows.map(r => Object.fromEntries(h.map((k, i) => [k, r[i]]))); };
const hash = s => { let h = 2166136261; for (const c of s) h = Math.imul(h ^ c.charCodeAt(0), 16777619); return (h >>> 0) / 4294967296; };
const unit = v => { let n = 0; for (const x of v) n += x * x; n = Math.sqrt(n) || 1; return v.map(x => x / n); };

async function backbone() {
  global.EA = {};
  eval(fs.readFileSync(path.join(OUT, 'backbone.js'), 'utf8'));
  const bb = EA.idBackbone, w = Buffer.from(bb.weights, 'base64');
  return tf.loadGraphModel(tf.io.fromMemory({ modelTopology: bb.modelTopology, weightSpecs: bb.weightSpecs,
    weightData: w.buffer.slice(w.byteOffset, w.byteOffset + w.length) }));
}

// One photo -> 1280 numbers: the four views, each unit length, averaged, unit length again.
function embed(net, file) {
  return tf.tidy(() => {
    const img = tf.node.decodeImage(fs.readFileSync(file), 3).toFloat().div(255);
    const [H, W] = img.shape, side = Math.min(W, H);
    const boxes = VIEWS.map(([f]) => { const s = side * f, y = (H - s) / 2, x = (W - s) / 2; return [y / H, x / W, (y + s) / H, (x + s) / W]; });
    const crops = tf.image.cropAndResize(img.expandDims(0), boxes, [0, 0, 0, 0], [SIZE, SIZE]);
    const x = tf.concat(VIEWS.map(([, flip], i) => { const c = crops.slice([i], [1]); return flip ? tf.image.flipLeftRight(c) : c; }));
    const v = net.execute(x, FEATURES).reshape([-1, DIM]);
    return unit(v.div(v.norm('euclidean', 1, true).add(1e-6)).mean(0).dataSync());
  });
}

async function embedAll(net, items, dir) {
  if (dir) fs.mkdirSync(dir, { recursive: true });
  let done = 0, t0 = Date.now();
  for (const it of items) {
    const f = dir && path.join(dir, it.key + '.f32');
    if (f && fs.existsSync(f)) { it.emb = new Float32Array(fs.readFileSync(f).buffer.slice(0)); continue; }
    try { it.emb = Float32Array.from(embed(net, it.file)); } catch (e) { it.bad = true; continue; }
    if (f) fs.writeFileSync(f, Buffer.from(it.emb.buffer));
    if (++done % 500 === 0) console.log(`  read ${done} new photos, ${((Date.now() - t0) / done).toFixed(0)} ms each`);
  }
  return items.filter(it => !it.bad);
}

function fit(items, n, epochs) {
  const N = items.length, count = new Array(n).fill(0); items.forEach(it => count[it.y]++);
  const flat = new Float32Array(N * DIM); items.forEach((it, i) => flat.set(it.emb, i * DIM));
  const X = tf.tensor2d(flat, [N, DIM]);
  const Y = tf.oneHot(tf.tensor1d(items.map(it => it.y), 'int32'), n).toFloat();
  const SW = tf.tensor1d(items.map(it => Math.min(4, (N / n) / count[it.y]) * (it.own ? 3 : 1))); // rare plants and your photos count more
  const W = tf.variable(tf.zeros([DIM, n])), b = tf.variable(tf.zeros([n]));
  const opt = tf.train.adam(+(process.env.LR || 0.001)), B = 256;
  for (let e = 0; e < epochs; e++) {
    const order = tf.util.createShuffledIndices(N);
    let loss = 0;
    for (let s = 0; s < N; s += B) {
      const idx = tf.tensor1d(Int32Array.from(order.slice(s, s + B)), 'int32');
      const l = opt.minimize(() => tf.tidy(() => {
        const x = X.gather(idx), y = Y.gather(idx), w = SW.gather(idx);
        const logits = x.matMul(W).add(b).mul(SCALE);  // features are unit length, so scale up
        const smooth = y.mul(0.9).add(0.1 / n);
        return tf.losses.softmaxCrossEntropy(smooth, logits, w).add(W.square().sum().mul(1e-5));
      }), true);
      loss += l.dataSync()[0]; l.dispose(); idx.dispose();
    }
    if (e % 10 === 9) console.log(`  epoch ${e + 1}  loss ${(loss / Math.ceil(N / B)).toFixed(3)}`);
  }
  X.dispose(); Y.dispose(); SW.dispose();
  const head = { w: W.mul(SCALE).arraySync(), b: b.mul(SCALE).arraySync() };
  W.dispose(); b.dispose();
  return head;
}
const predict = (head, emb) => tf.tidy(() => tf.softmax(tf.tensor2d(emb, [1, DIM]).matMul(tf.tensor2d(head.w)).add(tf.tensor1d(head.b))).arraySync()[0]);

// iNaturalist photos straight from the cache folder; writes the features file and credits.
async function fromCache(net) {
  const names = JSON.parse(fs.readFileSync(path.join(cache, 'names.json')));
  // plants that share an iNaturalist taxon (orange and grapefruit) form one class
  const byTaxon = {};
  for (const [id, v] of Object.entries(names)) if (v) (byTaxon[v.taxon] = byTaxon[v.taxon] || []).push(id);
  const groupOf = {}; for (const ids of Object.values(byTaxon)) for (const id of ids) groupOf[id] = ids.sort().join('+');
  const photos = {}; for (const r of tsv(path.join(cache, 'photos.tsv'))) photos[r.photo_id] = r;
  const observers = {};
  for (const l of zlib.gunzipSync(fs.readFileSync(path.join(cache, 'observers.csv.gz'))).toString().split('\n').slice(1)) {
    const [id, login, name] = l.split('\t'); observers[id] = { login, name: (name || '').trim() };
  }
  const items = [], seen = new Set();
  for (const id of Object.keys(groupOf)) {
    const dir = path.join(cache, 'img', id);
    if (!fs.existsSync(dir)) continue;
    for (const f of fs.readdirSync(dir)) {
      const pid = f.replace(/\.jpg$/, ''), meta = photos[pid], g = groupOf[id];
      if (!meta || seen.has(g + '/' + pid)) continue; // shared-taxon plants have the same photos
      seen.add(g + '/' + pid);
      items.push({ key: 'inat-' + pid, file: path.join(dir, f), group: g, plant: id, meta, val: hash(meta.observation_uuid) < 0.15 });
    }
  }
  const ok = await embedAll(net, items, path.join(cache, 'feat'));
  const q = new Int8Array(ok.length * DIM);
  ok.forEach((it, r) => { let m = 1e-9; for (const v of it.emb) m = Math.max(m, Math.abs(v)); it.emb.forEach((v, i) => q[r * DIM + i] = Math.round(v / m * 127)); });
  fs.writeFileSync(FEAT_BIN, Buffer.from(q.buffer));
  fs.writeFileSync(FEAT_JSON, JSON.stringify({ dim: DIM, made: new Date().toISOString().slice(0, 10),
    missing: Object.entries(names).filter(([, v]) => !v).map(([id]) => id), rows: ok.map(it => [it.group, it.val ? 1 : 0]) }));
  const esc = s => /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
  fs.writeFileSync(path.join(OUT, 'CREDITS.csv'), 'plant,photo,observer,licence\n' + ok.map(it => {
    const o = observers[it.meta.observer_id] || {};
    return [it.plant, `https://www.inaturalist.org/photos/${it.meta.photo_id}`, (o.name ? `${o.name} (${o.login})` : o.login) || it.meta.observer_id, it.meta.license].map(esc).join(',');
  }).join('\n') + '\n');
  console.log(`saved features of ${ok.length} iNaturalist photos`);
}

(async () => {
  const net = await backbone();
  if (cache) await fromCache(net);
  const index = JSON.parse(fs.readFileSync(FEAT_JSON)), raw = new Int8Array(fs.readFileSync(FEAT_BIN).buffer.slice(0));
  const items = index.rows.map(([group, val], r) => ({ group, val: !!val, emb: unit(Float32Array.from(raw.subarray(r * DIM, (r + 1) * DIM))) }));

  // your own photos, including confirmed scans, for plants that have a record in the archive
  const known = new Set(fs.readdirSync(path.join(ROOT, 'plants')).filter(f => /^[a-z0-9-]+\.js$/.test(f) && f !== 'index.js').map(f => f.slice(0, -3))
    .concat(fs.readdirSync(path.join(ROOT, 'specimens')).filter(d => fs.existsSync(path.join(ROOT, 'specimens', d, 'species.js'))))
    .concat(['basil', 'mint', 'lavender', 'chamomile', 'aloe']));
  const groupOf = {}; for (const it of items) for (const id of it.group.split('+')) groupOf[id] = it.group;
  const own = [];
  for (const dir of OWN) if (fs.existsSync(dir)) for (const id of fs.readdirSync(dir)) {
    if (!known.has(id) || !fs.statSync(path.join(dir, id)).isDirectory()) continue;
    for (const f of fs.readdirSync(path.join(dir, id))) if (/\.(jpe?g|png)$/i.test(f))
      own.push({ key: `own-${id}-${f}-${fs.statSync(path.join(dir, id, f)).size}`, file: path.join(dir, id, f), group: groupOf[id] || id, own: true,
        val: false });
  }
  const all = items.concat(await embedAll(net, own, cache && path.join(cache, 'feat')));
  const classes = [...new Set(all.map(it => it.group))].sort(), classOf = {};
  classes.forEach((c, i) => classOf[c] = i); all.forEach(it => it.y = classOf[it.group]);
  console.log(`${all.length} photos (${own.length} your own), ${classes.length} plants`);

  const train = all.filter(it => !it.val), val = all.filter(it => it.val);
  console.log(`training on ${train.length} photos, checking on ${val.length} held-out photos`);
  const trial = fit(train, classes.length, EPOCHS);
  const per = classes.map(() => ({ n: 0, top1: 0, top3: 0 }));
  for (const it of val) {
    const p = predict(trial, it.emb), rank = p.map((v, i) => [v, i]).sort((a, b) => b[0] - a[0]).slice(0, 3).map(x => x[1]);
    const r = per[it.y]; r.n++; if (rank[0] === it.y) r.top1++; if (rank.includes(it.y)) r.top3++;
  }
  const tot = per.reduce((a, r) => ({ n: a.n + r.n, top1: a.top1 + r.top1, top3: a.top3 + r.top3 }), { n: 0, top1: 0, top3: 0 });
  const pct = (a, b) => b ? Math.round(100 * a / b) + '%' : '-';
  console.log(`top1 ${pct(tot.top1, tot.n)}, top3 ${pct(tot.top3, tot.n)} on held-out photos`);
  if (process.env.CHECK_ONLY) return;

  console.log('training the final head on every photo');
  const head = fit(all, classes.length, EPOCHS);
  const n = classes.length, scale = new Array(n).fill(0), q = new Int8Array(DIM * n);
  for (let i = 0; i < DIM; i++) for (let j = 0; j < n; j++) scale[j] = Math.max(scale[j], Math.abs(head.w[i][j]) / 127);
  for (let i = 0; i < DIM; i++) for (let j = 0; j < n; j++) q[i * n + j] = Math.round(head.w[i][j] / (scale[j] || 1));
  const trained = new Date().toISOString().slice(0, 10);
  fs.writeFileSync(path.join(OUT, 'head.js'), `// SCAN's species head, trained ${trained} by tools/plant_id/train.cjs on ${all.length} photos.\n` +
    'EA.idHead = ' + JSON.stringify({ trained, dim: DIM, photos: all.length, top1: tot.top1 / tot.n, top3: tot.top3 / tot.n, classes,
      scale: scale.map(s => +s.toPrecision(5)), b: head.b.map(v => +v.toFixed(4)), w: Buffer.from(q.buffer).toString('base64') }) + ';\n');

  const counts = classes.map(() => 0), mine = classes.map(() => 0); all.forEach(it => { counts[it.y]++; if (it.own) mine[it.y]++; });
  const inScan = new Set(classes.flatMap(c => c.split('+')));
  const missing = [...known].filter(id => !inScan.has(id)).sort();
  fs.writeFileSync(path.join(OUT, 'REPORT.txt'),
    `SCAN accuracy, ${trained}\n${all.length} photos (${own.length} of them your own or confirmed scans), ${classes.length} plants.\n` +
    `Held-out photos: ${tot.n}. Right first guess: ${pct(tot.top1, tot.n)}. Right answer in the top 3: ${pct(tot.top3, tot.n)}.\n` +
    `Not in SCAN yet (no photos): ${missing.join(', ') || 'none'}\n\n` +
    'Weakest first: these plants need more photos most.\n\nplant                          photos  yours  checked  top1  top3\n' +
    classes.map((c, i) => [per[i].n ? per[i].top1 / per[i].n : -1, `${c.padEnd(30)} ${String(counts[i]).padStart(6)}  ${String(mine[i]).padStart(5)}  ${String(per[i].n).padStart(7)}  ${pct(per[i].top1, per[i].n).padStart(4)}  ${pct(per[i].top3, per[i].n).padStart(4)}`])
      .sort((a, b) => a[0] - b[0]).map(x => x[1]).join('\n') + '\n');
  console.log(`Wrote identify/head.js and identify/REPORT.txt`);
})();
