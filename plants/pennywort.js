EA.addSpecies('pennywort', {
  name: "PENNYWORT", latin: "Hydrocotyle bonariensis", family: "Araliaceae (ivy family)",
  origin: "West Africa from Senegal to Nigeria, where it is native",
  added: '2026-11-26',
  kind: 'perennial',
  summary: "A hairless creeping perennial whose stems root at the joints and spread by rhizomes. Many small white to creamy-yellow flowers rise on stalks up to 30 cm. The dry fruit splits into one-seeded parts.",
  facts: ["CREEPING HERB", "ROOTS AT JOINTS", "SPREADS BY RHIZOME", "CREAMY FLOWERS", "GROUND COVER"],
  uses: [
    ["MEDICINE", "In folk medicine it is used for skin diseases and toothache."],
  ],
  history: "Also called largeleaf pennywort and dollarweed.",
  leaf: { shape: 'round', len: 1, wid: 1, note: 'ROUND LEAF' },
  form: { type: 'rosette', height: 0.3, count: 10, leafSize: 1.2, pitch: [0.6, 1.2], droop: 0.1, flower: { type: 'umbel', size: 0.8, color: 3 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 150, g: [1, 1], desc: "Creeping stems." },
    { id: 'bloom', label: "IN FLOWER", from: 150, to: 270, g: [1, 1], desc: "Creamy flower heads." },
    { id: 'fruiting', label: "SEEDING", from: 270, to: 360, g: [1, 1], desc: "Dry split fruits." },
  ],
  beds: [{ plantedDay: -300 }],
});
