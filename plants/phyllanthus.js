EA.addSpecies('phyllanthus', {
  name: "PHYLLANTHUS", short: "PHYLLANTH", latin: "Phyllanthus muellerianus", family: "Phyllanthaceae",
  origin: "Tropical Africa from Senegal east to Sudan and Kenya, south to Angola and Mozambique, including Nigeria",
  added: '2026-11-14',
  kind: 'perennial',
  summary: "A hairless, straggling or climbing shrub, sometimes a small tree up to 12 m, with spiny stems. Tiny fleshy fruits 3-4 mm ripen from green to red to black.",
  facts: ["STRAGGLING SHRUB", "UP TO 12 M", "SPINY STEMS", "FRUIT 3-4 MM", "GREEN, RED, BLACK"],
  uses: [
    ["MEDICINE", "In Nigeria a root bark brew is taken for fever, and twig and root brews for jaundice."],
    ["TEETH", "In Nigeria twigs are used as chewing sticks once the spines are removed."],
    ["FOOD", "The slightly sour fruits are eaten, and leaves season soups."],
  ],
  history: "In Nigeria it is also known as a weed of rice fields. Its young branches are woven into fish traps.",
  leaf: { shape: 'oval', len: 1, wid: 0.55, note: 'SMALL LEAF ON A LEAFY SPRAY' },
  form: { type: 'shrub', height: 0.9, branches: 7, nodes: 7, trunk: 0.25, spread: 0.4, arrange: 'alternate', leafSize: 0.9, droop: 0.4, flower: { type: 'cluster', size: 0.4, color: 3 }, fruit: { type: 'berry', size: 0.5, color: 1 } },
  seasons: [
    { id: 'rest', label: "DRY SPELL", from: 0, to: 90, g: [0.9, 0.8], desc: "Some leaves drop." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 150, g: [0.8, 1], desc: "Tiny flowers." },
    { id: 'fruiting', label: "FRUITING", from: 150, to: 250, g: [1, 1], desc: "Fruits turn red then black." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 250, to: 360, g: [1, 1], desc: "Long leafy shoots." },
  ],
  beds: [{ plantedDay: -1500 }],
});
