EA.addSpecies('mansonia', {
  name: "MANSONIA", latin: "Mansonia altissima", family: "Malvaceae (mallow family)",
  origin: "West and Central African moist forest, including Nigeria",
  added: '2026-10-31',
  kind: 'perennial',
  summary: "A tall forest tree up to 45 m with a long, straight trunk. Broad, rounded leaves are densely hairy beneath. Clusters of fragrant white flowers give nuts with one large papery wing.",
  facts: ["TREE UP TO 45 M", "TRUNK LONG, STRAIGHT", "LEAVES BROAD, HAIRY BELOW", "FLOWERS WHITE, FRAGRANT", "NUT WITH PAPER WING"],
  uses: [
    ["TIMBER", "Its dark wood replaces walnut in furniture, cabinets and veneer."],
    ["CAUTION", "The bark is very poisonous and was used in arrow poison; the sawdust irritates skin, nose and lungs."],
  ],
  history: "Mansonia is traded as African black walnut. One variety is endangered by loss of its forest home.",
  leaf: { shape: 'heart', len: 1, wid: 0.85, note: 'BROAD ROUNDED LEAF, HAIRY BENEATH' },
  form: { type: 'tree', height: 1.5, trunk: 0.6, branches: 9, nodes: 4, spread: 0.38, stemW: 0.09, leafSize: 1.8, arrange: 'alternate', flower: { type: 'cluster', size: 1.0, color: 3 }, fruit: { type: 'big', size: 0.6, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 120, g: [1, 1], desc: "Evergreen crown." },
    { id: 'bloom', label: "IN FLOWER", from: 120, to: 270, g: [1, 1], desc: "Fragrant flowers in the rains, peaking in June." },
    { id: 'fruiting', label: "WINGED NUTS", from: 270, to: 360, g: [1, 1], desc: "Winged nuts drift down." },
  ],
  beds: [{ plantedDay: -10800 }],
});
