EA.addSpecies('velvet-combretum', {
  name: "BUSHWILLOW", latin: "Combretum molle", family: "Combretaceae (combretum family)",
  origin: "Savanna of tropical Africa, including northern Nigeria",
  added: '2026-11-18',
  kind: 'perennial',
  summary: "A shrub or tree 10-16 m with velvety leaves and sweet-scented yellow flowers. Its fruit is a nut with four papery wings.",
  facts: ["TREE TO 16 M", "VELVETY LEAVES", "SWEET YELLOW FLOWERS", "4-WINGED FRUIT", "BEE FORAGE"],
  uses: [
    ["TRADE", "Gum from the bark was a minor trade in northern Nigeria."],
    ["MEDICINE", "It is widely used in traditional medicine."],
    ["WOOD", "Its stems make poles, and bees forage on the flowers."],
  ],
  history: "Also called velvet bushwillow, for its soft hairy leaves.",
  leaf: { shape: 'oval', len: 1, wid: 0.55, note: 'SOFT VELVETY LEAF' },
  form: { type: 'tree', height: 1.0, trunk: 0.45, branches: 8, nodes: 5, spread: 0.3, stemW: 0.07, leafSize: 0.8, arrange: 'opposite', droop: 0.15, flower: { type: 'cluster', size: 0.6, color: 3 }, fruit: { type: 'pod', size: 0.6, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 90, g: [1, 1], desc: "Leafy crown." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 180, g: [1, 1], desc: "Sweet yellow flowers." },
    { id: 'fruiting', label: "WINGED FRUIT", from: 180, to: 300, g: [1, 1], desc: "Four-winged fruits." },
    { id: 'rest', label: "RESTING", from: 300, to: 360, g: [1, 1], desc: "Growth slows." },
  ],
  beds: [{ plantedDay: -3000 }],
});
