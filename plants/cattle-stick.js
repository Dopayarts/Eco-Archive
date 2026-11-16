EA.addSpecies('cattle-stick', {
  name: "CATTLE STICK", short: "CATTLESTIK", latin: "Carpolobia lutea", family: "Polygalaceae (milkwort family)",
  origin: "Rainforest and Guinea savanna from Sierra Leone to Cameroon, including southern Nigeria",
  local: "IKPAFUM (IBIBIO), AGBA (IGBO), EGBO OSHUNSHUN (YORUBA)",
  added: '2026-11-16',
  kind: 'perennial',
  summary: "An evergreen shrub or small tree up to 5 m, often a dense thicket. Small leaves are 2-7.5 cm with hairy midribs. Bright flowers come one or two together, followed by yellow or red fruits with hairy seeds.",
  facts: ["SHRUB UP TO 5 M", "DENSE THICKETS", "SMALL HAIRY LEAVES", "YELLOW OR RED FRUIT", "TERMITE-PROOF WOOD"],
  uses: [
    ["TEETH", "Its stems are chewing sticks; in the Efik area men chew the roots and stems at night."],
    ["FOOD", "The leaves are eaten as a vegetable and the fruit is edible."],
    ["MEDICINE", "In Nigeria the root is used for childbirth, worms and headache, and the bark as a snuff for migraine."],
  ],
  history: "Also called poor man's candle. Its wood is made into household utensils.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, note: 'SMALL LEAF, 2-7.5 CM' },
  form: { type: 'shrub', height: 0.8, branches: 7, nodes: 6, trunk: 0.25, spread: 0.38, arrange: 'alternate', leafSize: 0.85, droop: 0.2, flower: { type: 'single', size: 0.6, color: 1 }, fruit: { type: 'berry', size: 0.7, color: 3 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 90, g: [1, 1], desc: "Evergreen." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 150, g: [1, 1], desc: "Bright flowers." },
    { id: 'fruiting', label: "FRUITING", from: 150, to: 260, g: [1, 1], desc: "Yellow-red fruits." },
    { id: 'regrowth', label: "NEW LEAVES", from: 260, to: 360, g: [1, 1], desc: "Fresh leaves." },
  ],
  beds: [{ plantedDay: -1500 }],
});
