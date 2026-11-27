EA.addSpecies('centro', {
  name: "CENTRO", latin: "Centrosema pubescens", family: "Fabaceae (pea family)",
  origin: "Central and South America; grown and tested as fodder in Nigeria, at Ibadan and in the northern lowlands",
  added: '2026-11-27',
  kind: 'perennial',
  summary: "A vigorous trailing, twining and climbing perennial legume up to about 45 cm high, with roots up to 30 cm deep. Leaves have three leaflets, dark green above and whitish below. Pale violet pea flowers with darker veins give pods of round seeds about 4 mm.",
  facts: ["TWINING LEGUME", "THREE LEAFLETS", "PALE VIOLET FLOWERS", "COVER CROP", "CATTLE FODDER"],
  uses: [
    ["FODDER", "At Ibadan it was tested as early dry-season feed, and it is fed to cattle and broiler chickens."],
    ["FARM", "It is planted as a cover crop under tree crops."],
    ["CAUTION", "It is not fit for people to eat."],
  ],
  history: "Also called butterfly pea. It flowers when the days are short.",
  leaf: { shape: 'oval', len: 1, wid: 0.8, compound: 'trifoliate', note: 'THREE LEAFLETS' },
  form: { type: 'vine', height: 0.5, branches: 4, nodes: 8, arrange: 'alternate', leafSize: 0.7, droop: 0.4, flower: { type: 'single', size: 0.5, color: 2 }, fruit: { type: 'pod', size: 0.6, color: 1 } },
  seasons: [
    { id: 'regrowth', label: "RAINY GROWTH", from: 150, to: 270, g: [0.6, 1], desc: "Vines spread." },
    { id: 'bloom', label: "IN FLOWER", from: 270, to: 330, g: [1, 1], desc: "Violet pea flowers." },
    { id: 'fruiting', label: "PODDING", from: 330, to: 360, g: [1, 1], desc: "Long pods." },
    { id: 'rest', label: "DRY REST", from: 0, to: 150, g: [1, 0.7], desc: "Growth slows." },
  ],
  beds: [{ plantedDay: -500 }],
});
