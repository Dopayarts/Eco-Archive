EA.addSpecies('sicklebush', {
  name: "SICKLEBUSH", latin: "Dichrostachys cinerea", family: "Fabaceae (legume family)",
  origin: "Africa outside the rainforest, from Cape Verde to Somalia, and on to India and Australia",
  added: '2026-11-07',
  kind: 'perennial',
  summary: "A thorny shrub or small tree up to 7 m with strong thorns up to 8 cm long and feathery, twice-divided leaves. Its scented hanging flower spikes are two-coloured like a Chinese lantern: pink to lilac at the top, yellow below. Pods are twisted into tight coils.",
  facts: ["THORNY TREE TO 7 M", "THORNS UP TO 8 CM", "FLOWERS PINK AND YELLOW", "PODS TWISTED, COILED", "FIXES NITROGEN"],
  uses: [
    ["FODDER", "Livestock browse the protein-rich leaves and fallen pods, mainly in the dry season."],
    ["WOOD", "The dense wood burns slowly and makes tool handles, walking sticks and posts."],
    ["MEDICINE", "In West Africa the roots are used as a diuretic and for worms; root or leaf brews are used for malaria and snakebite."],
  ],
  history: "It is also called Chinese lantern tree after its flowers. In Cuba, where it was introduced, it has spread over millions of acres of farmland.",
  leaf: { shape: 'oval', len: 1, wid: 0.4, compound: 'pinnate', leaflets: 15, note: 'TWICE-DIVIDED, TINY LEAFLETS' },
  form: { type: 'shrub', height: 0.9, trunk: 0.2, branches: 9, nodes: 6, spread: 0.38, stemW: 0.035, leafSize: 1.6, arrange: 'alternate', flower: { type: 'spike', size: 1.0, color: 2 }, fruit: { type: 'pod', size: 0.8, color: 2 } },
  seasons: [
    { id: 'fruiting', label: "COILED PODS", from: 0, to: 90, g: [0.8, 0.7], desc: "Twisted pods fall for livestock." },
    { id: 'dormant', label: "DRY SEASON", from: 90, to: 130, g: [0.7, 0.6], desc: "Some leaves drop." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 130, to: 240, g: [0.6, 1], desc: "Feathery leaves return." },
    { id: 'bloom', label: "IN FLOWER", from: 240, to: 360, g: [1, 1], desc: "Pink and yellow lantern flowers." },
  ],
  beds: [{ plantedDay: -2880 }],
});
