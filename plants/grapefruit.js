EA.addSpecies('grapefruit', {
  name: "GRAPEFRUIT", latin: "Citrus × paradisi", family: "Rutaceae (citrus family)",
  origin: "Barbados (a cross of pomelo and orange); grown in citrus areas of Nigeria",
  added: '2026-10-16',
  kind: 'perennial',
  summary: "A large, rounded citrus tree with big glossy leaves and clusters of white flowers. Heavy, round, yellow fruits hang in bunches like grapes, which is how it got its name.",
  facts: ["TREE 5-12 M", "LEAVES LARGE, GLOSSY, WINGED STALKS", "FLOWERS WHITE, IN CLUSTERS", "FRUIT LARGE, YELLOW, IN BUNCHES", "PULP SOUR-SWEET AND BITTER"],
  uses: [
    ["FOOD", "Eaten fresh or juiced."],
    ["CAUTION", "Grapefruit juice changes how the body handles many medicines (some blood-pressure, cholesterol and heart drugs); check before mixing."],
  ],
  history: "Grapefruit arose in Barbados in the 1700s as a chance cross between pomelo and sweet orange. In Nigeria it is grown alongside oranges in orchards in the south and middle belt.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, note: 'LARGE SIMPLE OVAL LEAF, GLOSSY, BROAD WINGED STALK' },
  form: { type: 'tree', height: 1.25, trunk: 0.3, branches: 7, nodes: 4, spread: 0.32, stemW: 0.045, leafSize: 1.75, arrange: 'alternate', flower: { type: 'cluster', size: 0.8, color: 3 }, fruit: { type: 'big', size: 1.1, hang: true, color: 3 } },
  seasons: [
    { id: 'harvest', label: "FRUIT SEASON", from: 0, to: 60, g: [1, 1], desc: "Heavy yellow fruits are picked." },
    { id: 'vegetative', label: "DRY SEASON", from: 60, to: 90, g: [1, 0.95], desc: "Trees rest; irrigated orchards keep growing." },
    { id: 'bloom', label: "IN BLOOM", from: 90, to: 140, g: [0.95, 1], desc: "Scented white flowers open with the first rains; bees swarm them." },
    { id: 'fruiting', label: "FRUIT GROWING", from: 140, to: 280, g: [1, 1], desc: "Small green fruits swell through the rains." },
    { id: 'harvest', label: "FRUIT SEASON", from: 280, to: 360, g: [1, 1], desc: "Heavy yellow fruits are picked." },
  ],
  beds: [{ plantedDay: -1800 }],
});
