EA.addSpecies('deinbollia', {
  name: "DEINBOLLIA", latin: "Deinbollia pinnata", family: "Sapindaceae (soapberry family)",
  origin: "West Africa from Senegal to Cameroon, including Nigeria",
  local: "OGIRI-EGBA, EKUSI-OLOKO",
  added: '2026-11-26',
  kind: 'perennial',
  summary: "A small tree with strong woody branches. Leaves carry 5-6 pairs of oblong, leathery, pale green leaflets 7-10 cm long, sometimes silvery below. Its fruits split into round one-seeded parts.",
  facts: ["SMALL TREE", "PINNATE LEAVES", "LEATHERY LEAFLETS", "SILVERY UNDERSIDE", "COUGH REMEDY"],
  uses: [
    ["MEDICINE", "Its leaves and root are used for cough and bronchial asthma."],
    ["FUEL", "It is cut for brushwood fuel in Ghana."],
  ],
  history: "Its fruit is used in charms and magic.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, compound: 'pinnate', note: '5-6 PAIRS OF LEAFLETS' },
  form: { type: 'tree', height: 0.9, trunk: 0.45, branches: 7, nodes: 5, spread: 0.22, stemW: 0.07, leafSize: 1.0, arrange: 'alternate', droop: 0.2, flower: { type: 'cluster', size: 0.4, color: 3 }, fruit: { type: 'berry', size: 0.4, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 150, to: 270, g: [1, 1], desc: "Leathery leaves." },
    { id: 'bloom', label: "IN FLOWER", from: 270, to: 330, g: [1, 1], desc: "Small flowers." },
    { id: 'fruiting', label: "FRUITING", from: 330, to: 360, g: [1, 1], desc: "Round fruits." },
    { id: 'rest', label: "DRY REST", from: 0, to: 150, g: [1, 1], desc: "Growth slows." },
  ],
  beds: [{ plantedDay: -3000 }],
});
