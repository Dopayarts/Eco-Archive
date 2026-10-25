EA.addSpecies('ixora', {
  name: "IXORA", short: "IXORA", latin: "Ixora coccinea", family: "Rubiaceae (coffee family)",
  origin: "South India and Sri Lanka; a garden shrub in Nigeria",
  added: '2026-10-24',
  kind: 'perennial',
  summary: "A compact evergreen shrub with stiff, glossy leaves in opposite pairs. Its branch tips carry round clusters of many small, star-shaped red or orange flowers on long thin tubes.",
  facts: ["SHRUB 1-2 M", "LEAVES GLOSSY, OPPOSITE", "FLOWERS IN ROUND CLUSTERS", "EACH FLOWER A 4-PETAL STAR", "RED, ORANGE OR YELLOW"],
  uses: [
    ["GARDEN", "Planted in hedges and borders; called flame of the woods."],
    ["BUTTERFLIES", "Nectar draws butterflies."],
  ],
  history: "Ixora is one of the ornamental shrubs recorded in a 2021 survey of the University of Benin campus.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, note: 'STIFF GLOSSY OBLONG LEAF, OPPOSITE PAIRS' },
  form: { type: 'shrub', height: 0.8, trunk: 0.15, branches: 9, nodes: 6, spread: 0.3, stemW: 0.03, leafSize: 1.1, arrange: 'opposite', flower: { type: 'cluster', size: 1.6, color: 3 } },
  seasons: [
    { id: 'bloom', label: "IN BLOOM", from: 0, to: 150, g: [1, 1], desc: "Round red flower clusters." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 150, to: 210, g: [1, 1], desc: "New shoots in the rains." },
    { id: 'bloom', label: "IN BLOOM", from: 210, to: 360, g: [1, 1], desc: "Clusters on every tip." },
  ],
  beds: [{ plantedDay: -1800 }],
});
