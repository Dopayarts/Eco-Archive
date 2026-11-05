EA.addSpecies('wonderful-kola', {
  name: "WONDERFUL KOLA", short: "WONDERKOLA", latin: "Buchholzia coriacea", family: "Capparaceae (caper family)",
  origin: "Lowland rainforest from Guinea to Cameroon and Gabon, including southern Nigeria",
  added: '2026-11-05',
  kind: 'perennial',
  summary: "An evergreen tree up to about 20 m with a dense, rounded crown. Leathery leaves cluster near the twig tips. Bad-smelling flowers without petals give smooth orange-yellow fruits 6-12 cm long, holding 1-4 dark seeds with a peppery bite.",
  facts: ["TREE UP TO 20 M", "EVERGREEN, DENSE CROWN", "LEAVES LEATHERY", "FRUIT ORANGE-YELLOW", "SEEDS HOT AND PEPPERY"],
  uses: [
    ["MEDICINE", "In western Nigeria the seeds are used for cough and ulcers; they are also taken for fever and pain."],
    ["SPICE", "The peppery seeds are used in place of chilli pepper."],
    ["CAUTION", "The roots are reported to be poisonous and the bark goes into arrow poison; the seeds' safety as a spice is not yet tested."],
  ],
  history: "Despite its name it is not a true kola. In Nigeria it flowers almost all year.",
  leaf: { shape: 'oval', len: 1, wid: 0.4, note: 'LEATHERY LEAF BUNCHED AT TIPS' },
  form: { type: 'tree', height: 1.15, trunk: 0.4, branches: 11, nodes: 6, spread: 0.34, stemW: 0.06, leafSize: 1.7, arrange: 'alternate', flower: { type: 'cluster', size: 0.8, color: 3 }, fruit: { type: 'big', size: 0.9, color: 3 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 120, g: [1, 1], desc: "Flowers almost all year." },
    { id: 'fruiting', label: "ORANGE FRUITS", from: 120, to: 240, g: [1, 1], desc: "Orange-yellow fruits." },
    { id: 'bloom', label: "IN FLOWER", from: 240, to: 360, g: [1, 1], desc: "Flowers almost all year." },
  ],
  beds: [{ plantedDay: -7200 }],
});
