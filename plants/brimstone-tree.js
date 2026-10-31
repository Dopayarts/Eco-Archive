EA.addSpecies('brimstone-tree', {
  name: "BRIMSTONE TREE", short: "ORUWO", latin: "Morinda lucida", family: "Rubiaceae (coffee family)",
  origin: "West and Central Africa; common in southern Nigeria",
  local: "ORUWO (YORUBA)",
  added: '2026-10-31',
  kind: 'perennial',
  summary: "An evergreen tree up to 18 m, often with a crooked, gnarled trunk. Shiny oval leaves grow in pairs. Small scented white flowers sit in tight round heads on long stalks, ripening into knobbly black fruit heads.",
  facts: ["TREE UP TO 18 M", "TRUNK OFTEN CROOKED", "LEAVES SHINY, OPPOSITE", "FLOWERS IN ROUND HEADS", "FRUIT HEADS BLACK"],
  uses: [
    ["MEDICINE", "One of the four most used fever remedies in Nigeria; leaf extracts killed malaria parasites in lab tests."],
    ["DYE", "Root bark dyes cloth scarlet red in Nigeria."],
    ["CHEWSTICK", "Twigs are used as chewsticks."],
  ],
  history: "Yoruba healers boil oruwo leaves and bark into fever remedies. Its roots taste very bitter.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, note: 'SHINY OVAL LEAF IN PAIRS' },
  form: { type: 'tree', height: 1.2, trunk: 0.35, branches: 9, nodes: 5, spread: 0.38, stemW: 0.06, leafSize: 1.8, arrange: 'opposite', flower: { type: 'head', size: 0.9, color: 3 }, fruit: { type: 'berry', size: 1.9, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 30, g: [1, 1], desc: "Evergreen." },
    { id: 'bloom', label: "IN FLOWER", from: 30, to: 150, g: [1, 1], desc: "Small white flower heads, February to May." },
    { id: 'fruiting', label: "FRUITING", from: 150, to: 210, g: [1, 1], desc: "Fruit heads turn black." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 210, to: 360, g: [1, 1], desc: "Glossy evergreen crown." },
  ],
  beds: [{ plantedDay: -3600 }],
});
