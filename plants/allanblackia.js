EA.addSpecies('allanblackia', {
  name: "ALLANBLACKIA", short: "ALLANBLKIA", latin: "Allanblackia floribunda", family: "Clusiaceae (mangosteen family)",
  origin: "Rainforest from Nigeria and Sierra Leone east to the Central African Republic, DR Congo and Uganda",
  added: '2026-11-15',
  kind: 'perennial',
  summary: "An evergreen understorey tree up to 30 m, with male and female flowers on separate trees. Leaves are 8-25 cm, in opposite pairs. Pinkish to red flowers give huge ridged berries 20-50 cm long holding 40-80 seeds.",
  facts: ["TREE UP TO 30 M", "EVERGREEN", "PINK-RED FLOWERS", "FRUIT UP TO 50 CM", "SEEDS 72% FAT"],
  uses: [
    ["OIL", "The seed fat is used in cooking and is wanted by the food industry for margarine."],
    ["TRADE", "Nigeria produced about 50 tonnes of the oil in 2006 and is building a trade in it."],
    ["BUILDING", "In Nigeria its wood is used for hut walls, doors and window frames."],
  ],
  history: "Also called the tallow tree. Its slimy fruit pulp can be made into jams and jellies.",
  leaf: { shape: 'oval', len: 1, wid: 0.4, note: 'LEAVES IN PAIRS, 8-25 CM' },
  form: { type: 'tree', height: 1.2, trunk: 0.45, branches: 9, nodes: 5, spread: 0.3, stemW: 0.08, leafSize: 1.2, arrange: 'opposite', droop: 0.2, flower: { type: 'cluster', size: 0.8, color: 1 }, fruit: { type: 'big', size: 1.4, hang: true, color: 3 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 90, g: [1, 1], desc: "Evergreen crown." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 150, g: [1, 1], desc: "Pink-red flowers." },
    { id: 'fruiting', label: "BIG FRUITS", from: 150, to: 330, g: [1, 1], desc: "Huge ridged fruits swell." },
    { id: 'regrowth', label: "NEW LEAVES", from: 330, to: 360, g: [1, 1], desc: "Fresh leaves." },
  ],
  beds: [{ plantedDay: -5000 }],
});
