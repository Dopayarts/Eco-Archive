EA.addSpecies('date-palm', {
  name: "DATE PALM", latin: "Phoenix dactylifera", family: "Arecaceae (palm family)",
  origin: "North Africa and the Middle East; grown in the far north of Nigeria",
  local: "DABINO (HAUSA)",
  added: '2026-10-18',
  kind: 'perennial',
  summary: "A tall palm with a rough trunk covered in old leaf bases and a crown of stiff, grey-green feather leaves with sharp spines near the base. Male and female flowers are on separate trees; the females carry heavy hanging bunches of dates.",
  facts: ["PALM 15-25 M", "FRONDS STIFF, GREY-GREEN, SPINY BASE", "MALE AND FEMALE TREES", "FRUIT IN HANGING BUNCHES", "NEEDS HOT, DRY AIR AND WATER AT THE ROOTS"],
  uses: [
    ["FOOD", "Dates are eaten fresh or dried and sold widely in Kano, Sokoto and Kaduna."],
    ["CRAFT", "Leaves make mats and baskets; trunks are used for building."],
  ],
  history: "The date palm is one of the oldest cultivated trees. It reached northern Nigeria along the trans-Saharan trade routes, and farmers in states such as Jigawa grow it today.",
  leaf: { shape: 'lance', len: 1, wid: 0.18, compound: 'pinnate', leaflets: 14, note: 'STIFF FEATHER FROND, NARROW GREY-GREEN LEAFLETS, SPINES AT BASE' },
  form: { type: 'palm', height: 1.5, trunk: 0.6, count: 12, leafSize: 1.9, droop: 0.35, stemW: 0.08, flower: { type: 'cluster', size: 1, color: 3 }, fruit: { type: 'big', size: 1.1, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "DRY GROWTH", from: 0, to: 30, g: [1, 1], desc: "Fronds grow slowly in the harmattan." },
    { id: 'bloom', label: "IN BLOOM", from: 30, to: 90, g: [1, 1], desc: "Flower clusters burst from sheaths; farmers hand-pollinate." },
    { id: 'fruiting', label: "FRUIT GROWING", from: 90, to: 210, g: [1, 1], desc: "Bunches of green dates swell and colour." },
    { id: 'harvest', label: "DATE HARVEST", from: 210, to: 300, g: [1, 1], desc: "Ripe dates are cut in bunches." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 300, to: 360, g: [1, 1], desc: "New fronds unfold from the crown." },
  ],
  beds: [{ plantedDay: -3600 }],
});
