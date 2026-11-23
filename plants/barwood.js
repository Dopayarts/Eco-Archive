EA.addSpecies('barwood', {
  name: "BARWOOD", latin: "Pterocarpus lucens", family: "Fabaceae (pea family)",
  origin: "The Sudan-Sahel belt from Senegal to Sudan; native in northern Nigeria",
  added: '2026-11-23',
  kind: 'perennial',
  summary: "A deciduous shrub 3-4 m tall, sometimes a tree to 18 m, with dark, scaly bark that bleeds red gum. Leaves have 5-7 leaflets. Sweet-scented pale yellow flowers give flat, papery, winged pods 2.5-5 cm across with one seed.",
  facts: ["SHRUB OR TREE", "RED GUM", "5-7 LEAFLETS", "PALE YELLOW FLOWERS", "PAPERY WINGED PODS"],
  uses: [
    ["FOOD", "Fresh leaves are cooked in sauces and as a vegetable."],
    ["FODDER", "It is good fodder for livestock."],
    ["WOOD", "The wood makes wheel rims, tool handles and pestles."],
    ["MEDICINE", "Bark extracts are used for diarrhoea and dysentery."],
  ],
  history: "In the Sahel it flowers between January and June.",
  leaf: { shape: 'oval', len: 1, wid: 0.6, compound: 'pinnate', note: '5-7 LEAFLETS' },
  form: { type: 'shrub', height: 1.1, branches: 7, nodes: 5, arrange: 'alternate', leafSize: 0.8, droop: 0.15, flower: { type: 'spike', size: 0.5, color: 3 }, fruit: { type: 'pod', size: 0.6, color: 3 } },
  seasons: [
    { id: 'dormant', label: "LEAF FALL", from: 0, to: 60, g: [0.8, 0.8], desc: "Leaves drop in the dry season." },
    { id: 'bloom', label: "IN FLOWER", from: 60, to: 150, g: [0.8, 1], desc: "Pale yellow flowers." },
    { id: 'fruiting', label: "PODDING", from: 150, to: 240, g: [1, 1], desc: "Winged pods." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 240, to: 360, g: [1, 1], desc: "Full leaf." },
  ],
  beds: [{ plantedDay: -3000 }],
});
