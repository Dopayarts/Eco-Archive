EA.addSpecies('clausena', {
  name: "CLAUSENA", latin: "Clausena anisata", family: "Rutaceae (citrus family)",
  origin: "Tropical Africa; collected at Ikire, Osun State and Nsukka, Enugu State, Nigeria",
  local: "AGBASA (YORUBA), MBIET EKPENE (IBIBIO)",
  added: '2026-11-22',
  kind: 'perennial',
  summary: "A shrub or tree up to 10 m in and around evergreen forest. Its pinnate leaves carry 10-17 leaflets, densely dotted with glands and strongly scented. Small white flowers with orange-yellow stamens hang in branched sprays.",
  facts: ["SHRUB OR TREE", "UP TO 10 M", "SCENTED LEAVES", "GLAND DOTS", "WHITE FLOWERS"],
  uses: [
    ["MEDICINE", "Used for worms, breathing problems, high blood pressure, malaria, fever and rheumatism."],
    ["RESEARCH", "Nigerian studies found it eased pain and swelling in rats."],
    ["CAUTION", "Its leaf oil contains estragole, and the extracts can be toxic in high doses."],
  ],
  history: "The scented leaves smell of anise, which gives the plant its name.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, compound: 'pinnate', note: 'SCENTED, 10-17 LEAFLETS' },
  form: { type: 'shrub', height: 1.1, branches: 7, nodes: 5, arrange: 'alternate', leafSize: 0.8, droop: 0.15, flower: { type: 'cluster', size: 0.4, color: 3 }, fruit: { type: 'berry', size: 0.3, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 150, g: [1, 1], desc: "Scented leaves." },
    { id: 'bloom', label: "IN FLOWER", from: 150, to: 240, g: [1, 1], desc: "White flower sprays." },
    { id: 'fruiting', label: "FRUITING", from: 240, to: 330, g: [1, 1], desc: "Small fruits." },
    { id: 'rest', label: "RESTING", from: 330, to: 360, g: [1, 1], desc: "Growth slows." },
  ],
  beds: [{ plantedDay: -2000 }],
});
