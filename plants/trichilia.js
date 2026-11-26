EA.addSpecies('trichilia', {
  name: "TRICHILIA", latin: "Trichilia monadelpha", family: "Meliaceae (mahogany family)",
  origin: "West and Central African forests from Guinea-Bissau to DR Congo; flowers in Nigeria in the dry season",
  added: '2026-11-26',
  kind: 'perennial',
  summary: "An evergreen tree 12-20 m of lowland forest, often near rivers, with grey to dark brown bark. Pinnate leaves carry 3-7 pairs of leaflets 4-26 cm. Fragrant greenish-yellow flowers grow in sprays, followed by round capsules 1.5-2.5 cm whose seeds have an orange-red fleshy coat.",
  facts: ["TREE TO 20 M", "EVERGREEN", "PINNATE LEAVES", "FRAGRANT FLOWERS", "ORANGE-RED SEEDS"],
  uses: [
    ["TIMBER", "Its wood is used for house piles, carving, furniture, firewood and charcoal."],
    ["MEDICINE", "Bark is used for cough, worms, wounds and skin sores; in Ghana for pain, epilepsy and inflammation."],
    ["CAUTION", "Its sawdust can irritate the airways, and bark decoctions are said to cause abortion."],
  ],
  history: "The seed oil is sometimes used in cooking.",
  leaf: { shape: 'oval', len: 1, wid: 0.4, compound: 'pinnate', note: '3-7 PAIRS OF LEAFLETS' },
  form: { type: 'tree', height: 1.3, trunk: 0.5, branches: 8, nodes: 5, spread: 0.22, stemW: 0.08, leafSize: 1.1, arrange: 'alternate', droop: 0.15, flower: { type: 'cluster', size: 0.4, color: 3 }, fruit: { type: 'berry', size: 0.4, color: 1 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 120, g: [1, 1], desc: "Fragrant dry-season flowers." },
    { id: 'fruiting', label: "FRUITING", from: 120, to: 210, g: [1, 1], desc: "Capsules split to show red seeds." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 210, to: 360, g: [1, 1], desc: "Evergreen crown." },
  ],
  beds: [{ plantedDay: -6000 }],
});
