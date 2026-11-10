EA.addSpecies('kassod-tree', {
  name: "KASSOD TREE", short: "KASSOD", latin: "Senna siamea", family: "Fabaceae (legume family)",
  origin: "Native to South and Southeast Asia; planted in Nigeria and across mainland tropical Africa",
  added: '2026-11-10',
  kind: 'perennial',
  summary: "A medium-sized evergreen tree up to 18 m with pinnate leaves of 6-12 pairs of rounded leaflets. Upright clusters of bright yellow flowers are followed by long, flat, dark brown pods.",
  facts: ["TREE UP TO 18 M", "EVERGREEN", "6-12 PAIRS OF LEAFLETS", "FLOWERS BRIGHT YELLOW", "PODS FLAT, DARK BROWN"],
  uses: [
    ["FUEL", "The wood burns well and makes excellent charcoal."],
    ["SHADE", "Planted for shade, windbreaks and fodder, and grown over cocoa and coffee."],
    ["TIMBER", "Its hard wood is used for poles, beams and furniture."],
    ["CAUTION", "Leaves, flowers and pods are highly toxic to pigs and poultry; in Thailand the leaves are boiled several times before eating."],
  ],
  history: "Its main chemical, barakol, is sold in Asian pharmacies as a sleep aid. It is the provincial tree of Chaiyaphum in Thailand.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, compound: 'pinnate', leaflets: 17, note: 'PINNATE LEAF, ROUNDED LEAFLETS' },
  form: { type: 'tree', height: 1.1, trunk: 0.55, branches: 10, nodes: 6, spread: 0.28, stemW: 0.06, leafSize: 1.2, arrange: 'alternate', droop: 0.15, flower: { type: 'cluster', size: 1.1, color: 3 }, fruit: { type: 'pod', size: 1.1, hang: true, color: 1 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 100, g: [1, 1], desc: "Yellow flower clusters." },
    { id: 'fruiting', label: "PODS", from: 100, to: 200, g: [1, 1], desc: "Flat dark pods." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 200, to: 360, g: [1, 1], desc: "Evergreen crown." },
  ],
  beds: [{ plantedDay: -3000 }],
});
