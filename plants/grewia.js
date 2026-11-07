EA.addSpecies('grewia', {
  name: "GREWIA", latin: "Grewia mollis", family: "Malvaceae (mallow family)",
  origin: "Tropical Africa from Senegal and Gambia to Somalia, Angola and Zimbabwe, including Nigeria",
  added: '2026-11-07',
  kind: 'perennial',
  summary: "A shrub or small tree up to 10 m, often with several stems. Toothed, oval leaves are soft and downy beneath. Small bright yellow five-petalled flowers sit in the leaf angles and give round fruits that ripen from yellow to black.",
  facts: ["SHRUB OR TREE TO 10 M", "LEAVES DOWNY BENEATH", "FLOWERS BRIGHT YELLOW", "FRUITS YELLOW TO BLACK", "BARK IS SLIMY"],
  uses: [
    ["FOOD", "In Nigeria the slimy bark and leaves thicken soups, and the flowers, buds and young shoots go into soups and sauces."],
    ["MEDICINE", "The fruit is used against fever."],
    ["GUM", "The bark gives grewia gum, an edible mucilage studied for use in medicines."],
  ],
  history: "Tests on Nigerian grewia bark found it rich in calcium.",
  leaf: { shape: 'oval', len: 1, wid: 0.55, serr: 0.3, note: 'TOOTHED LEAF, DOWNY BENEATH' },
  form: { type: 'shrub', height: 0.9, trunk: 0.15, branches: 9, nodes: 6, spread: 0.34, stemW: 0.035, leafSize: 1.1, arrange: 'alternate', flower: { type: 'cluster', size: 0.8, color: 3 }, fruit: { type: 'berry', size: 0.6, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "DRY SEASON", from: 0, to: 90, g: [0.8, 0.8], desc: "Leaves thin out." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 180, g: [0.8, 1], desc: "Yellow star flowers." },
    { id: 'fruiting', label: "FRUITING", from: 180, to: 300, g: [1, 1], desc: "Fruits ripen yellow to black." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 300, to: 360, g: [1, 0.8], desc: "Downy leaves." },
  ],
  beds: [{ plantedDay: -2880 }],
});
