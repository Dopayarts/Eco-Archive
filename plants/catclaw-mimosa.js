EA.addSpecies('catclaw-mimosa', {
  name: "CATCLAW MIMOSA", short: "CATCLAW", latin: "Mimosa pigra", family: "Fabaceae (legume family)",
  origin: "Native to tropical America from Mexico to Argentina; now a serious weed of wet places in Africa, present in Nigeria",
  added: '2026-11-09',
  kind: 'perennial',
  summary: "A prickly, woody shrub up to 6 m, a giant cousin of touch-me-not. Its feathery leaves fold up when touched and at nightfall. Fluffy pink to mauve flower balls give hairy pods that break into one-seeded pieces which float away on water.",
  facts: ["SHRUB UP TO 6 M", "PRICKLY STEMS", "LEAVES FOLD AT A TOUCH", "PINK FLOWER BALLS", "SEEDS LIVE 23+ YEARS"],
  uses: [
    ["MEDICINE", "In tropical Africa it is used as a tonic and for diarrhoea; the seed is used for tooth troubles."],
    ["FUEL", "Dried stems are gathered as firewood around reservoirs."],
    ["CAUTION", "One of the world's 100 worst invasive species; it forms thorny thickets along rivers and dams. Do not plant it."],
  ],
  history: "Linnaeus described it twice, as two species, because its leaves vary; the names were later merged. In northern Australia it now covers about 80,000 hectares of floodplain.",
  leaf: { shape: 'blade', len: 1, wid: 0.25, compound: 'bipinnate', leaflets: 17, note: 'BIPINNATE LEAF THAT FOLDS WHEN TOUCHED' },
  form: { type: 'shrub', height: 0.95, branches: 6, nodes: 6, trunk: 0.2, spread: 0.4, arrange: 'alternate', leafSize: 0.9, droop: 0.25, flower: { type: 'head', size: 0.9, color: 3 }, fruit: { type: 'pod', size: 0.9, color: 1 } },
  seasons: [
    { id: 'fruiting', label: "PODS", from: 0, to: 90, g: [1, 0.8], desc: "Hairy pods break into pieces." },
    { id: 'dormant', label: "DRY", from: 90, to: 150, g: [0.8, 0.7], desc: "Growth slows in the heat." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 150, to: 240, g: [1, 1], desc: "Fast growth in the rains." },
    { id: 'bloom', label: "IN FLOWER", from: 240, to: 360, g: [1, 1], desc: "Pink flower balls." },
  ],
  beds: [{ plantedDay: -1500 }],
});
