EA.addSpecies('bellyache-bush', {
  name: "BELLYACHE BUSH", short: "BELLYACHE", latin: "Jatropha gossypiifolia", family: "Euphorbiaceae (spurge family)",
  origin: "Native to tropical America; now throughout tropical Africa, including Nigeria",
  added: '2026-11-08',
  kind: 'perennial',
  summary: "A bushy, slightly fleshy shrub up to 3 m with dark purple stems and young leaves that turn green with age. Leaves have 3-5 lobes. Small dark red flowers with yellow centres give round three-seeded capsules.",
  facts: ["SHRUB UP TO 3 M", "YOUNG LEAVES PURPLE", "LEAVES 3-5 LOBED", "FLOWERS DARK RED", "SEEDS POISONOUS"],
  uses: [
    ["HEDGE", "In West Africa it is planted as a red-leaved hedge and to mark field boundaries."],
    ["MEDICINE", "Its sap is put on wounds and stings; leaf brews are used for colic and fever."],
    ["CAUTION", "The seeds and oil are a violent purge and cause vomiting; it has been used to cause abortion."],
  ],
  history: "Its orange-pink sap kills snails. Benjamin Franklin's book The American Instructor listed it as an abortion tonic.",
  leaf: { shape: 'heart', len: 1, wid: 0.95, serr: 0.15, note: 'LOBED LEAF, PURPLE WHEN YOUNG' },
  form: { type: 'shrub', height: 0.75, trunk: 0.1, branches: 7, nodes: 5, spread: 0.3, stemW: 0.035, leafSize: 1.3, arrange: 'alternate', flower: { type: 'cluster', size: 0.7, color: 1 }, fruit: { type: 'berry', size: 0.6, color: 2 } },
  seasons: [
    { id: 'dormant', label: "DRY SEASON", from: 0, to: 90, g: [0.8, 0.6], desc: "Some leaves drop." },
    { id: 'regrowth', label: "PURPLE LEAVES", from: 90, to: 170, g: [0.6, 1], desc: "Purple new leaves." },
    { id: 'bloom', label: "IN FLOWER", from: 170, to: 280, g: [1, 1], desc: "Dark red flowers." },
    { id: 'fruiting', label: "CAPSULES", from: 280, to: 360, g: [1, 0.8], desc: "Three-seeded capsules." },
  ],
  beds: [{ plantedDay: -1440 }],
});
