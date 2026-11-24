EA.addSpecies('millettia', {
  name: "MILLETTIA", latin: "Millettia thonningii", family: "Fabaceae (pea family)",
  origin: "West Africa; grows across Nigeria from Ibadan, Ife and Ogbomoso to Lokoja and Zaria",
  local: "TURBURKU (HAUSA), ITO (YORUBA)",
  added: '2026-11-24',
  kind: 'perennial',
  summary: "A deciduous tree up to 20 m with a short trunk, a dense crown and smooth grey bark. Pinnate leaves carry 3-4 pairs of leaflets. Blue, mauve or purple pea flowers hang in sprays 12-22 cm long, followed by flat woody pods 12-15 cm long with black seeds.",
  facts: ["TREE TO 20 M", "SMOOTH GREY BARK", "PURPLE FLOWER SPRAYS", "WOODY PODS", "FIXES NITROGEN"],
  uses: [
    ["FARM", "Its leaves feed cattle and sheep; it fixes nitrogen, shades crops and makes yam stakes and living fences."],
    ["BEES", "Its flowers give nectar for honey."],
    ["MEDICINE", "Root and bark are boiled to expel worms and as a laxative; leaf extract is used for diarrhoea."],
    ["CAUTION", "The leaf juice is poisonous and is used to kill water snails."],
  ],
  history: "It flowers between November and March, with sprays of purple flowers among the new leaves.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, compound: 'pinnate', note: '3-4 PAIRS OF LEAFLETS' },
  form: { type: 'tree', height: 1.3, trunk: 0.45, branches: 8, nodes: 5, spread: 0.24, stemW: 0.08, leafSize: 1.0, arrange: 'alternate', droop: 0.15, flower: { type: 'spike', size: 0.7, color: 2 }, fruit: { type: 'pod', size: 0.8, color: 1 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 150, g: [1, 1], desc: "Purple flower sprays." },
    { id: 'fruiting', label: "PODDING", from: 150, to: 330, g: [1, 1], desc: "Woody pods ripen." },
    { id: 'rest', label: "RESTING", from: 330, to: 360, g: [1, 1], desc: "Pods ready to collect." },
  ],
  beds: [{ plantedDay: -3000 }],
});
