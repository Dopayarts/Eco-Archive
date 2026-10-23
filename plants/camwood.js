EA.addSpecies('camwood', {
  name: "CAMWOOD", short: "OSUN", latin: "Baphia nitida", family: "Fabaceae (pea family)",
  origin: "West Africa; often planted in villages in southern Nigeria",
  local: "OSUN (YORUBA)",
  added: '2026-10-23',
  kind: 'perennial',
  summary: "A small, evergreen, hard-wooded understorey tree with glossy leaves. Its bark and heartwood give a brilliant red powder dye.",
  facts: ["SMALL TREE OR SHRUB", "EVERGREEN, GLOSSY LEAVES", "HARD HEARTWOOD", "GIVES A RED DYE", "OFTEN PLANTED IN VILLAGES"],
  uses: [
    ["DYE", "Ground bark and heartwood make osun, a red powder used on skin and cloth."],
  ],
  history: "Camwood red has long been used across West Africa on skin and cloth. The colour is brilliant but fades, as it is not a permanent dye.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, note: 'SIMPLE GLOSSY OVAL LEAF, POINTED TIP' },
  form: { type: 'shrub', height: 1.05, trunk: 0.35, branches: 8, nodes: 5, spread: 0.3, stemW: 0.04, leafSize: 1.3, arrange: 'alternate', flower: { type: 'cluster', size: 1.1, color: 3 }, fruit: { type: 'pod', size: 1.0, hang: true, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 90, g: [1, 1], desc: "Evergreen growth in the shade." },
    { id: 'bloom', label: "IN BLOOM", from: 90, to: 150, g: [1, 1], desc: "Small white pea flowers." },
    { id: 'fruiting', label: "PODS", from: 150, to: 240, g: [1, 1], desc: "Flat pods form and dry." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 240, to: 360, g: [1, 1], desc: "Evergreen growth." },
  ],
  beds: [{ plantedDay: -3600 }],
});
