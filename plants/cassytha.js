EA.addSpecies('cassytha', {
  name: "CASSYTHA", latin: "Cassytha filiformis", family: "Lauraceae (laurel family)",
  origin: "Tropics worldwide; used by several peoples in Nigeria and gathered near the ABU dam, Zaria",
  local: "RUMFAR GADA (HAUSA)",
  added: '2026-11-24',
  kind: 'perennial',
  summary: "A leafless, parasitic vine with thin, smooth, green to orange stems that wind over other plants. Its leaves are only tiny 1 mm scales near the tips. Small flowers sit in short clusters.",
  facts: ["PARASITIC VINE", "LEAFLESS", "GREEN-ORANGE STEMS", "TINY SCALE LEAVES", "SLIGHTLY BITTER"],
  uses: [
    ["MEDICINE", "In Nigeria it is used to expel worms, for jaundice and to stop milk flow after a stillbirth."],
    ["DYE", "Women use its extract as a black dye."],
    ["CAUTION", "A Minna study found it slowed weight gain and raised cholesterol in rats, and it holds traces of metals."],
  ],
  history: "It has no roots of its own once grown; it lives by tapping its host plants.",
  leaf: { shape: 'thread', len: 1, wid: 0.05, note: 'LEAFLESS STEM' },
  form: { type: 'vine', height: 0.8, branches: 6, nodes: 8, arrange: 'alternate', leafSize: 0.2, droop: 0.3, flower: { type: 'cluster', size: 0.3, color: 3 }, fruit: { type: 'berry', size: 0.3, color: 3 } },
  seasons: [
    { id: 'vegetative', label: "SPREADING", from: 0, to: 150, g: [1, 1], desc: "Stems wind over hosts." },
    { id: 'bloom', label: "IN FLOWER", from: 150, to: 270, g: [1, 1], desc: "Small flowers." },
    { id: 'fruiting', label: "FRUITING", from: 270, to: 360, g: [1, 1], desc: "Small fruits." },
  ],
  beds: [{ plantedDay: -300 }],
});
