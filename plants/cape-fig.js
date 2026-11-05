EA.addSpecies('cape-fig', {
  name: "CAPE FIG", latin: "Ficus sur", family: "Moraceae (fig family)",
  origin: "Across tropical Africa from Cape Verde to Somalia and South Africa, including Nigeria",
  added: '2026-11-05',
  kind: 'perennial',
  summary: "A fast-growing fig tree, usually 5-12 m but up to 35 m, with white latex and a broad spreading crown. Large leaves with toothed edges come out shiny red. Figs 2-4 cm across hang in big clusters straight from the trunk and older branches, ripening red to orange.",
  facts: ["TREE 5-35 M", "WHITE LATEX", "NEW LEAVES RED", "FIGS IN CLUSTERS ON TRUNK", "POLLINATED BY FIG WASPS"],
  uses: [
    ["FOOD", "Ripe figs are eaten fresh or made into jam; young leaves are cooked as a vegetable."],
    ["OTHER", "The soft wood makes mortars and utensils; the inner bark gives rope."],
    ["CAUTION", "Some root and bark brews used as medicine have caused deaths."],
  ],
  history: "Each fig is a closed bundle of flowers. Tiny fig wasps crawl in to pollinate them and lay their eggs.",
  leaf: { shape: 'oval', len: 1, wid: 0.6, serr: 0.2, note: 'LARGE LEAF, TOOTHED EDGE' },
  form: { type: 'tree', height: 1.2, trunk: 0.45, branches: 11, nodes: 6, spread: 0.4, stemW: 0.08, leafSize: 2.0, arrange: 'alternate', flower: { type: 'none' }, fruit: { type: 'berry', size: 1.0, color: 1 } },
  seasons: [
    { id: 'fruiting', label: "FIG CLUSTERS", from: 0, to: 120, g: [1, 1], desc: "Clusters of figs on the trunk." },
    { id: 'regrowth', label: "RED NEW LEAVES", from: 120, to: 180, g: [1, 1], desc: "Shiny red new leaves." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 180, to: 300, g: [1, 1], desc: "Broad crown." },
    { id: 'fruiting', label: "FIG CLUSTERS", from: 300, to: 360, g: [1, 1], desc: "Figs ripen red." },
  ],
  beds: [{ plantedDay: -7200 }],
});
