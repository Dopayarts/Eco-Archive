EA.addSpecies('violet-tree', {
  name: "VIOLET TREE", short: "VIOLET TR", latin: "Securidaca longepedunculata", family: "Polygalaceae (milkwort family)",
  origin: "Savanna across sub-Saharan Africa, including Nigeria",
  local: "UWAR MAGUNGUNA (HAUSA)",
  added: '2026-11-03',
  kind: 'perennial',
  summary: "A small savanna tree up to 12 m. Sweetly scented pink-to-purple flowers hang on long stalks as the new leaves open. Each fruit is a round nut with one curved, papery wing like a little hatchet.",
  facts: ["TREE UP TO 12 M", "FLOWERS PINK-PURPLE", "FLOWERS SWEETLY SCENTED", "FRUIT WITH ONE WING", "HAUSA: MOTHER OF MEDICINES"],
  uses: [
    ["MEDICINE", "Roots, leaves and bark are used for headache, fever, coughs and snakebite."],
    ["PEST CONTROL", "Ground root and bark are mixed into stored grain to kill weevils."],
    ["CAUTION", "The roots are poisonous in excess and are used as arrow and fish poison."],
  ],
  history: "Its Hausa name, uwar magunguna, means mother of medicines. The genus name comes from the hatchet-shaped wing on the fruit.",
  leaf: { shape: 'oval', len: 1, wid: 0.4, note: 'SMALL OVAL LEAF' },
  form: { type: 'tree', height: 1.1, trunk: 0.35, branches: 12, nodes: 6, spread: 0.36, stemW: 0.05, leafSize: 2.1, arrange: 'alternate', flower: { type: 'cluster', size: 1.3, color: 2 }, fruit: { type: 'big', size: 0.6, color: 2 } },
  seasons: [
    { id: 'dormant', label: "LEAVES THIN", from: 0, to: 60, g: [0.6, 0.5], desc: "Sparse in the harmattan." },
    { id: 'bloom', label: "IN FLOWER", from: 60, to: 120, g: [0.5, 0.8], desc: "Purple scented flowers with new leaves." },
    { id: 'fruiting', label: "WINGED FRUIT", from: 120, to: 210, g: [0.8, 1], desc: "Winged nuts." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 210, to: 360, g: [1, 0.6], desc: "Leafy through the rains." },
  ],
  beds: [{ plantedDay: -3600 }],
});
