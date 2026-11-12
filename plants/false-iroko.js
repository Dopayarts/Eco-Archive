EA.addSpecies('false-iroko', {
  name: "FALSE IROKO", short: "ANTIARIS", latin: "Antiaris toxicaria", family: "Moraceae (fig family)",
  origin: "Across tropical Africa from Senegal to Ethiopia, Zambia and Angola, and in tropical Asia",
  local: "OORO (YORUBA), OGI-OVU (EDO), AJIAWU (IGBO), FARIN LOKO (HAUSA)",
  added: '2026-11-12',
  kind: 'perennial',
  summary: "A tall tree up to 45 m, often buttressed, with pale grey bark that oozes milky latex. Leaves are elliptic, 7-19 cm long. Small velvety orange to red fruits hold one hard seed in yellow flesh.",
  facts: ["TREE UP TO 45 M", "PALE GREY BARK", "MILKY LATEX", "LEAVES 7-19 CM", "FRUIT ORANGE TO RED"],
  uses: [
    ["TIMBER", "Its light wood, traded as ako, is used for veneer, joinery and furniture."],
    ["FIBRE", "The inner bark is beaten into bark cloth and made into rope and mats."],
    ["CAUTION", "The latex holds strong heart poisons and is used on arrows and darts in Asia. It must not enter cuts."],
  ],
  history: "A 1783 tale claimed the upas tree killed all life for miles around; the deaths were really from a volcanic valley.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, note: 'ELLIPTIC LEAF, 7-19 CM' },
  form: { type: 'tree', height: 1.4, trunk: 0.6, branches: 9, nodes: 5, spread: 0.32, stemW: 0.08, leafSize: 1.3, arrange: 'alternate', droop: 0.15, flower: { type: 'cluster', size: 0.6, color: 2 }, fruit: { type: 'berry', size: 0.8, color: 1 } },
  seasons: [
    { id: 'dormant', label: "LEAVES FALL", from: 0, to: 70, g: [0.7, 0.6], desc: "Leaves drop in the dry season." },
    { id: 'bloom', label: "IN FLOWER", from: 70, to: 130, g: [0.6, 1], desc: "Tiny flowers with new leaves." },
    { id: 'fruiting', label: "RED FRUITS", from: 130, to: 230, g: [1, 1], desc: "Velvety fruits ripen." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 230, to: 360, g: [1, 1], desc: "Full crown." },
  ],
  beds: [{ plantedDay: -7000 }],
});
