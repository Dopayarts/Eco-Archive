EA.addSpecies('orange', {
  name: "SWEET ORANGE", short: "ORANGE", latin: "Citrus × sinensis", family: "Rutaceae (citrus family)",
  origin: "Southern China; grown across Nigeria, especially Benue, Ogun, Oyo and Edo",
  local: "OSAN (YORUBA), LEMU (HAUSA)",
  added: '2026-10-16',
  kind: 'perennial',
  summary: "An evergreen tree with a rounded crown, glossy dark leaves with winged stalks, and scented white flowers. Fruits stay green or turn green-yellow in the Nigerian heat, though they are ripe and sweet inside.",
  facts: ["TREE 5-10 M", "LEAVES GLOSSY, WINGED STALKS", "FLOWERS WHITE, VERY SCENTED", "FRUIT OFTEN STAYS GREEN WHEN RIPE", "SOME STEMS THORNY"],
  uses: [
    ["FOOD", "Peeled and sold by street hawkers, the outer skin shaved off in a spiral, then sucked."],
    ["NUTRITION", "Rich in vitamin C."],
  ],
  history: "Sweet oranges came from China via Portuguese traders. Benue State is often called Nigeria's orange basket, sending lorry-loads south.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, note: 'SIMPLE OVAL LEAF, GLOSSY, WINGED LEAF STALK' },
  form: { type: 'tree', height: 1.25, trunk: 0.3, branches: 7, nodes: 4, spread: 0.3, stemW: 0.04, leafSize: 1.7, arrange: 'alternate', flower: { type: 'single', size: 0.7, color: 3 }, fruit: { type: 'big', size: 0.8, hang: true, color: 2 } },
  seasons: [
    { id: 'harvest', label: "FRUIT SEASON", from: 0, to: 60, g: [1, 1], desc: "Ripe oranges are picked and sold everywhere." },
    { id: 'vegetative', label: "DRY SEASON", from: 60, to: 90, g: [1, 0.95], desc: "Trees rest; irrigated orchards keep growing." },
    { id: 'bloom', label: "IN BLOOM", from: 90, to: 140, g: [0.95, 1], desc: "Scented white flowers open with the first rains; bees swarm them." },
    { id: 'fruiting', label: "FRUIT GROWING", from: 140, to: 280, g: [1, 1], desc: "Small green fruits swell through the rains." },
    { id: 'harvest', label: "FRUIT SEASON", from: 280, to: 360, g: [1, 1], desc: "Ripe oranges are picked and sold everywhere." },
  ],
  beds: [{ plantedDay: -1800 }],
});
