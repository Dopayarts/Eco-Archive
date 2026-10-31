EA.addSpecies('sapele', {
  name: "SAPELE", latin: "Entandrophragma cylindricum", family: "Meliaceae (mahogany family)",
  origin: "African rainforest from Sierra Leone to Uganda; named after Sapele, Nigeria",
  added: '2026-10-31',
  kind: 'perennial',
  summary: "A giant rainforest tree up to 55 m with low, blunt buttresses and grey, scaly bark that smells of cedar when cut. Leaves have 10-19 leaflets. Small greenish-white flowers open while the tree is bare, and hanging cigar-shaped capsules split into five woody valves.",
  facts: ["TREE UP TO 55 M", "BARK SMELLS OF CEDAR", "LEAVES PINNATE", "CAPSULE SPLITS IN FIVE", "PRIZED STRIPED TIMBER"],
  uses: [
    ["TIMBER", "The striped, shimmering wood is used for floors, furniture, guitars, boats and veneer."],
    ["CANOES", "Trunks were dug out for canoes."],
  ],
  history: "Sapele timber takes its name from Sapele in Delta State, where a sawmill once processed it for export. Heavy logging has made it vulnerable.",
  leaf: { shape: 'oval', len: 1, wid: 0.4, compound: 'pinnate', leaflets: 12, note: 'PINNATE LEAF, OBLONG LEAFLETS' },
  form: { type: 'tree', height: 1.5, trunk: 0.6, branches: 9, nodes: 4, spread: 0.42, stemW: 0.1, leafSize: 1.8, arrange: 'alternate', flower: { type: 'cluster', size: 0.8, color: 3 }, fruit: { type: 'pod', size: 1.0, hang: true, color: 1 } },
  seasons: [
    { id: 'dormant', label: "BARE", from: 0, to: 45, g: [0.5, 0.5], desc: "Leafless mid dry season." },
    { id: 'bloom', label: "IN FLOWER", from: 45, to: 90, g: [0.5, 0.8], desc: "Small flowers on bare branches." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 90, to: 240, g: [0.8, 1], desc: "New crown with the rains." },
    { id: 'fruiting', label: "CAPSULES", from: 240, to: 330, g: [1, 1], desc: "Capsules split." },
    { id: 'vegetative', label: "LEAVES THIN", from: 330, to: 360, g: [1, 0.5], desc: "Leaves fall as the dry season comes." },
  ],
  beds: [{ plantedDay: -14400 }],
});
