EA.addSpecies('sweetsop', {
  name: "SUGAR APPLE", short: "SWEETSOP", latin: "Annona squamosa", family: "Annonaceae (custard apple family)",
  origin: "Tropical America; grown in some Nigerian gardens",
  added: '2026-10-16',
  kind: 'perennial',
  summary: "A small, open, slightly drooping tree with thin, dull leaves that drop in the dry season. Nodding greenish flowers become round, knobbly green fruits made of fused segments that pull apart when ripe, with sweet white custard flesh.",
  facts: ["SMALL TREE 3-6 M", "LEAVES THIN, OBLONG, DROPPED IN DROUGHT", "FLOWERS NODDING, GREEN-YELLOW", "FRUIT ROUND, KNOBBLY SEGMENTS", "FLESH VERY SWEET, CUSTARD-LIKE"],
  uses: [
    ["FOOD", "The sweet flesh is spooned out fresh."],
    ["CAUTION", "Seeds are poisonous and are used as an insecticide; never eat them."],
  ],
  history: "Sugar apple is a close relative of soursop from tropical America. It is common in India and Asia and grown here and there in Nigerian gardens, with seedlings sold by nurseries.",
  leaf: { shape: 'lance', len: 1, wid: 0.35, note: 'SIMPLE OBLONG LEAF, THIN, DULL GREEN' },
  form: { type: 'tree', height: 1.05, trunk: 0.35, branches: 6, nodes: 5, spread: 0.28, stemW: 0.035, leafSize: 1.45, arrange: 'alternate', droop: 0.4, flower: { type: 'single', size: 0.7, color: 2 }, fruit: { type: 'big', size: 0.9, hang: true, color: 1 } },
  seasons: [
    { id: 'dormant', label: "LEAVES FALLEN", from: 0, to: 80, g: [0.75, 0.75], desc: "Bare or sparse branches in the dry season." },
    { id: 'regrowth', label: "FIRST RAINS", from: 80, to: 130, g: [0.75, 1], desc: "New leaves with the rains." },
    { id: 'bloom', label: "IN BLOOM", from: 130, to: 180, g: [1, 1], desc: "Nodding green flowers open." },
    { id: 'fruiting', label: "FRUIT GROWING", from: 180, to: 280, g: [1, 1], desc: "Knobbly fruits swell." },
    { id: 'harvest', label: "FRUIT SEASON", from: 280, to: 360, g: [1, 0.85], desc: "Segments loosen and fruits are picked." },
  ],
  beds: [{ plantedDay: -1440 }],
});
