EA.addSpecies('chewing-stick', {
  name: "CHEWING STICK", short: "CHEW STICK", latin: "Garcinia mannii", family: "Clusiaceae (mangosteen family)",
  origin: "Lowland rainforest of west-central Africa, from southern Nigeria through Cameroon and Gabon to Congo",
  added: '2026-11-10',
  kind: 'perennial',
  summary: "A dense, evergreen rainforest tree whose low branches and foliage often hide its smooth brown trunk. Leaves are elliptical. Male and female flowers grow on separate trees; each has four red petals around a yellow-orange centre, on long stalks in ones or twos.",
  facts: ["EVERGREEN TREE", "DENSE, LOW BRANCHES", "BARK BROWN, SMOOTH", "FLOWERS RED, 4 PETALS", "MALE, FEMALE TREES"],
  uses: [
    ["TEETH", "Its twigs are among the most used chewing sticks for cleaning teeth across its range, including Akwa Ibom."],
    ["RESEARCH", "Nigerian studies of the stem found low levels of anti-nutrients, which suits its use in the mouth."],
    ["FOREST", "It grows wild in lowland rainforest and is rated Least Concern."],
  ],
  history: "It was described in 1868 and named after the German botanist Gustav Mann, who collected plants in West Africa.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, note: 'ELLIPTICAL LEATHERY LEAF IN PAIRS' },
  form: { type: 'tree', height: 0.95, trunk: 0.25, branches: 10, nodes: 6, spread: 0.38, stemW: 0.06, leafSize: 1.2, arrange: 'opposite', droop: 0.3, flower: { type: 'single', size: 0.9, color: 1 }, fruit: { type: 'berry', size: 0.9, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 100, g: [1, 1], desc: "Dense evergreen crown." },
    { id: 'bloom', label: "IN FLOWER", from: 100, to: 170, g: [1, 1], desc: "Red four-petalled flowers." },
    { id: 'fruiting', label: "FRUITING", from: 170, to: 280, g: [1, 1], desc: "Fruits on female trees." },
    { id: 'regrowth', label: "NEW LEAVES", from: 280, to: 360, g: [1, 1], desc: "Fresh shoots." },
  ],
  beds: [{ plantedDay: -5000 }],
});
