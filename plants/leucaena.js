EA.addSpecies('leucaena', {
  name: "LEUCAENA", latin: "Leucaena leucocephala", family: "Fabaceae (legume family)",
  origin: "Native to southern Mexico and Central America; planted across the tropics, including Nigeria",
  added: '2026-11-07',
  kind: 'perennial',
  summary: "A fast-growing thornless tree 3-15 m tall with grey bark. Feathery leaves of many tiny leaflets fold up in heat or drought. Round, creamy-white puffball flowers give flat brown pods 13-18 cm long, often on the tree at the same time.",
  facts: ["TREE 3-15 M", "NO THORNS", "LEAVES FEATHERY, FOLDING", "FLOWERS CREAM PUFFBALLS", "PODS FLAT, BROWN"],
  uses: [
    ["FODDER", "One of the best fodder trees in the tropics, though feed should be no more than a fifth leucaena."],
    ["FARMING", "Among the first trees used in alley cropping, with crops grown between hedgerows; it fixes nitrogen."],
    ["CAUTION", "It contains mimosine, which poisons non-ruminants and makes horses lose their hair. It is listed among the world's 100 worst invasive species."],
  ],
  history: "It is called a conflict tree: prized for forage, but it spreads like a weed.",
  leaf: { shape: 'oval', len: 1, wid: 0.35, compound: 'pinnate', leaflets: 21, note: 'MANY TINY LEAFLETS' },
  form: { type: 'tree', height: 1.15, trunk: 0.55, branches: 10, nodes: 6, spread: 0.28, stemW: 0.05, leafSize: 1.7, arrange: 'alternate', flower: { type: 'head', size: 0.9, color: 3 }, fruit: { type: 'pod', size: 1.0, hang: true, color: 2 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 120, g: [1, 1], desc: "Cream puffball flowers." },
    { id: 'fruiting', label: "PODS", from: 120, to: 240, g: [1, 1], desc: "Flowers and pods together." },
    { id: 'bloom', label: "IN FLOWER", from: 240, to: 360, g: [1, 1], desc: "Flowers much of the year." },
  ],
  beds: [{ plantedDay: -2880 }],
});
