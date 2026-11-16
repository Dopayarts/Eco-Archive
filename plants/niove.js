EA.addSpecies('niove', {
  name: "NIOVE", latin: "Staudtia kamerunensis", family: "Myristicaceae (nutmeg family)",
  origin: "Tropical Africa from Nigeria, the western edge of its range, east to Uganda and south to Angola and Zambia",
  added: '2026-11-16',
  kind: 'perennial',
  summary: "An evergreen tree up to 35-40 m with narrow buttresses. Reddish-grey bark flakes off in round orange patches, and the crimson inner bark bleeds dark red sap. Tiny flowers sit in reddish-brown balls. Yellow fruits split to show a seed wrapped in a red or pink aril.",
  facts: ["TREE UP TO 40 M", "ORANGE BARK PATCHES", "DARK RED SAP", "BALL-LIKE FLOWER HEADS", "RED-COATED SEED"],
  uses: [
    ["TIMBER", "Its hard, heavy wood resists fungi and termites, and is used for floors, furniture, ships and railway sleepers."],
    ["MEDICINE", "Bark and sap are used in Central African medicine; seeds treat skin diseases."],
    ["FOOD", "The seed aril is edible."],
  ],
  history: "Its French name, arbre a pagaies, means paddle tree.",
  leaf: { shape: 'lance', len: 1, wid: 0.35, note: 'NARROW LEAF, 5-16 CM' },
  form: { type: 'tree', height: 1.3, trunk: 0.55, branches: 9, nodes: 5, spread: 0.3, stemW: 0.08, leafSize: 1.2, arrange: 'alternate', droop: 0.15, flower: { type: 'head', size: 0.6, color: 1 }, fruit: { type: 'berry', size: 0.9, color: 3 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 90, g: [1, 1], desc: "Evergreen crown." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 150, g: [1, 1], desc: "Reddish flower balls." },
    { id: 'fruiting', label: "FRUITING", from: 150, to: 270, g: [1, 1], desc: "Fruits split." },
    { id: 'regrowth', label: "NEW LEAVES", from: 270, to: 360, g: [1, 1], desc: "Fresh leaves." },
  ],
  beds: [{ plantedDay: -6000 }],
});
