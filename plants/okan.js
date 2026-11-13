EA.addSpecies('okan', {
  name: "OKAN", latin: "Cylicodiscus gabunensis", family: "Fabaceae (legume family)",
  origin: "Rainforest of western and west-central Africa from Ivory Coast to the Central African Republic and Congo",
  added: '2026-11-13',
  kind: 'perennial',
  summary: "A giant tree up to 60 m. Leaves are twice-pinnate. Yellowish or greenish-white flowers grow on spikes. The flat pods can reach about 90 cm long.",
  facts: ["TREE UP TO 60 M", "TWICE-PINNATE LEAVES", "FLOWER SPIKES", "PODS UP TO 90 CM", "VERY HEAVY WOOD"],
  uses: [
    ["TIMBER", "Its very heavy, durable wood is sold as okan or African greenheart."],
    ["BOATS", "In Nigeria it is used for making pontoons."],
  ],
  history: "In Nigeria it flowers twice a year, February to April and June to September.",
  leaf: { shape: 'oval', len: 1, wid: 0.4, compound: 'bipinnate', leaflets: 8, note: 'TWICE-PINNATE LEAF' },
  form: { type: 'tree', height: 1.5, trunk: 0.6, branches: 9, nodes: 5, spread: 0.3, stemW: 0.09, leafSize: 1.0, arrange: 'alternate', droop: 0.15, flower: { type: 'spike', size: 0.8, color: 3 }, fruit: { type: 'pod', size: 1.3, hang: true, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 90, g: [1, 1], desc: "Dry season crown." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 180, g: [1, 1], desc: "Flowers February to April." },
    { id: 'fruiting', label: "PODS", from: 180, to: 360, g: [1, 1], desc: "Long pods; a second flowering June to September." },
  ],
  beds: [{ plantedDay: -7000 }],
});
