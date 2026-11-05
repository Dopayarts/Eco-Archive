EA.addSpecies('sandbox-tree', {
  name: "SANDBOX TREE", short: "SANDBOX", latin: "Hura crepitans", family: "Euphorbiaceae (spurge family)",
  origin: "Native to tropical America; planted and naturalised in Nigeria",
  added: '2026-11-05',
  kind: 'perennial',
  summary: "A tall evergreen tree whose trunk is covered in sharp, crowded spines. Large oval leaves up to 60 cm. Red flowers without petals: male ones on long spikes, female ones single. Pumpkin-shaped capsules explode when ripe and hurl flat seeds up to 100 m.",
  facts: ["TALL EVERGREEN TREE", "TRUNK COVERED IN SPINES", "LEAVES UP TO 60 CM", "FLOWERS RED", "FRUITS EXPLODE"],
  uses: [
    ["OIL", "Nigerian researchers have studied the seed oil for biodiesel and soap."],
    ["MEDICINE", "It is used for skin problems, stomach upsets and coughs."],
    ["CAUTION", "The milky sap and seeds are poisonous; the sap was used as fish and arrow poison."],
  ],
  history: "Unripe capsules were once sawn in half to hold sand for drying ink, hence the name sandbox tree.",
  leaf: { shape: 'heart', len: 1, wid: 0.8, serr: 0.1, note: 'LARGE OVAL LEAF' },
  form: { type: 'tree', height: 1.3, trunk: 0.55, branches: 10, nodes: 6, spread: 0.36, stemW: 0.08, leafSize: 1.9, arrange: 'alternate', flower: { type: 'spike', size: 1.0, color: 1 }, fruit: { type: 'big', size: 0.8, color: 2 } },
  seasons: [
    { id: 'fruiting', label: "EXPLODING PODS", from: 0, to: 90, g: [1, 1], desc: "Ripe pods burst with a bang." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 90, to: 210, g: [1, 1], desc: "Dense evergreen crown." },
    { id: 'bloom', label: "IN FLOWER", from: 210, to: 300, g: [1, 1], desc: "Red flower spikes." },
    { id: 'fruiting', label: "PODS SWELL", from: 300, to: 360, g: [1, 1], desc: "Pumpkin-shaped pods." },
  ],
  beds: [{ plantedDay: -5400 }],
});
