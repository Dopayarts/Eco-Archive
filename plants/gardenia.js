EA.addSpecies('gardenia', {
  name: "GARDENIA", latin: "Gardenia ternifolia", family: "Rubiaceae (coffee family)",
  origin: "Tropical African savanna; collected wild in Benue State, Nigeria",
  added: '2026-11-02',
  kind: 'perennial',
  summary: "A shrub or small tree with smooth grey-white bark and leaves in whorls of three. Large, sweet-scented, trumpet-shaped flowers open white or cream and fade to yellow. The fruits sit singly on long stalks.",
  facts: ["SHRUB OR SMALL TREE", "BARK SMOOTH, GREY-WHITE", "LEAVES IN THREES", "FLOWERS WHITE TRUMPETS", "FLOWERS FADE YELLOW"],
  uses: [
    ["CHARM", "In Benue State people gather it as a charm against evil spirits."],
    ["MEDICINE", "Used in remedies for headache, coughs, fever and stomach complaints."],
    ["OTHER", "Branch wood makes tool handles and chewsticks; bees visit the flowers."],
  ],
  history: "This gardenia is a wild relative of the scented garden gardenias.",
  leaf: { shape: 'paddle', len: 1, wid: 0.55, note: 'BROAD LEAF, ROUNDED TIP, IN WHORLS OF THREE' },
  form: { type: 'shrub', height: 0.95, trunk: 0.2, branches: 8, nodes: 4, spread: 0.38, stemW: 0.04, leafSize: 1.05, arrange: 'whorl', flower: { type: 'single', size: 1.5, color: 3 }, fruit: { type: 'big', size: 0.6, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 90, g: [1, 1], desc: "Evergreen." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 180, g: [1, 1], desc: "Scented white trumpets." },
    { id: 'fruiting', label: "FRUITING", from: 180, to: 300, g: [1, 1], desc: "Single fruits on long stalks." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 300, to: 360, g: [1, 1], desc: "Glossy leaves." },
  ],
  beds: [{ plantedDay: -2160 }],
});
