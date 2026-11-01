EA.addSpecies('kinkeliba', {
  name: "KINKELIBA", latin: "Combretum micranthum", family: "Combretaceae (bushwillow family)",
  origin: "West African savanna; dry-season fodder in Nigeria",
  added: '2026-11-01',
  kind: 'perennial',
  summary: "A shrub 2-4 m tall, or a climber, with oval leaves that have brown scales beneath. Small cream flower spikes are followed by reddish-brown fruits with four papery wings.",
  facts: ["SHRUB 2-4 M", "LEAVES WITH BROWN SCALES", "FLOWERS CREAM SPIKES", "FRUIT WITH FOUR WINGS", "LEAVES MAKE TEA"],
  uses: [
    ["TEA", "Leaves are brewed as a tonic tea; in parts of West Africa it is drunk to break the Ramadan fast."],
    ["MEDICINE", "Leaf tea is used for coughs, malaria and digestion."],
    ["FODDER", "In northern Nigeria it is dry-season forage, and its twigs make baskets."],
  ],
  history: "Kinkeliba leaves are sold in bundles in West African markets in the dry season.",
  leaf: { shape: 'oval', len: 1, wid: 0.55, note: 'OVAL LEAF, BROWN SCALES BENEATH' },
  form: { type: 'shrub', height: 0.9, trunk: 0.12, branches: 10, nodes: 6, spread: 0.36, stemW: 0.03, leafSize: 1.5, arrange: 'opposite', flower: { type: 'spike', size: 0.9, color: 3 }, fruit: { type: 'berry', size: 1.8, color: 2 } },
  seasons: [
    { id: 'dormant', label: "LEAVES THIN", from: 0, to: 60, g: [0.7, 0.6], desc: "Leaves are picked for tea." },
    { id: 'bloom', label: "IN FLOWER", from: 60, to: 120, g: [0.6, 0.8], desc: "Cream spikes as new leaves open." },
    { id: 'fruiting', label: "WINGED FRUIT", from: 120, to: 180, g: [0.8, 1], desc: "Four-winged fruits." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 180, to: 360, g: [1, 0.7], desc: "Leafy through the rains." },
  ],
  beds: [{ plantedDay: -1800 }],
});
