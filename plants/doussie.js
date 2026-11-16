EA.addSpecies('doussie', {
  name: "DOUSSIE", latin: "Afzelia bipindensis", family: "Fabaceae (legume family)",
  origin: "Rainforest from southern Nigeria east to western Uganda and south to DR Congo, Zambia and Angola",
  added: '2026-11-16',
  kind: 'perennial',
  summary: "A tall tree up to 40 m with scaly yellowish- to reddish-brown bark and aromatic inner bark. Leaves have 4-8 pairs of leaflets. Sweet-scented flowers have one white to pink petal marked red. Woody kidney-shaped pods hold black seeds with an orange-red cap.",
  facts: ["TREE UP TO 40 M", "AROMATIC INNER BARK", "4-8 PAIRS OF LEAFLETS", "ONE-PETAL FLOWERS", "BLACK SEEDS, RED CAP"],
  uses: [
    ["TIMBER", "Its very stable wood, traded as doussie, is used for boats, bridges, floors and furniture."],
    ["MEDICINE", "In Cameroon the bark sap is used for stomach-ache and the seed cap on chapped lips."],
    ["FUEL", "The wood also makes firewood and charcoal."],
  ],
  history: "Also called apa. It is rated Vulnerable and threatened by habitat loss.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, compound: 'pinnate', leaflets: 6, note: 'PINNATE LEAF, 4-8 PAIRS' },
  form: { type: 'tree', height: 1.4, trunk: 0.6, branches: 9, nodes: 5, spread: 0.3, stemW: 0.09, leafSize: 1.1, arrange: 'alternate', droop: 0.15, flower: { type: 'single', size: 0.8, color: 1 }, fruit: { type: 'pod', size: 1.1, color: 3 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 60, g: [1, 1], desc: "Dry season crown." },
    { id: 'bloom', label: "IN FLOWER", from: 60, to: 120, g: [1, 1], desc: "Sweet-scented flowers." },
    { id: 'fruiting', label: "WOODY PODS", from: 120, to: 240, g: [1, 1], desc: "Pods split, black seeds." },
    { id: 'regrowth', label: "NEW LEAVES", from: 240, to: 360, g: [1, 1], desc: "Fresh leaves." },
  ],
  beds: [{ plantedDay: -7000 }],
});
