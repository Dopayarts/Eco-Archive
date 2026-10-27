EA.addSpecies('pepper-fruit', {
  name: "PEPPER FRUIT", short: "MMIMI", latin: "Dennettia tripetala", family: "Annonaceae (custard apple family)",
  origin: "West and Central Africa; southern Nigeria",
  local: "MMIMI (IGBO)",
  added: '2026-10-27',
  kind: 'perennial',
  summary: "A small forest tree with glossy, aromatic leaves. Its small fruits hang in clusters, green when young and bright red when ripe, and taste hot and peppery like the leaves.",
  facts: ["SMALL TREE", "LEAVES GLOSSY, SPICY", "FRUITS IN CLUSTERS", "GREEN, RIPENING RED", "TASTES HOT AND PEPPERY"],
  uses: [
    ["FOOD", "Fruits and leaves season meat, stews and soups; the fruit is chewed fresh or dried."],
    ["CUSTOM", "Served to guests with kola nut, garden egg and palm wine."],
    ["MEDICINE", "Leaves and seeds are used in remedies for fever, cough and toothache."],
  ],
  history: "Pepper fruit is found in Nigeria, Ivory Coast and Cameroon and plays a part in Igbo hospitality and ceremonies.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, note: 'GLOSSY OBLONG LEAF, SPICY SMELL WHEN CRUSHED' },
  form: { type: 'tree', height: 1.15, trunk: 0.35, branches: 10, nodes: 5, spread: 0.32, stemW: 0.05, leafSize: 2.0, arrange: 'alternate', flower: { type: 'single', size: 0.8, color: 3 }, fruit: { type: 'berry', size: 2.2, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 60, g: [1, 1], desc: "Evergreen through the dry season." },
    { id: 'bloom', label: "IN BLOOM", from: 60, to: 120, g: [1, 1], desc: "Small flowers open." },
    { id: 'fruiting', label: "FRUITING", from: 120, to: 240, g: [1, 1], desc: "Clusters of fruit ripen from green to red." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 240, to: 360, g: [1, 1], desc: "Glossy evergreen crown." },
  ],
  beds: [{ plantedDay: -5400 }],
});
