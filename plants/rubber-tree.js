EA.addSpecies('rubber-tree', {
  name: "RUBBER TREE", short: "RUBBER", latin: "Hevea brasiliensis", family: "Euphorbiaceae (spurge family)",
  origin: "The Amazon; plantations in southern Nigeria since about 1903",
  added: '2026-10-22',
  kind: 'perennial',
  summary: "A tall, straight tree with smooth grey bark and leaves of three long leaflets on long stalks. Tapping a spiral cut in the bark lets white latex drip into a cup. Three-lobed fruits burst with a crack to scatter mottled seeds.",
  facts: ["TREE 20-30 M", "LEAVES OF 3 LEAFLETS, LONG STALKS", "WHITE LATEX FROM CUT BARK", "FRUIT 3-LOBED, BURSTS", "SEEDS GIVE OIL"],
  uses: [
    ["INDUSTRY", "Latex makes tyres, gloves, mats and many other rubber goods."],
    ["WOOD", "Old trees give rubberwood for furniture and fuel."],
    ["OIL", "Seed oil is used in paints, soaps and resins."],
  ],
  history: "Hevea seedlings came to Nigeria from Brazil in 1895, and the first rubber estate opened at Sakponba in Edo State by 1903.",
  leaf: { shape: 'lance', len: 1, wid: 0.4, compound: 'trifoliate', note: 'LEAF OF 3 LONG ELLIPTIC LEAFLETS, LONG STALK' },
  form: { type: 'tree', height: 1.5, trunk: 0.55, branches: 9, nodes: 4, spread: 0.28, stemW: 0.06, leafSize: 1.9, arrange: 'alternate', flower: { type: 'cluster', size: 1, color: 3 }, fruit: { type: 'big', size: 0.9, hang: true, color: 2 } },
  seasons: [
    { id: 'dormant', label: "LEAF CHANGE", from: 0, to: 40, g: [0.85, 0.85], desc: "Leaves fall briefly in the dry season; tapping pauses." },
    { id: 'regrowth', label: "NEW LEAVES", from: 40, to: 70, g: [0.85, 1], desc: "Bronze new leaves flush." },
    { id: 'bloom', label: "IN BLOOM", from: 70, to: 110, g: [1, 1], desc: "Small scented flowers in clusters." },
    { id: 'fruiting', label: "FRUITING", from: 110, to: 220, g: [1, 1], desc: "Fruits ripen and burst, throwing seeds." },
    { id: 'vegetative', label: "TAPPING SEASON", from: 220, to: 360, g: [1, 1], desc: "Latex is tapped from the bark." },
  ],
  beds: [{ plantedDay: -5400 }],
});
