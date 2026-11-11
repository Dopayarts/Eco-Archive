EA.addSpecies('sesban', {
  name: "SESBAN", latin: "Sesbania sesban", family: "Fabaceae (legume family)",
  origin: "Widespread in tropical East and West Africa, including Nigeria, and in southern Africa and Asia",
  added: '2026-11-11',
  kind: 'perennial',
  summary: "A fast-growing, narrow-crowned shrub or small tree 1-7 m tall with feathery, hairy leaves of many narrow leaflets. Yellow flowers streaked with brown and purple give slender pods 10-20 cm long.",
  facts: ["SHRUB 1-7 M", "FAST-GROWING", "MANY NARROW LEAFLETS", "FLOWERS YELLOW, STREAKED", "PODS 10-20 CM"],
  uses: [
    ["FODDER", "Its leaves hold over 20% protein and are fed to livestock."],
    ["SOIL", "It fixes nitrogen; fallows of sesban raise the next maize crop."],
    ["FUEL", "Its fast wood makes firewood and charcoal."],
    ["CAUTION", "Leaf meal at 10% of the feed has killed young chicks."],
  ],
  history: "It is also called Egyptian riverhemp and river bean, since it grows well near water.",
  leaf: { shape: 'lance', len: 1, wid: 0.25, compound: 'pinnate', leaflets: 21, note: 'MANY NARROW HAIRY LEAFLETS' },
  form: { type: 'shrub', height: 0.95, branches: 5, nodes: 6, trunk: 0.3, spread: 0.3, arrange: 'alternate', leafSize: 1.2, droop: 0.25, flower: { type: 'cluster', size: 0.9, color: 3 }, fruit: { type: 'pod', size: 0.9, hang: true, color: 1 } },
  seasons: [
    { id: 'fruiting', label: "PODS", from: 0, to: 100, g: [1, 0.8], desc: "Slender pods dry." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 100, to: 220, g: [0.8, 1], desc: "Fast leafy growth." },
    { id: 'bloom', label: "IN FLOWER", from: 220, to: 320, g: [1, 1], desc: "Streaked yellow flowers." },
    { id: 'regrowth', label: "REGROWTH", from: 320, to: 360, g: [1, 1], desc: "Cut stems sprout again." },
  ],
  beds: [{ plantedDay: -600 }],
});
