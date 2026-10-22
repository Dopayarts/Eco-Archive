EA.addSpecies('african-mahogany', {
  name: "AFRICAN MAHOGANY", short: "MADACHI", latin: "Khaya senegalensis", family: "Meliaceae (mahogany family)",
  origin: "Tropical Africa; savanna and riverbanks across northern and central Nigeria",
  local: "MADACHI (HAUSA), OGONWO (YORUBA)",
  added: '2026-10-22',
  kind: 'perennial',
  summary: "A tall tree, 15-30 m, with dark grey bark that bleeds red when cut and a dense crown of compound leaves with a few oblong leaflets. Small cream flowers grow in loose clusters, and round woody capsules split into four to free winged seeds.",
  facts: ["TREE 15-30 M", "LEAVES PINNATE, 3-4 PAIRS OF LEAFLETS", "BARK BLEEDS RED SAP", "CAPSULES WOODY, SPLIT IN 4", "HARDEST OF THE AFRICAN MAHOGANIES"],
  uses: [
    ["WOOD", "Hard timber for furniture, floors and boats."],
    ["MEDICINE", "The very bitter bark is a well-known fever remedy."],
    ["SHADE", "Planted as an avenue tree in towns."],
  ],
  history: "Dry-zone mahogany shades many northern Nigerian streets, and its bitter bark (madachi) is a traditional fever medicine.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, compound: 'pinnate', leaflets: 6, note: 'PINNATE LEAF, 3-4 PAIRS OF OBLONG LEAFLETS' },
  form: { type: 'tree', height: 1.45, trunk: 0.45, branches: 9, nodes: 4, spread: 0.32, stemW: 0.07, leafSize: 1.6, arrange: 'alternate', flower: { type: 'cluster', size: 1.1, color: 3 }, fruit: { type: 'big', size: 0.9, color: 1 } },
  seasons: [
    { id: 'bloom', label: "IN BLOOM", from: 0, to: 60, g: [1, 1], desc: "Small cream flowers in the dry season." },
    { id: 'fruiting', label: "CAPSULES GROWING", from: 60, to: 240, g: [1, 1], desc: "Round capsules grow and turn from grey to black." },
    { id: 'harvest', label: "SEEDS FALL", from: 240, to: 330, g: [1, 1], desc: "Capsules split and winged seeds spin away." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 330, to: 360, g: [1, 1], desc: "Evergreen crown." },
  ],
  beds: [{ plantedDay: -10800 }],
});
