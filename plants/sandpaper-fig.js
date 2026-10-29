EA.addSpecies('sandpaper-fig', {
  name: "SANDPAPER FIG", short: "SANDPAPER", latin: "Ficus exasperata", family: "Moraceae (fig family)",
  origin: "Tropical Africa; forest edges and farms across southern Nigeria",
  added: '2026-10-29',
  kind: 'perennial',
  summary: "A fig tree whose oval leaves are so rough on both sides they feel like sandpaper. Small figs grow in pairs in the leaf joints, turning yellow, orange or red when ripe.",
  facts: ["TREE UP TO 20 M", "LEAVES ROUGH AS SANDPAPER", "FIGS IN PAIRS", "FIGS RIPEN RED-ORANGE", "FRUITS IN THE DRY SEASON"],
  uses: [
    ["CRAFT", "Leaves are used to sand and polish wood, metal and ivory."],
    ["FOOD", "In Nigeria fresh leaves are added to palm fruit during milling to improve the oil."],
    ["FODDER", "Leaves and young twigs are good, protein-rich fodder."],
  ],
  history: "The sandpaper fig is pollinated by its own tiny wasp, as all figs are, and is often left as shade in cocoa and banana farms.",
  leaf: { shape: 'oval', len: 1, wid: 0.55, serr: 0.08, note: 'ROUGH OVAL LEAF, LIKE SANDPAPER ON BOTH SIDES' },
  form: { type: 'tree', height: 1.2, trunk: 0.35, branches: 11, nodes: 5, spread: 0.38, stemW: 0.07, leafSize: 2.2, arrange: 'alternate', flower: { type: 'none' }, fruit: { type: 'berry', size: 2.0, color: 3 } },
  seasons: [
    { id: 'fruiting', label: "FIGS", from: 0, to: 90, g: [1, 1], desc: "Paired figs ripen in the dry season." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 90, to: 300, g: [1, 1], desc: "Rough-leaved crown through the rains." },
    { id: 'fruiting', label: "FIGS", from: 300, to: 360, g: [1, 1], desc: "New figs set." },
  ],
  beds: [{ plantedDay: -5400 }],
});
