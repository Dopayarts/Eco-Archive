EA.addSpecies('terminalia', {
  name: "TERMINALIA", short: "TERMINALIA", latin: "Terminalia avicennioides", family: "Combretaceae (bushwillow family)",
  origin: "West African savanna, from Senegal to the Central African Republic; found around Zaria",
  added: '2026-10-30',
  kind: 'perennial',
  summary: "A shrub or small tree 7-10 m with deeply cracked, corky bark. Narrow leaves are velvety grey beneath. Pinkish, velvety flower spikes give hairy, winged white fruits.",
  facts: ["TREE 7-10 M", "BARK CORKY, CRACKED", "LEAVES VELVETY BELOW", "FLOWER SPIKES PINKISH", "FRUIT WINGED, HAIRY"],
  uses: [
    ["MEDICINE", "Roots are used for wounds, skin infections and toothache; leaves are chewed for cough."],
    ["CHEWSTICK", "Roots make chewsticks, bows and walking sticks in Nigeria."],
    ["DYE", "Roots and leaves give a yellow dye."],
  ],
  history: "This terminalia grows on sandy savanna soils. Its root bark has been studied in Zaria for its plant chemicals.",
  leaf: { shape: 'lance', len: 1, wid: 0.38, note: 'NARROW OVAL LEAF, VELVETY GREY BENEATH' },
  form: { type: 'tree', height: 1.1, trunk: 0.3, branches: 11, nodes: 6, spread: 0.36, stemW: 0.06, leafSize: 2.2, arrange: 'alternate', flower: { type: 'spike', size: 1.0, color: 2 }, fruit: { type: 'big', size: 0.6, color: 3 } },
  seasons: [
    { id: 'dormant', label: "LEAVES FALL", from: 0, to: 60, g: [0.7, 0.5], desc: "Leaves drop in the harmattan." },
    { id: 'bloom', label: "IN FLOWER", from: 60, to: 120, g: [0.5, 0.8], desc: "Flower spikes with the first new leaves." },
    { id: 'fruiting', label: "WINGED FRUIT", from: 120, to: 210, g: [0.8, 1], desc: "Hairy winged fruits." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 210, to: 360, g: [1, 0.8], desc: "Full leaf through the rains." },
  ],
  beds: [{ plantedDay: -3600 }],
});
