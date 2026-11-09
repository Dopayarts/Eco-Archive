EA.addSpecies('piliostigma', {
  name: "PILIOSTIGMA", short: "PILIO", latin: "Piliostigma reticulatum", family: "Fabaceae (legume family)",
  origin: "Sahel and Sudan savanna from Senegal and Mauritania east to Sudan, including Nigeria's semi-arid north",
  added: '2026-11-09',
  kind: 'perennial',
  summary: "A shrub or small tree up to 10 m with deeply cracked grey bark. Its leathery leaves are split into two lobes like a hoof. White flowers striped with pink are followed by long, woody pods that do not split open.",
  facts: ["TREE UP TO 10 M", "BARK DEEPLY CRACKED", "LEAVES TWO-LOBED", "FLOWERS WHITE, PINK STRIPES", "PODS 15-30 CM"],
  uses: [
    ["FODDER", "Farmers sell the leaves, pods and branches to herders as cattle feed."],
    ["FIBRE", "The bark is twisted into string for tying roof rafters and making baskets and mats; a bark brew dyes bogolan cloth."],
    ["MEDICINE", "Leaves are used for coughs and rheumatism, and bark brews for wounds."],
  ],
  history: "A close cousin of camel's foot (Piliostigma thonningii), it grows further north in the dry Sahel, where fields of millet grown with it have richer soil.",
  leaf: { shape: 'heart', len: 1, wid: 1.0, note: 'LEATHERY LEAF CLEFT INTO TWO LOBES' },
  form: { type: 'tree', height: 0.95, trunk: 0.3, branches: 9, nodes: 5, spread: 0.42, stemW: 0.06, leafSize: 1.3, arrange: 'alternate', droop: 0.2, flower: { type: 'cluster', size: 0.9, color: 3 }, fruit: { type: 'pod', size: 1.4, hang: true, color: 1 } },
  seasons: [
    { id: 'fruiting', label: "PODS", from: 0, to: 90, g: [0.8, 0.7], desc: "Woody pods hang on the branches." },
    { id: 'dormant', label: "LEAVES THIN", from: 90, to: 150, g: [0.7, 0.6], desc: "Dry-season leaf fall." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 150, to: 270, g: [1, 1], desc: "Full leaf through the rains." },
    { id: 'bloom', label: "IN FLOWER", from: 270, to: 360, g: [1, 1], desc: "Striped white flowers." },
  ],
  beds: [{ plantedDay: -3200 }],
});
