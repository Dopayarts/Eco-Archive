EA.addSpecies('bush-apple', {
  name: "BUSH APPLE", latin: "Heinsia crinita", family: "Rubiaceae (coffee family)",
  origin: "Western tropical Africa from Sierra Leone through southern Nigeria to Angola, and east to Kenya and Mozambique",
  local: "ATAMA",
  added: '2026-11-10',
  kind: 'perennial',
  summary: "A scrambling shrub or small tree of the coffee family. Its leaves are bitter and eaten as a vegetable, and it bears fruits that are eaten locally.",
  facts: ["SCRAMBLING SHRUB", "COFFEE FAMILY", "LEAVES BITTER", "FRUIT EATEN", "WOOD HARD, FLEXIBLE"],
  uses: [
    ["FOOD", "Known in Nigeria as atama, its bitter leaves are cooked and its fruit is eaten."],
    ["TOOLS", "The hard yet flexible wood makes tool handles."],
    ["RESEARCH", "Leaf extracts have been studied against malaria parasites and for effects on blood pressure enzymes."],
  ],
  history: "It was first described as a Gardenia and later moved to Heinsia. In Nigeria it is counted among the neglected leafy vegetables.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, note: 'SIMPLE LEAF IN PAIRS' },
  form: { type: 'shrub', height: 0.8, branches: 6, nodes: 5, trunk: 0.2, spread: 0.4, arrange: 'opposite', leafSize: 1.1, droop: 0.3, flower: { type: 'single', size: 0.9, color: 3 }, fruit: { type: 'berry', size: 0.8, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 120, g: [0.9, 1], desc: "Leaves picked for soup." },
    { id: 'bloom', label: "IN FLOWER", from: 120, to: 200, g: [1, 1], desc: "Flowers open." },
    { id: 'fruiting', label: "FRUITING", from: 200, to: 300, g: [1, 1], desc: "Fruits ripen." },
    { id: 'regrowth', label: "LEAFY GROWTH", from: 300, to: 360, g: [1, 0.9], desc: "New shoots." },
  ],
  beds: [{ plantedDay: -1200 }],
});
