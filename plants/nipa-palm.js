EA.addSpecies('nipa-palm', {
  name: "NIPA PALM", short: "NIPA", latin: "Nypa fruticans", family: "Arecaceae (palm family)",
  origin: "South and South-east Asia; introduced to the Niger Delta in the early 1900s",
  added: '2026-10-26',
  kind: 'perennial',
  summary: "A trunkless palm whose stem creeps under the mud, sending up huge, stiff, feather-shaped fronds straight from the swamp. Round heads of woody fruits grow on short stalks near the ground.",
  facts: ["NO TRUNK ABOVE GROUND", "FRONDS UP TO 9 M", "GROWS IN TIDAL MUD", "FRUITS IN A ROUND WOODY HEAD", "INVASIVE IN THE NIGER DELTA"],
  uses: [
    ["BUILDING", "Fronds are used for thatch, mats and umbrellas."],
    ["FOOD", "The flower stalk is tapped and the young nuts are eaten."],
  ],
  history: "Nipa was brought to the Niger Delta in the early 1900s to stop coastal erosion. Between 2007 and 2017 its cover grew almost sevenfold as native mangroves declined.",
  leaf: { shape: 'lance', len: 1, wid: 0.12, compound: 'pinnate', leaflets: 16, note: 'HUGE STIFF FEATHER FROND, NARROW LEAFLETS' },
  form: { type: 'palm', height: 1.2, trunk: 0.02, count: 10, leafSize: 2.4, droop: 0.15, stemW: 0.1, flower: { type: 'spike', size: 1.0, color: 3 }, fruit: { type: 'big', size: 1.3, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 120, g: [1, 1], desc: "Fronds rise from the mud." },
    { id: 'bloom', label: "IN FLOWER", from: 120, to: 180, g: [1, 1], desc: "Flower heads on short stalks." },
    { id: 'fruiting', label: "FRUITING", from: 180, to: 330, g: [1, 1], desc: "Woody fruit heads swell." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 330, to: 360, g: [1, 1], desc: "New fronds unfold." },
  ],
  beds: [{ plantedDay: -3600 }],
});
