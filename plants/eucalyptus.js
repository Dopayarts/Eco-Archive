EA.addSpecies('eucalyptus', {
  name: "RIVER RED GUM", short: "EUCALYPTUS", latin: "Eucalyptus camaldulensis", family: "Myrtaceae (myrtle family)",
  origin: "Australia; planted in northern Nigeria for poles and shelterbelts",
  added: '2026-10-24',
  kind: 'perennial',
  summary: "A tall, fast-growing tree with smooth, peeling bark in white and grey patches. The narrow, sickle-shaped leaves hang downwards and smell of eucalyptus oil when crushed. Small white fluffy flowers come from capped buds.",
  facts: ["TREE UP TO 40 M", "BARK SMOOTH, PEELING", "LEAVES SICKLE-SHAPED, HANGING", "FLOWERS WHITE, FLUFFY", "LEAVES SMELL OF OIL"],
  uses: [
    ["BUILDING", "Straight poles for roofing, scaffolding and electricity lines."],
    ["FARMING", "Planted in shelterbelts against wind and desert spread."],
    ["FUEL", "Firewood and charcoal."],
  ],
  history: "River red gum has been trialled at Afaka near Kaduna and planted in shelterbelts across northern Nigeria, though it uses a lot of water.",
  leaf: { shape: 'lance', len: 1, wid: 0.2, note: 'NARROW SICKLE-SHAPED LEAF, HANGS DOWN' },
  form: { type: 'tree', height: 1.6, trunk: 0.6, branches: 8, nodes: 4, spread: 0.3, stemW: 0.06, leafSize: 1.9, arrange: 'alternate', droop: 0.5, flower: { type: 'cluster', size: 1.1, color: 3 }, fruit: { type: 'berry', size: 1.5, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 90, g: [1, 1], desc: "Evergreen; bark peels in strips." },
    { id: 'bloom', label: "IN BLOOM", from: 90, to: 180, g: [1, 1], desc: "Fluffy white flowers." },
    { id: 'fruiting', label: "CAPSULES", from: 180, to: 270, g: [1, 1], desc: "Small woody capsules ripen." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 270, to: 360, g: [1, 1], desc: "Tall, open grey-green crown." },
  ],
  beds: [{ plantedDay: -5400 }],
});
