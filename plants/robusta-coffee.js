EA.addSpecies('robusta-coffee', {
  name: "ROBUSTA COFFEE", short: "COFFEE", latin: "Coffea canephora", family: "Rubiaceae (coffee family)",
  origin: "West and Central African forests; grown in Kogi, Ondo, Oyo and other states",
  added: '2026-10-27',
  kind: 'perennial',
  summary: "A large shrub or small tree with long, glossy, wavy-edged leaves in opposite pairs. Clusters of white, jasmine-scented flowers pack the leaf joints, followed by tight clusters of cherries that ripen red.",
  facts: ["SHRUB OR TREE 4-8 M", "LEAVES GLOSSY, WAVY, OPPOSITE", "FLOWERS WHITE, SCENTED", "CHERRIES IN CLUSTERS, RED", "TWO BEANS PER CHERRY"],
  uses: [
    ["DRINK", "Beans are dried, roasted and ground for coffee."],
    ["TRADE", "About 10,000 smallholders grow coffee in 14 Nigerian states."],
  ],
  history: "Robusta coffee comes from the forests of West and Central Africa. The Cocoa Research Institute of Nigeria is helping to revive the country's coffee farms.",
  leaf: { shape: 'oval', len: 1, wid: 0.4, note: 'LONG GLOSSY LEAF, WAVY EDGE, OPPOSITE PAIRS' },
  form: { type: 'shrub', height: 1.05, trunk: 0.25, branches: 9, nodes: 6, spread: 0.32, stemW: 0.035, leafSize: 1.4, arrange: 'opposite', flower: { type: 'cluster', size: 1.2, color: 3 }, fruit: { type: 'berry', size: 2.2, color: 2 } },
  seasons: [
    { id: 'harvest', label: "HARVEST", from: 0, to: 60, g: [1, 1], desc: "Red cherries are picked and dried." },
    { id: 'bloom', label: "IN BLOOM", from: 60, to: 120, g: [1, 1], desc: "White scented flowers after the first rains." },
    { id: 'fruiting', label: "CHERRIES", from: 120, to: 330, g: [1, 1], desc: "Green cherries swell and slowly ripen." },
    { id: 'harvest', label: "HARVEST", from: 330, to: 360, g: [1, 1], desc: "Picking starts." },
  ],
  beds: [{ plantedDay: -3600 }],
});
