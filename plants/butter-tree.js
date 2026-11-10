EA.addSpecies('butter-tree', {
  name: "BUTTER TREE", short: "BUTTERTREE", latin: "Pentadesma butyracea", family: "Clusiaceae (mangosteen family)",
  origin: "Rainforest of West and Central Africa from Guinea-Bissau and Sierra Leone through Nigeria to Cameroon and Congo",
  added: '2026-11-10',
  kind: 'perennial',
  summary: "A forest tree about 20 m tall with a straight, round trunk and no buttresses. Cut bark bleeds bright yellow sap. Large flowers rich in nectar are visited at night by bats, and the big oval berries hold seeds that are pressed for a shea-like butter.",
  facts: ["TREE ABOUT 20 M", "YELLOW SAP", "BAT-POLLINATED FLOWERS", "BERRY 9-15 CM", "SEEDS GIVE BUTTER"],
  uses: [
    ["FOOD", "The seed fat, kanya butter, is used as cooking fat; the sweet yellow pulp of ripe fruit is eaten."],
    ["SKIN", "The butter goes into soap, cosmetics and ointments, and keeps 1-3 years without going rancid."],
    ["TIMBER", "The wood is used for building and cabinet work."],
  ],
  history: "Its butter has been made in West Africa for generations, much like shea butter. Some sellers abroad market it as yellow shea butter, though it comes from a different tree.",
  leaf: { shape: 'lance', len: 1, wid: 0.3, note: 'LONG, NARROW, LEATHERY LEAF' },
  form: { type: 'tree', height: 1.25, trunk: 0.55, branches: 9, nodes: 5, spread: 0.3, stemW: 0.07, leafSize: 1.3, arrange: 'opposite', droop: 0.2, flower: { type: 'single', size: 1.2, color: 3 }, fruit: { type: 'big', size: 1.3, hang: true, color: 2 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 90, g: [1, 1], desc: "Nectar-rich flowers open for bats." },
    { id: 'fruiting', label: "FRUITING", from: 90, to: 240, g: [1, 1], desc: "Big berries swell and ripen." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 240, to: 360, g: [1, 1], desc: "Evergreen crown through the rains." },
  ],
  beds: [{ plantedDay: -6000 }],
});
