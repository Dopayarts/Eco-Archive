EA.addSpecies('african-myrrh', {
  name: "AFRICAN MYRRH", short: "MYRRH", latin: "Commiphora africana", family: "Burseraceae (incense-tree family)",
  origin: "Dry savanna and Sahel across sub-Saharan Africa, including northern Nigeria",
  local: "DASHI (HAUSA)",
  added: '2026-11-05',
  kind: 'perennial',
  summary: "A small deciduous tree about 5 m tall, its branchlets often ending in spines. Grey-green bark peels to a shiny surface and bleeds a clear, scented gum called bdellium when cut. Each leaf has one large toothed leaflet and two small ones, aromatic when crushed. Small reddish fruits split to show a black seed held by four red fingers.",
  facts: ["TREE ABOUT 5 M", "SPINY BRANCHLETS", "BARK PEELS, GIVES GUM", "LEAVES OF 3, AROMATIC", "FRUIT RED, SEED BLACK"],
  uses: [
    ["FUMIGANT", "In northern Nigeria it is burned as an incense, insect-repelling and antiseptic fumigant."],
    ["MEDICINE", "Fruits are used for stomach problems, bark for malaria, and resin to dress wounds."],
    ["LIVE FENCE", "It is planted as a live fence; goats and camels browse the new leaves."],
  ],
  history: "Its gum, bdellium, is a relative of true myrrh. The larvae of a beetle that feeds on it are used as a strong arrow poison.",
  leaf: { shape: 'oval', len: 1, wid: 0.6, serr: 0.3, compound: 'trifoliate', leaflets: 3, note: 'ONE BIG TOOTHED LEAFLET, TWO SMALL' },
  form: { type: 'tree', height: 0.95, trunk: 0.4, branches: 9, nodes: 5, spread: 0.36, stemW: 0.05, leafSize: 1.6, arrange: 'alternate', flower: { type: 'cluster', size: 0.7, color: 1 }, fruit: { type: 'berry', size: 0.7, color: 1 } },
  seasons: [
    { id: 'dormant', label: "LEAFLESS", from: 0, to: 120, g: [0.5, 0.5], desc: "Bare, spiny branches in the dry season." },
    { id: 'bloom', label: "IN FLOWER", from: 120, to: 170, g: [0.5, 0.7], desc: "Small flowers before the leaves." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 170, to: 300, g: [0.7, 1], desc: "Aromatic leaves in the rains." },
    { id: 'fruiting', label: "RED FRUITS", from: 300, to: 360, g: [1, 0.6], desc: "Red fruits split open." },
  ],
  beds: [{ plantedDay: -5400 }],
});
