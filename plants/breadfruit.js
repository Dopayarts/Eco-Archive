EA.addSpecies('breadfruit', {
  name: "BREADFRUIT", short: "BREADFRT", latin: "Artocarpus altilis", family: "Moraceae (fig family)",
  origin: "The Pacific islands; grown in southern Nigeria, e.g. around Ile-Ife",
  added: '2026-10-18',
  kind: 'perennial',
  summary: "A spreading evergreen tree with milky sap and huge, thick, glossy leaves cut deeply into finger-like lobes. Club-shaped male flowers and round female heads grow on the same tree, and the big round green fruits have a bumpy skin and starchy flesh.",
  facts: ["TREE 12-20 M", "LEAVES HUGE, DEEPLY LOBED", "MILKY WHITE SAP", "FRUIT ROUND, GREEN, BUMPY, STARCHY", "NOT THE SAME AS UKWA (AFRICAN BREADFRUIT)"],
  uses: [
    ["FOOD", "The starchy fruit is boiled, roasted or fried like yam; it is studied in Nigeria as a flour."],
    ["WOOD", "Light timber and the sap was once used as glue."],
  ],
  history: "Breadfruit was carried across the Pacific by Polynesian voyagers and later to the Caribbean and Africa. In Nigeria the name breadfruit is also used for ukwa, a different tree.",
  leaf: { shape: 'lance', len: 1, wid: 0.5, compound: 'palmate', leaflets: 7, note: 'HUGE LEAF, DEEPLY CUT INTO POINTED LOBES' },
  form: { type: 'tree', height: 1.4, trunk: 0.4, branches: 8, nodes: 3, spread: 0.32, stemW: 0.06, leafSize: 2.0, arrange: 'alternate', flower: { type: 'single', size: 1, color: 2 }, fruit: { type: 'big', size: 1.4, hang: true, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 60, g: [1, 1], desc: "Evergreen growth." },
    { id: 'bloom', label: "IN BLOOM", from: 60, to: 120, g: [1, 1], desc: "Male clubs and round female heads appear." },
    { id: 'fruiting', label: "FRUIT GROWING", from: 120, to: 210, g: [1, 1], desc: "Round green fruits swell." },
    { id: 'harvest', label: "FRUIT SEASON", from: 210, to: 300, g: [1, 1], desc: "Mature fruits are picked before they soften." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 300, to: 360, g: [1, 1], desc: "Evergreen growth." },
  ],
  beds: [{ plantedDay: -3600 }],
});
