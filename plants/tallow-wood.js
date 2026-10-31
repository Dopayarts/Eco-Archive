EA.addSpecies('tallow-wood', {
  name: "TALLOW WOOD", latin: "Ximenia americana", family: "Olacaceae (olax family)",
  origin: "Tropical Africa, the Americas and Asia; native in Nigeria",
  added: '2026-10-31',
  kind: 'perennial',
  summary: "A spiny, straggling shrub or small tree 2-7 m with arching, purple-red twigs. Grey-green leaves smell of bitter almonds when crushed. Small, scented flowers give plum-like fruits that ripen yellow.",
  facts: ["SHRUB 2-7 M", "TWIGS SPINY, PURPLE-RED", "LEAVES SMELL OF ALMONDS", "FRUIT YELLOW, PLUM-LIKE", "ONE BIG SEED"],
  uses: [
    ["FOOD", "Ripe fruit is eaten raw or made into juice and jam."],
    ["OIL", "Kernel oil is used in soap and cosmetics."],
    ["CAUTION", "Seeds and leaves hold cyanide compounds: do not chew the seed, and cook young leaves well."],
  ],
  history: "Tallow wood grows on poor, dry soils across the tropics. Its bark is rich in tannin and is used to tan leather.",
  leaf: { shape: 'lance', len: 1, wid: 0.4, note: 'LEATHERY GREY-GREEN LEAF, ALMOND SMELL' },
  form: { type: 'shrub', height: 0.95, trunk: 0.15, branches: 10, nodes: 6, spread: 0.36, stemW: 0.035, leafSize: 1.4, arrange: 'alternate', droop: 0.3, flower: { type: 'cluster', size: 0.8, color: 3 }, fruit: { type: 'berry', size: 2.0, color: 3 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 90, g: [0.85, 0.85], desc: "Scented flowers in the dry season." },
    { id: 'fruiting', label: "FRUITING", from: 90, to: 180, g: [0.85, 1], desc: "Fruits ripen yellow." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 180, to: 360, g: [1, 0.85], desc: "Grey-green through the rains." },
  ],
  beds: [{ plantedDay: -1800 }],
});
