EA.addSpecies('pericopsis', {
  name: "PERICOPSIS", latin: "Pericopsis laxiflora", family: "Fabaceae (legume family)",
  origin: "Savanna and dry forest of West Africa, from Senegal to Nigeria and South Sudan",
  added: '2026-11-09',
  kind: 'perennial',
  summary: "A small deciduous savanna tree, often 9-12 m, with a usually twisted trunk and smooth grey to beige bark. Each leaf carries 4-6 pairs of leaflets that are shiny above. Sold for its wood as satin wood.",
  facts: ["TREE 9-12 M", "TRUNK OFTEN TWISTED", "BARK SMOOTH, GREY", "4-6 PAIRS OF LEAFLETS", "LOSES ITS LEAVES"],
  uses: [
    ["MEDICINE", "In Ivory Coast root, bark and leaf brews are used for stomach complaints; in Ghana it is rubbed on for body pains."],
    ["TIMBER", "The wood is traded as satin wood."],
    ["RESEARCH", "Studies in rodents found pain-relieving and anti-inflammatory effects, and Nigerian chemists have studied alkaloids from its leaves."],
  ],
  history: "It is one of three Pericopsis species in Africa. Chemists have found alkaloids such as N-methylcytisine in it, which may explain its use in medicine.",
  leaf: { shape: 'oval', len: 1, wid: 0.55, compound: 'pinnate', leaflets: 9, note: 'LEAFLETS IN 4-6 PAIRS, SHINY ABOVE' },
  form: { type: 'tree', height: 1.05, trunk: 0.55, branches: 9, nodes: 5, spread: 0.28, stemW: 0.06, leafSize: 1.3, arrange: 'alternate', droop: 0.15, flower: { type: 'cluster', size: 0.8, color: 3 }, fruit: { type: 'pod', size: 1.0, hang: true, color: 1 } },
  seasons: [
    { id: 'dormant', label: "BARE BRANCHES", from: 0, to: 90, g: [0.6, 0.5], desc: "Leaves fall in the dry season." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 150, g: [0.6, 1], desc: "Flowers come with new leaves." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 150, to: 300, g: [1, 1], desc: "Full leaf through the rains." },
    { id: 'fruiting', label: "PODS", from: 300, to: 360, g: [1, 0.7], desc: "Pods ripen." },
  ],
  beds: [{ plantedDay: -3000 }],
});
