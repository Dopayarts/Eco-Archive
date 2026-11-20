EA.addSpecies('chinese-violet', {
  name: "CHINESE VIOLET", short: "CHINESEVIO", latin: "Asystasia gangetica", family: "Acanthaceae (acanthus family)",
  origin: "Tropical Africa and Asia; eaten as a wild vegetable in Cross River and Akwa Ibom, Nigeria",
  local: "MMEME (CROSS RIVER)",
  added: '2026-11-20',
  kind: 'perennial',
  summary: "A perennial herb with square, branching stems up to 2 m that root at the lower joints. Opposite leaves are 3-8 cm long. Funnel flowers, usually white with purple spots inside, line one side of a spike up to 25 cm.",
  facts: ["PERENNIAL HERB", "STEMS TO 2 M", "WHITE FUNNEL FLOWERS", "PURPLE SPOTS INSIDE", "SEED IN 8 WEEKS"],
  uses: [
    ["FOOD", "Its leaves are a wild vegetable in Cross River and Akwa Ibom; leaves are bought at markets in Calabar."],
    ["MEDICINE", "In Nigeria the leaves are used to treat asthma."],
    ["FARM", "It is a cover plant in orchards and forage for goats and sheep."],
    ["CAUTION", "Sheep that eat too much can bloat."],
  ],
  history: "Also called tropical primrose. It can go from seedling to scattering seed in just eight weeks.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, note: 'OPPOSITE LEAF, 3-8 CM' },
  form: { type: 'herb', height: 0.5, branches: 5, nodes: 6, arrange: 'opposite', leafSize: 0.85, droop: 0.15, flower: { type: 'spike', size: 0.8, color: 3 }, fruit: { type: 'pod', size: 0.4, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 150, g: [1, 1], desc: "Stems creep and root." },
    { id: 'bloom', label: "IN FLOWER", from: 150, to: 270, g: [1, 1], desc: "White funnel flowers." },
    { id: 'fruiting', label: "CAPSULES", from: 270, to: 360, g: [1, 1], desc: "Club-shaped capsules." },
  ],
  beds: [{ plantedDay: -400 }],
});
