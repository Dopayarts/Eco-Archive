EA.addSpecies('water-hyacinth', {
  name: "WATER HYACINTH", short: "HYACINTH", latin: "Pontederia crassipes (Eichhornia crassipes)", family: "Pontederiaceae (pickerelweed family)",
  origin: "South America; invasive in Lagos lagoon and Nigerian rivers",
  added: '2026-10-25',
  kind: 'perennial',
  summary: "A floating water plant with glossy, rounded leaves on swollen, spongy stalks that keep it afloat. Feathery dark roots hang below. Spikes of pale lilac flowers have a yellow spot on the top petal.",
  facts: ["FLOATS ON WATER", "LEAF STALKS SWOLLEN, SPONGY", "FLOWERS LILAC, YELLOW SPOT", "SPREADS VERY FAST", "DISLIKES SALT WATER"],
  uses: [
    ["CRAFT", "In Lagos it is dried and woven into rope, baskets and bags."],
    ["ENERGY", "University of Lagos scientists suggest turning it into biomass fuel."],
  ],
  history: "Water hyacinth clogs the Lagos lagoon, snarls boat propellers and cuts fish catches. It spreads in the rains when the lagoon turns fresh.",
  leaf: { shape: 'round', len: 1, wid: 0.9, note: 'ROUND GLOSSY LEAF, SWOLLEN SPONGY STALK' },
  form: { type: 'rosette', height: 0.5, count: 9, leafSize: 1.4, pitch: [0.7, 1.2], droop: 0.1, flower: { type: 'spike', size: 1.3, color: 3 } },
  seasons: [
    { id: 'vegetative', label: "DRY SEASON", from: 0, to: 90, g: [0.8, 0.8], desc: "Mats shrink as the lagoon turns salty." },
    { id: 'regrowth', label: "SPREADING", from: 90, to: 180, g: [0.8, 1], desc: "Mats spread fast as fresh water rises." },
    { id: 'bloom', label: "IN BLOOM", from: 180, to: 300, g: [1, 1], desc: "Lilac flower spikes over the mats." },
    { id: 'vegetative', label: "LEAFY MATS", from: 300, to: 360, g: [1, 0.9], desc: "Dense floating mats." },
  ],
  beds: [{ plantedDay: -720 }],
});
