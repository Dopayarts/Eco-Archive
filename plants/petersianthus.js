EA.addSpecies('petersianthus', {
  name: "PETERSIANTHUS", short: "PETERSIAN", latin: "Petersianthus macrocarpus", family: "Lecythidaceae (Brazil nut family)",
  origin: "West and Central African forest; used in southeastern Nigeria, collected at Ariam Usaka, Abia State",
  local: "APARA (YORUBA), OKO (IGBO)",
  added: '2026-11-24',
  kind: 'perennial',
  summary: "A tall evergreen forest tree reaching 30-40 m, with a large straight trunk up to 1.7 m across. Its fruit is a big woody, fibrous capsule up to 20 cm wide.",
  facts: ["TREE TO 40 M", "HUGE STRAIGHT TRUNK", "EVERGREEN", "WOODY FRUIT TO 20 CM", "FRUITS DEC-MAY"],
  uses: [
    ["MEDICINE", "In southeastern Nigeria the bark is used for pain, malaria fever and skin infections."],
    ["TIMBER", "It is cut for wood."],
    ["CAUTION", "Strong bark extracts act on the heart and womb and may interfere with pregnancy."],
  ],
  history: "Its bark killed the Loa loa eye worm in lab tests.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, note: 'SIMPLE LEAF' },
  form: { type: 'tree', height: 1.6, trunk: 0.6, branches: 8, nodes: 5, spread: 0.22, stemW: 0.1, leafSize: 1.1, arrange: 'alternate', droop: 0.15, flower: { type: 'cluster', size: 0.4, color: 3 }, fruit: { type: 'big', size: 0.9, color: 1 } },
  seasons: [
    { id: 'fruiting', label: "FRUITING", from: 30, to: 210, g: [1, 1], desc: "Big woody capsules." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 210, to: 330, g: [1, 1], desc: "Evergreen crown." },
    { id: 'bloom', label: "IN FLOWER", from: 330, to: 360, g: [1, 1], desc: "Small flowers." },
    { id: 'rest', label: "RESTING", from: 0, to: 30, g: [1, 1], desc: "Growth slows." },
  ],
  beds: [{ plantedDay: -9000 }],
});
