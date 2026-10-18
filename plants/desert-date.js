EA.addSpecies('desert-date', {
  name: "DESERT DATE", short: "ADUWA", latin: "Balanites aegyptiaca", family: "Zygophyllaceae (caltrop family)",
  origin: "Dry Africa and Arabia; common in the savanna and Sahel of northern Nigeria",
  local: "ADUWA (HAUSA)",
  added: '2026-10-18',
  kind: 'perennial',
  summary: "A tough, thorny savanna tree with long green spines and small leaves in pairs. Clusters of small, fragrant, greenish-yellow flowers become date-like fruits with a bittersweet sticky pulp around a hard stone.",
  facts: ["TREE 6-10 M, VERY THORNY", "LEAVES IN PAIRS OF 2 LEAFLETS", "FLOWERS SMALL, GREENISH-YELLOW, SCENTED", "FRUIT DATE-LIKE, YELLOW-BROWN, HARD STONE", "STAYS GREEN IN THE DRY SEASON"],
  uses: [
    ["FOOD", "The fruit pulp is eaten; leaves are cooked or eaten raw, and boiled seeds give an edible oil."],
    ["MEDICINE", "Used widely in northern Nigerian traditional medicine."],
    ["WOOD", "Hard wood for tool handles, and thorny branches for fencing."],
  ],
  history: "A key famine food in the Sahel: in Kano State its fruit, seeds, oil and even flowers are eaten when harvests fail.",
  leaf: { shape: 'oval', len: 0.8, wid: 0.55, compound: 'trifoliate', leaflets: 2, note: 'LEAF OF 2 LEATHERY OVAL LEAFLETS, LONG GREEN THORNS' },
  form: { type: 'tree', height: 1.2, trunk: 0.45, branches: 8, nodes: 4, spread: 0.3, stemW: 0.045, leafSize: 1.4, arrange: 'alternate', droop: 0.45, flower: { type: 'cluster', size: 1.3, color: 3 }, fruit: { type: 'big', size: 0.7, hang: true, color: 2 } },
  seasons: [
    { id: 'bloom', label: "IN BLOOM", from: 0, to: 90, g: [1, 1], desc: "Scented flowers open in the dry season." },
    { id: 'fruiting', label: "FRUIT GROWING", from: 90, to: 240, g: [1, 1], desc: "Green fruits swell and turn yellow-brown." },
    { id: 'harvest', label: "DATE SEASON", from: 240, to: 330, g: [1, 1], desc: "Ripe fruits fall and are gathered." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 330, to: 360, g: [1, 1], desc: "Evergreen, shedding only a few leaves." },
  ],
  beds: [{ plantedDay: -5400 }],
});
