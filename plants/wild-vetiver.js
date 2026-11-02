EA.addSpecies('wild-vetiver', {
  name: "WILD VETIVER", short: "VETIVER", latin: "Chrysopogon nigritanus", family: "Poaceae (grass family)",
  origin: "West African savanna and wetlands; native in Nigeria",
  local: "JEMA (HAUSA)",
  added: '2026-11-02',
  kind: 'perennial',
  summary: "A tall, clumping grass with stiff, narrow leaves and deep, fragrant roots. It looks very like the cultivated vetiver of India.",
  facts: ["TALL CLUMPING GRASS", "LEAVES STIFF, NARROW", "ROOTS DEEP, FRAGRANT", "LOOKS LIKE VETIVER", "NATIVE TO NIGERIA"],
  uses: [
    ["FOOD", "In Kano the roots are eaten as a hunger food."],
    ["CRAFT", "Shoots are used for thatch and handicrafts in West Africa."],
    ["WATER", "Roots are used to purify drinking water."],
  ],
  history: "Researchers at the University of Abuja have studied Nigeria's native vetiver alongside the Indian kind used for erosion control.",
  leaf: { shape: 'blade', len: 1, wid: 0.12, note: 'STIFF NARROW GRASS BLADE' },
  form: { type: 'grass', height: 1.15, count: 34, droop: 0.3, stems: 3, flower: { type: 'plume', size: 0.9, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "DRY CLUMPS", from: 0, to: 90, g: [0.8, 0.8], desc: "Clumps survive the dry season." },
    { id: 'regrowth', label: "REGROWTH", from: 90, to: 180, g: [0.8, 1], desc: "Fresh leaves with the rains." },
    { id: 'bloom', label: "FLOWERING", from: 180, to: 300, g: [1, 1], desc: "Tall flower stalks." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 300, to: 360, g: [1, 0.8], desc: "Leaves start to dry." },
  ],
  beds: [{ plantedDay: -1080 }],
});
