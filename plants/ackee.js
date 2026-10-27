EA.addSpecies('ackee', {
  name: "ACKEE", latin: "Blighia sapida", family: "Sapindaceae (soapberry family)",
  origin: "West Africa; forest and savanna of south-western Nigeria",
  added: '2026-10-27',
  kind: 'perennial',
  summary: "A spreading evergreen tree with leaves of several pairs of glossy leaflets. Pear-shaped fruits ripen red and split into three, showing shiny black seeds sitting on creamy-white flesh. Only the flesh of naturally opened fruit is eaten; unripe fruit is poisonous.",
  facts: ["TREE UP TO 25 M", "LEAVES PINNATE, GLOSSY", "FRUIT RED, SPLITS IN THREE", "BLACK SEEDS, CREAMY ARIL", "UNRIPE FRUIT IS POISONOUS"],
  uses: [
    ["FOOD", "The creamy aril is eaten, sometimes cooked with vegetables, in Ondo, Osun and Oyo."],
    ["HOUSEHOLD", "Parts of the tree are used for washing and building."],
    ["WOOD", "Felled for timber, which has made it scarce."],
  ],
  history: "Ackee is a West African tree. It was carried to Jamaica, where ackee and saltfish became the national dish.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, compound: 'pinnate', leaflets: 8, note: 'PINNATE LEAF, 3-5 PAIRS OF GLOSSY LEAFLETS' },
  form: { type: 'tree', height: 1.3, trunk: 0.4, branches: 11, nodes: 5, spread: 0.38, stemW: 0.07, leafSize: 2.0, arrange: 'alternate', flower: { type: 'cluster', size: 0.9, color: 3 }, fruit: { type: 'big', size: 1.0, hang: true, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 60, g: [1, 1], desc: "Evergreen crown." },
    { id: 'bloom', label: "IN BLOOM", from: 60, to: 120, g: [1, 1], desc: "Small scented white flowers." },
    { id: 'fruiting', label: "FRUITING", from: 120, to: 240, g: [1, 1], desc: "Red fruits ripen and split open." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 240, to: 360, g: [1, 1], desc: "Dense shade." },
  ],
  beds: [{ plantedDay: -7200 }],
});
