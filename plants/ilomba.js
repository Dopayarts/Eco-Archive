EA.addSpecies('ilomba', {
  name: "ILOMBA", latin: "Pycnanthus angolensis", family: "Myristicaceae (nutmeg family)",
  origin: "Forest zone of tropical Africa from Senegal and Guinea to Angola, Uganda and Zambia",
  local: "AKWA-MILI, OJE (IGBO), AKOMU (YORUBA)",
  added: '2026-11-15',
  kind: 'perennial',
  summary: "An evergreen tree up to 25-40 m with a straight trunk and flaking bark that bleeds an orange-brown sap. Long leaves are dark green above, pale with rusty hairs beneath. Yellowish-orange fruits hold a black seed in a red covering, like nutmeg.",
  facts: ["TREE UP TO 40 M", "ORANGE-BROWN SAP", "LEAVES UP TO 30 CM", "SEED LIKE NUTMEG", "KOMBO BUTTER"],
  uses: [
    ["FAT", "Seeds yield 45-70% kombo butter, used for lighting and made into soap and candles; it is not eaten."],
    ["TIMBER", "Light, soft wood for plywood, shingles, planks, canoes and paper pulp."],
    ["MEDICINE", "The bark is used for skin infections and coughs."],
  ],
  history: "Also called false nutmeg and boxboard. It is grown to shade cocoa and coffee.",
  leaf: { shape: 'lance', len: 1, wid: 0.3, note: 'LONG LEAF, RUSTY BENEATH' },
  form: { type: 'tree', height: 1.4, trunk: 0.6, branches: 9, nodes: 5, spread: 0.3, stemW: 0.08, leafSize: 1.3, arrange: 'alternate', droop: 0.2, flower: { type: 'cluster', size: 0.5, color: 2 }, fruit: { type: 'berry', size: 1.0, color: 3 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 60, g: [1, 1], desc: "Evergreen crown." },
    { id: 'bloom', label: "IN FLOWER", from: 60, to: 130, g: [1, 1], desc: "Fragrant flower sprays." },
    { id: 'fruiting', label: "FRUITING", from: 130, to: 250, g: [1, 1], desc: "Fruits split, red-coated seeds." },
    { id: 'regrowth', label: "NEW LEAVES", from: 250, to: 360, g: [1, 1], desc: "Fresh leaves." },
  ],
  beds: [{ plantedDay: -5000 }],
});
