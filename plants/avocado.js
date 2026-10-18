EA.addSpecies('avocado', {
  name: "AVOCADO", latin: "Persea americana", family: "Lauraceae (laurel family)",
  origin: "Mexico and Central America; grown in southern Nigeria and on the Jos Plateau",
  added: '2026-10-17',
  kind: 'perennial',
  summary: "An evergreen tree with large, glossy, leathery oval leaves and masses of tiny greenish-yellow flowers. Pear-shaped fruits hang on stalks and soften after picking, revealing buttery green flesh around one big seed.",
  facts: ["TREE 8-20 M", "LEAVES LARGE, LEATHERY, AROMATIC", "FLOWERS TINY, GREENISH-YELLOW, IN MASSES", "FRUIT PEAR-SHAPED, ONE LARGE SEED", "RIPENS OFF THE TREE"],
  uses: [
    ["FOOD", "Eaten with bread, in salads or alone; it is often called \"pear\" in Nigeria."],
    ["NUTRITION", "Rich in healthy fats, fibre and potassium."],
    ["CAUTION", "Leaves, bark and skin are toxic to some animals, such as goats and birds."],
  ],
  history: "Avocados were grown in Mexico for thousands of years and came to West Africa in the colonial era. In Nigeria much of the fruit comes from the south and from the cooler Jos Plateau.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, note: 'LARGE SIMPLE OVAL LEAF, LEATHERY, GLOSSY' },
  form: { type: 'tree', height: 1.4, trunk: 0.4, branches: 8, nodes: 4, spread: 0.32, stemW: 0.05, leafSize: 2.0, arrange: 'alternate', flower: { type: 'cluster', size: 1.4, color: 3 }, fruit: { type: 'big', size: 1, hang: true, color: 1 } },
  seasons: [
    { id: 'bloom', label: "IN BLOOM", from: 0, to: 60, g: [1, 1], desc: "Masses of tiny greenish flowers cover the tree." },
    { id: 'fruiting', label: "FRUIT GROWING", from: 60, to: 150, g: [1, 1], desc: "Small green fruits swell." },
    { id: 'harvest', label: "PEAR SEASON", from: 150, to: 270, g: [1, 1], desc: "Mature fruits are picked hard and ripen in baskets." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 270, to: 360, g: [1, 1], desc: "Evergreen growth before the next flowering." },
  ],
  beds: [{ plantedDay: -2160 }],
});
