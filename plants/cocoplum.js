EA.addSpecies('cocoplum', {
  name: "COCOPLUM", latin: "Chrysobalanus icaco", family: "Chrysobalanaceae",
  origin: "Atlantic coasts of tropical Africa and the Americas; coastal sands and swamps of southern Nigeria",
  added: '2026-10-17',
  kind: 'perennial',
  summary: "A bushy shrub of sandy shores with round, leathery, shiny leaves and clusters of small white flowers. Plum-like fruits ripen white, pink or purple, with a thin, mildly sweet flesh around a big ridged stone.",
  facts: ["SHRUB 1-5 M", "LEAVES ROUND, LEATHERY, GLOSSY", "FLOWERS SMALL, WHITE", "FRUIT PLUM-LIKE, WHITE TO PURPLE", "TOLERATES SALT SPRAY"],
  uses: [
    ["FOOD", "Fruits are eaten fresh; the kernel is eaten roasted."],
    ["TRADITIONAL", "Leaves are used for diabetes and diarrhoea; evidence is limited."],
    ["COASTAL", "Holds sand on beaches and lagoon edges."],
  ],
  history: "Cocoplum seeds float, which is how the plant lines Atlantic shores on both sides of the ocean. It grows along the lagoons and beaches of the Nigerian coast.",
  leaf: { shape: 'round', len: 1, wid: 0.8, note: 'SIMPLE ROUND LEAF, LEATHERY, GLOSSY, SMOOTH EDGE' },
  form: { type: 'shrub', height: 1.0, branches: 6, nodes: 5, trunk: 0.2, spread: 0.32, arrange: 'alternate', leafSize: 1.0, flower: { type: 'cluster', size: 0.7, color: 3 }, fruit: { type: 'berry', size: 0.9, hang: true, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "DRY SEASON", from: 0, to: 90, g: [1, 1], desc: "Evergreen on the coast." },
    { id: 'bloom', label: "IN BLOOM", from: 90, to: 150, g: [1, 1], desc: "Clusters of small white flowers." },
    { id: 'fruiting', label: "FRUIT GROWING", from: 150, to: 230, g: [1, 1], desc: "Small green plums swell." },
    { id: 'harvest', label: "FRUIT SEASON", from: 230, to: 320, g: [1, 1], desc: "Fruits ripen pink to purple." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 320, to: 360, g: [1, 1], desc: "Steady growth." },
  ],
  beds: [{ plantedDay: -1440 }],
});
