EA.addSpecies('african-padauk', {
  name: "AFRICAN PADAUK", short: "PADAUK", latin: "Pterocarpus osun", family: "Fabaceae (legume family)",
  origin: "Found only in southern Nigeria, Cameroon and Equatorial Guinea",
  added: '2026-11-11',
  kind: 'perennial',
  summary: "A small to medium tree with a short, often crooked trunk and rough brown bark that oozes reddish gum when cut. Leaves have 10-18 leaflets. Yellow pea flowers give flat, round, winged pods 7.5-15 cm across.",
  facts: ["SMALL-MEDIUM TREE", "RED GUM FROM BARK", "10-18 LEAFLETS", "FLOWERS YELLOW", "PODS ROUND, WINGED"],
  uses: [
    ["DYE", "The red sap from the bark dyes things such as traditional carvings."],
    ["TIMBER", "The wood makes dug-out canoes, drums and walking sticks."],
    ["MEDICINE", "Stem preparations are used for sickle-cell disorder, skin complaints, joint pain and fractures."],
  ],
  history: "It was described in 1910. In Nigeria it flowers from August to November, when in full leaf.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, compound: 'pinnate', leaflets: 13, note: 'PINNATE LEAF, 10-18 LEAFLETS' },
  form: { type: 'tree', height: 1.0, trunk: 0.4, branches: 9, nodes: 5, spread: 0.32, stemW: 0.07, leafSize: 1.3, arrange: 'alternate', droop: 0.2, flower: { type: 'cluster', size: 1.0, color: 3 }, fruit: { type: 'pod', size: 1.1, color: 2 } },
  seasons: [
    { id: 'fruiting', label: "WINGED PODS", from: 0, to: 100, g: [1, 0.8], desc: "Round winged pods ripen." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 100, to: 240, g: [0.8, 1], desc: "Full leaf in the rains." },
    { id: 'bloom', label: "IN FLOWER", from: 240, to: 340, g: [1, 1], desc: "Yellow flowers in full leaf." },
    { id: 'fruiting', label: "YOUNG PODS", from: 340, to: 360, g: [1, 1], desc: "Pods set." },
  ],
  beds: [{ plantedDay: -3500 }],
});
