EA.addSpecies('lettuce', {
  name: "LETTUCE", latin: "Lactuca sativa", family: "Asteraceae (daisy family)",
  origin: "The Mediterranean; grown on the Jos Plateau and in town gardens",
  local: "LATAS (HAUSA)",
  added: '2026-10-21',
  kind: 'annual',
  summary: "A fast-growing leafy plant with soft, pale green, crinkled leaves in a loose rosette. In heat it bolts, sending up a stalk of small yellow flower heads.",
  facts: ["HERB 15-30 CM", "LEAVES SOFT, PALE, CRINKLED", "MILKY SAP", "BOLTS IN HOT WEATHER", "READY IN 6-8 WEEKS"],
  uses: [
    ["FOOD", "Eaten raw in salads and with shawarma and suya."],
  ],
  history: "Lettuce is a dry-season crop on the Jos Plateau, grown on irrigated plots alongside carrots and cabbage.",
  leaf: { shape: 'oval', len: 1, wid: 0.8, serr: 0.08, note: 'SOFT OVAL LEAF, CRINKLED, PALE GREEN' },
  form: { type: 'rosette', height: 0.6, count: 14, leafSize: 1.3, pitch: [0.4, 1.25], droop: 0.15, flower: { type: 'head', size: 0.5, color: 3 } },
  stages: [
    { id: 'seed', label: "SEED", days: 7, g: [0, 0], desc: "Seeds are sown in a nursery or straight into beds." },
    { id: 'sprout', label: "SPROUT", days: 7, g: [0.04, 0.12], desc: "Tiny seed leaves appear." },
    { id: 'seedling', label: "SEEDLING", days: 20, g: [0.12, 0.35], desc: "Seedlings are planted out in beds." },
    { id: 'vegetative', label: "LEAFY GROWTH", days: 30, g: [0.35, 0.9], desc: "Soft leaves form a loose rosette." },
    { id: 'fruiting', label: "HEADING UP", days: 25, g: [0.9, 1], desc: "The rosette fills out." },
    { id: 'senescence', label: "HARVEST", days: 8, g: [1, 0.8], desc: "Whole plants are cut before they bolt." },
  ],
  beds: [{ sowDay: 274 }],
});
