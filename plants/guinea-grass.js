EA.addSpecies('guinea-grass', {
  name: "GUINEA GRASS", short: "GUINEA GRS", latin: "Megathyrsus maximus", family: "Poaceae (grass family)",
  origin: "Tropical Africa; native to Nigeria",
  added: '2026-10-26',
  kind: 'perennial',
  summary: "A tall, tufted grass that grows in big clumps of leafy stems with long, soft, drooping blades. Open, spreading flower heads of many fine branches rise above the leaves, often tinged purple.",
  facts: ["TUFTED GRASS 1-3 M", "LEAVES LONG, SOFT, ARCHING", "FLOWER HEAD OPEN, BRANCHED", "GROWS IN CLUMPS", "REGROWS FAST AFTER CUTTING"],
  uses: [
    ["FODDER", "Cut and carried to goats, sheep and cattle; leaf meal has been studied in Benin City."],
    ["FARMING", "Planted to cover and hold bare soil."],
  ],
  history: "Guinea grass is an African native that was taken from Africa to the Americas, where it became one of the most planted pasture grasses.",
  leaf: { shape: 'blade', len: 1, wid: 0.25, note: 'LONG SOFT BLADE, PALE MIDRIB' },
  form: { type: 'grass', height: 1.25, count: 34, droop: 0.6, stems: 3, flower: { type: 'plume', size: 1.2, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "DRY SEASON", from: 0, to: 90, g: [0.8, 0.8], desc: "Clumps dry back in the harmattan." },
    { id: 'regrowth', label: "REGROWTH", from: 90, to: 180, g: [0.8, 1], desc: "Fresh leaves with the rains." },
    { id: 'bloom', label: "IN FLOWER", from: 180, to: 270, g: [1, 1], desc: "Open, purplish flower heads." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 270, to: 360, g: [1, 0.9], desc: "Dense green clumps." },
  ],
  beds: [{ plantedDay: -1800 }],
});
