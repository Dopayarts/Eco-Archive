EA.addSpecies('koto', {
  name: "KOTO", latin: "Pterygota macrocarpa", family: "Malvaceae (mallow family)",
  origin: "Forest from Sierra Leone to Congo, including Cameroon, Ghana, Ivory Coast and Nigeria",
  added: '2026-11-13',
  kind: 'perennial',
  summary: "A deciduous forest tree up to 35 m. It is also called African pterygota. Its pale wood is cut for veneer and plywood.",
  facts: ["TREE UP TO 35 M", "DECIDUOUS", "WOOD FOR PLYWOOD", "LEAVES WRAP FOOD", "RATED VULNERABLE"],
  uses: [
    ["MEDICINE", "In Nigeria a leaf brew is drunk for stomach, bladder and urinary problems."],
    ["LEAVES", "The leaves serve as temporary thatch and for wrapping food."],
    ["TIMBER", "The wood is used for veneer and plywood."],
  ],
  history: "It is rated Vulnerable and threatened by habitat loss.",
  leaf: { shape: 'heart', len: 1, wid: 0.6, note: 'BROAD SIMPLE LEAF' },
  form: { type: 'tree', height: 1.3, trunk: 0.6, branches: 8, nodes: 5, spread: 0.3, stemW: 0.08, leafSize: 1.3, arrange: 'alternate', droop: 0.15, flower: { type: 'cluster', size: 0.6, color: 2 }, fruit: { type: 'pod', size: 1.0, color: 1 } },
  seasons: [
    { id: 'dormant', label: "LEAVES FALL", from: 0, to: 70, g: [0.7, 0.6], desc: "Bare in the dry season." },
    { id: 'bloom', label: "IN FLOWER", from: 70, to: 130, g: [0.6, 1], desc: "Flowers with new leaves." },
    { id: 'fruiting', label: "FRUITING", from: 130, to: 220, g: [1, 1], desc: "Fruits ripen." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 220, to: 360, g: [1, 1], desc: "Full crown." },
  ],
  beds: [{ plantedDay: -6000 }],
});
