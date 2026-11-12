EA.addSpecies('flame-creeper', {
  name: "FLAME CREEPER", short: "COMBRETUM", latin: "Combretum paniculatum", family: "Combretaceae (combretum family)",
  origin: "Widespread in tropical Africa from West Africa, including Nigeria, east to Ethiopia and south to Mozambique and South Africa",
  added: '2026-11-12',
  kind: 'perennial',
  summary: "A vigorous liana up to 10-20 m or a scrambling shrub. Leaves come in pairs. Bright red flowers in branched sprays are followed by 4-winged fruits, red or pale green when fresh.",
  facts: ["LIANA UP TO 20 M", "LEAVES IN PAIRS", "FLOWERS BRIGHT RED", "FRUIT 4-WINGED", "LOVED BY BEES"],
  uses: [
    ["MEDICINE", "Used across tropical Africa for stomach complaints, malaria and coughs; in Nigeria leaf extracts are taken for cancer."],
    ["FOOD", "Young leaves and flowers are cooked in soups."],
    ["DYE", "Boiled leaves give a black dye for bark cloth and body painting."],
    ["CAUTION", "The fruits are considered toxic."],
  ],
  history: "Its names include burning bush and forest flame-creeper, for the red flowers that cover it.",
  leaf: { shape: 'oval', len: 1, wid: 0.55, note: 'SMOOTH LEAF IN PAIRS' },
  form: { type: 'vine', height: 1.3, nodes: 12, leafSize: 1.3, droop: 0.3, arrange: 'opposite', flower: { type: 'cluster', size: 1.2, color: 1 }, fruit: { type: 'pod', size: 0.8, color: 1 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 100, g: [1, 1], desc: "Red flower sprays." },
    { id: 'fruiting', label: "WINGED FRUIT", from: 100, to: 180, g: [1, 1], desc: "Four-winged fruits." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 180, to: 360, g: [1, 1], desc: "Climbs through the rains." },
  ],
  beds: [{ plantedDay: -1000 }],
});
