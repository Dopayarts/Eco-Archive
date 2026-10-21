EA.addSpecies('cabbage', {
  name: "CABBAGE", latin: "Brassica oleracea", family: "Brassicaceae (mustard family)",
  origin: "Europe; in Nigeria grown mostly on the Jos Plateau",
  local: "KABEJI (HAUSA)",
  added: '2026-10-21',
  kind: 'annual',
  summary: "A low plant with broad, waxy, blue-green leaves. The inner leaves wrap tightly into a firm, round head.",
  facts: ["HERB 30-50 CM", "LEAVES BROAD, WAXY, BLUE-GREEN", "INNER LEAVES FORM A TIGHT HEAD", "NEEDS COOL WEATHER", "FLOWERS ONLY IN ITS 2ND YEAR"],
  uses: [
    ["FOOD", "Shredded in salads and coleslaw, and cooked in stews and fried rice."],
  ],
  history: "Cabbage farming is an important source of income on the Plateau, and economists have studied its returns there.",
  leaf: { shape: 'round', len: 1, wid: 0.95, note: 'BROAD ROUND LEAF, WAXY, THICK VEINS' },
  form: { type: 'rosette', height: 0.5, count: 18, leafSize: 1.5, pitch: [0.25, 1.35], droop: 0.1 },
  stages: [
    { id: 'seed', label: "SEED", days: 7, g: [0, 0], desc: "Seeds are sown in a nursery or straight into beds." },
    { id: 'sprout', label: "SPROUT", days: 7, g: [0.04, 0.12], desc: "Tiny seed leaves appear." },
    { id: 'seedling', label: "SEEDLING", days: 20, g: [0.12, 0.35], desc: "Seedlings are transplanted." },
    { id: 'vegetative', label: "LEAFY GROWTH", days: 30, g: [0.35, 0.9], desc: "Broad outer leaves spread." },
    { id: 'fruiting', label: "HEADING UP", days: 25, g: [0.9, 1], desc: "Inner leaves cup together into a firm head." },
    { id: 'senescence', label: "HARVEST", days: 8, g: [1, 0.8], desc: "Heads are cut when firm." },
  ],
  beds: [{ sowDay: 274 }],
});
