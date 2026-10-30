EA.addSpecies('winter-thorn', {
  name: "WINTER THORN", short: "GAWO", latin: "Faidherbia albida", family: "Fabaceae (legume family)",
  origin: "Africa and the Middle East; farmland trees of northern Nigeria",
  local: "GAWO (HAUSA)",
  added: '2026-10-30',
  kind: 'perennial',
  summary: "A thorny tree up to 30 m with pale branchlets and feathery leaves of many tiny leaflets. Unusually, it drops its leaves in the rainy season and grows them back in the dry season. Cream flower spikes give curled orange pods.",
  facts: ["TREE UP TO 30 M", "LEAFLESS IN THE RAINS", "GREEN IN THE DRY SEASON", "PODS ORANGE, CURLED", "FIXES NITROGEN"],
  uses: [
    ["FARMING", "Kept on farms because crops grow well under it: falling leaves feed the soil and the bare tree does not shade crops in the rains."],
    ["FODDER", "Pods fall late in the dry season and feed cattle, sheep and goats."],
  ],
  history: "In Kano State farmers keep gawo trees in their fields. Its upside-down leaf season has made it a favourite for farming with trees.",
  leaf: { shape: 'oval', len: 1, wid: 0.4, compound: 'bipinnate', leaflets: 10, note: 'FEATHERY BIPINNATE LEAF, TINY GREY-GREEN LEAFLETS' },
  form: { type: 'tree', height: 1.4, trunk: 0.4, branches: 11, nodes: 5, spread: 0.45, stemW: 0.07, leafSize: 1.6, arrange: 'alternate', flower: { type: 'spike', size: 1.0, color: 3 }, fruit: { type: 'pod', size: 1.2, hang: true, color: 3 } },
  seasons: [
    { id: 'bloom', label: "IN LEAF, FLOWERING", from: 0, to: 60, g: [1, 1], desc: "Green and flowering in the harmattan." },
    { id: 'fruiting', label: "PODS FALL", from: 60, to: 120, g: [1, 0.6], desc: "Orange pods drop for livestock." },
    { id: 'dormant', label: "LEAFLESS IN THE RAINS", from: 120, to: 270, g: [0.4, 0.4], desc: "Leaves drop as the rains start." },
    { id: 'regrowth', label: "NEW LEAVES", from: 270, to: 360, g: [0.4, 1], desc: "Leaves return as the rains end." },
  ],
  beds: [{ plantedDay: -7200 }],
});
