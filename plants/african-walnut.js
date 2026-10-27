EA.addSpecies('african-walnut', {
  name: "AFRICAN WALNUT", short: "UKPA", latin: "Plukenetia conophora", family: "Euphorbiaceae (spurge family)",
  origin: "West and Central African forests; southern Nigeria",
  local: "ASALA, AWUSA (YORUBA), UKPA (IGBO), OKHUE (BINI)",
  added: '2026-10-27',
  kind: 'perennial',
  summary: "A woody climber that twines up cocoa and kola trees to reach the light, growing 6-18 m long. Four-lobed green capsules turn dark brown to black, each holding round, hard-shelled, dark brown nuts about 2.5 cm across.",
  facts: ["WOODY CLIMBER 6-18 M", "CLIMBS COCOA AND KOLA TREES", "CAPSULE 4-LOBED", "NUT ROUND, HARD SHELL", "PEAKS IN JULY"],
  uses: [
    ["FOOD", "Nuts are boiled and sold as a snack across southern Nigeria."],
    ["TRADE", "Buyers shake each nut to check the kernel is whole; cooked nuts spoil in a day or two."],
  ],
  history: "The African walnut is not a true walnut but a forest climber in the spurge family. Its boiled nuts are a popular roadside snack in the rainy season.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, serr: 0.08, note: 'OBLONG LEAF, POINTED TIP, FINELY TOOTHED' },
  form: { type: 'vine', height: 1.4, nodes: 15, leafSize: 1.5, droop: 0.3, flower: { type: 'spike', size: 0.8, color: 3 }, fruit: { type: 'big', size: 1.1, hang: true, color: 1 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 30, g: [1, 1], desc: "Small flower spikes finish in early January." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 30, to: 60, g: [1, 1], desc: "Young capsules set." },
    { id: 'fruiting', label: "NUTS FILLING", from: 60, to: 270, g: [1, 1], desc: "Capsules ripen from February; most nuts come in July." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 270, to: 300, g: [1, 1], desc: "The vine rests." },
    { id: 'bloom', label: "IN FLOWER", from: 300, to: 360, g: [1, 1], desc: "Flowering begins in November." },
  ],
  beds: [{ plantedDay: -3600 }],
});
