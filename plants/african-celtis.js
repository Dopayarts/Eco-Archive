EA.addSpecies('african-celtis', {
  name: "AFRICAN CELTIS", short: "CELTIS", latin: "Celtis zenkeri", family: "Cannabaceae (hemp family)",
  origin: "From Guinea east to southern Sudan and Ethiopia, south to DR Congo, Tanzania and Angola, including Nigeria",
  added: '2026-11-14',
  kind: 'perennial',
  summary: "A deciduous tree up to 30-50 m with a long bare trunk. Smooth silvery-grey to pale brown bark flakes in round patches. Simple leaves are 6-15 cm long. Tiny greenish flowers give small drupes that turn reddish.",
  facts: ["TREE UP TO 30-50 M", "BARK FLAKES IN PATCHES", "LEAVES 6-15 CM", "FLOWERS SMALL, GREEN", "FRUIT TURNS REDDISH"],
  uses: [
    ["FOOD", "In Nigeria the leaves are recorded as edible, and they feed livestock."],
    ["TIMBER", "The wood, traded as ohia, goes into building, floors, furniture and tool handles, and is excellent firewood."],
    ["SOIL", "Its fallen leaves work as green manure."],
  ],
  history: "In Nigeria it flowers from February to April and fruits from March to May. Birds and monkeys eat the fruits and spread the seeds.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, note: 'OVATE LEAF, 6-15 CM' },
  form: { type: 'tree', height: 1.4, trunk: 0.6, branches: 9, nodes: 5, spread: 0.3, stemW: 0.08, leafSize: 1.2, arrange: 'alternate', droop: 0.15, flower: { type: 'cluster', size: 0.5, color: 2 }, fruit: { type: 'berry', size: 0.6, color: 1 } },
  seasons: [
    { id: 'dormant', label: "LEAVES FALL", from: 0, to: 90, g: [0.7, 0.6], desc: "Bare in the dry season." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 150, g: [0.6, 1], desc: "Flowers February to April." },
    { id: 'fruiting', label: "RED FRUITS", from: 150, to: 210, g: [1, 1], desc: "Fruits March to May." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 210, to: 360, g: [1, 1], desc: "Full crown." },
  ],
  beds: [{ plantedDay: -6000 }],
});
