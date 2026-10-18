EA.addSpecies('ukwa', {
  name: "AFRICAN BREADFRUIT", short: "UKWA", latin: "Treculia africana", family: "Moraceae (fig family)",
  origin: "Tropical Africa; forests of southern Nigeria",
  local: "UKWA (IGBO)",
  added: '2026-10-18',
  kind: 'perennial',
  summary: "A large forest tree with big, glossy, leathery leaves. Its huge round fruits, up to 45 cm across and over 8 kg, grow on the trunk and big branches; when ripe they turn spongy and are full of seeds.",
  facts: ["TREE UP TO 30 M", "LEAVES LARGE, OVAL, LEATHERY", "FRUIT HUGE, ROUND, ON THE TRUNK", "UP TO 8.5 KG PER FRUIT", "SEEDS ARE THE PART EATEN"],
  uses: [
    ["FOOD", "The seeds are cooked into ukwa porridge, an Igbo delicacy, or roasted as a snack."],
    ["NUTRITION", "Seeds give protein and edible oil; they can be ground into flour."],
    ["WOOD", "Timber for furniture and building, and firewood."],
  ],
  history: "Ukwa is a traditional food of south-eastern Nigeria, where the fallen fruits are left to soften so the seeds can be washed out.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, note: 'LARGE OVAL LEAF, LEATHERY, POINTED TIP' },
  form: { type: 'tree', height: 1.5, trunk: 0.5, branches: 8, nodes: 4, spread: 0.3, stemW: 0.07, leafSize: 1.9, arrange: 'alternate', flower: { type: 'head', size: 1.1, color: 2 }, fruit: { type: 'big', size: 1.8, hang: true, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 30, g: [1, 1], desc: "Evergreen growth." },
    { id: 'fruiting', label: "FRUIT GROWING", from: 30, to: 150, g: [1, 1], desc: "Huge fruits swell on the trunk." },
    { id: 'harvest', label: "UKWA SEASON", from: 150, to: 270, g: [1, 1], desc: "Ripe fruits fall and soften; seeds are washed out." },
    { id: 'bloom', label: "IN BLOOM", from: 270, to: 360, g: [1, 1], desc: "Round flower heads form on the branches." },
  ],
  beds: [{ plantedDay: -5400 }],
});
