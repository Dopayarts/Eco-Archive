EA.addSpecies('african-rosewood', {
  name: "AFRICAN ROSEWOOD", short: "ROSEWOOD", latin: "Pterocarpus erinaceus", family: "Fabaceae (pea family)",
  origin: "West African savanna; native to Nigeria",
  added: '2026-10-24',
  kind: 'perennial',
  summary: "A savanna tree with a rounded crown and leaves of 7-15 oval leaflets. Late in the dry season, while leafless, it is covered in golden-yellow pea flowers. The fruit is a flat, round, winged pod. Cut bark bleeds a red resin.",
  facts: ["TREE 12-15 M", "LEAVES PINNATE, 7-15 LEAFLETS", "GOLDEN FLOWERS IN THE DRY SEASON", "POD ROUND, FLAT, WINGED", "RED RESIN (KINO)"],
  uses: [
    ["WOOD", "Hard, rose-red timber for furniture, carving and tool handles."],
    ["FODDER", "Leaves are cut as dry-season fodder for cattle and goats."],
    ["DYE", "The red resin and wood give a red dye."],
  ],
  history: "Heavy logging for export has made African rosewood scarce, and it is now listed under CITES. Nigeria has taken part in projects to protect it.",
  leaf: { shape: 'oval', len: 1, wid: 0.6, compound: 'pinnate', leaflets: 9, note: 'PINNATE LEAF, 7-15 OVAL LEAFLETS' },
  form: { type: 'tree', height: 1.25, trunk: 0.45, branches: 8, nodes: 4, spread: 0.38, stemW: 0.07, leafSize: 1.5, arrange: 'alternate', flower: { type: 'cluster', size: 1.4, color: 3 }, fruit: { type: 'pod', size: 1.0, color: 2 } },
  seasons: [
    { id: 'dormant', label: "LEAF FALL", from: 0, to: 30, g: [0.85, 0.8], desc: "Leaves fall in the harmattan." },
    { id: 'bloom', label: "IN BLOOM", from: 30, to: 90, g: [0.8, 0.8], desc: "Golden flowers cover the bare tree." },
    { id: 'fruiting', label: "WINGED PODS", from: 90, to: 150, g: [0.8, 1], desc: "Round winged pods ripen as new leaves come." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 150, to: 330, g: [1, 1], desc: "Rounded green crown in the rains." },
    { id: 'dormant', label: "LEAF FALL", from: 330, to: 360, g: [1, 0.85], desc: "Leaves start to yellow." },
  ],
  beds: [{ plantedDay: -9000 }],
});
