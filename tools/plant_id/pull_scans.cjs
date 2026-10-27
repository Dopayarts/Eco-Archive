// Copy the scan library (scans an admin confirmed) from the website into the repo, so the
// next retrain learns them:
//   node tools/plant_id/pull_scans.cjs [site]     (default: the live Eco-Archive site)
// A scan of an archive plant goes to photos/<plant id>/scan-<id>.jpg. A scan an admin
// named as a new plant goes to inbox/<name>/scan-<id>.jpg with a notes.txt, so the daily
// routine writes its record (see ADDING_PLANTS.md). Photos already copied are skipped.
// Needs Node 18+ only (no npm install).
const fs = require('fs'), path = require('path');
const SITE = (process.argv[2] || 'https://taupe-cranachan-86c8d7.netlify.app').replace(/\/$/, '');
const ROOT = path.join(__dirname, '..', '..');

(async () => {
  const r = await fetch(SITE + '/api/scans/library');
  if (!r.ok) throw new Error('could not read the scan library: HTTP ' + r.status);
  const lib = await r.json();
  let added = 0;
  for (const e of lib) {
    const isNew = e.label.startsWith('new:');
    const dir = isNew ? path.join(ROOT, 'inbox', e.label.slice(4)) : path.join(ROOT, 'photos', e.label);
    const file = path.join(dir, `scan-${e.id}.jpg`);
    if (fs.existsSync(file) || (isNew && fs.existsSync(path.join(ROOT, 'photos', e.label.slice(4), `scan-${e.id}.jpg`)))) continue;
    const p = await fetch(`${SITE}/api/scans/photo/${e.id}`);
    if (!p.ok) { console.log('skipped', e.id, p.status); continue; }
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(file, Buffer.from(await p.arrayBuffer()));
    if (isNew && !fs.existsSync(path.join(dir, 'notes.txt')))
      fs.writeFileSync(path.join(dir, 'notes.txt'), `${e.name}\nAdded from a SCAN by an Eco-Archive admin on ${e.at.slice(0, 10)}.${e.variety && e.variety !== 'NEW PLANT' ? ' Variety: ' + e.variety + '.' : ''}\n`);
    added++;
    console.log(isNew ? 'new plant' : 'photo', path.relative(ROOT, file), e.variety ? `(${e.variety})` : '');
  }
  console.log(`${added} new scan photos copied, ${lib.length} in the library`);
})().catch(e => { console.error(e.message); process.exit(1); });
