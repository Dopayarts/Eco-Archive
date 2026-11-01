EA.addSpecies('heart-fruit', {
  name: "HEART-FRUIT", latin: "Hymenocardia acida", family: "Phyllanthaceae (leafflower family)",
  origin: "Tropical Africa from Senegal to South Africa, including Nigeria",
  added: '2026-11-01',
  kind: 'perennial',
  summary: "A small savanna tree or shrub about 6-9 m with peeling, rusty-brown young bark and thin leathery leaves. Its flat, heart-shaped fruits have papery wings and turn pink, then reddish-brown.",
  facts: ["TREE 6-9 M", "BARK PEELS RUSTY BROWN", "FRUIT HEART-SHAPED", "FRUIT WINGED, PINK-RED", "MALE AND FEMALE PLANTS"],
  uses: [
    ["MEDICINE", "The Hausa of northern Nigeria use the root bark for headache, toothache and other pains; mouse tests supported this."],
    ["WOOD", "Hard, termite-proof wood for poles and pestles; bark tans leather."],
    ["FOOD", "Children eat the sour fruit."],
  ],
  history: "Heart-fruit flowers late in the dry season as its new leaves open.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, note: 'THIN LEATHERY LEAF, GOLDEN GLANDS BENEATH' },
  form: { type: 'tree', height: 1.0, trunk: 0.3, branches: 10, nodes: 5, spread: 0.36, stemW: 0.05, leafSize: 1.8, arrange: 'alternate', flower: { type: 'spike', size: 0.8, color: 2 }, fruit: { type: 'berry', size: 1.9, color: 2 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 90, g: [0.6, 0.8], desc: "Flowers with the new leaves." },
    { id: 'fruiting', label: "HEART FRUITS", from: 90, to: 210, g: [0.8, 1], desc: "Winged fruits turn pink." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 210, to: 330, g: [1, 1], desc: "Full leaf." },
    { id: 'dormant', label: "LEAVES FALL", from: 330, to: 360, g: [1, 0.6], desc: "Leaves drop." },
  ],
  beds: [{ plantedDay: -3600 }],
});
