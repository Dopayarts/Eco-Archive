EA.addSpecies('gabon-nut', {
  name: "GABON NUT", latin: "Coula edulis", family: "Coulaceae",
  origin: "Western and west-central tropical Africa from Guinea to DR Congo; plentiful in Nigeria",
  local: "ANAMEMILA, APOPO, SIDA (NIGERIA)",
  added: '2026-11-17',
  kind: 'perennial',
  summary: "An evergreen tree 25-38 m with a dense shady crown and thin greenish-brown bark. Leathery leaves are 10-30 cm long. Small greenish-yellow flowers in short sprays give nuts 3-4 cm long with an extremely hard shell.",
  facts: ["TREE UP TO 38 M", "DENSE SHADE", "LEAVES 10-30 CM", "NUT 3-4 CM", "VERY HARD SHELL"],
  uses: [
    ["FOOD", "The oily kernels taste like chestnut or hazelnut; they are boiled, roasted, fermented or pressed for oil."],
    ["TIMBER", "Its very hard, water- and termite-proof wood makes bridge piles and railway sleepers."],
    ["MEDICINE", "A bark rinse is used for loin pain and kidney problems."],
  ],
  history: "Also called African walnut, though it is no walnut. Chimpanzees crack its nuts with stones.",
  leaf: { shape: 'oval', len: 1, wid: 0.4, note: 'LEATHERY LEAF, 10-30 CM' },
  form: { type: 'tree', height: 1.3, trunk: 0.5, branches: 9, nodes: 5, spread: 0.32, stemW: 0.08, leafSize: 1.2, arrange: 'alternate', droop: 0.15, flower: { type: 'cluster', size: 0.5, color: 3 }, fruit: { type: 'berry', size: 0.9, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 150, g: [1, 1], desc: "Last nuts fall by January." },
    { id: 'bloom', label: "IN FLOWER", from: 150, to: 240, g: [1, 1], desc: "Flowers April to June." },
    { id: 'fruiting', label: "NUTS", from: 240, to: 360, g: [1, 1], desc: "Nuts from August." },
  ],
  beds: [{ plantedDay: -5000 }],
});
