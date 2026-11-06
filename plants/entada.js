EA.addSpecies('entada', {
  name: "ENTADA", latin: "Entada africana", family: "Fabaceae (legume family)",
  origin: "Savanna of West and Central Africa, including Nigeria",
  local: "TAWATSA (HAUSA), OGUROBE (YORUBA)",
  added: '2026-11-06',
  kind: 'perennial',
  summary: "A small savanna tree 4-10 m tall with a wide crown and rough, dark bark peeling in fibrous strips. Twice-divided leaves carry many pairs of small leaflets. Spikes of creamy-white flowers come with the new leaves, followed by flat papery pods up to 40 cm long that hang for months.",
  facts: ["TREE 4-10 M", "BARK ROUGH, FIBROUS", "LEAVES TWICE DIVIDED", "FLOWERS CREAMY SPIKES", "PODS FLAT, UP TO 40 CM"],
  uses: [
    ["MEDICINE", "In northern Nigeria a leaf or bark brew is taken as a tonic and for stomach ache, and leaves dress wounds."],
    ["FIBRE", "Bark fibre makes rope, roof binding and mats."],
    ["CAUTION", "The stem bark is said to cause abortion."],
  ],
  history: "In Nigeria it flowers with the new leaves from February to April. It favours the lower slopes and the edges of swamps.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, compound: 'pinnate', leaflets: 15, note: 'MANY SMALL LEAFLETS' },
  form: { type: 'tree', height: 0.95, trunk: 0.3, branches: 10, nodes: 5, spread: 0.42, stemW: 0.05, leafSize: 1.7, arrange: 'alternate', flower: { type: 'spike', size: 1.0, color: 3 }, fruit: { type: 'pod', size: 1.3, hang: true, color: 2 } },
  seasons: [
    { id: 'dormant', label: "LEAFLESS", from: 0, to: 90, g: [0.5, 0.5], desc: "Bare, with old pods hanging." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 150, g: [0.5, 0.8], desc: "Cream spikes with new leaves, February to April." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 150, to: 300, g: [0.8, 1], desc: "Wide leafy crown." },
    { id: 'fruiting', label: "FLAT PODS", from: 300, to: 360, g: [1, 0.7], desc: "Papery pods hang for months." },
  ],
  beds: [{ plantedDay: -5400 }],
});
