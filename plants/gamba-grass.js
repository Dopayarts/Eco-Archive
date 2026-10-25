EA.addSpecies('gamba-grass', {
  name: "GAMBA GRASS", short: "GAMBA", latin: "Andropogon gayanus", family: "Poaceae (grass family)",
  origin: "African savanna from Senegal to Sudan, including Nigeria",
  added: '2026-10-25',
  kind: 'perennial',
  summary: "A tall, tufted savanna grass forming big tussocks of many stems. Leafy flower sprays carry paired, slender racemes of spikelets. Tussocks resprout quickly after dry-season fires.",
  facts: ["TUFTED GRASS UP TO 2.5 M", "UP TO 450 STEMS A TUSSOCK", "FLOWERS IN PAIRED RACEMES", "RESPROUTS AFTER FIRE", "DEEP ROOTS"],
  uses: [
    ["FODDER", "Grazed and fed to goats, sheep and rabbits in Nigerian trials."],
    ["BUILDING", "Coarse stems are used for thatch and mats."],
  ],
  history: "Gamba grass is a native of the West African savanna; it was taken to Australia as pasture and became an invasive fire hazard there.",
  leaf: { shape: 'blade', len: 1, wid: 0.2, note: 'LONG NARROW BLADE, HAIRY BASE' },
  form: { type: 'grass', height: 1.15, count: 32, droop: 0.5, stems: 2, flower: { type: 'plume', size: 1.0, color: 2 } },
  seasons: [
    { id: 'dormant', label: "DRY TUSSOCKS", from: 0, to: 90, g: [0.8, 0.8], desc: "Dry tussocks; fire may sweep through." },
    { id: 'regrowth', label: "REGROWTH", from: 90, to: 180, g: [0.8, 1], desc: "Green shoots after the first rains." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 180, to: 270, g: [1, 1], desc: "Tall leafy tussocks." },
    { id: 'bloom', label: "IN FLOWER", from: 270, to: 360, g: [1, 0.9], desc: "Flower sprays over the savanna." },
  ],
  beds: [{ plantedDay: -1800 }],
});
