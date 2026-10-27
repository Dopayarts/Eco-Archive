EA.addSpecies('tea', {
  name: "TEA", latin: "Camellia sinensis", family: "Theaceae (tea family)",
  origin: "China and India; grown on Nigeria's Mambilla Plateau",
  added: '2026-10-27',
  kind: 'perennial',
  summary: "An evergreen shrub with glossy, leathery, toothed leaves. On estates it is clipped into flat-topped, waist-high bushes so new leaf tips can be plucked. Small white flowers with yellow centres open in the leaf joints.",
  facts: ["EVERGREEN SHRUB", "LEAVES GLOSSY, TOOTHED", "PRUNED TO WAIST HEIGHT", "FLOWERS WHITE, YELLOW CENTRE", "NEEDS COOL HIGHLANDS"],
  uses: [
    ["DRINK", "Young leaves and buds are plucked and processed into tea."],
  ],
  history: "The Mambilla Plateau, about 1,600 m high in Taraba State, is cool and wet enough for tea and is the only part of Nigeria where it is grown on a large scale.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, serr: 0.12, note: 'GLOSSY LEATHERY LEAF, FINELY TOOTHED' },
  form: { type: 'shrub', height: 0.75, trunk: 0.15, branches: 10, nodes: 6, spread: 0.36, stemW: 0.03, leafSize: 1.2, arrange: 'alternate', flower: { type: 'single', size: 1.0, color: 3 } },
  seasons: [
    { id: 'vegetative', label: "SLOW GROWTH", from: 0, to: 75, g: [0.95, 0.95], desc: "Growth slows in the dry season." },
    { id: 'regrowth', label: "FLUSH", from: 75, to: 165, g: [0.95, 1], desc: "New leaf tips flush with the rains and are plucked." },
    { id: 'vegetative', label: "PLUCKING", from: 165, to: 300, g: [1, 1], desc: "Bushes are plucked every week or two." },
    { id: 'bloom', label: "IN FLOWER", from: 300, to: 360, g: [1, 1], desc: "White flowers open in the leaf joints." },
  ],
  beds: [{ plantedDay: -3600 }],
});
