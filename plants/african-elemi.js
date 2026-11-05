EA.addSpecies('african-elemi', {
  name: "AFRICAN ELEMI", short: "ELEMI", latin: "Canarium schweinfurthii", family: "Burseraceae (incense-tree family)",
  origin: "Tropical Africa from the Nigerian coast east to Uganda and south to Angola",
  added: '2026-11-05',
  kind: 'perennial',
  summary: "A huge forest tree whose crown reaches the top of the canopy. Cut bark smells of turpentine and bleeds a sticky resin that hardens sulphur-yellow. Long feather leaves of 8-12 pairs of leaflets cluster at the twig ends. Small cream flowers give oily, bluish-purple fruits 3-4 cm long around a hard stone.",
  facts: ["GIANT FOREST TREE", "RESIN TURNS YELLOW", "FEATHER LEAVES AT TIPS", "FLOWERS CREAM, SMALL", "FRUIT OILY, PURPLE"],
  uses: [
    ["FOOD", "The oily pulp is eaten raw or softened in warm water. In Nigeria the kernel is sometimes made into a butter used like shea butter."],
    ["RESIN", "The resin is burned to fumigate homes and keep mosquitoes away, and as a bush candle."],
    ["TIMBER", "The pinkish wood is used as a substitute for mahogany."],
  ],
  history: "Its resin is one of the sources of elemi. Plateau peoples of Nigeria's Middle Belt use the hard fruit stones in divination.",
  leaf: { shape: 'oval', len: 1, wid: 0.4, compound: 'pinnate', leaflets: 17, note: 'LONG FEATHER LEAF OF PAIRED LEAFLETS' },
  form: { type: 'tree', height: 1.35, trunk: 0.6, branches: 11, nodes: 6, spread: 0.32, stemW: 0.08, leafSize: 1.9, arrange: 'alternate', flower: { type: 'cluster', size: 0.8, color: 3 }, fruit: { type: 'berry', size: 1.0, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "DRY SEASON", from: 0, to: 90, g: [1, 1], desc: "Tall crown." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 180, g: [1, 1], desc: "Cream flower sprays." },
    { id: 'fruiting', label: "PURPLE FRUITS", from: 180, to: 330, g: [1, 1], desc: "Oily fruits fall when ripe." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 330, to: 360, g: [1, 1], desc: "Tall crown." },
  ],
  beds: [{ plantedDay: -14400 }],
});
