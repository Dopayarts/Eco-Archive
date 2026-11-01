EA.addSpecies('marula', {
  name: "MARULA", latin: "Sclerocarya birrea", family: "Anacardiaceae (cashew family)",
  origin: "Dry savanna across Africa; Kano and Sokoto in Nigeria",
  local: "DANIYA (HAUSA)",
  added: '2026-11-01',
  kind: 'perennial',
  summary: "A savanna tree 9-12 m with grey, scaly bark and leaves of many leaflet pairs. Male and female flowers grow on separate trees while the branches are bare. Female trees bear round yellow fruits with juicy flesh around a hard stone.",
  facts: ["TREE 9-12 M", "BARK GREY, SCALY", "LEAVES PINNATE", "MALE AND FEMALE TREES", "FRUIT YELLOW, JUICY"],
  uses: [
    ["FOOD", "The fruit is eaten fresh or made into juice and beer; in Kano the kernels are eaten."],
    ["WOOD", "Mortars, bowls and drums."],
    ["FODDER", "Leaves feed livestock in lean times."],
  ],
  history: "In northern Nigeria marula fruit ripens late in the dry season, around the time the new leaves appear.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, compound: 'pinnate', leaflets: 11, note: 'PINNATE LEAF, OVAL LEAFLETS' },
  form: { type: 'tree', height: 1.3, trunk: 0.4, branches: 9, nodes: 5, spread: 0.42, stemW: 0.08, leafSize: 1.8, arrange: 'alternate', flower: { type: 'spike', size: 0.9, color: 2 }, fruit: { type: 'big', size: 0.8, color: 3 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 60, g: [0.4, 0.4], desc: "Flowers on bare branches." },
    { id: 'fruiting', label: "FRUIT FALLS", from: 60, to: 120, g: [0.4, 0.8], desc: "Yellow fruit drops as new leaves come." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 120, to: 300, g: [0.8, 1], desc: "Full leaf in the rains." },
    { id: 'dormant', label: "LEAVES FALL", from: 300, to: 360, g: [1, 0.4], desc: "Leaves drop in the dry season." },
  ],
  beds: [{ plantedDay: -7200 }],
});
