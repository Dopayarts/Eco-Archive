EA.addSpecies('anthocleista', {
  name: "ANTHOCLEISTA", short: "ANTHOCLEIS", latin: "Anthocleista vogelii", family: "Gentianaceae (gentian family)",
  origin: "Tropical Africa; widespread in southern Nigeria, collected at Ngor-Okpala, Imo State",
  local: "MPOTO (IGBO), SAPO (YORUBA), KWARI (HAUSA)",
  added: '2026-11-23',
  kind: 'perennial',
  summary: "A tree up to 20 m with huge opposite leaves 15-45 cm long. Creamy to pale yellow flowers grow in large heads, and the green or yellowish berries are 2.5-4.5 cm long.",
  facts: ["TREE TO 20 M", "HUGE LEAVES", "CREAMY FLOWERS", "GREEN BERRIES", "FRUITS NOV-MAR"],
  uses: [
    ["MEDICINE", "In Nigeria the bark and seed are taken for fever and as a tonic; it is also used for malaria, ulcers and diabetes."],
    ["CRAFT", "In Nigeria the stems are hollowed out for quivers."],
    ["CAUTION", "The roots are used to cause abortion and the seeds as a purgative."],
  ],
  history: "Also called cabbage tree, like its cousin Anthocleista djalonensis.",
  leaf: { shape: 'paddle', len: 1, wid: 0.5, note: 'HUGE LEAF TO 45 CM' },
  form: { type: 'tree', height: 1.4, trunk: 0.55, branches: 5, nodes: 4, spread: 0.22, stemW: 0.08, leafSize: 1.6, arrange: 'opposite', droop: 0.15, flower: { type: 'cluster', size: 0.6, color: 3 }, fruit: { type: 'berry', size: 0.6, color: 2 } },
  seasons: [
    { id: 'fruiting', label: "FRUITING", from: 0, to: 120, g: [1, 1], desc: "Berries ripen." },
    { id: 'bloom', label: "IN FLOWER", from: 120, to: 210, g: [1, 1], desc: "Creamy flowers." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 210, to: 300, g: [1, 1], desc: "Huge leaves." },
    { id: 'regrowth', label: "NEW FLOWERS", from: 300, to: 360, g: [1, 1], desc: "Flowers again from October." },
  ],
  beds: [{ plantedDay: -4000 }],
});
