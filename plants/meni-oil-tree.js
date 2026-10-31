EA.addSpecies('meni-oil-tree', {
  name: "MENI OIL TREE", short: "MENI OIL", latin: "Lophira lanceolata", family: "Ochnaceae (ochna family)",
  origin: "Sudano-guinean savanna from Senegal to Uganda, including Nigeria",
  added: '2026-10-31',
  kind: 'perennial',
  summary: "A savanna tree up to 16 m with corky, flaking grey bark and long, narrow leaves bunched at the twig tips. New leaves flush bright pink-red. Scented white flowers give a seed held between two unequal wings.",
  facts: ["TREE UP TO 16 M", "BARK CORKY, FLAKING", "NEW LEAVES PINK-RED", "FLOWERS WHITE, SCENTED", "SEED WITH TWO WINGS"],
  uses: [
    ["OIL", "The seeds are pressed for meni oil, used for cooking, soap and skin care."],
    ["BEES", "The scented flowers are a honey source in Nigeria."],
    ["WOOD", "Hard wood for building, tools and charcoal."],
  ],
  history: "Meni oil tree is the savanna cousin of ekki, the rainforest ironwood. Its red new leaves make it easy to spot.",
  leaf: { shape: 'lance', len: 1, wid: 0.26, note: 'LONG NARROW LEAF, BUNCHED AT TWIG TIPS' },
  form: { type: 'tree', height: 1.25, trunk: 0.45, branches: 11, nodes: 5, spread: 0.32, stemW: 0.06, leafSize: 2.4, arrange: 'alternate', flower: { type: 'cluster', size: 1.1, color: 3 }, fruit: { type: 'big', size: 0.7, color: 2 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 90, g: [0.6, 0.8], desc: "White flowers before the new leaves." },
    { id: 'regrowth', label: "RED NEW LEAVES", from: 90, to: 150, g: [0.8, 1], desc: "Pink-red leaf flush." },
    { id: 'fruiting', label: "WINGED SEEDS", from: 150, to: 240, g: [1, 1], desc: "Winged seeds spin down." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 240, to: 330, g: [1, 1], desc: "Full leaf through the rains." },
    { id: 'dormant', label: "LEAVES FALL", from: 330, to: 360, g: [1, 0.6], desc: "Briefly bare late in the year." },
  ],
  beds: [{ plantedDay: -3600 }],
});
