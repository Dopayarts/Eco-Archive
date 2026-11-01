EA.addSpecies('bridelia', {
  name: "BRIDELIA", latin: "Bridelia ferruginea", family: "Phyllanthaceae (leafflower family)",
  origin: "Wooded savanna from Guinea to Nigeria and beyond",
  local: "IRA (YORUBA)",
  added: '2026-11-01',
  kind: 'perennial',
  summary: "A straggly savanna tree about 15 m tall with a crooked trunk. The leaves are oval and simple.",
  facts: ["TREE ABOUT 15 M", "TRUNK CROOKED", "STRAGGLY CROWN", "SAVANNA TREE", "BARK USED IN REMEDIES"],
  uses: [
    ["MEDICINE", "The bark (eepo ira) is used by Yoruba people for diarrhoea, fever and diabetes; it may upset the stomach."],
    ["CRAFT", "The wood builds granaries, and extracts glaze pottery and dye cloth."],
  ],
  history: "Yoruba people also use ira in religious rites. Its species name ferruginea means rusty.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, note: 'SIMPLE OVAL LEAF' },
  form: { type: 'tree', height: 1.15, trunk: 0.3, branches: 9, nodes: 5, spread: 0.38, stemW: 0.06, leafSize: 1.8, arrange: 'alternate', droop: 0.15 },
  seasons: [
    { id: 'dormant', label: "LEAVES THIN", from: 0, to: 60, g: [0.7, 0.6], desc: "Thin crown in the harmattan." },
    { id: 'regrowth', label: "NEW LEAVES", from: 60, to: 150, g: [0.6, 1], desc: "New leaves before the rains." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 150, to: 360, g: [1, 0.7], desc: "Leafy through the rains." },
  ],
  beds: [{ plantedDay: -3600 }],
});
