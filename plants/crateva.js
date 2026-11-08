EA.addSpecies('crateva', {
  name: "CRATEVA", latin: "Crateva adansonii", family: "Capparaceae (caper family)",
  origin: "From Mauritania and Senegal to Ethiopia, south to Zambia, including Nigeria; also in Asia",
  added: '2026-11-08',
  kind: 'perennial',
  summary: "A deciduous shrub or small tree up to 10-15 m with a rounded, open crown. Leaves of three leaflets. Flowers with yellowish-white petals give round berries 4-5 cm across on long stalks, with mealy white pulp.",
  facts: ["TREE UP TO 15 M", "LEAVES OF 3 LEAFLETS", "FLOWERS YELLOWISH WHITE", "BERRIES ROUND, STALKED", "LEAVES EATEN COOKED"],
  uses: [
    ["FOOD", "Young leaves are cooked as a vegetable and added to soups and sauces; they are sold in West African markets."],
    ["MEDICINE", "Leaf extracts tested in Nigeria showed some activity against TB bacteria."],
    ["SCENT", "Nigerian leaf oil is rich in linalool."],
  ],
  history: "In Burkina Faso the leaves are picked at the start of the rains. In India a form of it is called sacred barna.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, compound: 'trifoliate', leaflets: 3, note: 'THREE POINTED LEAFLETS' },
  form: { type: 'tree', height: 1.05, trunk: 0.45, branches: 10, nodes: 5, spread: 0.36, stemW: 0.05, leafSize: 1.6, arrange: 'alternate', flower: { type: 'cluster', size: 1.1, color: 3 }, fruit: { type: 'big', size: 0.8, color: 2 } },
  seasons: [
    { id: 'dormant', label: "LEAFLESS", from: 0, to: 90, g: [0.6, 0.6], desc: "Bare in the dry season." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 150, g: [0.6, 0.9], desc: "Pale yellowish flowers." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 150, to: 300, g: [0.9, 1], desc: "Leaves picked in the early rains." },
    { id: 'fruiting', label: "ROUND BERRIES", from: 300, to: 360, g: [1, 0.7], desc: "Stalked berries." },
  ],
  beds: [{ plantedDay: -5400 }],
});
