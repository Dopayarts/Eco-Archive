EA.addSpecies('golden-shower', {
  name: "GOLDEN SHOWER", short: "GOLD SHOWR", latin: "Cassia fistula", family: "Fabaceae (bean family)",
  origin: "From southern India; planted in Nigeria, such as at Ota, Ogun State",
  added: '2026-11-18',
  kind: 'perennial',
  summary: "A tree 10-20 m with pinnate leaves of 3-8 leaflet pairs. Bright yellow flowers hang in drooping clusters 20-40 cm long, often when the tree is nearly bare. Pods are 30-60 cm long with sweet sticky pulp.",
  facts: ["TREE 10-20 M", "PINNATE LEAVES", "YELLOW HANGING FLOWERS", "PODS 30-60 CM", "LAXATIVE PULP"],
  uses: [
    ["ORNAMENT", "Widely planted for its showers of yellow flowers."],
    ["MEDICINE", "The pod pulp is a laxative used in traditional and commercial medicines."],
    ["CAUTION", "The pulp is a strong purgative; take it only with medical advice."],
  ],
  history: "National flower of Thailand. A study at Ota tracked how its flowering follows rainfall and temperature.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, compound: 'pinnate', note: 'PINNATE LEAF, 3-8 PAIRS' },
  form: { type: 'tree', height: 1.2, trunk: 0.5, branches: 9, nodes: 5, spread: 0.3, stemW: 0.07, leafSize: 1.0, arrange: 'alternate', droop: 0.25, flower: { type: 'plume', size: 1.1, color: 3 }, fruit: { type: 'pod', size: 1.2, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 90, g: [1, 1], desc: "Leafy crown." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 180, g: [1, 1], desc: "Yellow showers." },
    { id: 'fruiting', label: "PODS", from: 180, to: 360, g: [1, 1], desc: "Long dark pods hang." },
  ],
  beds: [{ plantedDay: -3000 }],
});
