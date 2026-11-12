EA.addSpecies('paullinia', {
  name: "PAULLINIA", latin: "Paullinia pinnata", family: "Sapindaceae (soapberry family)",
  origin: "Tropical Africa and South and Central America; collected in Bauchi State, Nigeria",
  added: '2026-11-12',
  kind: 'perennial',
  summary: "A climber with long, flexible stems. Each leaf has five toothed leaflets with clear veins on a winged stalk.",
  facts: ["CLIMBING VINE", "LONG FLEXIBLE STEMS", "5 TOOTHED LEAFLETS", "WINGED LEAF STALK", "BUTTERFLY FOOD PLANT"],
  uses: [
    ["MEDICINE", "In West Africa it is mainly used to stop bleeding; leaf brews are taken for fever with aches."],
    ["MEDICINE", "In Nigeria it is used for arthritis and rheumatism."],
    ["CAUTION", "Its stems have been used to poison fish in pools."],
  ],
  history: "The naturalist Henry Walter Bates described its stems being used to poison fish in shallow pools. Caterpillars of many butterflies feed on it.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, serr: 0.25, compound: 'pinnate', leaflets: 5, note: 'FIVE TOOTHED LEAFLETS, WINGED STALK' },
  form: { type: 'vine', height: 1.1, nodes: 12, leafSize: 1.2, droop: 0.3, arrange: 'alternate', flower: { type: 'cluster', size: 0.7, color: 3 }, fruit: { type: 'berry', size: 0.7, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 120, g: [0.9, 1], desc: "Stems climb." },
    { id: 'bloom', label: "IN FLOWER", from: 120, to: 200, g: [1, 1], desc: "Small flower sprays." },
    { id: 'fruiting', label: "FRUITING", from: 200, to: 300, g: [1, 1], desc: "Fruits ripen." },
    { id: 'regrowth', label: "NEW SHOOTS", from: 300, to: 360, g: [1, 0.9], desc: "Fresh growth." },
  ],
  beds: [{ plantedDay: -600 }],
});
