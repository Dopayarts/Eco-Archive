EA.addSpecies('kamerunica', {
  name: "E. KAMERUNICA", short: "KAMERUNICA", latin: "Euphorbia kamerunica", family: "Euphorbiaceae (spurge family)",
  origin: "The Sahel and West Africa; planted as fencing in central Nigeria and found in the Niger Delta",
  local: "YEP (BEROM)",
  added: '2026-11-22',
  kind: 'perennial',
  summary: "A spiny, succulent shrub of dry places with green, ridged stems. Small flowers are green and yellow. A toxic milky sap runs from any cut.",
  facts: ["SUCCULENT SHRUB", "RIDGED GREEN STEMS", "SPINY", "GREEN-YELLOW FLOWERS", "MILKY TOXIC SAP"],
  uses: [
    ["FENCE", "It is planted as a living fence in central Nigeria; spines and sap keep animals in or out."],
    ["MUSIC", "The Berom make a scraper instrument called gwak from it."],
    ["CAUTION", "The milky sap is toxic; near Garoua in Cameroon it is used to make arrow poison. The spines hurt animals."],
  ],
  history: "In Nigeria it is often called cactus, although it is not a true cactus.",
  leaf: { shape: 'blade', len: 1, wid: 0.2, note: 'RIDGED SUCCULENT STEM' },
  form: { type: 'shrub', height: 1.0, branches: 6, nodes: 5, arrange: 'opposite', leafSize: 0.4, droop: 0, flower: { type: 'cluster', size: 0.3, color: 3 }, fruit: { type: 'berry', size: 0.2, color: 2 } },
  seasons: [
    { id: 'rest', label: "DRY SEASON", from: 0, to: 180, g: [1, 1], desc: "Stems hold water." },
    { id: 'vegetative', label: "RAINY GROWTH", from: 180, to: 300, g: [1, 1], desc: "New stem growth." },
    { id: 'bloom', label: "IN FLOWER", from: 300, to: 360, g: [1, 1], desc: "Small green-yellow flowers." },
  ],
  beds: [{ plantedDay: -2000 }],
});
