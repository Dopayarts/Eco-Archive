EA.addSpecies('ube', {
  name: "AFRICAN PEAR", short: "UBE", latin: "Dacryodes edulis", family: "Burseraceae (incense tree family)",
  origin: "Central African forests; widely planted in south-eastern and southern Nigeria",
  local: "UBE (IGBO)",
  added: '2026-10-16',
  kind: 'perennial',
  summary: "A dense evergreen tree with pinnate leaves of glossy, pointed leaflets and resin-scented bark. Oval fruits ripen from pink to deep violet-blue; the buttery green flesh softens when warmed.",
  facts: ["TREE 15-25 M, DENSE CROWN", "LEAVES PINNATE, GLOSSY LEAFLETS", "FLOWERS SMALL, YELLOWISH", "FRUIT OVAL, PURPLE-BLUE WHEN RIPE", "FLESH OILY, EATEN SOFTENED"],
  uses: [
    ["FOOD", "Fruits are dropped in hot water or roasted until soft, then eaten with roasted or boiled corn in the rainy season."],
    ["NUTRITION", "The flesh is rich in oil, about as much as avocado."],
  ],
  history: "Ube is one of the most valued fruit trees of Igbo compounds. Since the 1990s research in south-east Nigeria and Cameroon has selected better trees for domestication.",
  leaf: { shape: 'oval', len: 1, wid: 0.4, compound: 'pinnate', leaflets: 7, note: 'PINNATE LEAF, 5-8 PAIRS OF GLOSSY POINTED LEAFLETS' },
  form: { type: 'tree', height: 1.4, trunk: 0.45, branches: 6, nodes: 3, spread: 0.28, stemW: 0.05, leafSize: 1.8, arrange: 'alternate', flower: { type: 'cluster', size: 0.7, color: 3 }, fruit: { type: 'berry', size: 1.1, hang: true, color: 1 } },
  seasons: [
    { id: 'bloom', label: "IN BLOOM", from: 0, to: 60, g: [1, 1], desc: "Small yellowish flowers in sprays at the branch tips." },
    { id: 'fruiting', label: "FRUIT GROWING", from: 60, to: 130, g: [1, 1], desc: "Fruits grow pink, then darken." },
    { id: 'harvest', label: "UBE SEASON", from: 130, to: 270, g: [1, 1], desc: "Ripe purple fruits are sold with corn through the rains." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 270, to: 360, g: [1, 1], desc: "The evergreen crown grows on." },
  ],
  beds: [{ plantedDay: -2160 }],
});
