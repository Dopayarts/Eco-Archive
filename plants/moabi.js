EA.addSpecies('moabi', {
  name: "MOABI", latin: "Baillonella toxisperma", family: "Sapotaceae (sapodilla family)",
  origin: "Lowland rainforest from southern Nigeria to Gabon, Congo and south-western DR Congo",
  added: '2026-11-16',
  kind: 'perennial',
  summary: "A giant tree up to 60-70 m with a trunk up to 3-5 m across and deeply furrowed red-brown to dark grey bark that bleeds sticky latex. Leaves 15-30 cm grow in tufts at the branch tips. Creamy white flowers give round fruits 5-8 cm that ripen greenish yellow.",
  facts: ["TREE UP TO 70 M", "TRUNK UP TO 5 M WIDE", "STICKY LATEX", "LEAVES IN TUFTS", "PRIZED SEED OIL"],
  uses: [
    ["OIL", "The seed kernels give a prized edible oil, also used in cosmetics, soap and hair pomade."],
    ["FOOD", "The fruit pulp is eaten fresh."],
    ["TIMBER", "A sought-after hardwood, traded as African pearwood, for joinery, veneer and floors."],
  ],
  history: "It is the only species in its genus, and its oil is central to the life of the Baka people. It is rated Vulnerable.",
  leaf: { shape: 'paddle', len: 1, wid: 0.4, note: 'LEAF 15-30 CM, IN TUFTS' },
  form: { type: 'tree', height: 1.6, trunk: 0.65, branches: 9, nodes: 5, spread: 0.32, stemW: 0.1, leafSize: 1.2, arrange: 'alternate', droop: 0.15, flower: { type: 'cluster', size: 0.6, color: 3 }, fruit: { type: 'big', size: 0.9, color: 3 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 90, g: [1, 1], desc: "Full crown." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 150, g: [1, 1], desc: "Creamy flower clusters." },
    { id: 'fruiting', label: "FRUITING", from: 150, to: 270, g: [1, 1], desc: "Round fruits ripen." },
    { id: 'regrowth', label: "NEW LEAVES", from: 270, to: 360, g: [1, 1], desc: "Fresh leaves." },
  ],
  beds: [{ plantedDay: -9000 }],
});
