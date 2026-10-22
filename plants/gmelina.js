EA.addSpecies('gmelina', {
  name: "GMELINA", latin: "Gmelina arborea", family: "Lamiaceae (mint family)",
  origin: "South and South-east Asia; planted widely in Nigerian forest reserves",
  added: '2026-10-22',
  kind: 'perennial',
  summary: "A fast-growing tree with pale, smooth bark and large, soft, heart-shaped leaves. Clusters of yellow-brown trumpet flowers appear when the tree is bare, followed by plum-like fruits that ripen yellow.",
  facts: ["TREE 15-30 M, FAST-GROWING", "LEAVES LARGE, HEART-SHAPED", "FLOWERS YELLOW-BROWN TRUMPETS", "FRUIT PLUM-LIKE, YELLOW", "LEAFLESS IN THE DRY SEASON"],
  uses: [
    ["WOOD", "Light timber and pulpwood from plantations."],
    ["FUEL", "Firewood and charcoal."],
  ],
  history: "Gmelina was brought to Nigeria for plantations and now covers large blocks of reserves such as Omo Forest Reserve, where foresters study how to manage it.",
  leaf: { shape: 'heart', len: 1, wid: 0.8, note: 'LARGE SOFT HEART-SHAPED LEAF, PALE UNDERSIDE' },
  form: { type: 'tree', height: 1.45, trunk: 0.5, branches: 8, nodes: 3, spread: 0.3, stemW: 0.065, leafSize: 1.7, arrange: 'opposite', flower: { type: 'cluster', size: 1.1, color: 3 }, fruit: { type: 'big', size: 0.7, hang: true, color: 3 } },
  seasons: [
    { id: 'dormant', label: "LEAFLESS", from: 0, to: 40, g: [0.75, 0.75], desc: "Bare in the dry season." },
    { id: 'bloom', label: "IN BLOOM", from: 40, to: 90, g: [0.75, 0.85], desc: "Trumpet flowers open on bare branches." },
    { id: 'fruiting', label: "FRUITING", from: 90, to: 150, g: [0.85, 1], desc: "Plum-like fruits ripen yellow as leaves return." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 150, to: 330, g: [1, 1], desc: "Big soft leaves through the rains." },
    { id: 'dormant', label: "LEAF FALL", from: 330, to: 360, g: [1, 0.75], desc: "Leaves fall." },
  ],
  beds: [{ plantedDay: -5400 }],
});
