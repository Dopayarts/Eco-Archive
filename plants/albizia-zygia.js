EA.addSpecies('albizia-zygia', {
  name: "ALBIZIA", latin: "Albizia zygia", family: "Fabaceae (legume family)",
  origin: "Tropical Africa from Senegal to Kenya, including Nigeria",
  added: '2026-10-31',
  kind: 'perennial',
  summary: "A fast-growing, spreading tree up to 30 m. Leaves have a few pairs of side stalks, each with 2-5 pairs of leaflets. Fluffy heads of reddish-white flowers give flat, papery, glossy brown pods.",
  facts: ["TREE UP TO 30 M", "LEAVES BIPINNATE", "FLOWERS FLUFFY, RED-WHITE", "PODS FLAT, PAPERY", "FIXES NITROGEN"],
  uses: [
    ["FARMING", "Planted for shade on cocoa and coffee farms, and as a stake for yams."],
    ["FOOD", "Young leaves are cooked as a vegetable or in soup."],
    ["WOOD", "Used for flooring, furniture and carving; flowers feed bees."],
  ],
  history: "West African albizia grows fast and fixes nitrogen, so farmers keep it as a shade tree.",
  leaf: { shape: 'oval', len: 1, wid: 0.6, compound: 'bipinnate', leaflets: 6, note: 'BIPINNATE LEAF, FEW BROAD LEAFLETS' },
  form: { type: 'tree', height: 1.35, trunk: 0.45, branches: 10, nodes: 5, spread: 0.45, stemW: 0.07, leafSize: 1.8, arrange: 'alternate', flower: { type: 'head', size: 1.2, color: 2 }, fruit: { type: 'pod', size: 1.2, hang: true, color: 2 } },
  seasons: [
    { id: 'dormant', label: "LEAVES THIN", from: 0, to: 30, g: [0.7, 0.6], desc: "Leaves drop in the harmattan." },
    { id: 'bloom', label: "IN FLOWER", from: 30, to: 150, g: [0.6, 1], desc: "Fluffy flower heads, February to May." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 150, to: 300, g: [1, 1], desc: "Wide leafy crown." },
    { id: 'fruiting', label: "PODS", from: 300, to: 360, g: [1, 0.7], desc: "Papery pods ripen." },
  ],
  beds: [{ plantedDay: -3600 }],
});
