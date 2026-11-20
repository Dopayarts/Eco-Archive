EA.addSpecies('gaude', {
  name: "GAUDE", latin: "Gardenia erubescens", family: "Rubiaceae (coffee family)",
  origin: "Woodland savanna from Senegal to Sudan and Uganda, including northern Nigeria",
  local: "GAUDE (HAUSA), DINGALLI (FULANI), KINGERR (KANURI)",
  added: '2026-11-20',
  kind: 'perennial',
  summary: "A shrub or small tree up to 3 m with glossy, leathery leaves in tufts at the ends of short branches. White or pale yellow tube flowers grow singly or in small clusters, and the pale yellow fruits are 3-8 cm long.",
  facts: ["SHRUB TO 3 M", "GLOSSY LEAF TUFTS", "WHITE TUBE FLOWERS", "YELLOW FRUIT 3-8 CM", "HARD YELLOW WOOD"],
  uses: [
    ["FOOD", "The fruit is eaten, for example in Kano State."],
    ["MEDICINE", "In northern Nigeria decoctions are used for gonorrhoea, stomach trouble and loss of appetite; the Hausa use roots and fruits as an aphrodisiac."],
    ["CAUTION", "A rat study found its stem bark extract harmed the liver and kidneys; use with care."],
  ],
  history: "It is a cousin of the gardenia and aqualla already in the archive.",
  leaf: { shape: 'oval', len: 1, wid: 0.6, note: 'GLOSSY LEATHERY LEAF' },
  form: { type: 'shrub', height: 0.7, branches: 7, nodes: 5, trunk: 0.3, spread: 0.3, arrange: 'opposite', leafSize: 0.7, droop: 0.1, flower: { type: 'single', size: 0.9, color: 3 }, fruit: { type: 'berry', size: 0.9, color: 3 } },
  seasons: [
    { id: 'rest', label: "DRY REST", from: 0, to: 120, g: [1, 1], desc: "Growth slows." },
    { id: 'bloom', label: "IN FLOWER", from: 120, to: 200, g: [1, 1], desc: "White tube flowers." },
    { id: 'fruiting', label: "FRUITING", from: 200, to: 320, g: [1, 1], desc: "Yellow fruits." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 320, to: 360, g: [1, 1], desc: "Leaf tufts." },
  ],
  beds: [{ plantedDay: -1500 }],
});
