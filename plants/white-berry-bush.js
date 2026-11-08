EA.addSpecies('white-berry-bush', {
  name: "SNOWBERRY TREE", short: "SNOWBERRY", latin: "Flueggea virosa", family: "Phyllanthaceae (leafflower family)",
  origin: "Throughout tropical Africa from Mauritania to Somalia, including Nigeria; also across tropical Asia",
  added: '2026-11-08',
  kind: 'perennial',
  summary: "A deciduous shrub or small tree up to 4-6 m, with male and female flowers on separate plants. Plain oval leaves. Tiny flowers without petals give small, smooth, snow-white berries.",
  facts: ["SHRUB UP TO 6 M", "DECIDUOUS", "FLOWERS TINY, NO PETALS", "BERRIES SNOW WHITE", "A COMMON HEDGE"],
  uses: [
    ["HEDGE", "In northern Nigeria it is commonly grown as a hedge."],
    ["FOOD", "The white berries are edible; leaves and fruit feed livestock."],
    ["OTHER", "Bark extract is used as a weak fish poison and against vermin in Nigeria; the wood makes beds and traps."],
  ],
  history: "It is also called white-berry bush. It grows quickly on disturbed land, thickets and forest edges.",
  leaf: { shape: 'oval', len: 1, wid: 0.6, note: 'PLAIN OVAL LEAF' },
  form: { type: 'shrub', height: 0.8, trunk: 0.1, branches: 9, nodes: 6, spread: 0.34, stemW: 0.03, leafSize: 1.1, arrange: 'alternate', flower: { type: 'cluster', size: 0.5, color: 3 }, fruit: { type: 'berry', size: 0.6, color: 3 } },
  seasons: [
    { id: 'dormant', label: "LEAF FALL", from: 0, to: 90, g: [0.7, 0.6], desc: "Drops leaves in the dry season." },
    { id: 'regrowth', label: "NEW LEAVES", from: 90, to: 150, g: [0.6, 1], desc: "Leaves return with the rains." },
    { id: 'bloom', label: "IN FLOWER", from: 150, to: 220, g: [1, 1], desc: "Tiny flowers." },
    { id: 'fruiting', label: "WHITE BERRIES", from: 220, to: 360, g: [1, 0.8], desc: "Snow-white berries." },
  ],
  beds: [{ plantedDay: -2160 }],
});
