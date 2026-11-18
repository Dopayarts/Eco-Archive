EA.addSpecies('water-berry', {
  name: "WATER BERRY", short: "WATERBERRY", latin: "Syzygium guineense", family: "Myrtaceae (myrtle family)",
  origin: "Tropical Africa; grows at IITA, Ibadan, Nigeria",
  local: "MALMO (HAUSA), ADERE (YORUBA)",
  added: '2026-11-18',
  kind: 'perennial',
  summary: "A tree up to 30 m with fragrant white flowers full of showy stamens. Its berries ripen from red to purple-black.",
  facts: ["TREE TO 30 M", "WHITE FRAGRANT FLOWERS", "SHOWY STAMENS", "PURPLE-BLACK BERRY", "EDIBLE FRUIT"],
  uses: [
    ["FOOD", "The berries are eaten."],
    ["MEDICINE", "In Nigeria it is used for worms in children, tuberculosis and cough."],
    ["CAUTION", "The bark may be poisonous; deaths have been recorded."],
  ],
  history: "It is a cousin of the clove tree in the myrtle family.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, note: 'GLOSSY SIMPLE LEAF' },
  form: { type: 'tree', height: 1.4, trunk: 0.5, branches: 9, nodes: 5, spread: 0.32, stemW: 0.08, leafSize: 0.8, arrange: 'opposite', droop: 0.15, flower: { type: 'cluster', size: 0.7, color: 3 }, fruit: { type: 'berry', size: 0.6, color: 1 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 120, g: [1, 1], desc: "White flowers." },
    { id: 'fruiting', label: "BERRIES", from: 120, to: 240, g: [1, 1], desc: "Berries darken." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 240, to: 360, g: [1, 1], desc: "Evergreen crown." },
  ],
  beds: [{ plantedDay: -4000 }],
});
