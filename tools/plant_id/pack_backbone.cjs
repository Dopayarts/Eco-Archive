// Download MobileNet V2 (Apache-2.0, Google) and pack it as identify/backbone.js for SCAN.
//   node tools/plant_id/pack_backbone.cjs [--float16]
// Weights are stored as 8-bit numbers (3.5 MB instead of 14 MB); --float16 keeps more
// precision at twice the size. Packed into a script so it also loads from file:// (desktop app).
const fs = require('fs'), path = require('path');
const URL = 'https://storage.googleapis.com/tfjs-models/savedmodel/mobilenet_v2_1.0_224/';
const OUT = path.join(__dirname, '..', '..', 'identify', 'backbone.js');
const f16 = process.argv.includes('--float16');

function toHalf(v) { // float32 -> IEEE half
  const f = new Float32Array([v]), i = new Uint32Array(f.buffer)[0];
  const s = (i >>> 16) & 0x8000, e = ((i >>> 23) & 0xff) - 112, m = i & 0x7fffff;
  if (e <= 0) return s; if (e >= 31) return s | 0x7c00;
  return s | (e << 10) | ((m + 0x1000) >> 13);
}

(async () => {
  const model = await (await fetch(URL + 'model.json')).json();
  const specs = [], parts = [];
  for (const group of model.weightsManifest) {
    const bufs = [];
    for (const p of group.paths) bufs.push(Buffer.from(await (await fetch(URL + p)).arrayBuffer()));
    const all = Buffer.concat(bufs);
    let off = 0;
    for (const w of group.weights) {
      const n = w.shape.reduce((a, b) => a * b, 1);
      if (w.dtype !== 'float32') { // ints stay as they are
        parts.push(all.subarray(off, off + n * 4)); specs.push(w); off += n * 4; continue;
      }
      const v = new Float32Array(all.buffer.slice(all.byteOffset + off, all.byteOffset + off + n * 4)); off += n * 4;
      if (f16) {
        const h = new Uint16Array(n); for (let i = 0; i < n; i++) h[i] = toHalf(v[i]);
        parts.push(Buffer.from(h.buffer)); specs.push({ ...w, quantization: { dtype: 'float16', original_dtype: 'float32' } });
      } else {
        let lo = Infinity, hi = -Infinity; for (const x of v) { if (x < lo) lo = x; if (x > hi) hi = x; }
        const scale = (hi - lo) / 255 || 1, q = new Uint8Array(n);
        for (let i = 0; i < n; i++) q[i] = Math.round((v[i] - lo) / scale);
        parts.push(Buffer.from(q.buffer)); specs.push({ ...w, quantization: { dtype: 'uint8', min: lo, scale, original_dtype: 'float32' } });
      }
    }
  }
  const data = Buffer.concat(parts);
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, '// MobileNet V2 1.0 224 (ImageNet), Apache-2.0, Google. Packed by tools/plant_id/pack_backbone.cjs.\n' +
    'EA.idBackbone = ' + JSON.stringify({ modelTopology: model.modelTopology, weightSpecs: specs, weights: data.toString('base64') }) + ';\n');
  console.log('wrote', OUT, (fs.statSync(OUT).size / 1e6).toFixed(1), 'MB');
})();
