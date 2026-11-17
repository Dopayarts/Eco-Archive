EA.addSpecies('prickly-ash', {
  name: "PRICKLY-ASH", short: "PRICKLYASH", latin: "Zanthoxylum zanthoxyloides", family: "Rutaceae (citrus family)",
  origin: "Savanna, dry forest and coastal thickets from Senegal east to Cameroon, including southern Nigeria",
  added: '2026-11-17',
  kind: 'perennial',
  summary: "A spiny shrub or small tree up to 6-8 m. Its bark bears woody knobs tipped with prickles. Leaves have 5-7 leaflets that smell of pepper and lemon when crushed. Small white or greenish flowers give tiny one-seeded fruits with shiny black seeds.",
  facts: ["SPINY TREE TO 8 M", "PRICKLY BARK KNOBS", "PEPPER-LEMON LEAVES", "SHINY BLACK SEEDS", "CHEWING STICK"],
  uses: [
    ["TEETH", "Roots and young twigs are chewed as chewing sticks."],
    ["MEDICINE", "Used across West Africa for malaria, fever, sickle cell anaemia and toothache; in southern Nigeria a bark and root brew is used against cancer."],
    ["FOOD", "Leaves and seeds flavour food."],
  ],
  history: "Also called Senegal prickly-ash, candlewood and toothache bark. Its resinous branches were used as ceremonial torches.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, compound: 'pinnate', leaflets: 6, note: 'LEAFLETS SMELL OF PEPPER' },
  form: { type: 'tree', height: 1.2, trunk: 0.55, branches: 7, nodes: 6, spread: 0.22, stemW: 0.07, leafSize: 1.5, arrange: 'alternate', droop: 0.1, flower: { type: 'cluster', size: 0.6, color: 3 }, fruit: { type: 'berry', size: 0.4, color: 1 } },
  seasons: [
    { id: 'rest', label: "DRY SPELL", from: 0, to: 80, g: [0.9, 0.8], desc: "Leaves thin." },
    { id: 'bloom', label: "IN FLOWER", from: 80, to: 140, g: [0.8, 1], desc: "Small flower sprays." },
    { id: 'fruiting', label: "FRUITING", from: 140, to: 240, g: [1, 1], desc: "Fruits split, black seeds." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 240, to: 360, g: [1, 1], desc: "Full crown." },
  ],
  beds: [{ plantedDay: -2500 }],
});
