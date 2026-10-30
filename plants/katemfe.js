EA.addSpecies('katemfe', {
  name: "KATEMFE", latin: "Thaumatococcus daniellii", family: "Marantaceae (prayer plant family)",
  origin: "West African rainforest; common in southern Nigeria",
  local: "EWE ERAN (YORUBA)",
  added: '2026-10-30',
  kind: 'perennial',
  summary: "A clumping forest herb 3-4 m tall whose large, paddle-shaped leaves rise on long stalks from creeping roots. Pale purple flowers appear near the ground, followed by soft fruits that ripen dark red-brown.",
  facts: ["HERB 3-4 M", "LEAVES BIG, ON LONG STALKS", "FLOWERS PALE PURPLE", "FRUIT DARK RED-BROWN", "LEAVES WRAP FOOD"],
  uses: [
    ["WRAPPING", "The leaves wrap moin moin, eko, ofada rice, iru and pounded yam, and are used to cook food in."],
    ["SWEETENER", "The seed covering holds thaumatin, a protein thousands of times sweeter than sugar, used by the food industry."],
    ["CRAFT", "Leaf stalks are woven into mats."],
  ],
  history: "Thaumatin from katemfe has been used as a sweetener since the 1990s. In Nigeria the leaves are still widely used to wrap food.",
  leaf: { shape: 'paddle', len: 1, wid: 0.55, note: 'LARGE OVAL LEAF ON A LONG STALK, LIKE A SMALL BANANA LEAF' },
  form: { type: 'broadleaf', height: 1.0, count: 8, leafSize: 1.7, droop: 0.2, stemW: 0.03 },
  seasons: [
    { id: 'vegetative', label: "DRY SEASON", from: 0, to: 90, g: [0.9, 0.9], desc: "Leaves stay green in the shade." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 180, g: [0.9, 1], desc: "Purple flowers near the ground with the rains." },
    { id: 'fruiting', label: "FRUITING", from: 180, to: 300, g: [1, 1], desc: "Fruits ripen red-brown." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 300, to: 360, g: [1, 0.9], desc: "Leaves are cut for market." },
  ],
  beds: [{ plantedDay: -1800 }],
});
