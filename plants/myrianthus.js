EA.addSpecies('myrianthus', {
  name: "MYRIANTHUS", latin: "Myrianthus arboreus", family: "Urticaceae (nettle family)",
  origin: "Forest zone of tropical Africa from Guinea to Sudan and Angola; common in the Nigerian lowlands below 300 m",
  added: '2026-11-10',
  kind: 'perennial',
  summary: "A shrub or tree up to 14-20 m, often on stilt roots, with thin grey bark. Big leaves split like a hand into 5-7 toothed leaflets. Female trees bear clusters of yellow to orange-red fruits up to 15 cm across.",
  facts: ["TREE UP TO 14-20 M", "STILT ROOTS", "HAND-LIKE LEAVES", "MALE AND FEMALE TREES", "FRUIT YELLOW TO ORANGE"],
  uses: [
    ["FOOD", "In Delta and Edo States the young leaves are among the most popular soup vegetables; the fruit pulp and cooked seeds are eaten too."],
    ["MEDICINE", "In Nigeria leaf extracts are used for dysentery and vomiting, and Igala healers add the leaves to fever remedies for children."],
    ["MULCH", "The leaves make a good mulch in fallow land."],
  ],
  history: "Its names include giant yellow mulberry and bush pineapple, for the clustered fruit. In Enugu markets the leaves are sold from about February to October.",
  leaf: { shape: 'lance', len: 1, wid: 0.3, serr: 0.3, compound: 'palmate', leaflets: 6, note: 'PALMATE LEAF OF 5-7 TOOTHED LEAFLETS' },
  form: { type: 'tree', height: 1.0, trunk: 0.4, branches: 8, nodes: 5, spread: 0.36, stemW: 0.06, leafSize: 1.4, arrange: 'alternate', droop: 0.2, flower: { type: 'cluster', size: 0.7, color: 2 }, fruit: { type: 'big', size: 1.2, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 90, g: [0.9, 1], desc: "Evergreen leaves." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 160, g: [1, 1], desc: "Small flower clusters." },
    { id: 'fruiting', label: "FRUITING", from: 160, to: 300, g: [1, 1], desc: "Yellow-orange fruit clusters." },
    { id: 'regrowth', label: "LEAFY GROWTH", from: 300, to: 360, g: [1, 0.9], desc: "Leaves picked for soup." },
  ],
  beds: [{ plantedDay: -2500 }],
});
