EA.addSpecies('trema', {
  name: "TREMA", latin: "Trema orientalis", family: "Cannabaceae (hemp family)",
  origin: "Tropical Africa, Asia and Australia; planted in Nigeria",
  local: "TELEMUKWU (IGBO), AFEFE (YORUBA)",
  added: '2026-11-18',
  kind: 'perennial',
  summary: "A fast-growing evergreen tree up to 18 m with smooth grey bark and corky spots. Toothed leaves up to 14 cm are hairy beneath. Tiny greenish flowers give glossy black fruits 4-6 mm across.",
  facts: ["TREE TO 18 M", "FAST-GROWING", "TOOTHED LEAVES", "GREENISH FLOWERS", "BLACK FRUIT 4-6 MM"],
  uses: [
    ["FARM", "Its leaves feed livestock, and bees forage on its flowers."],
    ["FIBRE", "The bark makes string and rope."],
    ["MEDICINE", "Leaves and bark are used for cough and asthma."],
    ["FUEL", "The soft wood burns quickly and makes a good fire starter."],
  ],
  history: "A pioneer tree of forest edges and cleared land, it shades young hardwoods as forest regrows.",
  leaf: { shape: 'lance', len: 1, wid: 0.4, note: 'TOOTHED LEAF, HAIRY BELOW' },
  form: { type: 'tree', height: 1.2, trunk: 0.5, branches: 9, nodes: 5, spread: 0.3, stemW: 0.07, leafSize: 1.0, arrange: 'alternate', droop: 0.2, flower: { type: 'cluster', size: 0.4, color: 2 }, fruit: { type: 'berry', size: 0.4, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 150, g: [1, 1], desc: "Evergreen crown." },
    { id: 'bloom', label: "IN FLOWER", from: 150, to: 240, g: [1, 1], desc: "Tiny greenish flowers." },
    { id: 'fruiting', label: "FRUITING", from: 240, to: 360, g: [1, 1], desc: "Glossy black fruits." },
  ],
  beds: [{ plantedDay: -1500 }],
});
