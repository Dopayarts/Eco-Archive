EA.addSpecies('shak-shak-tree', {
  name: "SHAK-SHAK TREE", short: "SHAK-SHAK", latin: "Albizia lebbeck", family: "Fabaceae (legume family)",
  origin: "Native to the Indian subcontinent and Myanmar; planted through the tropics, including Nigeria",
  added: '2026-11-10',
  kind: 'perennial',
  summary: "A shade tree 18-30 m tall with feathery leaves of many small leaflets. Very fragrant white powder-puff flowers are followed by flat, straw-coloured pods 15-30 cm long whose seeds rattle in the wind.",
  facts: ["TREE 18-30 M", "FEATHERY LEAVES", "FLOWERS WHITE, FRAGRANT", "PODS 15-30 CM", "SEEDS RATTLE IN PODS"],
  uses: [
    ["FODDER", "The leaves are fed to farm animals."],
    ["TIMBER", "The wood is used for building and as firewood."],
    ["SHADE", "Drought-tolerant, it is planted as a shade tree."],
    ["CAUTION", "It has become invasive in some tropical places."],
  ],
  history: "The rattling seeds give it the names shak-shak and woman's tongue tree. Linnaeus first named it Mimosa lebbeck from a description of a large tree in Egypt.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, compound: 'bipinnate', leaflets: 13, note: 'BIPINNATE LEAF, OBLONG LEAFLETS' },
  form: { type: 'tree', height: 1.2, trunk: 0.55, branches: 11, nodes: 6, spread: 0.3, stemW: 0.07, leafSize: 0.8, arrange: 'alternate', droop: 0.15, flower: { type: 'head', size: 1.0, color: 3 }, fruit: { type: 'pod', size: 1.3, hang: true, color: 2 } },
  seasons: [
    { id: 'fruiting', label: "RATTLING PODS", from: 0, to: 100, g: [0.8, 0.7], desc: "Dry pods rattle on bare-ish branches." },
    { id: 'bloom', label: "IN FLOWER", from: 100, to: 170, g: [0.7, 1], desc: "Fragrant white powder-puffs." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 170, to: 330, g: [1, 1], desc: "Dense shade in the rains." },
    { id: 'dormant', label: "LEAVES THIN", from: 330, to: 360, g: [1, 0.8], desc: "Pods form as leaves thin." },
  ],
  beds: [{ plantedDay: -4000 }],
});
