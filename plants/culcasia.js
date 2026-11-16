EA.addSpecies('culcasia', {
  name: "CULCASIA", latin: "Culcasia scandens", family: "Araceae (arum family)",
  origin: "Western tropical Africa from Senegal to the Central African Republic, Angola and DR Congo; studied from Nigerian plants",
  added: '2026-11-16',
  kind: 'perennial',
  summary: "A climbing plant up to 4-5 m, often growing on trees, with slender, wiry, warty stems that cling with roots. It smells of coumarin, and bears round red berries.",
  facts: ["CLIMBER TO 5 M", "GROWS ON TREES", "WIRY WARTY STEMS", "SMELLS OF COUMARIN", "RED BERRIES"],
  uses: [
    ["MEDICINE", "Used for earache, toothache, stomach-ache and nausea; leaves are laid on ulcers."],
    ["SCENT", "Its fragrant leaves are a source of coumarin, a perfume ingredient."],
    ["CAUTION", "The sap irritates skin and is used as a fish poison."],
  ],
  history: "It grows on wet river banks and fringing forest.",
  leaf: { shape: 'lance', len: 1, wid: 0.35, note: 'LEAF WITH COUMARIN SCENT' },
  form: { type: 'vine', height: 1.0, nodes: 12, leafSize: 1.0, droop: 0.3, arrange: 'alternate', flower: { type: 'spike', size: 0.6, color: 3 }, fruit: { type: 'berry', size: 0.6, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 120, g: [1, 1], desc: "Climbs tree trunks." },
    { id: 'bloom', label: "IN FLOWER", from: 120, to: 180, g: [1, 1], desc: "Flowers." },
    { id: 'fruiting', label: "RED BERRIES", from: 180, to: 300, g: [1, 1], desc: "Round red berries." },
    { id: 'regrowth', label: "NEW SHOOTS", from: 300, to: 360, g: [1, 1], desc: "Fresh shoots." },
  ],
  beds: [{ plantedDay: -800 }],
});
