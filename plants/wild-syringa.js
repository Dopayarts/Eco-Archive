EA.addSpecies('wild-syringa', {
  name: "WILD SYRINGA", short: "SYRINGA", latin: "Burkea africana", family: "Fabaceae (legume family)",
  origin: "Savanna and dry woodland from Senegal to South Africa, including northern Nigeria",
  added: '2026-11-06',
  kind: 'perennial',
  summary: "A deciduous savanna tree 4-20 m tall with a spreading, flat-topped crown. Twice-divided leaves are silvery-hairy when young. Fragrant creamy-white flowers hang in drooping sprays up to 30 cm long.",
  facts: ["TREE 4-20 M", "CROWN FLAT-TOPPED", "YOUNG LEAVES SILVERY", "FLOWERS CREAMY, SCENTED", "FLOWERS IN HANGING SPRAYS"],
  uses: [
    ["TIMBER", "The heartwood is hard and resists insects; it is used for flooring and fine furniture."],
    ["TANNING", "The bark is used to tan leather."],
    ["CAUTION", "The bark is toxic; crushed bark is thrown into water to stun fish."],
  ],
  history: "It is one of the trees in Lely's book The Useful Trees of Northern Nigeria. Caterpillars of two moths feed on its leaves.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, compound: 'pinnate', leaflets: 13, note: 'TWICE-DIVIDED, SILVERY WHEN YOUNG' },
  form: { type: 'tree', height: 1.1, trunk: 0.45, branches: 11, nodes: 5, spread: 0.4, stemW: 0.06, leafSize: 1.8, arrange: 'alternate', flower: { type: 'spike', size: 1.1, color: 3 }, fruit: { type: 'pod', size: 0.8, color: 2 } },
  seasons: [
    { id: 'dormant', label: "LEAFLESS", from: 0, to: 90, g: [0.5, 0.5], desc: "Bare in the dry season." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 150, g: [0.5, 0.8], desc: "Hanging cream flowers with new leaves." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 150, to: 300, g: [0.8, 1], desc: "Flat-topped crown." },
    { id: 'fruiting', label: "PODS", from: 300, to: 360, g: [1, 0.6], desc: "Flat pods; leaves start to fall." },
  ],
  beds: [{ plantedDay: -7200 }],
});
