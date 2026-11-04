EA.addSpecies('markhamia', {
  name: "MARKHAMIA", latin: "Markhamia tomentosa", family: "Bignoniaceae (trumpet-creeper family)",
  origin: "From Cote d'Ivoire east to Kenya, including Nigeria; savanna and drier riverine forest",
  added: '2026-11-04',
  kind: 'perennial',
  summary: "An evergreen tree up to about 25 m, with leaves of 3-6 pairs of papery leaflets. Scented golden-yellow trumpet flowers with red-purple marks in the throat grow in clusters at the tips. Long, flat, twisting capsules split to free many winged seeds.",
  facts: ["TREE UP TO 25 M", "EVERGREEN", "FLOWERS GOLDEN YELLOW", "PODS LONG, FLAT, TWISTED", "SEEDS WINGED"],
  uses: [
    ["MEDICINE", "Roots, bark and leaves are used for toothache, headache, malaria and snakebite."],
    ["WOOD", "The wood is used for posts, poles, tool handles and firewood."],
    ["BEES", "The flowers give nectar to honeybees."],
  ],
  history: "In Nigeria the capsules ripen from December to January. IITA in Ibadan raises it from seed, which must be sown fresh.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, compound: 'pinnate', leaflets: 9, note: 'PAPERY LEAFLETS IN PAIRS' },
  form: { type: 'tree', height: 1.25, trunk: 0.55, branches: 11, nodes: 6, spread: 0.28, stemW: 0.06, leafSize: 2.0, arrange: 'opposite', flower: { type: 'cluster', size: 1.3, color: 3 }, fruit: { type: 'pod', size: 1.2, hang: true, color: 2 } },
  seasons: [
    { id: 'fruiting', label: "TWISTED PODS", from: 0, to: 90, g: [1, 1], desc: "Pods ripen December to January." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 90, to: 240, g: [1, 1], desc: "Evergreen crown." },
    { id: 'bloom', label: "IN FLOWER", from: 240, to: 360, g: [1, 1], desc: "Golden trumpet flowers." },
  ],
  beds: [{ plantedDay: -7200 }],
});
