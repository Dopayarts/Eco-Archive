EA.addSpecies('gum-copal', {
  name: "GUM COPAL", latin: "Daniellia ogea", family: "Fabaceae (legume family)",
  origin: "Tropical West Africa from Senegal to Gabon; in Nigeria it occurs in old tree plantations",
  added: '2026-11-13',
  kind: 'perennial',
  summary: "A tall tree up to 40-50 m. Leaves are paired-pinnate with 5-9 pairs of leaflets. Blue-lilac to purple flowers grow in sprays. The fruit is a flat papery pod up to 9 cm long with one seed.",
  facts: ["TREE UP TO 45 M", "5-9 PAIRS OF LEAFLETS", "FLOWERS BLUE-LILAC", "FLAT ONE-SEEDED POD", "GIVES GUM COPAL"],
  uses: [
    ["GUM", "Its gum copal coats surfaces, scents clothes and is used in cosmetic ointments and varnish."],
    ["FOOD", "In Nigeria the seeds are considered edible."],
    ["TIMBER", "The wood is traded as faro or ogea."],
  ],
  history: "Also called Accra copal and Benin copal. In 1876 about 500 tonnes of its copal were exported from Ghana.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, compound: 'pinnate', leaflets: 7, note: 'PINNATE LEAF, 5-9 PAIRS' },
  form: { type: 'tree', height: 1.4, trunk: 0.6, branches: 9, nodes: 5, spread: 0.3, stemW: 0.08, leafSize: 1.1, arrange: 'alternate', droop: 0.15, flower: { type: 'cluster', size: 0.8, color: 2 }, fruit: { type: 'pod', size: 0.9, color: 1 } },
  seasons: [
    { id: 'dormant', label: "LEAVES THIN", from: 0, to: 60, g: [0.8, 0.7], desc: "Dry season." },
    { id: 'bloom', label: "IN FLOWER", from: 60, to: 120, g: [0.7, 1], desc: "Lilac flower sprays." },
    { id: 'fruiting', label: "PODS", from: 120, to: 200, g: [1, 1], desc: "Papery pods ripen." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 200, to: 360, g: [1, 1], desc: "Full crown." },
  ],
  beds: [{ plantedDay: -6000 }],
});
