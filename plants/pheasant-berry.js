EA.addSpecies('pheasant-berry', {
  name: "PHEASANT BERRY", short: "PHEASANT", latin: "Margaritaria discoidea", family: "Phyllanthaceae (leafflower family)",
  origin: "Tropical Africa; a Nigerian medicinal plant, studied from a bio reserve in Nigeria",
  added: '2026-11-21',
  kind: 'perennial',
  summary: "A tree up to 30 m in forest, or a shrub in drier open places. Rough, flaking bark is grey-brown above and reddish beneath. Male and female trees bear small, fragrant, greenish-yellow flowers, and the 10 mm three-lobed capsules hold a metallic blue-green inside.",
  facts: ["TREE TO 30 M", "FLAKING BARK", "MALE AND FEMALE TREES", "FRAGRANT FLOWERS", "BLUE-GREEN INSIDE"],
  uses: [
    ["MEDICINE", "Bark is a purgative in West Africa and is used for toothache."],
    ["MALARIA", "A Nigerian study found two of its compounds active against malaria in the lab."],
    ["FARM", "Extracts killed cattle ticks in trials, and the dried leaves feed sheep."],
    ["CAUTION", "It contains securinine and phyllochrysine, which stimulate the nervous system."],
  ],
  history: "Also called egossa red pear and bushveld peacock-berry. Guineafowl and francolins eat its seeds.",
  leaf: { shape: 'oval', len: 1, wid: 0.55, note: 'LEAVES IN ONE PLANE' },
  form: { type: 'tree', height: 1.4, trunk: 0.5, branches: 8, nodes: 5, spread: 0.24, stemW: 0.08, leafSize: 1.0, arrange: 'alternate', droop: 0.15, flower: { type: 'cluster', size: 0.4, color: 3 }, fruit: { type: 'berry', size: 0.4, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 150, g: [1, 1], desc: "Leafy crown." },
    { id: 'bloom', label: "IN FLOWER", from: 150, to: 240, g: [1, 1], desc: "Small greenish flowers." },
    { id: 'fruiting', label: "FRUITING", from: 240, to: 330, g: [1, 1], desc: "Three-lobed capsules." },
    { id: 'rest', label: "RESTING", from: 330, to: 360, g: [1, 1], desc: "Growth slows." },
  ],
  beds: [{ plantedDay: -6000 }],
});
