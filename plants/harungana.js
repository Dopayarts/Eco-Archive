EA.addSpecies('harungana', {
  name: "HARUNGANA", latin: "Harungana madagascariensis", family: "Hypericaceae (St John's wort family)",
  origin: "Tropical Africa and Madagascar; forest edges and riverbanks, including Nigeria",
  added: '2026-11-01',
  kind: 'perennial',
  summary: "A bushy tree, usually 4-7 m, with glossy leaves in pairs that are rusty-hairy beneath. Cut bark or a broken leaf bleeds bright orange sap. Flat heads of tiny, almond-scented cream flowers give clusters of small red berries.",
  facts: ["TREE USUALLY 4-7 M", "SAP BRIGHT ORANGE", "LEAVES RUSTY BENEATH", "FLOWERS CREAM, ALMOND SCENT", "BERRIES SMALL, RED"],
  uses: [
    ["DYE", "The orange sap dyes cloth and palm-leaf mats."],
    ["MEDICINE", "Leaves and bark are used for anaemia, fever and malaria; it is part of a Nigerian herbal mix for anaemia."],
    ["WOOD", "Light poles, firewood and charcoal."],
  ],
  history: "Harungana grows on forest margins and riverbanks. Its orange sap gives it the names orange-milk tree and blood tree.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, note: 'GLOSSY OVAL LEAF, RUSTY HAIRS BENEATH' },
  form: { type: 'tree', height: 1.1, trunk: 0.3, branches: 10, nodes: 5, spread: 0.38, stemW: 0.05, leafSize: 1.9, arrange: 'opposite', flower: { type: 'umbel', size: 1.4, color: 3 }, fruit: { type: 'berry', size: 1.8, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 90, g: [1, 1], desc: "Evergreen." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 210, g: [1, 1], desc: "Flat cream flower heads." },
    { id: 'fruiting', label: "BERRIES", from: 210, to: 330, g: [1, 1], desc: "Red berry clusters." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 330, to: 360, g: [1, 1], desc: "Glossy crown." },
  ],
  beds: [{ plantedDay: -2160 }],
});
