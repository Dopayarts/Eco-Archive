EA.addSpecies('lemon', {
  name: "LEMON", latin: "Citrus limon", family: "Rutaceae (citrus family)",
  origin: "Asia; grown in Nigerian orchards and gardens",
  added: '2026-10-27',
  kind: 'perennial',
  summary: "A small, thorny citrus tree with pale green, slightly toothed leaves that flush reddish when young. Purple-tinged buds open into scented white flowers, and the oval yellow fruits have a pointed tip and very sour juice.",
  facts: ["SMALL TREE 3-6 M", "THORNY TWIGS", "BUDS PURPLE-TINGED", "FRUIT OVAL, POINTED, YELLOW", "JUICE VERY SOUR"],
  uses: [
    ["FOOD", "Juice and peel flavour drinks, food and preserves."],
    ["RESEARCH", "NIHORT in Ibadan holds 8 lemon varieties in its citrus collection."],
  ],
  history: "Lemons are thought to have arisen in Asia as a cross of citron and sour orange, then spread west through the Arab world.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, serr: 0.06, note: 'PALE GREEN OVAL LEAF, FINELY TOOTHED' },
  form: { type: 'tree', height: 1.05, trunk: 0.25, branches: 10, nodes: 5, spread: 0.3, stemW: 0.04, leafSize: 2.0, arrange: 'alternate', flower: { type: 'single', size: 0.7, color: 3 }, fruit: { type: 'big', size: 0.7, hang: true, color: 3 } },
  seasons: [
    { id: 'harvest', label: "FRUIT SEASON", from: 0, to: 60, g: [1, 1], desc: "Yellow lemons are picked." },
    { id: 'bloom', label: "IN BLOOM", from: 60, to: 130, g: [1, 1], desc: "Scented flowers open from purple buds." },
    { id: 'fruiting', label: "FRUIT SWELLING", from: 130, to: 300, g: [1, 1], desc: "Green fruits swell." },
    { id: 'harvest', label: "RIPENING", from: 300, to: 360, g: [1, 1], desc: "Fruits turn yellow." },
  ],
  beds: [{ plantedDay: -3600 }],
});
