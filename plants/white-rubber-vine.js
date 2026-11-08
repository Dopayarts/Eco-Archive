EA.addSpecies('white-rubber-vine', {
  name: "RUBBER VINE", short: "RUBBERVINE", latin: "Landolphia owariensis", family: "Apocynaceae (dogbane family)",
  origin: "Tropical Africa from Guinea to Sudan and Tanzania; rainforest of southern Nigeria",
  added: '2026-11-08',
  kind: 'perennial',
  summary: "A woody liana that can climb over 70 m into the trees, though in open savanna it stays a bush. Rough bark bleeds milky latex. Glossy leaves in pairs come out reddish. Small white flowers that age yellow give round, orange-like fruits with sweet pulp around a few seeds.",
  facts: ["LIANA OVER 70 M", "MILKY LATEX", "NEW LEAVES REDDISH", "FLOWERS SMALL, WHITE", "FRUIT ROUND, SWEET PULP"],
  uses: [
    ["FOOD", "The ripe fruit's sweet pulp is popular in south-eastern Nigeria, and the fruit is fermented into a drink."],
    ["RUBBER", "It was a major rubber source for Nigeria, Ghana and Sierra Leone in the early 1900s."],
    ["MEDICINE", "Leaf brews are used for malaria, bark for worms, and roots for gonorrhoea."],
  ],
  history: "Its underground rhizome survives bush fires. The latex was also mixed with strophanthus seed for arrow poison.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, note: 'GLOSSY LEAF, PALE MIDRIB' },
  form: { type: 'vine', height: 1.15, nodes: 13, leafSize: 1.6, droop: 0.3, flower: { type: 'cluster', size: 0.8, color: 3 }, fruit: { type: 'big', size: 0.9, color: 3 } },
  seasons: [
    { id: 'vegetative', label: "DRY SEASON", from: 0, to: 90, g: [0.9, 0.9], desc: "Glossy leaves." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 180, g: [0.9, 1], desc: "Small white flowers." },
    { id: 'fruiting', label: "ROUND FRUITS", from: 180, to: 300, g: [1, 1], desc: "Fruits ripen orange-yellow." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 300, to: 360, g: [1, 0.9], desc: "Reddish new leaves." },
  ],
  beds: [{ plantedDay: -5400 }],
});
