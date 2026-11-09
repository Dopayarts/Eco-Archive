EA.addSpecies('ayan', {
  name: "AYAN", latin: "Distemonanthus benthamianus", family: "Fabaceae (legume family)",
  origin: "Rainforest of West and Central Africa, from Guinea and Sierra Leone through Nigeria to Cameroon, Gabon and Congo",
  added: '2026-11-09',
  kind: 'perennial',
  summary: "A tall deciduous forest tree up to 40 m with a straight trunk bare of branches for up to 25 m. Its smooth orange to red bark peels in large patches. New leaves come out copper-red, followed by white-petalled flowers and flat, papery pods.",
  facts: ["TREE UP TO 40 M", "BARK ORANGE-RED, PEELING", "NEW LEAVES COPPERY", "FLOWERS WHITE PETALS", "PODS FLAT, PAPERY"],
  uses: [
    ["TIMBER", "Its yellow wood, sold as African satinwood or movingui, is used for flooring, furniture, joinery and veneer."],
    ["TEETH", "In parts of Nigeria its roots and twigs are chewing sticks for cleaning teeth."],
    ["MEDICINE", "The bark is used in traditional medicine for skin complaints, diarrhoea and fevers."],
  ],
  history: "Ivory Coast exported 38,000 cubic metres of its logs in 1983 but only 180 in 1996. Young trees are scarce in old forest, which makes logging it hard to sustain.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, compound: 'pinnate', leaflets: 9, note: 'PINNATE LEAF, 7-10 OVAL LEAFLETS' },
  form: { type: 'tree', height: 1.35, trunk: 0.6, branches: 10, nodes: 6, spread: 0.27, stemW: 0.07, leafSize: 1.3, arrange: 'alternate', droop: 0.15, flower: { type: 'cluster', size: 0.8, color: 3 }, fruit: { type: 'pod', size: 0.9, hang: true, color: 2 } },
  seasons: [
    { id: 'dormant', label: "BARE BRANCHES", from: 0, to: 80, g: [0.7, 0.5], desc: "Leaves fall in the dry season." },
    { id: 'vegetative', label: "COPPER LEAVES", from: 80, to: 140, g: [0.5, 1], desc: "New leaves come out copper-red." },
    { id: 'bloom', label: "IN FLOWER", from: 140, to: 200, g: [1, 1], desc: "White-petalled flowers." },
    { id: 'fruiting', label: "PODS", from: 200, to: 360, g: [1, 0.8], desc: "Papery pods ripen." },
  ],
  beds: [{ plantedDay: -7000 }],
});
