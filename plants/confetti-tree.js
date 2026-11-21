EA.addSpecies('confetti-tree', {
  name: "CONFETTI TREE", short: "CONFETTI", latin: "Maytenus senegalensis", family: "Celastraceae (staff-tree family)",
  origin: "Tropical Africa; much used by the Hausa of northern Nigeria and collected in Bauchi",
  local: "BOKARORO, KUNKUSHEWA, NAMIJIN TSADA (HAUSA), TULTULDE, YARE-LESDI (FULANI), AFOR-JURU (IGBO), SEPOLOHUN (YORUBA)",
  added: '2026-11-21',
  kind: 'perennial',
  summary: "A tall shrub, often with spiny young branches. Its grey bark is rough and channelled with a pink inner surface, and its grey, toothed leaves grow alternately.",
  facts: ["TALL SHRUB", "SPINY YOUNG SHOOTS", "GREY TOOTHED LEAVES", "PINK INNER BARK", "FLOWERS IN OCTOBER"],
  uses: [
    ["MEDICINE", "Among the Hausa it is a well-used remedy for pain, inflammation and diarrhoea."],
    ["MALARIA", "In Sudan the root is used for malaria."],
    ["CAUTION", "It contains cardiac glycosides, and the stem bark extract is toxic at low doses in tests."],
  ],
  history: "Also called thorny staff tree.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, note: 'GREY TOOTHED LEAF' },
  form: { type: 'shrub', height: 1.0, branches: 7, nodes: 5, arrange: 'alternate', leafSize: 0.7, droop: 0.1, flower: { type: 'cluster', size: 0.4, color: 3 }, fruit: { type: 'berry', size: 0.3, color: 2 } },
  seasons: [
    { id: 'rest', label: "DRY SEASON", from: 0, to: 150, g: [1, 1], desc: "Growth slows." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 150, to: 330, g: [1, 1], desc: "New grey leaves." },
    { id: 'bloom', label: "IN FLOWER", from: 330, to: 360, g: [1, 1], desc: "Flowers in October." },
  ],
  beds: [{ plantedDay: -2000 }],
});
