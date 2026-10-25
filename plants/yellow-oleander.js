EA.addSpecies('yellow-oleander', {
  name: "YELLOW OLEANDER", short: "OLEANDER", latin: "Cascabela thevetia (Thevetia peruviana)", family: "Apocynaceae (dogbane family)",
  origin: "Tropical America; planted as a hedge across Nigeria",
  added: '2026-10-25',
  kind: 'perennial',
  summary: "A shrub or small tree with narrow, glossy leaves and bright yellow, funnel-shaped flowers. The fruits are fat, triangular green drupes that turn black. All parts, especially the seeds, are highly poisonous.",
  facts: ["SHRUB OR TREE 2-6 M", "LEAVES NARROW, GLOSSY", "FLOWERS YELLOW FUNNELS", "FRUIT TRIANGULAR, TURNS BLACK", "EVERY PART IS POISONOUS"],
  uses: [
    ["FENCE", "Planted as a live fence; animals do not eat it."],
    ["RESEARCH", "Its seed oil has been studied by chemists at Ahmadu Bello University."],
    ["WARNING", "Even a few seeds can kill. Never eat any part."],
  ],
  history: "Yellow oleander came from tropical America. Its seeds contain heart poisons, and it is a known cause of poisoning in South Asia.",
  leaf: { shape: 'lance', len: 1, wid: 0.15, note: 'NARROW GLOSSY LINEAR LEAF, MILKY SAP' },
  form: { type: 'shrub', height: 1.05, trunk: 0.25, branches: 9, nodes: 6, spread: 0.3, stemW: 0.035, leafSize: 1.2, arrange: 'alternate', droop: 0.2, flower: { type: 'single', size: 1.4, color: 3 }, fruit: { type: 'big', size: 0.7, color: 1 } },
  seasons: [
    { id: 'bloom', label: "IN BLOOM", from: 0, to: 150, g: [1, 1], desc: "Yellow funnels open." },
    { id: 'fruiting', label: "FRUITING", from: 150, to: 240, g: [1, 1], desc: "Triangular fruits ripen to black." },
    { id: 'bloom', label: "IN BLOOM", from: 240, to: 360, g: [1, 1], desc: "Flowers return." },
  ],
  beds: [{ plantedDay: -2700 }],
});
