EA.addSpecies('calabar-bean', {
  name: "CALABAR BEAN", short: "CALABAR", latin: "Physostigma venenosum", family: "Fabaceae (legume family)",
  origin: "Rainforest and flooded stream banks of West Africa from Sierra Leone to Gabon and DR Congo; famous from Old Calabar, Nigeria",
  local: "ESERE (OLD CALABAR)",
  added: '2026-11-17',
  kind: 'perennial',
  summary: "A large evergreen climber up to 15 m with a woody base. Pale pink or purplish flowers veined with purple hang in long sprays. Pods 15-18 cm hold two or three deep chocolate-brown beans.",
  facts: ["CLIMBER TO 15 M", "WOODY BASE", "HANGING PINK FLOWERS", "PODS 15-18 CM", "DEADLY BEANS"],
  uses: [
    ["ORDEAL", "In Old Calabar people accused of crimes were made to swallow the beans; surviving was taken as proof of innocence."],
    ["MEDICINE", "Its alkaloid physostigmine is used in eye drops for glaucoma and for myasthenia gravis."],
    ["CAUTION", "The beans are highly poisonous and can cause seizures, breathing failure and death. Never eat them."],
  ],
  history: "The beans reached Britain in 1840 and the plant was described in 1861. In 1864 at least 46 children in Liverpool were poisoned by beans thrown out from a ship.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, note: 'LEAF OF A TWINING VINE' },
  form: { type: 'vine', height: 1.3, nodes: 12, leafSize: 1.1, droop: 0.3, arrange: 'alternate', flower: { type: 'cluster', size: 0.9, color: 1 }, fruit: { type: 'pod', size: 1.0, hang: true, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 100, g: [1, 1], desc: "Twines up trees." },
    { id: 'bloom', label: "IN FLOWER", from: 100, to: 170, g: [1, 1], desc: "Hanging pink flowers." },
    { id: 'fruiting', label: "PODS", from: 170, to: 280, g: [1, 1], desc: "Pods with dark beans." },
    { id: 'regrowth', label: "NEW SHOOTS", from: 280, to: 360, g: [1, 1], desc: "Fresh shoots." },
  ],
  beds: [{ plantedDay: -1500 }],
});
