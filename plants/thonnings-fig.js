EA.addSpecies('thonnings-fig', {
  name: "THONNING'S FIG", short: "ODAN", latin: "Ficus thonningii", family: "Moraceae (fig family)",
  origin: "Tropical Africa; planted for shade in towns and villages across Nigeria",
  local: "ODAN (YORUBA), CHEDIYA (HAUSA)",
  added: '2026-10-23',
  kind: 'perennial',
  summary: "An evergreen fig with a broad, dense crown and glossy, dark green leaves bunched at the twig tips. It often starts life as a strangler on another tree. Small yellow or red figs grow in the leaf joints, and every part bleeds milky latex.",
  facts: ["TREE 6-21 M, DENSE CROWN", "LEAVES GLOSSY, DARK GREEN", "OFTEN A STRANGLER", "FIGS SMALL, YELLOW OR RED", "MILKY LATEX"],
  uses: [
    ["SHADE", "A favourite shade and meeting tree; grows easily from cuttings."],
    ["FIBRE", "Bark is made into bark cloth, mats and rope."],
    ["FOOD", "Ripe figs make jam and feed birds and animals."],
  ],
  history: "Odan is widely planted for shade because it grows easily from cuttings. Its aggressive roots make them unsuitable near buildings.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, note: 'GLOSSY OVAL LEAF, DARK GREEN, MILKY SAP' },
  form: { type: 'tree', height: 1.3, trunk: 0.4, branches: 11, nodes: 5, spread: 0.42, stemW: 0.08, leafSize: 1.9, arrange: 'alternate', flower: { type: 'none' }, fruit: { type: 'berry', size: 1.5, color: 3 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 90, g: [1, 1], desc: "Evergreen, dense shade." },
    { id: 'fruiting', label: "FIGS", from: 90, to: 180, g: [1, 1], desc: "Small figs ripen and draw birds." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 180, to: 300, g: [1, 1], desc: "Dense shade through the rains." },
    { id: 'fruiting', label: "FIGS", from: 300, to: 360, g: [1, 1], desc: "A second crop of figs." },
  ],
  beds: [{ plantedDay: -9000 }],
});
