EA.addSpecies('strophanthus-gratus', {
  name: "STROPH GRATUS", short: "S. GRATUS", latin: "Strophanthus gratus", family: "Apocynaceae (dogbane family)",
  origin: "West and central African forests; cultivated by hunters in southern Nigeria",
  added: '2026-11-18',
  kind: 'perennial',
  summary: "A woody liana up to 25 m. Its white flowers are tipped red or purple with a pink crown, and its paired seed pods are 23-41 cm long.",
  facts: ["LIANA TO 25 M", "WHITE AND RED FLOWERS", "PODS 23-41 CM", "SEEDS HOLD OUABAIN", "ARROW POISON"],
  uses: [
    ["HUNTING", "Hunters in southern Nigeria grow it for its seeds, used as arrow poison."],
    ["MEDICINE", "A leaf infusion is used for constipation and fever."],
    ["CAUTION", "Very poisonous. Its seeds hold ouabain, a heart poison that causes vomiting, convulsions and cardiac arrest."],
  ],
  history: "Ouabain from its seeds was used in medicine as a heart drug.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, note: 'GLOSSY SIMPLE LEAF' },
  form: { type: 'vine', height: 1.3, branches: 4, nodes: 9, arrange: 'opposite', leafSize: 0.9, droop: 0.2, flower: { type: 'cluster', size: 1.0, color: 3 }, fruit: { type: 'pod', size: 1.2, color: 2 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 120, g: [1, 1], desc: "White and red flowers." },
    { id: 'fruiting', label: "PODS", from: 120, to: 240, g: [1, 1], desc: "Long paired pods." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 240, to: 360, g: [1, 1], desc: "Climbs high." },
  ],
  beds: [{ plantedDay: -2500 }],
});
