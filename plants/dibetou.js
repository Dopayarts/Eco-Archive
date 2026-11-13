EA.addSpecies('dibetou', {
  name: "DIBETOU", latin: "Lovoa trichilioides", family: "Meliaceae (mahogany family)",
  origin: "West and Central African forest, including Nigeria, where it is grown in plantations",
  added: '2026-11-13',
  kind: 'perennial',
  summary: "An evergreen tree up to 45 m. Its inner bark is pinkish red with a sweet smell. Leaves have 10-15 leaflets. The black capsule splits into 4 parts and frees winged seeds.",
  facts: ["TREE UP TO 45 M", "EVERGREEN", "SWEET PINK INNER BARK", "10-15 LEAFLETS", "WINGED SEEDS"],
  uses: [
    ["TIMBER", "Its shimmering wood is sold as African walnut, tigerwood or Congowood."],
    ["FORESTRY", "Plantations of it have been set up in Nigeria."],
    ["SEEDS", "Its short-lived seeds are heavily eaten by animals, which limits new trees."],
  ],
  history: "It is one of the two main timber trees of Congo, and is threatened by habitat loss.",
  leaf: { shape: 'oval', len: 1, wid: 0.4, compound: 'pinnate', leaflets: 12, note: 'PINNATE LEAF, 10-15 LEAFLETS' },
  form: { type: 'tree', height: 1.4, trunk: 0.6, branches: 9, nodes: 5, spread: 0.3, stemW: 0.08, leafSize: 1.0, arrange: 'alternate', droop: 0.15, flower: { type: 'cluster', size: 0.5, color: 3 }, fruit: { type: 'pod', size: 0.8, color: 3 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 90, g: [1, 1], desc: "Evergreen crown." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 150, g: [1, 1], desc: "Small flowers." },
    { id: 'fruiting', label: "CAPSULES", from: 150, to: 240, g: [1, 1], desc: "Black capsules split." },
    { id: 'regrowth', label: "NEW LEAVES", from: 240, to: 360, g: [1, 1], desc: "Fresh leaves." },
  ],
  beds: [{ plantedDay: -6000 }],
});
