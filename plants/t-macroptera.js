EA.addSpecies('t-macroptera', {
  name: "T. MACROPTERA", short: "T.MACROPT", latin: "Terminalia macroptera", family: "Combretaceae (bushwillow family)",
  origin: "Savanna of Africa, including Benin, Ghana, Senegal, Niger and Nigeria; collected between Ogbomosho and Ilorin",
  local: "KWANDARI (HAUSA)",
  added: '2026-11-20',
  kind: 'perennial',
  summary: "A savanna tree best known for its very large winged fruit, up to 13 cm long and 3.75 cm wide. The saucer-like fruit is light green to purple-tinged, with the seed in the middle and a thin wing around it.",
  facts: ["SAVANNA TREE", "WINGED FRUIT TO 13 CM", "GREEN-PURPLE FRUIT", "TANNIN-RICH BARK", "DYE PLANT"],
  uses: [
    ["MEDICINE", "Used for hepatitis, dysentery, fever, tuberculosis, rheumatism and diabetes, and to wash sores."],
    ["DYE", "Parts of the tree make dye and perfume."],
    ["RESEARCH", "Studies at Ilorin found its bark extract showed no harm in rats at high doses."],
  ],
  history: "Its name macroptera means large wings, for its big winged fruit.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, note: 'SIMPLE LEAF' },
  form: { type: 'tree', height: 1.0, trunk: 0.5, branches: 8, nodes: 5, spread: 0.3, stemW: 0.08, leafSize: 0.85, arrange: 'alternate', droop: 0.15, flower: { type: 'spike', size: 0.5, color: 3 }, fruit: { type: 'pod', size: 1.1, color: 1 } },
  seasons: [
    { id: 'rest', label: "DRY REST", from: 0, to: 120, g: [1, 1], desc: "Growth slows." },
    { id: 'bloom', label: "IN FLOWER", from: 120, to: 180, g: [1, 1], desc: "Flower spikes." },
    { id: 'fruiting', label: "WINGED FRUIT", from: 180, to: 300, g: [1, 1], desc: "Big winged fruits." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 300, to: 360, g: [1, 1], desc: "Leafy crown." },
  ],
  beds: [{ plantedDay: -3000 }],
});
