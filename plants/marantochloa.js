EA.addSpecies('marantochloa', {
  name: "MARANTOCHLOA", short: "MARANTO", latin: "Marantochloa leucantha", family: "Marantaceae (arrowroot family)",
  origin: "Tropical African forest from Guinea to Ethiopia and Angola, including Nigeria",
  added: '2026-11-06',
  kind: 'perennial',
  summary: "An upright or scrambling herb up to 4 m from a creeping rhizome, with branched stems. Lopsided oval leaves up to 25 cm long. Loose, branched sprays of small white to pink flowers give round capsules, usually bright red, holding three seeds.",
  facts: ["HERB UP TO 4 M", "STEMS BRANCHED", "LEAVES LOPSIDED OVAL", "FLOWERS WHITE TO PINK", "CAPSULES BRIGHT RED"],
  uses: [
    ["MATS", "In Nigeria the stems are woven into strong mats, and leaf veins give thread."],
    ["FOOD", "The fruit pulp is edible; goats and sheep browse the plant."],
    ["WRAPPING", "Leaves are used for thatching and wrapping."],
  ],
  history: "It grows in moist forest from sea level up to 1,500 m.",
  leaf: { shape: 'oval', len: 1, wid: 0.55, note: 'LOPSIDED OVAL LEAF' },
  form: { type: 'herb', height: 0.9, stems: 5, nodes: 6, branches: 3, arrange: 'alternate', leafSize: 1.2, droop: 0.3, flower: { type: 'cluster', size: 0.8, color: 3 }, fruit: { type: 'berry', size: 0.7, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "DRY SEASON", from: 0, to: 90, g: [0.8, 0.8], desc: "Leafy stems in shade." },
    { id: 'regrowth', label: "NEW SHOOTS", from: 90, to: 180, g: [0.8, 1], desc: "Shoots rise with the rains." },
    { id: 'bloom', label: "IN FLOWER", from: 180, to: 270, g: [1, 1], desc: "Sprays of small flowers." },
    { id: 'fruiting', label: "RED CAPSULES", from: 270, to: 360, g: [1, 0.9], desc: "Bright red capsules." },
  ],
  beds: [{ plantedDay: -1440 }],
});
