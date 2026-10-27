EA.addSpecies('tangerine', {
  name: "TANGERINE", short: "TANGERINE", latin: "Citrus reticulata", family: "Rutaceae (citrus family)",
  origin: "South-east Asia; grown in Benue and other citrus areas of Nigeria",
  added: '2026-10-27',
  kind: 'perennial',
  summary: "A small, bushy citrus tree with glossy, narrow leaves and fragrant white flowers. Its small, flattened orange fruits have loose, easy-to-peel skins and sweet segments.",
  facts: ["SMALL TREE 2-6 M", "LEAVES GLOSSY, NARROW", "FLOWERS WHITE, FRAGRANT", "FRUIT FLAT, ORANGE", "SKIN PEELS EASILY"],
  uses: [
    ["FOOD", "Eaten fresh and squeezed for juice."],
    ["RESEARCH", "NIHORT in Ibadan keeps 18 tangerine varieties in its citrus collection."],
  ],
  history: "Tangerines are mandarins; the name comes from Tangier in Morocco, through which they once reached Europe.",
  leaf: { shape: 'oval', len: 1, wid: 0.4, note: 'NARROW GLOSSY LEAF, SMALL WINGED STALK' },
  form: { type: 'tree', height: 1.05, trunk: 0.25, branches: 10, nodes: 5, spread: 0.32, stemW: 0.04, leafSize: 2.0, arrange: 'alternate', flower: { type: 'single', size: 0.7, color: 3 }, fruit: { type: 'big', size: 0.7, hang: true, color: 2 } },
  seasons: [
    { id: 'harvest', label: "FRUIT SEASON", from: 0, to: 60, g: [1, 1], desc: "Ripe tangerines are picked." },
    { id: 'vegetative', label: "DRY SEASON", from: 60, to: 90, g: [1, 0.95], desc: "Trees rest." },
    { id: 'bloom', label: "IN BLOOM", from: 90, to: 140, g: [0.95, 1], desc: "Scented white flowers with the first rains." },
    { id: 'fruiting', label: "FRUIT SWELLING", from: 140, to: 300, g: [1, 1], desc: "Green fruits swell through the rains." },
    { id: 'harvest', label: "RIPENING", from: 300, to: 360, g: [1, 1], desc: "Fruits colour up." },
  ],
  beds: [{ plantedDay: -3600 }],
});
