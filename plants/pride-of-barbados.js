EA.addSpecies('pride-of-barbados', {
  name: "PRIDE OF BARBADOS", short: "PRIDE", latin: "Caesalpinia pulcherrima", family: "Fabaceae (pea family)",
  origin: "Tropical America; introduced to Nigeria as an ornamental",
  added: '2026-10-24',
  kind: 'perennial',
  summary: "A prickly shrub with feathery, twice-divided leaves. Upright sprays of flowers in red and yellow have long red stamens curling out of them. Flat pods follow and split open when dry.",
  facts: ["SHRUB 2-3 M", "LEAVES FEATHERY, BIPINNATE", "FLOWERS RED AND YELLOW", "STAMENS LONG, RED", "PODS FLAT, SPLITTING"],
  uses: [
    ["GARDEN", "Planted for its flowers in gardens and along roads."],
    ["WARNING", "Seeds are poisonous."],
  ],
  history: "Pride of Barbados is the national flower of Barbados and appears on its coat of arms.",
  leaf: { shape: 'oval', len: 0.8, wid: 0.5, compound: 'bipinnate', note: 'FEATHERY TWICE-PINNATE LEAF, SMALL LEAFLETS' },
  form: { type: 'shrub', height: 0.95, trunk: 0.2, branches: 9, nodes: 5, spread: 0.32, stemW: 0.03, leafSize: 1.2, arrange: 'alternate', flower: { type: 'spike', size: 1.5, color: 3 }, fruit: { type: 'pod', size: 0.9, color: 2 } },
  seasons: [
    { id: 'bloom', label: "IN BLOOM", from: 0, to: 90, g: [1, 1], desc: "Red and yellow sprays." },
    { id: 'fruiting', label: "PODS", from: 90, to: 150, g: [1, 1], desc: "Flat pods split and drop seeds." },
    { id: 'bloom', label: "IN BLOOM", from: 150, to: 360, g: [1, 1], desc: "Flowers through the rains." },
  ],
  beds: [{ plantedDay: -1800 }],
});
