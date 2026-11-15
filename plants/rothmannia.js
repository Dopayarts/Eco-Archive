EA.addSpecies('rothmannia', {
  name: "ROTHMANNIA", latin: "Rothmannia longiflora", family: "Rubiaceae (coffee family)",
  origin: "Forest undergrowth from Gambia east to Sudan and Kenya and south to Tanzania and Angola, including Nigeria",
  added: '2026-11-15',
  kind: 'perennial',
  summary: "A shrub or small tree up to 9 m, often with climbing stems. Leaves grow in opposite pairs. Single scented trumpet flowers, white and purple, can be over 25 cm long. The fruit is a green-blackish berry full of seeds.",
  facts: ["SHRUB UP TO 9 M", "CLIMBING STEMS", "TRUMPET FLOWERS", "FLOWERS OVER 25 CM", "FRUIT MARKS SKIN"],
  uses: [
    ["BODY ART", "Fruits are used to make blue-black markings on the hands, face and body, like a tattoo."],
    ["DYE", "In Nigeria the crushed seeds make a dye and ink called katambiri; roots are used for bowel complaints."],
    ["FOOD", "The fruits are edible, and stems make tool handles and spear shafts."],
  ],
  history: "Its showy, scented flowers make it worth growing as an ornamental. In Ghana its twigs are chewing sticks.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, note: 'SMOOTH LEAVES IN PAIRS' },
  form: { type: 'shrub', height: 0.9, branches: 6, nodes: 6, trunk: 0.3, spread: 0.35, arrange: 'opposite', leafSize: 0.8, droop: 0.3, flower: { type: 'single', size: 1.4, color: 3 }, fruit: { type: 'berry', size: 0.9, color: 1 } },
  seasons: [
    { id: 'rest', label: "DRY SPELL", from: 0, to: 90, g: [0.9, 0.8], desc: "Growth slows." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 160, g: [0.8, 1], desc: "Long trumpet flowers." },
    { id: 'fruiting', label: "FRUITING", from: 160, to: 270, g: [1, 1], desc: "Dark fruits ripen." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 270, to: 360, g: [1, 1], desc: "Leafy shoots." },
  ],
  beds: [{ plantedDay: -1500 }],
});
