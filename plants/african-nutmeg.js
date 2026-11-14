EA.addSpecies('african-nutmeg', {
  name: "AFRICAN NUTMEG", short: "AFR NUTMEG", latin: "Monodora tenuifolia", family: "Annonaceae (custard apple family)",
  origin: "Equatorial Africa; in Nigeria in evergreen and semi-deciduous forest north to Niger and Kaduna",
  local: "EHURU OFIA (IGBO), LAKOSIN, EHINAWOSIN (YORUBA), UYENGHEN (EDO)",
  added: '2026-11-14',
  kind: 'perennial',
  summary: "A deciduous tree with hairless leaves 6-21 cm long. Single flowers hang down, with yellow-green outer petals streaked red-brown. The round fruit, 4-7 cm, is green with pale spots and holds many aromatic brown seeds in sticky pulp.",
  facts: ["DECIDUOUS TREE", "HANGING FLOWERS", "RED-STREAKED PETALS", "SPOTTED ROUND FRUIT", "AROMATIC SEEDS"],
  uses: [
    ["SEEDS", "Its aromatic seeds have been eaten as a supplement, though they are low in nutrients."],
    ["MEDICINE", "Used in traditional medicine."],
    ["GARDEN", "It grows well in cultivation as an ornamental."],
  ],
  history: "It fruits from May to August. It shares its genus with calabash nutmeg.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, note: 'HAIRLESS LEAF, 6-21 CM' },
  form: { type: 'tree', height: 1.0, trunk: 0.45, branches: 8, nodes: 5, spread: 0.3, stemW: 0.07, leafSize: 1.3, arrange: 'alternate', droop: 0.2, flower: { type: 'single', size: 1.0, color: 3 }, fruit: { type: 'big', size: 0.9, color: 1 } },
  seasons: [
    { id: 'dormant', label: "LEAVES FALL", from: 0, to: 90, g: [0.7, 0.6], desc: "Bare in the dry season." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 180, g: [0.6, 1], desc: "Hanging flowers." },
    { id: 'fruiting', label: "SPOTTED FRUIT", from: 180, to: 300, g: [1, 1], desc: "Fruits May to August." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 300, to: 360, g: [1, 1], desc: "Full crown." },
  ],
  beds: [{ plantedDay: -3000 }],
});
