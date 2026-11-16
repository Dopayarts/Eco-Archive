EA.addSpecies('napoleonaea', {
  name: "NAPOLEONAEA", short: "NAPOLEONA", latin: "Napoleonaea vogelii", family: "Lecythidaceae (Brazil nut family)",
  origin: "West Africa from Sierra Leone and Ivory Coast; found in Osun State, Nigeria",
  added: '2026-11-16',
  kind: 'perennial',
  summary: "An evergreen shrub or low-branching tree up to 15 m with a dense crown. Its fibrous leaves are 7.5-15 cm long. The fruits are reddish-orange and edible.",
  facts: ["SMALL TREE TO 15 M", "DENSE CROWN", "LEAVES 7.5-15 CM", "RED-ORANGE FRUIT", "BARK FLAVOURS RICE"],
  uses: [
    ["FOOD", "The fruits are eaten; the bark flavours rice and is chewed with kola nut as a stimulant."],
    ["MEDICINE", "Used in traditional medicine for pain and swelling."],
  ],
  history: "It shares its genus with Napoleon's hat.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, note: 'FIBROUS LEAF, 7.5-15 CM' },
  form: { type: 'tree', height: 0.9, trunk: 0.3, branches: 8, nodes: 5, spread: 0.36, stemW: 0.07, leafSize: 1.1, arrange: 'alternate', droop: 0.15, flower: { type: 'single', size: 0.8, color: 2 }, fruit: { type: 'berry', size: 0.9, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 90, g: [1, 1], desc: "Dense evergreen crown." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 150, g: [1, 1], desc: "Flowers open." },
    { id: 'fruiting', label: "FRUITING", from: 150, to: 260, g: [1, 1], desc: "Red-orange fruits." },
    { id: 'regrowth', label: "NEW LEAVES", from: 260, to: 360, g: [1, 1], desc: "Fresh leaves." },
  ],
  beds: [{ plantedDay: -2000 }],
});
