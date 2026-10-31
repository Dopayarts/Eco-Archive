EA.addSpecies('guiera', {
  name: "GUIERA", latin: "Guiera senegalensis", family: "Combretaceae (bushwillow family)",
  origin: "Savanna from Senegal to Sudan; used by the Hausa of northern Nigeria",
  added: '2026-10-31',
  kind: 'perennial',
  summary: "A grey-green shrub up to 3 m, dotted all over with tiny black glands. Small, soft-haired, rounded leaves sit almost in pairs. Round, creamy flower heads with long stamens give spindle-shaped fruits covered in grey silky hairs.",
  facts: ["SHRUB UP TO 3 M", "BLACK DOTS ALL OVER", "LEAVES SOFT, ROUNDED", "FLOWER HEADS ROUND, CREAM", "FRUIT SILKY, GREY"],
  uses: [
    ["MEDICINE", "Leaf teas are used for diarrhoea, fever and cough; the Hausa use the stem for pain, which mouse tests supported."],
    ["FODDER", "Livestock browse the leaves and fruits in the dry season."],
    ["OTHER", "Roots are chewsticks, the fruit gives a black dye and the flowers feed bees."],
  ],
  history: "Guiera is one of the most common shrubs of Sahel fallows. It often flowers twice a year.",
  leaf: { shape: 'oval', len: 1, wid: 0.65, note: 'SMALL SOFT GREY-GREEN LEAF, BLACK DOTS' },
  form: { type: 'shrub', height: 0.85, trunk: 0.12, branches: 11, nodes: 6, spread: 0.35, stemW: 0.03, leafSize: 1.4, arrange: 'opposite', flower: { type: 'head', size: 1.0, color: 3 }, fruit: { type: 'berry', size: 1.8, color: 2 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 90, g: [0.85, 0.85], desc: "Dry-season flowers." },
    { id: 'fruiting', label: "SILKY FRUITS", from: 90, to: 180, g: [0.85, 1], desc: "Grey hairy fruits." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 180, to: 270, g: [1, 1], desc: "Fresh leaves in the rains." },
    { id: 'bloom', label: "IN FLOWER", from: 270, to: 360, g: [1, 0.9], desc: "Second flowering as the rains end." },
  ],
  beds: [{ plantedDay: -1800 }],
});
