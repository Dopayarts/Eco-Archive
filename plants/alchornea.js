EA.addSpecies('alchornea', {
  name: "ALCHORNEA", latin: "Alchornea laxiflora", family: "Euphorbiaceae (spurge family)",
  origin: "Evergreen forest, bush and riverside thickets from Nigeria east to Ethiopia and south to South Africa",
  local: "IJAN, PEPE (YORUBA); UBUBO (IGBO)",
  added: '2026-11-12',
  kind: 'perennial',
  summary: "A deciduous shrub or small tree up to 7-10 m, upright or straggling. Male and female flowers grow on separate branches of the same plant. Fruits are three-lobed capsules holding three seeds.",
  facts: ["SHRUB UP TO 7-10 M", "MALE, FEMALE BRANCHES", "LEAVES SIMPLE, NARROW", "3-LOBED CAPSULES", "LEAVES WRAP KOLA"],
  uses: [
    ["KOLA", "In Nigeria the leaves are used to pack and preserve kola nuts and other fruit."],
    ["MEDICINE", "A leaf brew is taken for malaria and for inflammatory and infectious diseases."],
    ["TEETH", "Small branches are chewing sticks, and straight stems make fence poles."],
  ],
  history: "A cousin of Christmas bush, its leaves are a common ingredient in Nigerian herbal malaria remedies.",
  leaf: { shape: 'lance', len: 1, wid: 0.35, note: 'ELLIPTIC TO OBLONG LEAF' },
  form: { type: 'shrub', height: 0.95, branches: 6, nodes: 6, trunk: 0.3, spread: 0.35, arrange: 'alternate', leafSize: 1.2, droop: 0.25, flower: { type: 'spike', size: 0.7, color: 2 }, fruit: { type: 'berry', size: 0.7, color: 1 } },
  seasons: [
    { id: 'dormant', label: "LEAVES THIN", from: 0, to: 90, g: [0.7, 0.6], desc: "Leaves fall in the dry season." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 150, g: [0.6, 1], desc: "Small flower spikes." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 150, to: 300, g: [1, 1], desc: "Leaves picked for kola." },
    { id: 'fruiting', label: "CAPSULES", from: 300, to: 360, g: [1, 0.8], desc: "Three-lobed capsules." },
  ],
  beds: [{ plantedDay: -900 }],
});
