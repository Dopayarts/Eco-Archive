EA.addSpecies('monkey-kola', {
  name: "MONKEY KOLA", latin: "Cola lepidota (syn. C. pachycarpa)", family: "Malvaceae (mallow family)",
  origin: "West and Central African forests; south-eastern Nigeria",
  local: "OCHICHA (IGBO)",
  added: '2026-10-17',
  kind: 'perennial',
  summary: "A small forest tree with large, hand-shaped compound leaves of long leaflets. Its knobbly pods split to show seeds wrapped in sweet, juicy, orange-yellow pulp, eaten fresh in season.",
  facts: ["SMALL TREE 5-15 M", "LEAVES PALMATE, LONG LEAFLETS", "FLOWERS SMALL, ON OLD WOOD", "PODS KNOBBLY, IN STAR-SHAPED CLUSTERS", "PULP ORANGE, SWEET"],
  uses: [
    ["FOOD", "The sweet pulp around the seeds is eaten fresh; it is sold in markets in the south-east."],
    ["TRADITIONAL", "Seeds are studied for antimicrobial activity; evidence is early."],
  ],
  history: "Several wild kola relatives are called monkey kola because monkeys eat them too. They remain mostly forest and farm-edge trees, not orchard crops.",
  leaf: { shape: 'lance', len: 1, wid: 0.3, compound: 'palmate', leaflets: 5, note: 'PALMATE LEAF, 5-7 LONG LEAFLETS' },
  form: { type: 'tree', height: 1.25, trunk: 0.4, branches: 6, nodes: 4, spread: 0.28, stemW: 0.04, leafSize: 1.9, arrange: 'alternate', flower: { type: 'cluster', size: 0.6, color: 3 }, fruit: { type: 'big', size: 0.9, hang: true, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "DRY SEASON", from: 0, to: 60, g: [1, 1], desc: "Evergreen in the forest shade." },
    { id: 'bloom', label: "IN BLOOM", from: 60, to: 120, g: [1, 1], desc: "Small flowers on the trunk and old branches." },
    { id: 'fruiting', label: "PODS GROWING", from: 120, to: 210, g: [1, 1], desc: "Knobbly pods swell." },
    { id: 'harvest', label: "FRUIT SEASON", from: 210, to: 290, g: [1, 1], desc: "Ripe pods split; the sweet orange pulp is eaten." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 290, to: 360, g: [1, 1], desc: "Growth in the late rains." },
  ],
  beds: [{ plantedDay: -2880 }],
});
