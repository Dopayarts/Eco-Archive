EA.addSpecies('cleistopholis', {
  name: "CLEISTOPHOLIS", short: "CLEISTOPH", latin: "Cleistopholis patens", family: "Annonaceae (custard-apple family)",
  origin: "From Senegal to Uganda, including Nigeria; riverine, swamp and secondary forest",
  added: '2026-11-05',
  kind: 'perennial',
  summary: "A slender forest tree up to 20-30 m with a straight trunk bare for much of its height. Simple leaves 10-25 cm long. Greenish-yellow flowers in threes give clusters of up to nine round fruitlets. The inner bark is so fibrous it peels off in long strips.",
  facts: ["TREE UP TO 30 M", "TRUNK STRAIGHT, SLENDER", "FLOWERS GREENISH YELLOW", "FRUITLETS IN CLUSTERS", "BARK PEELS IN STRIPS"],
  uses: [
    ["WOOD", "The very light wood is used for canoes, floats, door frames and plywood."],
    ["FIBRE", "The bark is made into mats, baskets, cord and hut walls."],
    ["MEDICINE", "In Nigeria the bark is used for typhoid fever and irregular periods; leaf infusions are taken for fever."],
  ],
  history: "It prefers flat, disturbed, wet ground along rivers, in swamps and in regrowing forest.",
  leaf: { shape: 'oval', len: 1, wid: 0.3, note: 'LONG NARROW SIMPLE LEAF' },
  form: { type: 'tree', height: 1.35, trunk: 0.65, branches: 12, nodes: 6, spread: 0.28, stemW: 0.05, leafSize: 2.3, arrange: 'alternate', flower: { type: 'single', size: 0.8, color: 3 }, fruit: { type: 'berry', size: 0.8, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "DRY SEASON", from: 0, to: 90, g: [1, 1], desc: "Narrow crown." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 210, g: [1, 1], desc: "Greenish-yellow flowers." },
    { id: 'fruiting', label: "FRUITING", from: 210, to: 330, g: [1, 1], desc: "Fruits ripen late in the rains." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 330, to: 360, g: [1, 1], desc: "Narrow crown." },
  ],
  beds: [{ plantedDay: -7200 }],
});
