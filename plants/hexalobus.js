EA.addSpecies('hexalobus', {
  name: "HEXALOBUS", latin: "Hexalobus crispiflorus", family: "Annonaceae (custard apple family)",
  origin: "Rainforest and woodland of 18 African countries from Guinea-Bissau to Sudan, Gabon and DR Congo, including Nigeria",
  added: '2026-11-14',
  kind: 'perennial',
  summary: "A tree up to 30-40 m with a deeply grooved trunk and bark that peels in long strips. Glossy leathery leaves are 7-25 cm. Fragrant yellow flowers with a purple base have wavy, crinkled lobes. Fruits 4-10 cm long grow in clusters.",
  facts: ["TREE UP TO 30-40 M", "GROOVED TRUNK", "BARK PEELS IN STRIPS", "CRINKLED YELLOW FLOWERS", "FRUIT EATEN FRESH"],
  uses: [
    ["FOOD", "The fruit is eaten fresh."],
    ["WOOD", "Used for house building, knife handles, paddles and roof shingles."],
    ["MEDICINE", "Bark is used for fever and skin problems; in tests its bark compounds acted against malaria."],
  ],
  history: "Its name crispiflorus means crinkled flower.",
  leaf: { shape: 'lance', len: 1, wid: 0.38, note: 'GLOSSY LEATHERY LEAF' },
  form: { type: 'tree', height: 1.3, trunk: 0.55, branches: 9, nodes: 5, spread: 0.3, stemW: 0.08, leafSize: 1.3, arrange: 'alternate', droop: 0.15, flower: { type: 'single', size: 0.9, color: 3 }, fruit: { type: 'big', size: 0.8, color: 3 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 90, g: [1, 1], desc: "Fragrant yellow flowers." },
    { id: 'fruiting', label: "FRUITING", from: 90, to: 200, g: [1, 1], desc: "Fruit clusters ripen." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 200, to: 360, g: [1, 1], desc: "Full crown." },
  ],
  beds: [{ plantedDay: -5000 }],
});
