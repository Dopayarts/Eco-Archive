EA.addSpecies('beach-bean', {
  name: "BEACH BEAN", latin: "Canavalia rosea", family: "Fabaceae (pea family)",
  origin: "Tropical coasts worldwide; native on the Nigerian coast, recorded at Ibeju-Lekki, Lagos",
  added: '2026-11-23',
  kind: 'perennial',
  summary: "A trailing vine that forms mats on the sand, with stems over 6 m long. Each leaf has three round leaflets that fold up in hot sun. Sweet-scented, purplish-pink pea flowers 2.5-5 cm long give flat, ridged pods 6-15 cm long holding brown seeds.",
  facts: ["BEACH VINE", "THREE LEAFLETS", "PINK PEA FLOWERS", "FLAT PODS 6-15 CM", "FLOWERS ALL YEAR"],
  uses: [
    ["SHORE", "It binds beach sand and fixes nitrogen."],
    ["FOOD", "Young pods and seeds are eaten after boiling; the seeds are a protein food in West Africa."],
    ["MEDICINE", "Leaves are used for rheumatism and boils; in Lagos it is listed as a medicinal creeper."],
    ["CAUTION", "The root is bitter and purgative, so eat only young, well-cooked seeds."],
  ],
  history: "Also called bay bean and seaside jack-bean. It flowers and fruits all year.",
  leaf: { shape: 'round', len: 1, wid: 0.9, compound: 'trifoliate', note: 'THREE ROUND LEAFLETS' },
  form: { type: 'vine', height: 0.5, branches: 4, nodes: 7, arrange: 'alternate', leafSize: 0.9, droop: 0.3, flower: { type: 'spike', size: 0.7, color: 2 }, fruit: { type: 'pod', size: 0.8, color: 2 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 180, g: [1, 1], desc: "Pink flowers all year." },
    { id: 'fruiting', label: "PODDING", from: 180, to: 360, g: [1, 1], desc: "Flat pods all year." },
  ],
  beds: [{ plantedDay: -400 }],
});
