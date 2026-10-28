EA.addSpecies('doka', {
  name: "DOKA", latin: "Isoberlinia doka", family: "Fabaceae (pea family)",
  origin: "West African Guinea savanna; dominant in northern Nigerian woodlands",
  added: '2026-10-28',
  kind: 'perennial',
  summary: "A medium savanna tree with leaves of a few pairs of large, leathery leaflets. It often grows in near-pure stands, forming open woodland across the Guinea savanna. Flat, woody pods follow the flowers.",
  facts: ["SAVANNA TREE", "LEAVES PINNATE, LEATHERY", "FORMS PURE WOODLANDS", "PODS FLAT, WOODY", "HARDWOOD TIMBER"],
  uses: [
    ["WOOD", "Hardwood cut for timber and firewood."],
    ["SILK", "Host tree for the caterpillars of Anaphe moths, whose nests give wild silk in parts of Nigeria."],
  ],
  history: "Isoberlinia woodland covers large parts of the northern and middle Guinea savanna of Nigeria; the tree is much rarer further south.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, compound: 'pinnate', leaflets: 6, note: 'PINNATE LEAF, FEW LARGE LEATHERY LEAFLETS' },
  form: { type: 'tree', height: 1.2, trunk: 0.4, branches: 9, nodes: 4, spread: 0.38, stemW: 0.07, leafSize: 1.8, arrange: 'alternate', droop: 0.2, flower: { type: 'cluster', size: 1.0, color: 3 }, fruit: { type: 'pod', size: 1.2, hang: true, color: 2 } },
  seasons: [
    { id: 'dormant', label: "LEAF FALL", from: 0, to: 60, g: [0.85, 0.8], desc: "Woodland thins in the harmattan." },
    { id: 'regrowth', label: "NEW LEAVES", from: 60, to: 120, g: [0.8, 1], desc: "Fresh leaves flush before the rains." },
    { id: 'bloom', label: "IN BLOOM", from: 120, to: 180, g: [1, 1], desc: "Flowers open on the new growth." },
    { id: 'fruiting', label: "PODS", from: 180, to: 330, g: [1, 1], desc: "Flat pods grow and harden." },
    { id: 'dormant', label: "PODS SPLIT", from: 330, to: 360, g: [1, 0.85], desc: "Dry pods split and shed seeds." },
  ],
  beds: [{ plantedDay: -9000 }],
});
