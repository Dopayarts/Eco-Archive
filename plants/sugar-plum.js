EA.addSpecies('sugar-plum', {
  name: "SUGAR PLUM", latin: "Uapaca togoensis", family: "Phyllanthaceae (leafflower family)",
  origin: "West Tropical Africa to Chad and Angola, including Nigeria; riverbanks",
  added: '2026-11-02',
  kind: 'perennial',
  summary: "An evergreen tree up to 18 m that often stands on rounded stilt roots. Broad, wavy-edged leaves crowd at the branch tips. Male flowers form small heads ringed by bright yellow bracts, and female trees bear warty green fruits.",
  facts: ["TREE UP TO 18 M", "STANDS ON STILT ROOTS", "LEAVES BROAD, WAVY", "YELLOW FLOWER HEADS", "MALE AND FEMALE TREES"],
  uses: [
    ["FOOD", "The sweet fruit pulp is eaten raw, and in Nigeria made into a drink."],
    ["CRAFT", "Leaves wrap kola nuts; red sap from twigs dyes fishing lines."],
    ["WOOD", "Planks, canoes and charcoal; it holds riverbanks."],
  ],
  history: "Sugar plum grows along rivers. In northern Nigeria parts of it were used in arrow poison.",
  leaf: { shape: 'paddle', len: 1, wid: 0.45, note: 'BROAD LEAF WIDER NEAR THE TIP, WAVY EDGE' },
  form: { type: 'tree', height: 1.25, trunk: 0.4, branches: 9, nodes: 4, spread: 0.38, stemW: 0.08, leafSize: 2.0, arrange: 'alternate', flower: { type: 'head', size: 1.0, color: 3 }, fruit: { type: 'berry', size: 2.0, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 90, g: [1, 1], desc: "Evergreen crown." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 180, g: [1, 1], desc: "Yellow flower heads." },
    { id: 'fruiting', label: "FRUITING", from: 180, to: 330, g: [1, 1], desc: "Warty fruits ripen." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 330, to: 360, g: [1, 1], desc: "Evergreen." },
  ],
  beds: [{ plantedDay: -5400 }],
});
