EA.addSpecies('leptadenia', {
  name: "LEPTADENIA", latin: "Leptadenia hastata", family: "Apocynaceae (dogbane family)",
  origin: "Tropical Africa from Mauritania to Ethiopia; eaten in Kano, Nigeria",
  local: "YA'DIYA (HAUSA)",
  added: '2026-11-03',
  kind: 'perennial',
  summary: "A climbing herb with milky latex that turns woody and corky at the base. Opposite leaves are heart-based. Umbels of scented yellowish flowers give pairs of pointed green pods with silky-tufted seeds.",
  facts: ["CLIMBER WITH LATEX", "STEMS CORKY WITH AGE", "LEAVES HEART-BASED", "FLOWERS YELLOWISH, SCENTED", "PODS POINTED, PAIRED"],
  uses: [
    ["FOOD", "Leaves, shoots and flowers are cooked in soups; in Kano the leaves are eaten."],
    ["FODDER", "Important feed for camels, goats and cattle."],
    ["MEDICINE", "The latex is put on wounds."],
  ],
  history: "Leptadenia is a famine food of the Sahel that is also eaten in normal times.",
  leaf: { shape: 'heart', len: 1, wid: 0.6, note: 'OVATE LEAF, HEART-SHAPED BASE' },
  form: { type: 'vine', height: 1.05, nodes: 12, leafSize: 1.5, droop: 0.35, flower: { type: 'umbel', size: 1.1, color: 3 }, fruit: { type: 'pod', size: 1.0, hang: true, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "DRY SEASON", from: 0, to: 90, g: [0.8, 0.8], desc: "Leaves picked in the dry season." },
    { id: 'regrowth', label: "REGROWTH", from: 90, to: 180, g: [0.8, 1], desc: "New shoots with the rains." },
    { id: 'bloom', label: "IN FLOWER", from: 180, to: 270, g: [1, 1], desc: "Scented flower umbels." },
    { id: 'fruiting', label: "PODS", from: 270, to: 360, g: [1, 0.8], desc: "Paired pods." },
  ],
  beds: [{ plantedDay: -1080 }],
});
