EA.addSpecies('akuamma', {
  name: "AKUAMMA", latin: "Picralima nitida", family: "Apocynaceae (dogbane family)",
  origin: "African lowland rainforest, including southern Nigeria",
  added: '2026-10-31',
  kind: 'perennial',
  summary: "An evergreen tree up to 35 m with milky latex in all parts and glossy leaves in pairs. Fragrant white flowers give paired yellow-orange fruits up to 20 cm long, holding many seeds in soft pulp.",
  facts: ["TREE UP TO 35 M", "MILKY LATEX", "LEAVES GLOSSY, OPPOSITE", "FRUIT YELLOW-ORANGE", "SEEDS VERY BITTER"],
  uses: [
    ["MEDICINE", "Seeds, bark and roots are widely used for fever, malaria and pain; in Nigeria bark or root is used for jaundice."],
    ["CAUTION", "Seed chemicals act like opioids and are toxic in tests; fruit and seeds were used as arrow and fish poison."],
  ],
  history: "Akuamma seeds are intensely bitter. Scientists study their alkaloids, some of which act on the same receptors as morphine.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, note: 'GLOSSY OVAL LEAF IN PAIRS' },
  form: { type: 'tree', height: 1.3, trunk: 0.4, branches: 9, nodes: 5, spread: 0.36, stemW: 0.07, leafSize: 1.9, arrange: 'opposite', flower: { type: 'cluster', size: 1.0, color: 3 }, fruit: { type: 'big', size: 1.2, hang: true, color: 3 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 150, g: [1, 1], desc: "Evergreen under the forest canopy." },
    { id: 'fruiting', label: "FRUITING", from: 150, to: 300, g: [1, 1], desc: "Fruits ripen June to October." },
    { id: 'bloom', label: "IN FLOWER", from: 300, to: 360, g: [1, 1], desc: "It can flower at any time of year." },
  ],
  beds: [{ plantedDay: -7200 }],
});
