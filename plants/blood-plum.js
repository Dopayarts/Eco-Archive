EA.addSpecies('blood-plum', {
  name: "BLOOD PLUM", short: "BLOOD PLUM", latin: "Haematostaphis barteri", family: "Anacardiaceae (cashew family)",
  origin: "Savanna of West and Central Africa; wild in Borno, Adamawa and Taraba States",
  added: '2026-11-07',
  kind: 'perennial',
  summary: "A wild savanna tree about 8 m tall with crooked bark and spreading branches. Feather leaves of 6-12 pairs of reddish-brown leaflets. It flowers in the dry season and bears bunches of blood-red fruits 2-5 cm long, with thin edible pulp and an oily seed.",
  facts: ["TREE ABOUT 8 M", "BARK GIVES CLEAR GUM", "FLOWERS IN DRY SEASON", "FRUITS BLOOD RED", "PULP RESINOUS, EDIBLE"],
  uses: [
    ["FOOD", "The thin pulp is eaten and the seed kernel is oily and edible."],
    ["VEGETABLE", "In parts of Adamawa and Taraba the leaves season soup, and they are fed to animals."],
  ],
  history: "Nigerian researchers studying fruit from Zing in Taraba State have suggested the pulp and seed oil could become commercial foods.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, compound: 'pinnate', leaflets: 15, note: 'PAIRED LEAFLETS, REDDISH' },
  form: { type: 'tree', height: 1.0, trunk: 0.55, branches: 10, nodes: 5, spread: 0.3, stemW: 0.06, leafSize: 1.8, arrange: 'alternate', flower: { type: 'cluster', size: 0.8, color: 3 }, fruit: { type: 'berry', size: 0.9, color: 1 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 90, g: [0.8, 0.8], desc: "Flowers in the dry season." },
    { id: 'fruiting', label: "RED FRUITS", from: 90, to: 180, g: [0.8, 1], desc: "Blood-red fruit bunches." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 180, to: 330, g: [1, 1], desc: "Feathery crown." },
    { id: 'dormant', label: "LEAF FALL", from: 330, to: 360, g: [1, 0.8], desc: "Leaves thin." },
  ],
  beds: [{ plantedDay: -5400 }],
});
