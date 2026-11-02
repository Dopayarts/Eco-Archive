EA.addSpecies('african-oilnut', {
  name: "AFRICAN OILNUT", short: "OILNUT", latin: "Ricinodendron heudelotii", family: "Euphorbiaceae (spurge family)",
  origin: "African forest from Senegal to Kenya and Angola, including Nigeria",
  added: '2026-11-02',
  kind: 'perennial',
  summary: "A fast tree up to 30 m with a straight trunk and candelabra crown. Hand-shaped leaves have 5-7 thin leaflets. Male and female trees bear pale flowers; female trees give 2-3 lobed fruits that ripen black, each lobe with one round seed.",
  facts: ["TREE UP TO 30 M", "CANDELABRA CROWN", "LEAVES HAND-SHAPED", "FRUIT 2-3 LOBED, BLACK", "WOOD VERY LIGHT"],
  uses: [
    ["FOOD", "The oily seeds are ground to flavour and thicken soups and stews."],
    ["WOOD", "Very light wood for carving, utensils and drums in southern Nigeria."],
    ["GAME", "In Igbo areas the seeds are counters in a mancala game."],
  ],
  history: "Its kernels are exported from Cameroon under the trade name ndjanssang.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, compound: 'palmate', leaflets: 5, note: 'HAND-SHAPED LEAF, 5-7 THIN LEAFLETS' },
  form: { type: 'tree', height: 1.4, trunk: 0.55, branches: 8, nodes: 4, spread: 0.4, stemW: 0.08, leafSize: 1.9, arrange: 'alternate', flower: { type: 'cluster', size: 0.9, color: 3 }, fruit: { type: 'berry', size: 2.0, color: 1 } },
  seasons: [
    { id: 'dormant', label: "LEAVES FALL", from: 0, to: 60, g: [0.7, 0.5], desc: "Briefly bare in the dry season." },
    { id: 'bloom', label: "IN FLOWER", from: 60, to: 150, g: [0.5, 1], desc: "Pale flower sprays, April-May." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 150, to: 240, g: [1, 1], desc: "Full crown." },
    { id: 'fruiting', label: "FRUITING", from: 240, to: 330, g: [1, 1], desc: "Fruits ripen black, September-October." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 330, to: 360, g: [1, 0.7], desc: "Leaves start to fall." },
  ],
  beds: [{ plantedDay: -5400 }],
});
