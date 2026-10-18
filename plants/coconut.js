EA.addSpecies('coconut', {
  name: "COCONUT", latin: "Cocos nucifera", family: "Arecaceae (palm family)",
  origin: "Tropical Asia and Pacific shores; grown along Nigeria's coast and inland in the south",
  local: "AGBON (YORUBA), KWAKWA (HAUSA)",
  added: '2026-10-17',
  kind: 'perennial',
  summary: "A tall palm with a slender, often leaning, ringed trunk and a crown of long feather-shaped fronds. Branching flower clusters grow among the frond bases, followed by bunches of big green or yellow nuts full of water and white flesh.",
  facts: ["PALM 15-30 M", "TRUNK SLENDER, RINGED, OFTEN CURVED", "FRONDS PINNATE, 4-6 M LONG", "NUTS IN BUNCHES, WATER AND WHITE FLESH", "NUTS FLOAT AND SPREAD BY SEA"],
  uses: [
    ["FOOD", "Coconut water is drunk fresh; the flesh is eaten, made into coconut candy, coconut rice and oil."],
    ["CRAFT", "Fronds make brooms (the ribs) and thatch; husk fibre (coir) makes rope and mats."],
  ],
  history: "Coconuts spread across tropical shores both by floating and with sailors. Nigeria's coastline from Badagry to Calabar is lined with them.",
  leaf: { shape: 'lance', len: 1, wid: 0.2, compound: 'pinnate', leaflets: 14, note: 'LONG PINNATE FROND, MANY NARROW DROOPING LEAFLETS' },
  form: { type: 'palm', height: 1.5, trunk: 0.7, count: 11, leafSize: 1.9, droop: 0.6, stemW: 0.06, flower: { type: 'cluster', size: 1, color: 3 }, fruit: { type: 'big', size: 1.1, color: 1 } },
  seasons: [
    { id: 'fruiting', label: "FRUITING", from: 0, to: 360, g: [1, 1], desc: "Coconut palms flower and fruit all year; a new bunch forms almost every month." },
  ],
  beds: [{ plantedDay: -2880 }],
});
