EA.addSpecies('napoleons-hat', {
  name: "NAPOLEON'S HAT", short: "NAPOLEON", latin: "Napoleonaea imperialis", family: "Lecythidaceae (Brazil nut family)",
  origin: "Tropical West Africa; bush fallows of south-eastern Nigeria",
  local: "UTUM (IKWUANO IGBO)",
  added: '2026-11-03',
  kind: 'perennial',
  summary: "An evergreen tree about 14 m with a dense round crown. Cream and red flowers with a frilly saucer and a crown-like centre sit right on the stems. Round, fleshy fruits with sweet pulp grow on the trunk and big limbs.",
  facts: ["TREE ABOUT 14 M", "FLOWERS LIKE A HAT", "FLOWERS CREAM AND RED", "FRUIT ON THE TRUNK", "PULP SWEET"],
  uses: [
    ["FOOD", "The sugary pulp is eaten and made into juice and jam."],
    ["CHEWSTICK", "Twigs are used as chewsticks."],
    ["OTHER", "Roots are used in medicine; leaves are mulch and fodder."],
  ],
  history: "The genus was named in 1804 after Napoleon, whose ribbon cockade hat the flower resembles.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, note: 'BROAD ELLIPTIC LEAF, ROUNDED TIP' },
  form: { type: 'tree', height: 1.15, trunk: 0.4, branches: 12, nodes: 6, spread: 0.38, stemW: 0.07, leafSize: 2.2, arrange: 'alternate', flower: { type: 'single', size: 1.3, color: 3 }, fruit: { type: 'big', size: 0.9, color: 1 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 90, g: [1, 1], desc: "Flowers January to March." },
    { id: 'fruiting', label: "FRUIT RIPE", from: 90, to: 150, g: [1, 1], desc: "Fruits ripen around April." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 150, to: 360, g: [1, 1], desc: "Dense evergreen crown." },
  ],
  beds: [{ plantedDay: -5400 }],
});
