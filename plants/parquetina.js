EA.addSpecies('parquetina', {
  name: "PARQUETINA", short: "PARQUETINA", latin: "Parquetina nigrescens", family: "Apocynaceae (dogbane family)",
  origin: "Common across West and Central Africa, including Nigeria; often on ant-hills in secondary forest",
  local: "OGBO (YORUBA)",
  added: '2026-11-07',
  kind: 'perennial',
  summary: "A climbing liana up to about 8 m with a woody base and plenty of latex. Glossy leaves in pairs. Showy flowers are dark red to violet in the centre with a pale crown. Paired pods hold seeds with tufts of white hairs. The plant turns black when it dries.",
  facts: ["CLIMBER UP TO 8 M", "MILKY LATEX", "LEAVES GLOSSY, PAIRED", "FLOWERS DARK RED CENTRE", "TURNS BLACK WHEN DRY"],
  uses: [
    ["MEDICINE", "In Nigeria it is part of a herbal tonic sold for anaemia; leaf and root brews are used for diarrhoea, diabetes and skin disease."],
    ["FIBRE", "The inner bark makes fishing nets and lines."],
    ["CAUTION", "The latex is very toxic and has caused deaths; it burns the skin and may blind."],
  ],
  history: "Its Yoruba name, ewe ogbo, is said to mean the leaf that hears, and it is used in incantations.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, note: 'GLOSSY LEAF, NEARLY STALKLESS' },
  form: { type: 'vine', height: 1.05, nodes: 12, leafSize: 1.5, droop: 0.3, flower: { type: 'cluster', size: 1.0, color: 1 }, fruit: { type: 'pod', size: 0.9, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "DRY SEASON", from: 0, to: 90, g: [0.8, 0.8], desc: "Leafy stems." },
    { id: 'regrowth', label: "REGROWTH", from: 90, to: 180, g: [0.8, 1], desc: "Grows fast in the rains." },
    { id: 'bloom', label: "IN FLOWER", from: 180, to: 270, g: [1, 1], desc: "Dark-centred flowers." },
    { id: 'fruiting', label: "PAIRED PODS", from: 270, to: 360, g: [1, 0.9], desc: "Pods release silky seeds." },
  ],
  beds: [{ plantedDay: -2160 }],
});
