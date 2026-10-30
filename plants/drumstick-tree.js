EA.addSpecies('drumstick-tree', {
  name: "DRUMSTICK TREE", short: "DRUMSTICK", latin: "Cassia sieberiana", family: "Fabaceae (legume family)",
  origin: "West and Central African savanna, including Nigeria",
  added: '2026-10-30',
  kind: 'perennial',
  summary: "A small tree with leaves of many leaflet pairs. Just before the rains, while bare, it hangs out long chains of bright yellow flowers. Black, stick-like pods up to 90 cm long follow.",
  facts: ["TREE 10-20 M", "LEAVES PINNATE", "FLOWERS BRIGHT YELLOW", "FLOWER CHAINS HANG DOWN", "PODS LONG, BLACK, STICKS"],
  uses: [
    ["MEDICINE", "Roots, leaves and pods are widely used against fever, stomach-ache and worms; the pod pulp is a laxative."],
    ["CHEWSTICK", "Root wood makes chewsticks, and the hard wood makes tools and mortars."],
    ["CAUTION", "Roots and seeds are used as fish poison in Nigeria; strong root doses are risky."],
  ],
  history: "The drumstick tree is named for its long black pods. It is also planted along avenues for its yellow flowers.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, compound: 'pinnate', leaflets: 12, note: 'PINNATE LEAF, OVAL LEAFLETS, SHINY ABOVE' },
  form: { type: 'tree', height: 1.25, trunk: 0.35, branches: 9, nodes: 5, spread: 0.38, stemW: 0.06, leafSize: 1.8, arrange: 'alternate', flower: { type: 'plume', size: 1.4, color: 3 }, fruit: { type: 'pod', size: 1.6, hang: true, color: 1 } },
  seasons: [
    { id: 'dormant', label: "BARE", from: 0, to: 60, g: [0.5, 0.5], desc: "Leafless in the harmattan; old pods hang on." },
    { id: 'bloom', label: "IN BLOOM", from: 60, to: 120, g: [0.5, 0.7], desc: "Yellow chains on bare branches, March-April." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 120, to: 240, g: [0.7, 1], desc: "Leaves return with the rains." },
    { id: 'fruiting', label: "PODS", from: 240, to: 360, g: [1, 0.5], desc: "Black pods ripen, September-February." },
  ],
  beds: [{ plantedDay: -3600 }],
});
