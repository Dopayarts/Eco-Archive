EA.addSpecies('boerhavia', {
  name: "BOERHAVIA", latin: "Boerhavia diffusa", family: "Nyctaginaceae (four-o'clock family)",
  origin: "Pantropical; native in Nigeria, on roadsides and dry open ground",
  added: '2026-11-04',
  kind: 'perennial',
  summary: "A creeping, much-branched herb with thick spindle-shaped roots and purplish stems swollen at the joints. Rounded leaves in pairs are pale beneath. Tiny dark-pink flowers in loose clusters give small, sticky, ribbed fruits.",
  facts: ["CREEPING HERB", "STEMS PURPLISH", "LEAVES ROUND, IN PAIRS", "FLOWERS TINY, PINK", "FRUITS STICKY"],
  uses: [
    ["FOOD", "In Africa the leaves are sometimes cooked as a vegetable."],
    ["MEDICINE", "The root is used as a purge and for worms and fever; the plant is used as a diuretic."],
  ],
  history: "The sticky fruits cling to fur, feathers and clothes, which spreads the plant along paths and roadsides.",
  leaf: { shape: 'round', len: 1, wid: 0.85, note: 'ROUNDED LEAF, PALE BENEATH' },
  form: { type: 'herb', height: 0.35, stems: 7, nodes: 6, branches: 3, arrange: 'opposite', leafSize: 0.95, droop: 0.4, flower: { type: 'cluster', size: 0.6, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "DRY SEASON", from: 0, to: 120, g: [0.6, 0.6], desc: "Stems thin out in the dry season." },
    { id: 'regrowth', label: "REGROWTH", from: 120, to: 180, g: [0.6, 1], desc: "Shoots spread with the rains." },
    { id: 'bloom', label: "IN FLOWER", from: 180, to: 320, g: [1, 1], desc: "Tiny pink flowers." },
    { id: 'seeding', label: "STICKY FRUITS", from: 320, to: 360, g: [1, 0.7], desc: "Sticky fruits." },
  ],
  beds: [{ plantedDay: -720 }],
});
