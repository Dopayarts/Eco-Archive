EA.addSpecies('fish-bean', {
  name: "FISH BEAN", latin: "Tephrosia vogelii", family: "Fabaceae (legume family)",
  origin: "Native to tropical Africa, growing wild across much of it including Nigeria; planted as a cover crop elsewhere",
  added: '2026-11-09',
  kind: 'perennial',
  summary: "A soft, hairy woody herb or small tree 0.5-4 m tall with dense foliage. Each leaf has 5-14 pairs of long, narrow leaflets. Fragrant flowers, white to violet-purple, give flat pods with 6-18 dark seeds.",
  facts: ["SHRUB 0.5-4 M", "HAIRY STEMS", "5-14 PAIRS OF LEAFLETS", "FLOWERS WHITE TO PURPLE", "FIXES NITROGEN"],
  uses: [
    ["FISHING", "Crushed leaves stun fish so they can be caught by hand."],
    ["PESTS", "Leaf extracts protect stored grain from insects, and leaf juice is put on animals against ticks."],
    ["SOIL", "It fixes nitrogen and is cut and dug in as green manure for the next crop."],
    ["CAUTION", "Poisonous (tephrosin) to fish and other animals; not for eating. Kenya bans growing it near large bodies of water."],
  ],
  history: "It was taken to Java in 1908 and is now grown through Southeast Asia and tropical America as a cover crop.",
  leaf: { shape: 'lance', len: 1, wid: 0.3, compound: 'pinnate', leaflets: 17, note: 'MANY NARROW, HAIRY LEAFLETS' },
  form: { type: 'shrub', height: 0.85, branches: 5, nodes: 6, trunk: 0.2, spread: 0.35, arrange: 'alternate', leafSize: 1.3, droop: 0.2, flower: { type: 'cluster', size: 1.0, color: 3 }, fruit: { type: 'pod', size: 0.8, color: 1 } },
  seasons: [
    { id: 'fruiting', label: "PODS", from: 0, to: 90, g: [1, 0.8], desc: "Pods dry and split." },
    { id: 'dormant', label: "DRY", from: 90, to: 150, g: [0.8, 0.7], desc: "Leaves thin in the heat." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 150, to: 240, g: [1, 1], desc: "Dense growth in the rains." },
    { id: 'bloom', label: "IN FLOWER", from: 240, to: 360, g: [1, 1], desc: "Fragrant purple-white flowers." },
  ],
  beds: [{ plantedDay: -700 }],
});
