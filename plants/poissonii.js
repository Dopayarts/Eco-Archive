EA.addSpecies('poissonii', {
  name: "POISSONII", latin: "Euphorbia poissonii", family: "Euphorbiaceae (spurge family)",
  origin: "Native to northern Nigeria, such as around Jos",
  local: "PYULUP (BEROM)",
  added: '2026-11-12',
  kind: 'perennial',
  summary: "A succulent shrub with milky white sap. It is highly irritant and toxic, and bears small flower heads at the tips of its branches.",
  facts: ["SUCCULENT SHRUB", "MILKY WHITE SAP", "HIGHLY IRRITANT", "FLOWERS AT BRANCH TIPS", "NORTHERN NIGERIA"],
  uses: [
    ["PESTS", "Farmers in northern Nigeria use its latex as a pesticide."],
    ["FENCE", "Its painful sap makes it a good living fence."],
    ["CAUTION", "The latex holds resiniferatoxin, which hits pain nerves far harder than chilli. Never touch the sap."],
  ],
  history: "Berom people plant it in their compounds as protection against witchcraft. Its toxin is being studied as a treatment for chronic pain.",
  leaf: { shape: 'paddle', len: 1, wid: 0.45, note: 'LEAF NEAR THE BRANCH TIPS' },
  form: { type: 'shrub', height: 0.75, branches: 5, nodes: 4, trunk: 0.25, spread: 0.3, stemW: 0.09, arrange: 'alternate', leafSize: 1.1, droop: 0.1, flower: { type: 'cluster', size: 0.6, color: 3 }, fruit: { type: 'berry', size: 0.6, color: 1 } },
  seasons: [
    { id: 'rest', label: "DRY SPELL", from: 0, to: 120, g: [0.8, 0.7], desc: "Growth slows in the dry season." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 120, to: 240, g: [0.8, 1], desc: "Leaves at the branch tips." },
    { id: 'bloom', label: "IN FLOWER", from: 240, to: 320, g: [1, 1], desc: "Flower heads at the tips." },
    { id: 'fruiting', label: "FRUITING", from: 320, to: 360, g: [1, 0.9], desc: "Small fruits." },
  ],
  beds: [{ plantedDay: -1500 }],
});
