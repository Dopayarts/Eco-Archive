EA.addSpecies('allamanda', {
  name: "ALLAMANDA", latin: "Allamanda cathartica", family: "Apocynaceae (dogbane family)",
  origin: "Tropical America; a garden climber in Nigeria",
  added: '2026-10-28',
  kind: 'perennial',
  summary: "A scrambling woody climber with glossy leaves in whorls. Big, bright yellow, trumpet-shaped flowers, up to 10 cm across, cluster at the stem tips almost all year. Broken stems ooze milky sap.",
  facts: ["WOODY CLIMBER OR SHRUB", "LEAVES GLOSSY, IN WHORLS", "FLOWERS YELLOW TRUMPETS", "BLOOMS ALMOST ALL YEAR", "MILKY SAP IS TOXIC"],
  uses: [
    ["GARDEN", "Trained over fences and walls or clipped into a flowering hedge."],
    ["CAUTION", "All parts are poisonous if eaten, and the sap irritates skin."],
  ],
  history: "Allamanda comes from tropical America. The name cathartica refers to the strong laxative effect of its parts.",
  leaf: { shape: 'lance', len: 1, wid: 0.3, note: 'GLOSSY LANCE LEAF, IN WHORLS OF 3-4' },
  form: { type: 'vine', height: 1.15, nodes: 16, leafSize: 1.5, droop: 0.35, flower: { type: 'single', size: 2.0, color: 3 } },
  seasons: [
    { id: 'bloom', label: "IN BLOOM", from: 0, to: 150, g: [1, 1], desc: "Yellow trumpets at every tip." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 150, to: 210, g: [1, 1], desc: "Long shoots in the rains." },
    { id: 'bloom', label: "IN BLOOM", from: 210, to: 360, g: [1, 1], desc: "Flowers keep coming." },
  ],
  beds: [{ plantedDay: -1800 }],
});
