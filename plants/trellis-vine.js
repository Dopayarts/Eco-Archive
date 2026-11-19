EA.addSpecies('trellis-vine', {
  name: "TRELLIS VINE", short: "TRELLISVIN", latin: "Pergularia daemia", family: "Apocynaceae (dogbane family)",
  origin: "Tropical Africa, Arabia and Asia; collected at Ido-Ekiti, Ekiti State, Nigeria",
  added: '2026-11-19',
  kind: 'perennial',
  summary: "A bristly perennial vine with opposite, broad, nearly round leaves, velvety beneath. Greenish-yellow or dull white tube flowers grow in side clusters. Fruits take over a year to ripen and release seeds with velvety hairs.",
  facts: ["PERENNIAL VINE", "BRISTLY HAIRS", "ROUND LEAVES", "GREENISH FLOWERS", "FRUIT TAKES 13 MONTHS"],
  uses: [
    ["MEDICINE", "It is used for worms, fever, cough, colds and malaria, including in southwest Nigeria."],
    ["RESEARCH", "A study at Ido-Ekiti tested its leaves and stems for germ-killing and antioxidant power."],
    ["CAUTION", "It contains cardenolides, heart-active compounds; do not take it without expert advice."],
  ],
  history: "Its fruit is among the slowest to ripen of any vine in this archive.",
  leaf: { shape: 'heart', len: 1, wid: 0.9, note: 'BROAD LEAF, VELVETY BELOW' },
  form: { type: 'vine', height: 0.9, branches: 4, nodes: 9, arrange: 'opposite', leafSize: 0.9, droop: 0.2, flower: { type: 'cluster', size: 0.6, color: 3 }, fruit: { type: 'pod', size: 0.8, color: 2 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 90, g: [1, 1], desc: "Greenish-white flowers." },
    { id: 'fruiting', label: "SLOW FRUIT", from: 90, to: 360, g: [1, 1], desc: "Fruits ripen over a year." },
  ],
  beds: [{ plantedDay: -700 }],
});
