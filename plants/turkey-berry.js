EA.addSpecies('turkey-berry', {
  name: "TURKEY BERRY", short: "TURKEYBERY", latin: "Solanum torvum", family: "Solanaceae (nightshade family)",
  origin: "Central and South America; now a pantropical shrub found in Nigeria",
  added: '2026-10-29',
  kind: 'perennial',
  summary: "A prickly, spreading shrub up to 3-4 m with big, lobed leaves. Bunches of white, star-shaped flowers are followed by clusters of small, round berries, green turning yellow, like tiny eggplants.",
  facts: ["SHRUB 3-4 M", "STEMS WITH HOOKED PRICKLES", "LEAVES LARGE, LOBED", "FLOWERS WHITE STARS", "BERRIES SMALL, IN CLUSTERS"],
  uses: [
    ["FOOD", "The bitter berries go into soups and sauces."],
    ["FARMING", "Used as a rootstock for eggplant on soils with root-knot nematodes."],
    ["RESEARCH", "Fruit extracts showed wide antimicrobial activity in Nigerian tests."],
  ],
  history: "Turkey berry is a relative of the garden egg. It came from the Americas and now grows wild across the tropics.",
  leaf: { shape: 'oval', len: 1, wid: 0.7, compound: 'palmate', leaflets: 5, note: 'LARGE SOFT LEAF, SHALLOWLY LOBED, PRICKLES ON VEINS' },
  form: { type: 'shrub', height: 1.0, trunk: 0.2, branches: 9, nodes: 5, spread: 0.34, stemW: 0.035, leafSize: 1.5, arrange: 'alternate', flower: { type: 'cluster', size: 1.2, color: 3 }, fruit: { type: 'berry', size: 2.0, color: 2 } },
  seasons: [
    { id: 'bloom', label: "IN BLOOM", from: 0, to: 90, g: [1, 1], desc: "Bunches of white stars." },
    { id: 'fruiting', label: "BERRIES", from: 90, to: 210, g: [1, 1], desc: "Berry clusters swell." },
    { id: 'bloom', label: "IN BLOOM", from: 210, to: 300, g: [1, 1], desc: "Flowers return in the rains." },
    { id: 'fruiting', label: "BERRIES", from: 300, to: 360, g: [1, 1], desc: "More berries ripen." },
  ],
  beds: [{ plantedDay: -1800 }],
});
