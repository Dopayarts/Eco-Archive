EA.addSpecies('bamboo', {
  name: "COMMON BAMBOO", short: "BAMBOO", latin: "Bambusa vulgaris", family: "Poaceae (grass family)",
  origin: "Tropical Asia; common along streams and roads in southern Nigeria",
  added: '2026-10-23',
  kind: 'perennial',
  summary: "A giant clumping grass with tall, hollow, jointed green or yellow culms that arch at the top. Narrow leaves grow in fans on side branches. It rarely flowers.",
  facts: ["GIANT GRASS, CULMS 10-20 M", "CULMS HOLLOW, JOINTED", "LEAVES NARROW, IN FANS", "GROWS IN DENSE CLUMPS", "RARELY FLOWERS"],
  uses: [
    ["BUILDING", "Culms are used as scaffolding, poles and fencing on building sites across Nigeria."],
    ["CRAFT", "Split culms make baskets, furniture and mats."],
  ],
  history: "Common bamboo grows in both moist forest and derived savanna in Nigeria, and researchers study its wood and safe use as scaffolding.",
  leaf: { shape: 'blade', len: 1, wid: 0.3, note: 'NARROW LANCE-SHAPED LEAF, IN FANS' },
  form: { type: 'shrub', height: 1.5, trunk: 0.02, branches: 12, nodes: 7, spread: 0.18, stemW: 0.03, stemCol: 2, leafSize: 1.1, arrange: 'alternate', droop: 0.5, flower: { type: 'plume', size: 0.8, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "DRY SEASON", from: 0, to: 90, g: [0.9, 0.9], desc: "Older leaves yellow in the harmattan." },
    { id: 'regrowth', label: "NEW SHOOTS", from: 90, to: 180, g: [0.9, 1], desc: "New culms shoot up fast with the rains." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 180, to: 360, g: [1, 1], desc: "Dense green clump." },
  ],
  beds: [{ plantedDay: -3600 }],
});
