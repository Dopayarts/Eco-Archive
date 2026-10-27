EA.addSpecies('ekki', {
  name: "EKKI", latin: "Lophira alata", family: "Ochnaceae (ochna family)",
  origin: "West African coastal rainforest and swamps, including Nigeria",
  added: '2026-10-27',
  kind: 'perennial',
  summary: "A tall forest tree with a straight, unbuttressed trunk up to about 1.8 m across and no branches for the first 30 m or so. Its thick, reddish-brown bark gives it the name red ironwood. Long, narrow leaves cluster at the twig tips and flush bright red.",
  facts: ["TALL TREE, STRAIGHT TRUNK", "FIRST BRANCHES AROUND 30 M", "BARK REDDISH-BROWN", "HEARTWOOD DARK RED, SPECKLED", "WOOD VERY HARD AND HEAVY"],
  uses: [
    ["WOOD", "Heavy, rot-resistant timber for railway sleepers, piers, harbour fenders and sea defences."],
    ["BUILDING", "Used without treatment because it resists insects, fungi and weather."],
  ],
  history: "Ekki is traded as azobe and bongossi. Its wood tests about twice as strong as European oak.",
  leaf: { shape: 'lance', len: 1, wid: 0.25, note: 'LONG NARROW LEAF, CLUSTERED AT TWIG TIPS, YOUNG LEAVES RED' },
  form: { type: 'tree', height: 1.6, trunk: 0.65, branches: 8, nodes: 4, spread: 0.32, stemW: 0.09, leafSize: 1.8, arrange: 'whorl', flower: { type: 'cluster', size: 1.1, color: 3 }, fruit: { type: 'pod', size: 0.7, color: 2 } },
  seasons: [
    { id: 'regrowth', label: "RED FLUSH", from: 0, to: 60, g: [0.95, 1], desc: "New leaves flush bright red." },
    { id: 'bloom', label: "IN BLOOM", from: 60, to: 120, g: [1, 1], desc: "Sprays of white flowers." },
    { id: 'fruiting', label: "WINGED FRUITS", from: 120, to: 210, g: [1, 1], desc: "Winged fruits ripen and spin down." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 210, to: 360, g: [1, 0.95], desc: "Tall evergreen crown." },
  ],
  beds: [{ plantedDay: -9000 }],
});
