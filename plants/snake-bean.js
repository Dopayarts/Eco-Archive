EA.addSpecies('snake-bean', {
  name: "SNAKE BEAN", short: "SNAKEBEAN", latin: "Swartzia madagascariensis", family: "Fabaceae (bean family)",
  origin: "Tropical Africa; widely distributed in northern Nigeria",
  added: '2026-11-20',
  kind: 'perennial',
  summary: "A shrub or small tree up to 10-15 m with grey-black, deeply furrowed bark that oozes crimson-black sap. Leaves have 5-9 leaflets. Sweet-scented flowers have one white petal with a yellow base. Woody pods up to 30 cm ripen shiny black.",
  facts: ["TREE TO 15 M", "FURROWED BLACK BARK", "ONE-PETAL FLOWERS", "BLACK PODS TO 30 CM", "FISH POISON"],
  uses: [
    ["WOOD", "Its wood makes poles, carvings and slow-burning firewood."],
    ["MEDICINE", "Used for bites, stings, diarrhoea and dysentery; in Nigeria the leaves are used on infected wounds."],
    ["CAUTION", "Its fruits and roots are poisonous: used as fish poison, they can taint cattle milk and cause abortion."],
  ],
  history: "Also called Bobgunnia madagascariensis. Its powdered fruits kill water snails.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, compound: 'pinnate', note: 'LEAF OF 5-9 LEAFLETS' },
  form: { type: 'tree', height: 1.0, trunk: 0.5, branches: 8, nodes: 5, spread: 0.24, stemW: 0.08, leafSize: 1.4, arrange: 'alternate', droop: 0.15, flower: { type: 'cluster', size: 0.6, color: 3 }, fruit: { type: 'pod', size: 1.2, color: 1 } },
  seasons: [
    { id: 'rest', label: "DRY REST", from: 0, to: 90, g: [1, 1], desc: "Semi-deciduous." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 180, g: [1, 1], desc: "Sweet white flowers." },
    { id: 'fruiting', label: "PODS", from: 180, to: 330, g: [1, 1], desc: "Black pods hang." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 330, to: 360, g: [1, 1], desc: "Dense crown." },
  ],
  beds: [{ plantedDay: -2500 }],
});
