EA.addSpecies('danta', {
  name: "DANTA", latin: "Nesogordonia papaverifera", family: "Malvaceae (mallow family)",
  origin: "West tropical Africa from Senegal to Nigeria and Gabon, in semi-deciduous forest",
  local: "OTUTU (NIGERIAN TRADE NAME)",
  added: '2026-11-13',
  kind: 'perennial',
  summary: "A large deciduous tree up to 35-45 m with sharp buttresses up to 4 m and a straight trunk bare for 20-25 m. Small woody capsules 2-3 cm split open to release dark seeds.",
  facts: ["TREE UP TO 45 M", "SHARP BUTTRESSES", "STRAIGHT TALL TRUNK", "WOODY 2-3 CM CAPSULE", "TWIGS CLEAN TEETH"],
  uses: [
    ["TIMBER", "Its reddish-brown wood, sold as kotibe, is used for floors, joinery, tool handles and furniture."],
    ["TEETH", "Twigs are chewing sticks for teeth and gums."],
    ["MEDICINE", "The leaves are used for mouth problems, and the bark gives fibre."],
  ],
  history: "It fruits from December to March. It is rated Vulnerable and becoming rare from habitat loss.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, note: 'SIMPLE LEAF' },
  form: { type: 'tree', height: 1.4, trunk: 0.65, branches: 8, nodes: 5, spread: 0.28, stemW: 0.08, leafSize: 1.2, arrange: 'alternate', droop: 0.15, flower: { type: 'single', size: 0.6, color: 3 }, fruit: { type: 'berry', size: 0.8, color: 1 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 30, g: [1, 0.9], desc: "Flowers open." },
    { id: 'fruiting', label: "CAPSULES", from: 30, to: 150, g: [0.9, 0.8], desc: "Fruits December to March." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 150, to: 330, g: [0.8, 1], desc: "Full crown." },
    { id: 'regrowth', label: "BUDDING", from: 330, to: 360, g: [1, 1], desc: "Flower buds form." },
  ],
  beds: [{ plantedDay: -6000 }],
});
