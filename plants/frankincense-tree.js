EA.addSpecies('frankincense-tree', {
  name: "FRANKINCENSE", short: "FRANKINCNS", latin: "Boswellia dalzielii", family: "Burseraceae (incense-tree family)",
  origin: "Savanna of West Africa; common in north-western Nigeria",
  local: "HANO (HAUSA)",
  added: '2026-11-04',
  kind: 'perennial',
  summary: "A savanna tree up to about 13 m with pale, papery bark that peels in ragged sheets. The cut bark gives a scented gum. It is known as the frankincense tree.",
  facts: ["TREE UP TO 13 M", "BARK PALE, PAPERY, PEELING", "SCENTED GUM", "SAVANNA TREE", "NORTHERN NIGERIA"],
  uses: [
    ["FUMIGANT", "The bark gum is burned to scent clothes and to drive away flies."],
    ["MEDICINE", "Stem bark is boiled for fever, rheumatism, diarrhoea and stomach pain; roots are used on wounds."],
    ["ANIMALS", "Leaf extracts are given to poultry with diarrhoea."],
  ],
  history: "Herbalists in northern Nigeria use the stem bark, and lab studies have tested it for ulcers and blood sugar.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, serr: 0.2, compound: 'pinnate', leaflets: 13, note: 'FEATHER LEAF OF TOOTHED LEAFLETS' },
  form: { type: 'tree', height: 1.1, trunk: 0.45, branches: 10, nodes: 5, spread: 0.36, stemW: 0.06, leafSize: 1.9, arrange: 'alternate', flower: { type: 'cluster', size: 0.9, color: 3 }, fruit: { type: 'big', size: 0.5, color: 2 } },
  seasons: [
    { id: 'dormant', label: "LEAFLESS", from: 0, to: 120, g: [0.5, 0.5], desc: "Bare in the dry season." },
    { id: 'regrowth', label: "NEW LEAVES", from: 120, to: 200, g: [0.5, 1], desc: "Leaves return with the rains." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 200, to: 330, g: [1, 1], desc: "Feathery crown." },
    { id: 'dormant', label: "LEAF FALL", from: 330, to: 360, g: [1, 0.5], desc: "Leaves drop." },
  ],
  beds: [{ plantedDay: -7200 }],
});
