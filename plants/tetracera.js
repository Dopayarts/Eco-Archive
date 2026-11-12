EA.addSpecies('tetracera', {
  name: "TETRACERA", latin: "Tetracera alnifolia", family: "Dilleniaceae (dillenia family)",
  origin: "Wet tropical forest of West and Central Africa, from Sierra Leone through Nigeria to Angola",
  added: '2026-11-12',
  kind: 'perennial',
  summary: "A woody climber, or liana, of wet tropical forest. Its roots are a traditional medicine in Nigeria.",
  facts: ["WOODY LIANA", "WET TROPICAL FOREST", "ROOTS USED", "NATIVE TO NIGERIA", "DESCRIBED 1799"],
  uses: [
    ["MEDICINE", "In West Africa, particularly Nigeria, it is used to manage diabetes."],
    ["RESEARCH", "Nigerian scientists have tested its roots in diabetes studies."],
    ["FOREST", "It climbs in the wet forests of West and Central Africa."],
  ],
  history: "It was first described by Willdenow in 1799. Its roots, not its leaves, are the part used in medicine.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, serr: 0.15, note: 'SIMPLE ROUGH LEAF' },
  form: { type: 'vine', height: 1.2, nodes: 12, leafSize: 1.2, droop: 0.3, arrange: 'alternate', flower: { type: 'cluster', size: 0.7, color: 3 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 120, g: [1, 1], desc: "Stems climb." },
    { id: 'bloom', label: "IN FLOWER", from: 120, to: 200, g: [1, 1], desc: "Flowers open." },
    { id: 'fruiting', label: "FRUITING", from: 200, to: 300, g: [1, 1], desc: "Fruits ripen." },
    { id: 'regrowth', label: "NEW SHOOTS", from: 300, to: 360, g: [1, 1], desc: "Fresh growth." },
  ],
  beds: [{ plantedDay: -1500 }],
});
