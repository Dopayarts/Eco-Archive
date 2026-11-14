EA.addSpecies('itako', {
  name: "ITAKO", latin: "Strombosia pustulata", family: "Olacaceae (olax family)",
  origin: "Rainforest of West and Central Africa from Guinea-Bissau east to the Central African Republic and DR Congo",
  local: "ITAKO (NIGERIA)",
  added: '2026-11-14',
  kind: 'perennial',
  summary: "An evergreen tree 25-35 m tall. Grey-black bark is dotted with corky pores and later flakes in olive-green and whitish patches. Leaves are about 10 cm long. Tiny flowers sit on the twigs, and the fruit is a drupe up to 3 cm, purplish-black when ripe.",
  facts: ["TREE 25-35 M", "EVERGREEN", "PATCHY GREEN BARK", "TINY TWIG FLOWERS", "FRUIT PURPLE-BLACK"],
  uses: [
    ["OIL", "In Nigeria the seed oil is used as a laxative and to massage the body."],
    ["TIMBER", "Its hard, termite-proof wood makes poles, tool handles, flooring and carvings."],
    ["WILDLIFE", "Hornbills and elephants eat the fruits and spread the seeds."],
  ],
  history: "It is also known as afina in Ghana and poe in Ivory Coast. Bark, leaves and seeds are used in folk medicine.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, note: 'OBLONG LEAF, ABOUT 10 CM' },
  form: { type: 'tree', height: 1.3, trunk: 0.55, branches: 9, nodes: 5, spread: 0.3, stemW: 0.08, leafSize: 1.3, arrange: 'alternate', droop: 0.15, flower: { type: 'cluster', size: 0.5, color: 3 }, fruit: { type: 'berry', size: 0.9, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 90, g: [1, 1], desc: "Evergreen crown." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 150, g: [1, 1], desc: "Tiny flowers on twigs." },
    { id: 'fruiting', label: "FRUITING", from: 150, to: 270, g: [1, 1], desc: "Dark fruits ripen." },
    { id: 'regrowth', label: "NEW LEAVES", from: 270, to: 360, g: [1, 1], desc: "Fresh leaves." },
  ],
  beds: [{ plantedDay: -5000 }],
});
