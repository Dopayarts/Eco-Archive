EA.addSpecies('african-birch', {
  name: "AFRICAN BIRCH", short: "BIRCH", latin: "Anogeissus leiocarpa", family: "Combretaceae (combretum family)",
  origin: "West and Central African savanna; common in northern Nigeria",
  added: '2026-10-24',
  kind: 'perennial',
  summary: "A savanna tree with drooping branches, smooth grey bark that flakes off, and small, pointed, silky leaves. Tiny flowers sit in round heads that turn into cone-like clusters of small winged fruits.",
  facts: ["TREE UP TO 30 M", "BARK GREY, FLAKING", "LEAVES SMALL, POINTED, SILKY", "FLOWERS IN ROUND HEADS", "FRUITS WINGED, IN CONE-LIKE BALLS"],
  uses: [
    ["DYE", "Hausa dyers use the leaves to dye cloth yellow and brown."],
    ["LEATHER", "Its ash is used in tanning in northern Nigeria."],
    ["TEETH", "Roots are sold in Nigerian markets as chewing sticks."],
  ],
  history: "The African birch is one of the most useful savanna trees; its leaves give a yellow dye used to make bogolan mud cloth in Mali.",
  leaf: { shape: 'lance', len: 0.8, wid: 0.4, note: 'SMALL POINTED LEAF, SILKY WHEN YOUNG' },
  form: { type: 'tree', height: 1.35, trunk: 0.45, branches: 9, nodes: 5, spread: 0.36, stemW: 0.06, leafSize: 1.7, arrange: 'alternate', droop: 0.3, flower: { type: 'head', size: 1.1, color: 3 }, fruit: { type: 'berry', size: 1.8, color: 2 } },
  seasons: [
    { id: 'dormant', label: "LEAF FALL", from: 0, to: 60, g: [0.8, 0.8], desc: "Crown thins in the dry season." },
    { id: 'regrowth', label: "NEW LEAVES", from: 60, to: 120, g: [0.8, 1], desc: "Silky new leaves flush." },
    { id: 'bloom', label: "IN BLOOM", from: 120, to: 210, g: [1, 1], desc: "Round flower heads form." },
    { id: 'fruiting', label: "FRUIT BALLS", from: 210, to: 330, g: [1, 1], desc: "Cone-like balls of winged fruit ripen." },
    { id: 'dormant', label: "LEAF FALL", from: 330, to: 360, g: [1, 0.85], desc: "Leaves start to fall." },
  ],
  beds: [{ plantedDay: -9000 }],
});
