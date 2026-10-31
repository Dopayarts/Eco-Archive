EA.addSpecies('stool-wood', {
  name: "STOOL WOOD", short: "AHUN", latin: "Alstonia boonei", family: "Apocynaceae (dogbane family)",
  origin: "West and Central African forest, including Nigeria",
  local: "AHUN (YORUBA)",
  added: '2026-10-31',
  kind: 'perennial',
  summary: "A huge forest tree up to 45 m with a fluted base or tall buttresses. Leaves grow in whorls of 4-8 around the twigs, and the bark bleeds milky latex. Small cream flowers give pairs of very long, thin hanging pods.",
  facts: ["TREE UP TO 45 M", "BASE FLUTED, BUTTRESSED", "LEAVES IN WHORLS", "MILKY LATEX", "PODS LONG, IN PAIRS"],
  uses: [
    ["MEDICINE", "Bark tea is a well-known fever and malaria remedy; in Nigeria the bark is used on sores."],
    ["WOOD", "Light wood for stools, carvings and Yoruba drum sound boxes."],
    ["CAUTION", "The latex harms the eyes and can cause blindness."],
  ],
  history: "Its light wood is carved into the Asante stools of Ghana.",
  leaf: { shape: 'paddle', len: 1, wid: 0.38, note: 'LEAVES IN WHORLS OF 4-8, BROAD AT THE TIP' },
  form: { type: 'tree', height: 1.5, trunk: 0.6, branches: 8, nodes: 4, spread: 0.36, stemW: 0.09, leafSize: 1.9, arrange: 'whorl', flower: { type: 'cluster', size: 0.9, color: 3 }, fruit: { type: 'pod', size: 1.6, hang: true, color: 2 } },
  seasons: [
    { id: 'fruiting', label: "LONG PODS", from: 0, to: 60, g: [0.9, 0.9], desc: "Pods split and seeds float away." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 60, to: 300, g: [0.9, 1], desc: "Whorled leaves fill the crown." },
    { id: 'bloom', label: "IN FLOWER", from: 300, to: 360, g: [1, 0.9], desc: "Cream flowers from November." },
  ],
  beds: [{ plantedDay: -10800 }],
});
