EA.addSpecies('water-mimosa', {
  name: "WATER MIMOSA", short: "WATERMIMOS", latin: "Neptunia oleracea", family: "Fabaceae (pea family)",
  origin: "Tropics worldwide; native in Nigeria",
  added: '2026-11-28',
  kind: 'perennial',
  summary: "A perennial water legume whose stems float on spongy white tissue and spread 1-1.5 m across the water from a thick taproot. Feathery twice-pinnate leaves fold when touched. Tiny greenish-yellow flowers crowd round heads, followed by flat pods 2.5-5 cm.",
  facts: ["FLOATING LEGUME", "SPONGY STEMS", "TOUCH-SHY LEAVES", "YELLOW BALL FLOWERS", "FLAT PODS"],
  uses: [
    ["FOOD", "Its shoots, leaves and pods are eaten raw or cooked in Southeast Asia."],
    ["MEDICINE", "Stem and root juice are used in folk medicine."],
    ["CAUTION", "It can spread as a weed and choke still waters."],
  ],
  history: "Also called sensitive neptunia. On land it grows a smaller rooted form.",
  leaf: { shape: 'oval', len: 1, wid: 0.3, compound: 'bipinnate', note: 'FOLDS WHEN TOUCHED' },
  form: { type: 'herb', height: 0.3, branches: 5, nodes: 7, arrange: 'alternate', leafSize: 0.8, droop: 0.5, flower: { type: 'head', size: 0.4, color: 'yellow' }, fruit: { type: 'pod', size: 0.4, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 150, to: 240, g: [0.6, 1], desc: "Stems spread on the water." },
    { id: 'bloom', label: "IN FLOWER", from: 240, to: 300, g: [1, 1], desc: "Yellow ball flowers." },
    { id: 'fruiting', label: "PODDING", from: 300, to: 360, g: [1, 1], desc: "Flat pods." },
    { id: 'rest', label: "DRY REST", from: 0, to: 150, g: [1, 0.6], desc: "Waters shrink." },
  ],
  beds: [{ plantedDay: -400 }],
});
