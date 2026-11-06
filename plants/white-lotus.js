EA.addSpecies('white-lotus', {
  name: "WHITE LOTUS", latin: "Nymphaea lotus", family: "Nymphaeaceae (water-lily family)",
  origin: "Africa and South-East Asia; common in Nigerian lakes, floodplains and dams",
  added: '2026-11-06',
  kind: 'perennial',
  summary: "A water lily rooted in mud by a spongy rhizome. Round, heart-based leaves with toothed edges float flat on long flexible stalks. Showy white flowers about 20 cm across, with yellow stamens, stand above the water. After pollination the stalks coil and pull the flowers under.",
  facts: ["ROOTED WATER LILY", "LEAVES FLOAT, TOOTHED", "FLOWERS WHITE, 20 CM", "STAMENS YELLOW", "FRUIT RIPENS UNDERWATER"],
  uses: [
    ["FOOD", "Nigerian researchers have studied the food value of its seeds and rhizomes from Kainji Lake and Ibadan."],
    ["ORNAMENT", "It is grown in ponds and aquariums."],
  ],
  history: "It is one of the commonest water plants in Nigerian fresh water. The white Egyptian lotus is the national flower of Egypt.",
  leaf: { shape: 'round', len: 1, wid: 1, serr: 0.25, note: 'ROUND FLOATING LEAF, TOOTHED' },
  form: { type: 'rosette', height: 0.3, count: 8, leafSize: 1.8, droop: 0.9, flower: { type: 'single', size: 1.8, color: 3 } },
  seasons: [
    { id: 'vegetative', label: "DRY SEASON", from: 0, to: 90, g: [0.7, 0.7], desc: "Fewer leaves as the water drops." },
    { id: 'regrowth', label: "NEW LEAVES", from: 90, to: 150, g: [0.7, 1], desc: "New pads as the water rises." },
    { id: 'bloom', label: "IN FLOWER", from: 150, to: 300, g: [1, 1], desc: "White flowers above the water." },
    { id: 'fruiting', label: "FRUITING", from: 300, to: 360, g: [1, 0.8], desc: "Fruits ripen underwater." },
  ],
  beds: [{ plantedDay: -1440 }],
});
