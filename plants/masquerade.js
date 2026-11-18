EA.addSpecies('masquerade', {
  name: "MASQUERADE", latin: "Monoon longifolium (Polyalthia longifolia)", family: "Annonaceae (custard apple family)",
  origin: "From southern India and Sri Lanka; planted as an ornamental in Nigeria, such as at Ovu-Inland, Delta State",
  added: '2026-11-18',
  kind: 'perennial',
  summary: "An evergreen tree over 20 m that grows in a narrow pyramid with drooping, willowy branches. Long wavy-edged leaves come out coppery brown and turn dark green. Small star-shaped pale green flowers give clusters of fruits that ripen purple-black.",
  facts: ["TREE OVER 20 M", "PYRAMID SHAPE", "WAVY LONG LEAVES", "PALE GREEN FLOWERS", "PURPLE-BLACK FRUIT"],
  uses: [
    ["ORNAMENT", "Planted along roads and gardens, and to cut down noise."],
    ["WOOD", "The straight trunk once made ship masts; now pencils, boxes and matches."],
    ["WILDLIFE", "Birds and bats eat the fruit."],
  ],
  history: "In Nigeria it is called the masquerade tree because of its shape. Elsewhere it is the Indian mast tree or false ashoka.",
  leaf: { shape: 'lance', len: 1, wid: 0.2, note: 'LONG LEAF WITH WAVY EDGE' },
  form: { type: 'tree', height: 1.5, trunk: 0.35, branches: 12, nodes: 7, spread: 0.1, stemW: 0.07, leafSize: 1.1, arrange: 'alternate', droop: 0.3, flower: { type: 'single', size: 0.4, color: 2 }, fruit: { type: 'berry', size: 0.4, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 120, g: [1, 1], desc: "Evergreen spire." },
    { id: 'bloom', label: "IN FLOWER", from: 120, to: 150, g: [1, 1], desc: "Brief bloom of two to three weeks." },
    { id: 'fruiting', label: "FRUITING", from: 150, to: 240, g: [1, 1], desc: "Fruit clusters darken." },
    { id: 'regrowth', label: "NEW LEAVES", from: 240, to: 360, g: [1, 1], desc: "Coppery new leaves." },
  ],
  beds: [{ plantedDay: -2000 }],
});
