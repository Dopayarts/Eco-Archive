EA.addSpecies('lantana', {
  name: "LANTANA", latin: "Lantana camara", family: "Verbenaceae (verbena family)",
  origin: "From tropical America; now widespread in Africa, and grows in Nigeria such as in Enugu State",
  added: '2026-11-15',
  kind: 'perennial',
  summary: "A shrub about 2 m tall that can climb to 6 m. Leaves in pairs smell strongly when crushed. Clusters of small tubular flowers in red, yellow, white, pink or orange change colour after pollination. Berries turn from green to dark purple.",
  facts: ["SHRUB ABOUT 2 M", "STRONG-SMELLING LEAVES", "FLOWERS CHANGE COLOUR", "PURPLE BERRIES", "INVASIVE WEED"],
  uses: [
    ["MEDICINE", "Used traditionally for fevers, malaria, coughs, rheumatism and skin problems."],
    ["GARDEN", "Grown as a tough ornamental that draws butterflies and birds."],
    ["CAUTION", "Toxic to livestock and a serious farm weed. Eating its leaves or fruit may harm the liver; leaves can irritate skin."],
  ],
  history: "Also called wild sage and red sage. One plant can make up to 12,000 fruits.",
  leaf: { shape: 'oval', len: 1, wid: 0.55, note: 'ROUGH LEAF, STRONG SMELL' },
  form: { type: 'shrub', height: 0.75, branches: 7, nodes: 6, trunk: 0.2, spread: 0.4, arrange: 'opposite', leafSize: 0.7, droop: 0.25, flower: { type: 'umbel', size: 0.9, color: 1 }, fruit: { type: 'berry', size: 0.5, color: 3 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 120, g: [1, 1], desc: "Colour-changing flowers." },
    { id: 'fruiting', label: "BERRIES", from: 120, to: 200, g: [1, 1], desc: "Berries turn purple." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 200, to: 360, g: [1, 1], desc: "Spreads fast." },
  ],
  beds: [{ plantedDay: -700 }],
});
