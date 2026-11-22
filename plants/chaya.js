EA.addSpecies('chaya', {
  name: "CHAYA", latin: "Cnidoscolus aconitifolius", family: "Euphorbiaceae (spurge family)",
  origin: "Mexico and Central America; grown as a vegetable in Nigeria, for example at the University of Ibadan",
  local: "IYANA IPAJA (YORUBA)",
  added: '2026-11-22',
  kind: 'perennial',
  summary: "A fast-growing, leafy shrub up to 5 m with a succulent stem that bleeds milky sap. Its leaves are 10-30 cm across and deeply lobed like a hand. Small white flowers grow in clusters at the tips.",
  facts: ["LEAFY SHRUB TO 5 M", "HAND-LOBED LEAVES", "MILKY SAP", "SMALL WHITE FLOWERS", "COOK BEFORE EATING"],
  uses: [
    ["FOOD", "The leaves are cooked like spinach; it is a popular vegetable in western Nigeria."],
    ["MEDICINE", "People believe it builds the blood; rat studies found effects on anaemia and blood sugar."],
    ["CAUTION", "Raw leaves hold cyanide compounds, so cook them about 20 minutes. The sap irritates the eyes, and a rat study found it lowered sperm count."],
  ],
  history: "In Nigeria it is also called hospital too far, efo Jerusalem and Catholic vegetable. Also called tree spinach.",
  leaf: { shape: 'tri', len: 1, wid: 1, note: 'LOBED LIKE A HAND' },
  form: { type: 'shrub', height: 1.1, branches: 6, nodes: 5, arrange: 'alternate', leafSize: 0.75, droop: 0.15, flower: { type: 'cluster', size: 0.5, color: 3 }, fruit: { type: 'pod', size: 0.3, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 150, g: [1, 1], desc: "Big lobed leaves." },
    { id: 'bloom', label: "IN FLOWER", from: 150, to: 300, g: [1, 1], desc: "Small white flowers." },
    { id: 'regrowth', label: "REGROWTH", from: 300, to: 360, g: [1, 1], desc: "Picked shoots grow back." },
  ],
  beds: [{ plantedDay: -600 }],
});
