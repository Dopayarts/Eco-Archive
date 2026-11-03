EA.addSpecies('nturukpa', {
  name: "NTURUKPA", latin: "Pterocarpus santalinoides", family: "Fabaceae (legume family)",
  origin: "Riverbanks from Senegal to DR Congo, including southern Nigeria; also South America",
  local: "NTURUKPA (IGBO), GBENGBE (YORUBA)",
  added: '2026-11-03',
  kind: 'perennial',
  summary: "A small riverside tree up to 15 m with a short, twisted trunk and dense crown. Leaves have 5-9 glossy leaflets. Fragrant orange-yellow flowers give flat, wrinkled pods with a broad wing.",
  facts: ["TREE UP TO 15 M", "GROWS ON RIVERBANKS", "LEAVES PINNATE, GLOSSY", "FLOWERS ORANGE-YELLOW", "POD FLAT, WINGED"],
  uses: [
    ["FOOD", "Young leaves are cooked as a vegetable and in soup."],
    ["FODDER", "Livestock browse the leaves."],
    ["LAND", "Holds riverbanks against erosion and fixes nitrogen."],
  ],
  history: "Nturukpa flowers towards the end of the dry season. Cut stems ooze a red gum.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, compound: 'pinnate', leaflets: 7, note: 'PINNATE LEAF, GLOSSY OVAL LEAFLETS' },
  form: { type: 'tree', height: 1.25, trunk: 0.4, branches: 11, nodes: 6, spread: 0.36, stemW: 0.07, leafSize: 1.8, arrange: 'alternate', flower: { type: 'cluster', size: 1.1, color: 3 }, fruit: { type: 'pod', size: 1.0, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 60, g: [1, 1], desc: "Evergreen." },
    { id: 'bloom', label: "IN FLOWER", from: 60, to: 120, g: [1, 1], desc: "Orange-yellow flowers." },
    { id: 'fruiting', label: "PODS", from: 120, to: 240, g: [1, 1], desc: "Winged pods." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 240, to: 360, g: [1, 1], desc: "Dense crown." },
  ],
  beds: [{ plantedDay: -5400 }],
});
