EA.addSpecies('monkey-orange', {
  name: "MONKEY ORANGE", short: "MONKEYORNG", latin: "Strychnos innocua", family: "Loganiaceae",
  origin: "Savanna of tropical Africa from Cote d'Ivoire to Ethiopia and south to Madagascar; studied in Kaduna State, Nigeria",
  added: '2026-11-20',
  kind: 'perennial',
  summary: "A small tree 3-14 m with smooth, powdery green to yellowish-white bark and leathery leaves 4-15 cm long. Small greenish-white flowers give round hard-shelled fruits 6-10 cm across that ripen yellow or orange, full of sweet-sour pulp and hard seeds.",
  facts: ["TREE 3-14 M", "POWDERY PALE BARK", "FRUIT 6-10 CM", "ORANGE WHEN RIPE", "HARD WOODY SHELL"],
  uses: [
    ["FOOD", "The sweet-sour fruit pulp is eaten; in parts of West Africa the leaves are cooked as a vegetable."],
    ["FUEL", "It makes excellent firewood that burns even when wet."],
    ["MEDICINE", "Roots are used for gonorrhoea and snakebite; fruit pulp for dysentery."],
    ["CAUTION", "The seeds and bark hold toxic alkaloids such as strychnine, and too much fruit upsets the stomach."],
  ],
  history: "Its fruit takes about a year to ripen after flowering.",
  leaf: { shape: 'oval', len: 1, wid: 0.6, note: 'LEATHERY LEAF, 3-7 BASE VEINS' },
  form: { type: 'tree', height: 0.9, trunk: 0.45, branches: 8, nodes: 5, spread: 0.3, stemW: 0.07, leafSize: 0.85, arrange: 'opposite', droop: 0.15, flower: { type: 'cluster', size: 0.5, color: 3 }, fruit: { type: 'big', size: 1.1, color: 3 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 120, g: [1, 1], desc: "Flowers in the dry season." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 120, to: 240, g: [1, 1], desc: "Leafy crown." },
    { id: 'fruiting', label: "FRUITING", from: 240, to: 360, g: [1, 1], desc: "Hard fruits ripen orange." },
  ],
  beds: [{ plantedDay: -3000 }],
});
