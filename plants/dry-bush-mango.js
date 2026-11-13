EA.addSpecies('dry-bush-mango', {
  name: "DRY BUSH MANGO", short: "DRY MANGO", latin: "Irvingia wombolu", family: "Irvingiaceae",
  origin: "West and Central African forest; its centre of diversity is south-eastern Nigeria",
  added: '2026-11-13',
  kind: 'perennial',
  summary: "A tree up to 25-30 m with buttresses up to 2 m, very like bush mango. Leaves are simple and less leathery. Whitish flowers have a yellow disc. The fruit is green, turning yellow, with extremely bitter flesh.",
  facts: ["TREE UP TO 25-30 M", "BUTTRESSED", "FLOWERS WHITISH", "FLESH VERY BITTER", "KERNELS ARE OGBONO"],
  uses: [
    ["FOOD", "The kernels are grilled or sun-dried and pounded into ogbono, a slimy soup thickener."],
    ["TRADE", "Nigeria is the main importing country for the kernels."],
    ["MEDICINE", "The fresh bark is used against scabies, diarrhoea and toothache."],
  ],
  history: "Also called bitter bush mango and dry-season bush mango. It flowers at the end of the rains, unlike its sweet-fruited cousin.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, note: 'SIMPLE OBOVATE LEAF, 10-14 CM' },
  form: { type: 'tree', height: 1.3, trunk: 0.55, branches: 9, nodes: 5, spread: 0.3, stemW: 0.08, leafSize: 1.2, arrange: 'alternate', droop: 0.15, flower: { type: 'cluster', size: 0.7, color: 3 }, fruit: { type: 'big', size: 1.1, color: 1 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 30, g: [1, 1], desc: "Flowers at the end of the rains." },
    { id: 'fruiting', label: "FRUITING", from: 30, to: 150, g: [1, 1], desc: "Bitter fruits ripen." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 150, to: 330, g: [1, 1], desc: "Full crown through the rains." },
    { id: 'regrowth', label: "BUDDING", from: 330, to: 360, g: [1, 1], desc: "Flower buds form." },
  ],
  beds: [{ plantedDay: -5000 }],
});
