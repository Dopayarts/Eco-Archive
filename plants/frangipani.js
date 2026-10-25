EA.addSpecies('frangipani', {
  name: "FRANGIPANI", latin: "Plumeria rubra", family: "Apocynaceae (dogbane family)",
  origin: "Mexico and Central America; planted in Nigerian towns, e.g. Jos",
  added: '2026-10-25',
  kind: 'perennial',
  summary: "A small tree with thick, stubby, forking branches full of white milky sap. Long leaves cluster at the branch tips. Waxy five-petalled flowers in pink, white or yellow smell sweetest in the morning and evening, and can open on bare branches in the dry season.",
  facts: ["SMALL TREE 2-8 M", "BRANCHES THICK, STUBBY", "LEAVES LONG, AT TIPS", "FLOWERS WAXY, VERY FRAGRANT", "MILKY SAP IRRITATES SKIN"],
  uses: [
    ["GARDEN", "Planted for shade and scent around homes and churches."],
    ["RESEARCH", "Leaves and bark collected in Jos have been tested for antimicrobial activity."],
  ],
  history: "Frangipani is named after an Italian nobleman whose family made a perfume that its scent was said to resemble.",
  leaf: { shape: 'lance', len: 1, wid: 0.3, note: 'LONG LEATHERY LEAF, CLUSTERED AT BRANCH TIPS' },
  form: { type: 'tree', height: 1.0, trunk: 0.35, branches: 9, nodes: 3, spread: 0.36, stemW: 0.07, leafSize: 2.3, arrange: 'whorl', flower: { type: 'cluster', size: 1.5, color: 3 } },
  seasons: [
    { id: 'dormant', label: "LEAF FALL", from: 0, to: 60, g: [0.8, 0.8], desc: "Leaves drop; flowers open on bare stubs." },
    { id: 'bloom', label: "IN BLOOM", from: 60, to: 180, g: [0.8, 1], desc: "Fragrant flowers with the new leaves." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 180, to: 300, g: [1, 1], desc: "Leafy through the rains." },
    { id: 'dormant', label: "LEAF FALL", from: 300, to: 360, g: [1, 0.85], desc: "Leaves yellow as the rains end." },
  ],
  beds: [{ plantedDay: -3600 }],
});
