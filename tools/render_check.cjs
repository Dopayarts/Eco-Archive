// Draw a contact sheet of plants so their look can be checked before publishing.
//   node tools/render_check.cjs <out.png> <plant-id> [<plant-id> ...]
// Each row: the plant in leafy growth, budding, in bloom and fruiting or seeding
// (whichever stages it has), plus the leaf view. Fails on any page error.
const path = require('path'), fs = require('fs');
const { execSync } = require('child_process');
const { chromium } = require(path.join(execSync('npm root -g').toString().trim(), 'playwright'));
const [out, ...ids] = process.argv.slice(2);
if (!out || !ids.length) { console.error('usage: node tools/render_check.cjs <out.png> <id> [...]'); process.exit(1); }
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto('file://' + path.join(__dirname, '..', 'index.html'));
  await page.waitForTimeout(1500);
  const png = await page.evaluate(ids => {
    const C = 128, cols = 5, sheet = document.createElement('canvas');
    sheet.width = C * cols; sheet.height = (C + 12) * ids.length;
    const sx = sheet.getContext('2d');
    sx.fillStyle = '#fff'; sx.fillRect(0, 0, sheet.width, sheet.height);
    ids.forEach((id, row) => {
      const sp = EA.species[id];
      if (!sp) { sx.fillStyle = '#c00'; sx.fillText('MISSING ' + id, 4, row * (C + 12) + 20); return; }
      const ids2 = (sp.stages || sp.seasons).map(s => s.id);
      const want = ['vegetative', 'bud', 'bloom', ids2.includes('fruiting') ? 'fruiting' : 'seeding'];
      const spec = EA.specimens.find(s => s.species === id) || { species: id, seed: 7 };
      [...want, 'leaf'].forEach((st, i) => {
        const cv = document.createElement('canvas'); cv.width = cv.height = C;
        const ctx = cv.getContext('2d', { willReadFrequently: true });
        ctx.fillStyle = EA.config.PAL_HEX[0]; ctx.fillRect(0, 0, C, C);
        const prims = st === 'leaf' ? EA.model.leafModel(id) : EA.model.plant(spec, { id: st, g: 1 });
        let top = 0.2, wide = 0.2;
        for (const q of prims) {
          const pts = q.t === 'stem' ? q.pts : q.t === 'blob' ? [q.p] : [[q.base[0] + q.dir[0] * q.len, q.base[1] + q.dir[1] * q.len, q.base[2] + q.dir[2] * q.len]];
          for (const v of pts) { top = Math.max(top, v[1]); wide = Math.max(wide, Math.hypot(v[0], v[2])); }
        }
        const scale = st === 'leaf' ? 70 : Math.min(100, (C - 16) / top, (C / 2 - 4) / wide);
        EA.r3d.render(ctx, prims, { theta: 0.6, tilt: st === 'leaf' ? 0.15 : 0.3, scale, cx: C / 2, cy: st === 'leaf' ? C / 2 + 4 : C - 8, shade: { lo: 1, hi: 2, top: 3 } });
        EA.r3d.quantize(ctx, C, C, null);
        sx.drawImage(cv, i * C, row * (C + 12) + 12);
        sx.fillStyle = '#000'; sx.font = '10px monospace';
        sx.fillText(`${sp.name} · ${st.toUpperCase()}`.slice(0, 22), i * C + 2, row * (C + 12) + 10);
      });
    });
    return sheet.toDataURL('image/png');
  }, ids);
  fs.writeFileSync(out, Buffer.from(png.split(',')[1], 'base64'));
  console.log('wrote', out);
  await browser.close();
  if (errors.length) { console.error('PAGE ERRORS:\n' + errors.join('\n')); process.exit(1); }
})();
