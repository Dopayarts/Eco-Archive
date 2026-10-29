EA.addSpecies('christmas-bush', {
  name: "CHRISTMAS BUSH", short: "XMAS BUSH", latin: "Alchornea cordifolia", family: "Euphorbiaceae (spurge family)",
  origin: "West and Central Africa; wet places and fallows in southern Nigeria",
  added: '2026-10-29',
  kind: 'perennial',
  summary: "A straggling evergreen shrub or small tree up to 8 m with large, heart-based, toothed leaves. Male and female flowers grow on separate plants. The two-lobed capsules turn from green to red and hold bright red seeds.",
  facts: ["SHRUB OR TREE UP TO 8 M", "LEAVES BIG, HEART-BASED", "MALE AND FEMALE PLANTS", "CAPSULE GREEN TO RED", "SEEDS BRIGHT RED"],
  uses: [
    ["FARMING", "Field tests in Nigeria found it a promising alley crop; leaves feed goats and poultry."],
    ["DYE", "Fishermen use leaves and fruit to dye and preserve nets."],
    ["MEDICINE", "Leaves are widely used in remedies for coughs, wounds and fever."],
  ],
  history: "Christmas bush is one of the most-used medicinal shrubs of West and Central Africa, and is common in moist bush fallows.",
  leaf: { shape: 'heart', len: 1, wid: 0.65, serr: 0.1, note: 'BIG OVAL LEAF, HEART-SHAPED BASE, TOOTHED' },
  form: { type: 'shrub', height: 1.05, trunk: 0.2, branches: 9, nodes: 6, spread: 0.36, stemW: 0.035, leafSize: 1.6, arrange: 'alternate', droop: 0.2, flower: { type: 'spike', size: 0.9, color: 2 }, fruit: { type: 'berry', size: 2.0, color: 3 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 90, g: [1, 1], desc: "Flower spikes in the dry season." },
    { id: 'fruiting', label: "FRUITING", from: 90, to: 180, g: [1, 1], desc: "Capsules redden and split." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 180, to: 360, g: [1, 1], desc: "Dense evergreen thicket." },
  ],
  beds: [{ plantedDay: -1800 }],
});
