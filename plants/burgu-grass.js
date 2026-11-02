EA.addSpecies('burgu-grass', {
  name: "BURGU GRASS", short: "BURGU", latin: "Echinochloa stagnina", family: "Poaceae (grass family)",
  origin: "Wetlands across tropical Africa; floating mats on Kainji Lake, Nigeria",
  added: '2026-11-02',
  kind: 'perennial',
  summary: "A water grass up to 2.5 m, or far longer when floating, with thick spongy stems that root at the joints. The stems grow to keep up with rising floods and form big floating mats. Flower heads carry long-bristled spikelets.",
  facts: ["WATER GRASS", "STEMS SPONGY, FLOATING", "GROWS WITH THE FLOOD", "STEMS SWEET", "FORMS FLOATING MATS"],
  uses: [
    ["FODDER", "A key dry-season grazing for herds in West Africa."],
    ["FOOD", "The sweet stems are chewed and boiled down for sugar and drinks; the grain is a hunger food."],
    ["FISH", "On Kainji Lake its floating mats feed and shelter spawning fish."],
  ],
  history: "Burgu meadows feed huge herds on the inner Niger floodplains in the dry season.",
  leaf: { shape: 'blade', len: 1, wid: 0.15, note: 'LONG FLAT GRASS BLADE, ROUGH EDGE' },
  form: { type: 'grass', height: 1.05, count: 22, droop: 0.55, stems: 5, flower: { type: 'plume', size: 1.0, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "GRAZED MEADOW", from: 0, to: 90, g: [0.8, 0.8], desc: "Herds graze the meadows." },
    { id: 'regrowth', label: "REGROWTH", from: 90, to: 180, g: [0.8, 1], desc: "New shoots as water rises." },
    { id: 'vegetative', label: "FLOATING MATS", from: 180, to: 300, g: [1, 1], desc: "Stems float on the flood." },
    { id: 'bloom', label: "FLOWERING", from: 300, to: 360, g: [1, 0.9], desc: "Flower heads as water falls." },
  ],
  beds: [{ plantedDay: -720 }],
});
