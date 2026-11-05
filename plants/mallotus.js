EA.addSpecies('mallotus', {
  name: "MALLOTUS", latin: "Mallotus oppositifolius", family: "Euphorbiaceae (spurge family)",
  origin: "Africa from Senegal to Ethiopia, including Nigeria, and Madagascar",
  added: '2026-11-05',
  kind: 'perennial',
  summary: "A shrub or small tree up to 6 m, rarely 13 m, with male and female flowers on separate plants. Leaves are in pairs, broad, with three main veins from the base. Fragrant flowers without petals give small three-lobed capsules.",
  facts: ["SHRUB UP TO 6 M", "LEAVES IN PAIRS", "3 VEINS FROM LEAF BASE", "FLOWERS SCENTED, NO PETALS", "CAPSULES 3-LOBED"],
  uses: [
    ["MEDICINE", "Leaf or bark brews are used for tapeworm and diarrhoea; crushed leaves go on cuts, sores and burns."],
    ["CHEWING STICK", "Twigs are used as chewing sticks, and stems as yam stakes."],
    ["FODDER", "Cattle browse it."],
  ],
  history: "In Nigeria it grows in forest undergrowth and thickets, and as a weed in rice fields. Bees and butterflies pollinate it.",
  leaf: { shape: 'heart', len: 1, wid: 0.7, serr: 0.15, note: 'BROAD LEAF, 3 VEINS FROM BASE' },
  form: { type: 'shrub', height: 0.8, trunk: 0.1, branches: 8, nodes: 5, spread: 0.32, stemW: 0.03, leafSize: 1.1, arrange: 'opposite', flower: { type: 'spike', size: 0.8, color: 3 }, fruit: { type: 'berry', size: 0.6, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "DRY SEASON", from: 0, to: 120, g: [1, 1], desc: "Leafy thicket." },
    { id: 'bloom', label: "IN FLOWER", from: 120, to: 210, g: [1, 1], desc: "Scented flower spikes." },
    { id: 'fruiting', label: "CAPSULES", from: 210, to: 330, g: [1, 1], desc: "Three-lobed capsules." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 330, to: 360, g: [1, 1], desc: "Leafy thicket." },
  ],
  beds: [{ plantedDay: -1800 }],
});
