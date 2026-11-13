EA.addSpecies('flat-crown', {
  name: "FLAT-CROWN", latin: "Albizia adianthifolia", family: "Fabaceae (legume family)",
  origin: "Tropical Africa from Senegal east to Kenya and south to Angola and South Africa; grows in south-eastern Nigeria",
  added: '2026-11-13',
  kind: 'perennial',
  summary: "A deciduous tree up to 30 m with a flat crown. Leaves are twice-pinnate with small leaflets. Scented, fluffy flower heads have red to pink or greenish stamens. Flat pale brown pods 9-19 cm split into two papery halves.",
  facts: ["TREE UP TO 30 M", "FLAT CROWN", "TWICE-PINNATE LEAVES", "FLUFFY SCENTED FLOWERS", "PODS 9-19 CM"],
  uses: [
    ["FARMING", "Grown to shade cocoa and coffee and to improve soil; its leaves are rich in nitrogen."],
    ["WOOD", "Light building, carving, firewood and good charcoal."],
    ["MEDICINE", "Bark, root and leaf are used in traditional medicine."],
  ],
  history: "Its English name is rough-bark flat-crown. Young trees can grow about 2 m a year.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, compound: 'bipinnate', leaflets: 10, note: 'TINY RHOMBIC LEAFLETS' },
  form: { type: 'tree', height: 1.2, trunk: 0.55, branches: 9, nodes: 5, spread: 0.3, stemW: 0.07, leafSize: 1.0, arrange: 'alternate', droop: 0.1, flower: { type: 'head', size: 0.9, color: 1 }, fruit: { type: 'pod', size: 0.9, color: 1 } },
  seasons: [
    { id: 'dormant', label: "LEAVES THIN", from: 0, to: 80, g: [0.8, 0.7], desc: "Leaves drop in the dry season." },
    { id: 'bloom', label: "IN FLOWER", from: 80, to: 140, g: [0.7, 1], desc: "Fluffy pink flower heads." },
    { id: 'fruiting', label: "PODS", from: 140, to: 220, g: [1, 1], desc: "Papery pods split." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 220, to: 360, g: [1, 1], desc: "Full flat crown." },
  ],
  beds: [{ plantedDay: -3000 }],
});
