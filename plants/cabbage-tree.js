EA.addSpecies('cabbage-tree', {
  name: "CABBAGE TREE", short: "CABBAGE TR", latin: "Anthocleista djalonensis", family: "Gentianaceae (gentian family)",
  origin: "West Africa from Guinea-Bissau to Cameroon, including Nigeria",
  added: '2026-11-01',
  kind: 'perennial',
  summary: "A small tree up to 15 m with very large leaves in pairs; on young plants a leaf can be over a metre long. Upright sprays of creamy white, many-lobed flowers give dark green, egg-shaped berries.",
  facts: ["TREE UP TO 15 M", "LEAVES HUGE, IN PAIRS", "YOUNG LEAVES UP TO 1 M", "FLOWERS CREAM, MANY LOBES", "BERRIES DARK GREEN"],
  uses: [
    ["MEDICINE", "Roots and bark are used as a strong purgative and for malaria, stomach complaints and skin infections."],
    ["CAUTION", "A strong purgative; root preparations are also used to cause abortion. Avoid in pregnancy."],
  ],
  history: "Its cabbage-like giant leaves make young trees stand out. In Nigeria it flowers in March-May and fruits in October-November.",
  leaf: { shape: 'paddle', len: 1, wid: 0.45, note: 'HUGE OBLONG LEAF IN PAIRS' },
  form: { type: 'tree', height: 1.2, trunk: 0.5, branches: 5, nodes: 3, spread: 0.3, stemW: 0.06, leafSize: 2.3, arrange: 'opposite', flower: { type: 'cluster', size: 1.3, color: 3 }, fruit: { type: 'berry', size: 2.0, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 60, g: [1, 1], desc: "Big leaves in the dry season." },
    { id: 'bloom', label: "IN FLOWER", from: 60, to: 150, g: [1, 1], desc: "Cream flower sprays, March to May." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 150, to: 270, g: [1, 1], desc: "Leafy through the rains." },
    { id: 'fruiting', label: "BERRIES", from: 270, to: 330, g: [1, 1], desc: "Berries ripen, October-November." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 330, to: 360, g: [1, 1], desc: "Rest." },
  ],
  beds: [{ plantedDay: -3600 }],
});
