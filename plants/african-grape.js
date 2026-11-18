EA.addSpecies('african-grape', {
  name: "AFRICAN GRAPE", short: "AFR GRAPE", latin: "Lannea microcarpa", family: "Anacardiaceae (cashew family)",
  origin: "West African savanna, including Nigeria",
  added: '2026-11-18',
  kind: 'perennial',
  summary: "A tree up to 15 m with grey bark and pinnate leaves up to 23 cm long. Its small fruits ripen purple-black.",
  facts: ["TREE TO 15 M", "GREY BARK", "PINNATE LEAVES", "PURPLE-BLACK FRUIT", "RED-BROWN DYE"],
  uses: [
    ["FOOD", "The fruits are eaten, and so are the young leaves."],
    ["DYE", "The bark dyes cloth red-brown for bogolan mud cloth."],
    ["MEDICINE", "It is used in traditional medicine in Nigeria."],
  ],
  history: "Its grape-like fruit clusters give it its common name.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, compound: 'pinnate', note: 'PINNATE LEAF TO 23 CM' },
  form: { type: 'tree', height: 1.1, trunk: 0.5, branches: 8, nodes: 5, spread: 0.3, stemW: 0.07, leafSize: 1.0, arrange: 'alternate', droop: 0.15, flower: { type: 'cluster', size: 0.5, color: 3 }, fruit: { type: 'berry', size: 0.6, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 90, g: [1, 1], desc: "Leafy crown." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 180, g: [1, 1], desc: "Small flowers." },
    { id: 'fruiting', label: "FRUITING", from: 180, to: 270, g: [1, 1], desc: "Purple-black fruits." },
    { id: 'regrowth', label: "NEW LEAVES", from: 270, to: 360, g: [1, 1], desc: "Fresh leaves." },
  ],
  beds: [{ plantedDay: -3000 }],
});
