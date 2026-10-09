// Export every plant record as plants.json and plants.csv (one row per species).
//   node tools/export_plants.cjs <output-folder>
// The website serves both files; the desktop app saves plants.csv to Documents\Eco-Archive.
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..'), out = process.argv[2] || '.';
const EA = { specimens: [], addPhotos() {}, loadPlants() {}, archive: { loadAll() {} } };
EA.addSpecies = (id, rec) => { EA.species[id] = Object.assign({ id }, rec); };
EA.addModels = () => {};
const ctx = vm.createContext({ EA, window: {} });
const run = f => vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f });
run('js/species.js');
for (const id in EA.species) EA.species[id].id = id;
const listed = (f, re) => { const m = fs.readFileSync(path.join(root, f), 'utf8').match(re); return m ? JSON.parse(m[1]) : []; };
for (const id of listed('specimens/index.js', /loadAll\((\[.*?\])\)/s)) run(`specimens/${id}/species.js`);
for (const id of listed('plants/index.js', /loadPlants\((\[.*?\])/s)) run(`plants/${id}.js`);

const rows = Object.values(EA.species).map(s => ({
  id: s.id, name: s.name, latin: s.latin, family: s.family, local_names: s.local || '', origin: s.origin,
  habit: s.kind + (s.form ? ' ' + s.form.type : ''), added: s.added || '',
  summary: s.summary, facts: (s.facts || []).join('; '),
  uses: (s.uses || []).map(([k, v]) => `${k}: ${v}`).join(' | '), history: s.history,
  leaf: s.leaf && s.leaf.note || '',
  life_cycle: (s.stages || s.seasons || []).map(x => x.label + (x.days ? ` (${x.days} days)` : x.from != null ? ` (day ${x.from}-${x.to})` : '')).join(' > '),
}));
const esc = v => /[",\n]/.test(String(v)) ? '"' + String(v).replace(/"/g, '""') + '"' : String(v);
const cols = Object.keys(rows[0]);
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(path.join(out, 'plants.csv'), '﻿' + [cols.join(','), ...rows.map(r => cols.map(c => esc(r[c])).join(','))].join('\r\n') + '\r\n');
fs.writeFileSync(path.join(out, 'plants.json'), JSON.stringify(rows, null, 1));
console.log(`exported ${rows.length} plants to ${out}`);
