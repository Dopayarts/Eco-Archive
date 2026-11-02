EA.addSpecies('detar', {
  name: "DETAR", latin: "Detarium senegalense", family: "Fabaceae (legume family)",
  origin: "West Africa from Senegal to Sudan and northern DR Congo; used in Nigeria",
  added: '2026-11-02',
  kind: 'perennial',
  summary: "A tree up to 35-40 m with pinnate leaves of 6-12 papery leaflets and small whitish flowers without petals. Round green fruits, 4-6 cm across, hold fibrous, sweet-sour pulp around one big seed.",
  facts: ["TREE UP TO 40 M", "LEAVES PINNATE", "FLOWERS SMALL, NO PETALS", "FRUIT ROUND, GREEN", "ONE BIG SEED"],
  uses: [
    ["FOOD", "The pulp is eaten fresh or made into juice and sweets; seed flour thickens soups in Nigeria."],
    ["WOOD", "Durable, termite-proof wood for posts, furniture and boats."],
    ["CAUTION", "Fruit from some trees is poisonous, and good and bad trees look alike. Animals leave the bad fruit under the tree."],
  ],
  history: "Detar is a close relative of sweet detar. It flowers near the end of the dry season, and the fruit takes about six months to ripen.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, compound: 'pinnate', leaflets: 9, note: 'PINNATE LEAF, PAPERY OVAL LEAFLETS' },
  form: { type: 'tree', height: 1.45, trunk: 0.5, branches: 10, nodes: 5, spread: 0.42, stemW: 0.09, leafSize: 1.8, arrange: 'alternate', flower: { type: 'cluster', size: 0.8, color: 3 }, fruit: { type: 'big', size: 0.8, color: 1 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 120, g: [1, 1], desc: "Flowers after the new leaves." },
    { id: 'vegetative', label: "FRUIT SWELLS", from: 120, to: 240, g: [1, 1], desc: "Green fruits grow." },
    { id: 'fruiting', label: "FRUIT RIPE", from: 240, to: 360, g: [1, 1], desc: "Fruits ripen and fall." },
  ],
  beds: [{ plantedDay: -10800 }],
});
