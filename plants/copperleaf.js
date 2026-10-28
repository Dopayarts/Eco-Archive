EA.addSpecies('copperleaf', {
  name: "COPPERLEAF", short: "COPPERLEAF", latin: "Acalypha wilkesiana", family: "Euphorbiaceae (spurge family)",
  origin: "Pacific islands; a hedge plant across Nigeria",
  added: '2026-10-28',
  kind: 'perennial',
  summary: "A fast-growing evergreen shrub grown for its big, toothed, oval leaves splashed in copper, red, bronze, pink and green. Thin catkin-like flower spikes hang among the leaves.",
  facts: ["SHRUB 2-3 M", "LEAVES COPPER, RED, MOTTLED", "LEAF EDGES TOOTHED", "FLOWERS IN THIN SPIKES", "EASY FROM CUTTINGS"],
  uses: [
    ["GARDEN", "Planted as colourful hedges around homes and campuses."],
    ["RESEARCH", "Leaves from the Ahmadu Bello University garden in Zaria have been tested against fungal infections."],
  ],
  history: "Copperleaf comes from the Pacific islands and is also called Jacob's coat for its many colours.",
  leaf: { shape: 'oval', len: 1, wid: 0.65, serr: 0.15, note: 'BROAD OVAL LEAF, TOOTHED, MOTTLED COPPER AND RED' },
  form: { type: 'shrub', height: 0.95, trunk: 0.15, branches: 9, nodes: 6, spread: 0.32, stemW: 0.03, leafSize: 1.5, arrange: 'alternate', flower: { type: 'spike', size: 0.9, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 120, g: [1, 1], desc: "Coloured leaves all year." },
    { id: 'bloom', label: "IN FLOWER", from: 120, to: 240, g: [1, 1], desc: "Thin flower spikes hang among the leaves." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 240, to: 360, g: [1, 1], desc: "Colourful hedge." },
  ],
  beds: [{ plantedDay: -1800 }],
});
