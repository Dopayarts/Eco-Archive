EA.addSpecies('commelina', {
  name: "BENGAL DAYFLOWER", short: "COMMELINA", latin: "Commelina benghalensis", family: "Commelinaceae (spiderwort family)",
  origin: "Tropical Africa and Asia; a farm weed across Nigeria",
  added: '2026-10-26',
  kind: 'perennial',
  summary: "A low, creeping herb with soft, juicy stems that root at the joints and oval leaves with wavy edges. Small blue flowers peep out of folded green leaf hoods; each opens for just a morning.",
  facts: ["CREEPING HERB", "STEMS JUICY, ROOT AT JOINTS", "FLOWERS BLUE, 3 PETALS", "FLOWERS OPEN 8 AM TO NOON", "ALSO FLOWERS UNDERGROUND"],
  uses: [
    ["FOOD", "Leaves are cooked as a vegetable in parts of West Africa."],
    ["MEDICINE", "In southern Nigeria it is used as a poultice for sore feet."],
    ["FODDER", "Pigs and poultry eat it."],
  ],
  history: "Dayflower is a stubborn farm weed: hidden underground flowers make seeds that sprout readily, so pulling the plant rarely gets rid of it.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, note: 'SOFT OVAL LEAF, WAVY EDGE, SHEATH AT BASE' },
  form: { type: 'vine', height: 0.55, nodes: 12, leafSize: 1.3, droop: 0.2, trailing: true, flower: { type: 'single', size: 1.1, color: 3 } },
  seasons: [
    { id: 'dormant', label: "DRY SEASON", from: 0, to: 90, g: [0.6, 0.6], desc: "Survives the dry season as low, tough stems." },
    { id: 'regrowth', label: "REGROWTH", from: 90, to: 150, g: [0.6, 1], desc: "Spreads fast with the first rains." },
    { id: 'bloom', label: "IN BLOOM", from: 150, to: 300, g: [1, 1], desc: "Small blue flowers each morning." },
    { id: 'seeding', label: "SEEDING", from: 300, to: 360, g: [1, 0.7], desc: "Seeds ripen above and below ground." },
  ],
  beds: [{ plantedDay: -360 }],
});
