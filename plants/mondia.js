EA.addSpecies('mondia', {
  name: "MONDIA", latin: "Mondia whitei", family: "Apocynaceae (dogbane family)",
  origin: "Tropical and southern Africa, including Nigeria",
  added: '2026-11-18',
  kind: 'perennial',
  summary: "A climber up to 8 m with milky latex. Its roots smell of vanilla, and it has reddish-purple flowers.",
  facts: ["CLIMBER TO 8 M", "MILKY LATEX", "VANILLA-SCENTED ROOT", "RED-PURPLE FLOWERS", "APHRODISIAC ROOT"],
  uses: [
    ["FOOD", "In Nigeria the dried leaves are used as a condiment."],
    ["MEDICINE", "The root is widely taken as an aphrodisiac."],
  ],
  history: "Its fragrant roots are traded in African markets.",
  leaf: { shape: 'heart', len: 1, wid: 0.6, note: 'SIMPLE LEAF' },
  form: { type: 'vine', height: 1.1, branches: 4, nodes: 9, arrange: 'opposite', leafSize: 0.9, droop: 0.2, flower: { type: 'cluster', size: 0.7, color: 1 }, fruit: { type: 'pod', size: 0.7, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 180, g: [1, 1], desc: "Climbs through trees." },
    { id: 'bloom', label: "IN FLOWER", from: 180, to: 270, g: [1, 1], desc: "Red-purple flowers." },
    { id: 'fruiting', label: "PODS", from: 270, to: 360, g: [1, 1], desc: "Pods form." },
  ],
  beds: [{ plantedDay: -900 }],
});
