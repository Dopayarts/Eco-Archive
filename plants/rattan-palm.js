EA.addSpecies('rattan-palm', {
  name: "RATTAN PALM", short: "RATTAN", latin: "Calamus deerratus", family: "Arecaceae (palm family)",
  origin: "Humid and swampy forest of Africa from Gambia and Senegal to Sudan, Zambia and Angola, including Nigeria",
  added: '2026-11-11',
  kind: 'perennial',
  summary: "A clustering climbing palm that reaches 20 m into the trees, with stems up to 30 m long. Spiny leaf sheaths and whip-like tips hook onto other plants. Its scaly, one-seeded fruits ripen brownish to orange.",
  facts: ["CLIMBS TO 20 M", "STEMS UP TO 30 M", "SPINY LEAF SHEATHS", "MALE, FEMALE PLANTS", "FRUIT SCALY"],
  uses: [
    ["CANE", "Whole stems were widely used in Nigeria and Ghana for building houses and fences."],
    ["CRAFT", "Split stems make baskets, chair seats, fish traps and rope."],
    ["THATCH", "The leaves thatch roofs, and the bud is eaten in parts of West Africa."],
  ],
  history: "It is the only Calamus rattan native to tropical Africa. It grows in forest that floods in the rainy season.",
  leaf: { shape: 'lance', len: 1, wid: 0.12, compound: 'pinnate', leaflets: 21, note: 'PINNATE PALM LEAF, SPINY STALK' },
  form: { type: 'palm', height: 1.2, trunk: 0.7, count: 8, leafSize: 1.2, droop: 0.4, flower: { type: 'none' }, fruit: { type: 'berry', size: 0.8, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 140, g: [1, 1], desc: "Canes climb through the forest." },
    { id: 'bloom', label: "IN FLOWER", from: 140, to: 200, g: [1, 1], desc: "Long flower sprays." },
    { id: 'fruiting', label: "SCALY FRUIT", from: 200, to: 330, g: [1, 1], desc: "Fruits ripen orange." },
    { id: 'regrowth', label: "NEW CANES", from: 330, to: 360, g: [1, 1], desc: "New shoots rise from the clump." },
  ],
  beds: [{ plantedDay: -2500 }],
});
