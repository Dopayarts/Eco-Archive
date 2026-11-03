EA.addSpecies('hunteria', {
  name: "HUNTERIA", latin: "Hunteria umbellata", family: "Apocynaceae (dogbane family)",
  origin: "West and Central African forest; used in south-west Nigeria",
  added: '2026-11-03',
  kind: 'perennial',
  summary: "A forest shrub or tree up to 15 m with latex in all parts and leathery, glossy leaves in pairs. Fragrant white to pale yellow flowers give twin yellow fruits, each holding many flat seeds.",
  facts: ["TREE UP TO 15 M", "LATEX IN ALL PARTS", "LEAVES LEATHERY, PAIRED", "FLOWERS SCENTED, WHITE", "FRUITS YELLOW, TWIN"],
  uses: [
    ["MEDICINE", "Yoruba herbalists use the powdered seeds for diabetes, fever and pain; seed extracts lowered blood sugar in animal tests."],
    ["CAUTION", "The fruits are toxic, and root-bark extracts have caused deaths."],
  ],
  history: "Hunteria seeds are sold in Nigerian herb markets, such as at Ota in Ogun State. It flowers and fruits all year.",
  leaf: { shape: 'oval', len: 1, wid: 0.4, note: 'LEATHERY GLOSSY LEAF IN PAIRS' },
  form: { type: 'tree', height: 1.15, trunk: 0.35, branches: 9, nodes: 5, spread: 0.34, stemW: 0.05, leafSize: 1.9, arrange: 'opposite', flower: { type: 'cluster', size: 1.0, color: 3 }, fruit: { type: 'big', size: 0.7, color: 3 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 120, g: [1, 1], desc: "Scented flowers." },
    { id: 'fruiting', label: "FRUITING", from: 120, to: 240, g: [1, 1], desc: "Twin yellow fruits." },
    { id: 'bloom', label: "IN FLOWER", from: 240, to: 360, g: [1, 1], desc: "Flowers and fruit all year." },
  ],
  beds: [{ plantedDay: -5400 }],
});
