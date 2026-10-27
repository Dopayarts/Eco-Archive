// SCAN: identify a plant from a photo, fully offline.
// A small image model (MobileNet V2, ~3.5 MB) turns the photo into 1280 numbers, and a
// head trained on open-licence iNaturalist photos of the archive's plants scores each
// species. Everything runs on this device: the photo is never uploaded.
// The model loads only when someone scans: vendor/tf.min.js, identify/backbone.js
// (rarely changes) and identify/head.js (retrained when plants are added, see
// tools/plant_id/README.md).
EA.identify = (function () {
  const FEATURES = 'module_apply_default/MobilenetV2/Logits/AvgPool';
  const SIZE = 224;
  let model = null, loading = null;
  let shot = null;     // the photo as Game Boy pixels, drawn on the turntable
  let busy = false, sweep = 0;

  function load(src) {
    return new Promise((ok, fail) => {
      const s = document.createElement('script');
      s.src = src; s.onload = ok; s.onerror = () => fail(new Error('could not load ' + src));
      document.head.appendChild(s);
    });
  }
  function bytes(b64) {
    const s = atob(b64), a = new Uint8Array(s.length);
    for (let i = 0; i < s.length; i++) a[i] = s.charCodeAt(i);
    return a;
  }

  function ready() {
    if (!loading) loading = (async () => {
      if (!window.tf) await load('vendor/tf.min.js');
      if (!EA.idBackbone) await load('identify/backbone.js');
      if (!EA.idHead) await load('identify/head.js');
      const bb = EA.idBackbone, h = EA.idHead;
      const net = await tf.loadGraphModel(tf.io.fromMemory({
        modelTopology: bb.modelTopology, weightSpecs: bb.weightSpecs, weightData: bytes(bb.weights).buffer,
      }));
      // head weights are int8 with one scale per species
      const q = new Int8Array(bytes(h.w).buffer), n = h.classes.length, w = new Float32Array(q.length);
      for (let i = 0; i < q.length; i++) w[i] = q[i] * h.scale[i % n];
      model = { net, w: tf.tensor2d(w, [h.dim, n]), b: tf.tensor1d(h.b), classes: h.classes };
      return model;
    })().catch(e => { loading = null; throw e; });
    return loading;
  }

  // Several views of the photo (whole, close crop, mirrored), scored and averaged.
  function views(img) {
    const W = img.naturalWidth || img.width, H = img.naturalHeight || img.height, side = Math.min(W, H);
    const cv = document.createElement('canvas'); cv.width = cv.height = SIZE;
    const c = cv.getContext('2d', { willReadFrequently: true });
    const out = [];
    for (const [f, flip] of [[1, false], [0.7, false], [1, true], [0.85, true]]) {
      const s = side * f;
      c.save(); c.clearRect(0, 0, SIZE, SIZE);
      if (flip) { c.translate(SIZE, 0); c.scale(-1, 1); }
      c.drawImage(img, (W - s) / 2, (H - s) / 2, s, s, 0, 0, SIZE, SIZE);
      c.restore();
      out.push(c.getImageData(0, 0, SIZE, SIZE));
    }
    return out;
  }
  async function classify(img) {
    const m = await ready();
    const probs = tf.tidy(() => {
      const x = tf.stack(views(img).map(d => tf.browser.fromPixels(d))).toFloat().div(255);
      let f = m.net.execute(x, FEATURES).reshape([-1, EA.idHead.dim]);
      f = f.div(f.norm('euclidean', 1, true).add(1e-6));
      return tf.softmax(f.matMul(m.w).add(m.b)).mean(0);
    });
    const p = await probs.data(); probs.dispose();
    return m.classes.map((id, i) => ({ id, p: p[i] })).sort((a, b) => b.p - a.p);
  }

  // ---------- the photo as pixel art ----------
  const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
  function pixelate(img, TW, TH) {
    const cv = document.createElement('canvas'); cv.width = TW; cv.height = TH;
    const c = cv.getContext('2d', { willReadFrequently: true });
    const W = img.naturalWidth || img.width, H = img.naturalHeight || img.height, side = Math.min(W, H);
    const box = TW - 12;
    c.drawImage(img, (W - side) / 2, (H - side) / 2, side, side, 6, 6, box, box - 8);
    const d = c.getImageData(0, 0, TW, TH), a = d.data, PAL = EA.config.PAL;
    let lo = 255, hi = 0; // stretch contrast so dull photos still use all four greens
    for (let i = 0; i < a.length; i += 4) if (a[i + 3]) { const v = a[i] * 0.3 + a[i + 1] * 0.59 + a[i + 2] * 0.11; lo = Math.min(lo, v); hi = Math.max(hi, v); }
    for (let y = 0; y < TH; y++) for (let x = 0; x < TW; x++) {
      const i = (y * TW + x) * 4;
      if (!a[i + 3]) { a.set(PAL[0], i); a[i + 3] = 255; continue; }
      const v = ((a[i] * 0.3 + a[i + 1] * 0.59 + a[i + 2] * 0.11) - lo) / Math.max(1, hi - lo);
      const k = Math.max(0, Math.min(3, Math.floor(v * 3 + BAYER[(y & 3) * 4 + (x & 3)] / 16)));
      a.set(PAL[k], i); a[i + 3] = 255;
    }
    c.putImageData(d, 0, 0);
    return cv;
  }

  // Called by the panel while no specimen is open. Returns true if it drew.
  function draw(ctx, TW, TH, dt) {
    if (!shot) return false;
    const pal = EA.config.PAL_HEX;
    ctx.drawImage(shot, 0, 0);
    if (busy) { // a scan line sweeps the photo while the model works
      sweep = (sweep + dt * 70) % (TH - 16);
      ctx.fillStyle = pal[3]; ctx.fillRect(6, 6 + Math.round(sweep), TW - 12, 2);
      ctx.fillStyle = pal[1]; ctx.fillRect(6, 4 + Math.round(sweep), TW - 12, 1);
    }
    ctx.fillStyle = pal[0]; ctx.fillRect(0, TH - 11, TW, 11);
    EA.font.draw(ctx, busy ? 'SCANNING' : 'SCANNED PHOTO', 6, TH - 9, 2);
    return true;
  }
  function stop() { shot = null; busy = false; document.getElementById('viewer').classList.remove('scan'); }

  // ---------- the scan itself ----------
  const name = id => (EA.species[id] && EA.species[id].name) || id.toUpperCase();
  const bar = (f, n = 10) => '[' + '#'.repeat(Math.round(f * n)).padEnd(n, '.') + ']';

  function start(file) {
    if (!file || !/^image\//.test(file.type)) return EA.panel.say('THAT IS NOT A PHOTO. TRY A JPG OR PNG.');
    const url = URL.createObjectURL(file), img = new Image();
    img.onload = () => run(img).finally(() => URL.revokeObjectURL(url));
    img.onerror = () => { URL.revokeObjectURL(url); EA.panel.say('COULD NOT READ THAT PHOTO.'); };
    img.src = url;
  }

  async function run(img) {
    const P = EA.panel, viewer = document.getElementById('viewer'), tv = document.getElementById('turn');
    P.select(null); P.clear();
    shot = pixelate(img, tv.width, tv.height); busy = true;
    viewer.hidden = false; viewer.classList.add('scan');
    if (innerWidth < 760) viewer.scrollIntoView({ behavior: 'smooth' }); // phones: the terminal is below the garden
    P.say('SCAN  //  OFFLINE PLANT ID', 'hd');
    P.say('THE PHOTO STAYS ON THIS DEVICE. NOTHING IS UPLOADED.' + (model ? '' : '\nLOADING THE SCANNER (ABOUT 5 MB, ONCE)...'));
    let res;
    try { res = await classify(img); }
    catch (e) { busy = false; console.error(e); return P.say('THE SCANNER COULD NOT START: ' + String(e.message || e).toUpperCase()); }
    busy = false;
    const top = res.slice(0, 3), best = top[0].p;
    P.say(best >= 0.6 ? 'LIKELY MATCH' : best >= 0.3 ? 'POSSIBLE MATCHES' : 'NOT SURE', 'hd');
    top.forEach((r, i) => {
      const ids = r.id.split('+'), sp = EA.species[ids[0]] || {}; // plants that look alike share a class
      const label = ids.map(name).join(' / ');
      P.say(`${i + 1} ${label}  ${Math.round(r.p * 100)}%\n  ${bar(r.p)} ${(sp.latin || '').toUpperCase()}  [OPEN]`, 'pick',
        el => { el.title = 'Open ' + label; el.onclick = () => P.run('open ' + ids[0]); });
    });
    P.say((best < 0.3 ? 'IT MAY NOT BE IN THE ARCHIVE YET. TRY ONE LEAF OR FLOWER, CLOSE UP, IN DAYLIGHT.\n' :
      best < 0.6 ? 'COMPARE THE LEAF AND FLOWER IN EACH RECORD.\n' : '') +
      'NEVER EAT A PLANT OR USE IT AS MEDICINE ON A SCAN ALONE. ASK SOMEONE WHO KNOWS IT.\nTYPE SCAN FOR ANOTHER PHOTO.');
  }

  // A hidden file picker: on phones it offers the camera or the gallery.
  const pick = document.createElement('input');
  pick.type = 'file'; pick.accept = 'image/*'; pick.hidden = true;
  pick.addEventListener('change', () => { if (pick.files[0]) start(pick.files[0]); pick.value = ''; });
  document.body.appendChild(pick);
  function choose() { pick.click(); }

  function about() {
    const h = EA.idHead;
    const known = h ? h.classes.length : null;
    return 'SCAN NAMES A PLANT FROM A PHOTO, OFFLINE, ON THIS DEVICE.\n' +
      (known ? `IT KNOWS ${known} OF THE ARCHIVE'S ${Object.keys(EA.species).length} PLANTS (TRAINED ${h.trained}).\n` : '') +
      'IT LEARNED FROM OPEN-LICENCE PHOTOS SHARED ON INATURALIST. CREDITS: IDENTIFY/CREDITS.CSV';
  }

  return { start, choose, draw, stop, about, ready };
})();
