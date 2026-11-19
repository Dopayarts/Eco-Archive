EA.addSpecies('false-yam', {
  name: "FALSE YAM", latin: "Icacina oliviformis", family: "Icacinaceae",
  origin: "Tropical Africa from Senegal to southern Nigeria, Central African Republic and Sudan",
  added: '2026-11-19',
  kind: 'perennial',
  summary: "A woody herb or straggling shrub about 1 m tall with several stems. Below ground lies a huge tuber 30-50 cm across that can weigh 25 kg. Its fruit ripens red with a thin sweet pulp.",
  facts: ["SHRUB ABOUT 1 M", "TUBER UP TO 25 KG", "RED FRUIT", "SWEET PULP", "POISON RAW TUBER"],
  uses: [
    ["FOOD", "The tuber is a famine food after long washing and soaking; children eat the fruit, and the kernel is ground into flour."],
    ["MEDICINE", "The leaves are a widely used remedy."],
    ["CAUTION", "The raw tuber is poisonous and causes colic and dysentery; large amounts can kill. The leaves can kill sheep."],
  ],
  history: "Bees and flies pollinate its flowers. The tuber is sometimes cultivated in Senegal.",
  leaf: { shape: 'oval', len: 1, wid: 0.55, note: 'SIMPLE LEAF' },
  form: { type: 'shrub', height: 0.5, branches: 4, nodes: 5, trunk: 0.1, spread: 0.3, arrange: 'alternate', leafSize: 0.8, droop: 0.15, flower: { type: 'cluster', size: 0.5, color: 3 }, fruit: { type: 'berry', size: 0.8, color: 1 } },
  seasons: [
    { id: 'rest', label: "DRY REST", from: 0, to: 150, g: [0.7, 0.7], desc: "Tuber waits out the dry season." },
    { id: 'regrowth', label: "NEW SHOOTS", from: 150, to: 210, g: [0.7, 1], desc: "Shoots rise from the tuber." },
    { id: 'bloom', label: "IN FLOWER", from: 210, to: 280, g: [1, 1], desc: "Bees and flies visit." },
    { id: 'fruiting', label: "RED FRUIT", from: 280, to: 360, g: [1, 1], desc: "Sweet red fruits." },
  ],
  beds: [{ plantedDay: -1500 }],
});
