EA.addSpecies('red-mangrove', {
  name: "RED MANGROVE", short: "MANGROVE", latin: "Rhizophora racemosa", family: "Rhizophoraceae (mangrove family)",
  origin: "Atlantic coasts of West Africa and the Americas; dominant in the Niger Delta",
  added: '2026-10-26',
  kind: 'perennial',
  summary: "A tidal-swamp tree standing on a tangle of arching stilt roots. Thick, leathery leaves grow at the twig tips. Seeds sprout while still on the tree into long, dangling, pencil-like seedlings that drop into the mud or float away.",
  facts: ["TREE UP TO 30 M", "ARCHING STILT ROOTS", "LEAVES THICK, LEATHERY", "SEEDLINGS GROW ON THE TREE", "LIVES IN SALTY TIDAL MUD"],
  uses: [
    ["FUEL", "Wood is cut for poles, firewood and smoking fish and meat."],
    ["FISHERIES", "Mangrove swamps are nurseries for fish and shellfish."],
    ["COAST", "Its roots hold mud and protect the shore."],
  ],
  history: "Red mangrove is one of the dominant mangroves of the Niger Delta. Oil spills, logging and spreading nipa palm threaten it, and its seedlings are used in replanting.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, note: 'THICK LEATHERY ELLIPTIC LEAF, AT TWIG TIPS' },
  form: { type: 'tree', height: 1.3, trunk: 0.4, branches: 9, nodes: 4, spread: 0.36, stemW: 0.07, leafSize: 1.6, arrange: 'opposite', flower: { type: 'cluster', size: 1.0, color: 3 }, fruit: { type: 'pod', size: 1.6, hang: true, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 90, g: [1, 1], desc: "Evergreen above the tide." },
    { id: 'bloom', label: "IN BLOOM", from: 90, to: 180, g: [1, 1], desc: "Clusters of small flowers in the leaf joints." },
    { id: 'fruiting', label: "SEEDLINGS", from: 180, to: 330, g: [1, 1], desc: "Long seedlings hang and drop into the water." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 330, to: 360, g: [1, 1], desc: "Evergreen crown." },
  ],
  beds: [{ plantedDay: -9000 }],
});
