EA.addSpecies('yellow-wood', {
  name: "YELLOW WOOD", short: "YELLOWWOOD", latin: "Annickia chlorantha", family: "Annonaceae (custard apple family)",
  origin: "Lowland forest of southern Nigeria and western Cameroon, also found in Liberia",
  added: '2026-11-12',
  kind: 'perennial',
  summary: "A forest tree up to 25 m of lowland forest and roadsides. Its papery to leathery leaves are 7-28 cm long with pointed tips, brown to grey-green above and paler and softly hairy beneath.",
  facts: ["TREE UP TO 25 M", "LEAVES 7-28 CM", "POINTED LEAF TIPS", "HAIRY BENEATH", "BARK USED FOR MALARIA"],
  uses: [
    ["MEDICINE", "In Nigeria and Cameroon the bark is boiled for malaria, jaundice, typhoid and hepatitis."],
    ["RESEARCH", "Oil from its stem bark and leaves has been widely studied."],
    ["STATUS", "Rated Least Concern, though its bark is much harvested."],
  ],
  history: "It was long known as Enantia chlorantha; the genus was renamed Annickia after the botanist Annick Le Thomas.",
  leaf: { shape: 'lance', len: 1, wid: 0.35, note: 'LONG POINTED LEAF, PALE BENEATH' },
  form: { type: 'tree', height: 1.2, trunk: 0.55, branches: 9, nodes: 5, spread: 0.3, stemW: 0.07, leafSize: 1.7, arrange: 'alternate', droop: 0.2, flower: { type: 'single', size: 0.8, color: 3 }, fruit: { type: 'berry', size: 1.0, color: 1 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 90, g: [1, 1], desc: "Flowers open." },
    { id: 'fruiting', label: "FRUITING", from: 90, to: 220, g: [1, 1], desc: "Fruits ripen." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 220, to: 360, g: [1, 1], desc: "Evergreen through the rains." },
  ],
  beds: [{ plantedDay: -4000 }],
});
