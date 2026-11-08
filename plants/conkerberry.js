EA.addSpecies('conkerberry', {
  name: "CONKERBERRY", short: "CONKERBERY", latin: "Carissa spinarum", family: "Apocynaceae (dogbane family)",
  origin: "Tropical Africa, southern Asia and Australia; collected wild near Zaria in northern Nigeria",
  local: "CIZAKI (HAUSA)",
  added: '2026-11-08',
  kind: 'perennial',
  summary: "A thorny, many-stemmed shrub 0.5-3 m tall with thorns 1-3 cm long. Small glossy leaves grow in pairs. White star-shaped flowers about 1 cm across give berries that ripen from green to black or dark purple.",
  facts: ["THORNY SHRUB TO 3 M", "THORNS 1-3 CM", "LEAVES SMALL, GLOSSY", "FLOWERS WHITE STARS", "BERRIES RIPEN BLACK"],
  uses: [
    ["MEDICINE", "In northern Nigeria it is used for epilepsy, headache, chest complaints and rheumatism, and as a diuretic."],
    ["FOOD", "Fully ripe berries are eaten."],
    ["CAUTION", "The milky sap and unripe fruit are poisonous."],
  ],
  history: "The Hausa also call it lemun tsuntsu. In Australia the same plant is eaten as a bush food called the currant bush.",
  leaf: { shape: 'oval', len: 1, wid: 0.6, note: 'SMALL GLOSSY LEAF IN PAIRS' },
  form: { type: 'shrub', height: 0.7, trunk: 0.05, branches: 9, nodes: 6, spread: 0.32, stemW: 0.03, leafSize: 1.0, arrange: 'opposite', flower: { type: 'single', size: 0.8, color: 3 }, fruit: { type: 'berry', size: 0.6, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "DRY SEASON", from: 0, to: 90, g: [0.9, 0.9], desc: "Thorny evergreen bush." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 180, g: [0.9, 1], desc: "White star flowers." },
    { id: 'fruiting', label: "BERRIES", from: 180, to: 300, g: [1, 1], desc: "Berries ripen black." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 300, to: 360, g: [1, 0.9], desc: "Glossy leaves." },
  ],
  beds: [{ plantedDay: -2160 }],
});
