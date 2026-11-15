EA.addSpecies('rourea', {
  name: "ROUREA", latin: "Rourea coccinea", family: "Connaraceae",
  origin: "Savanna thickets and secondary forest from Guinea to Cameroon; found in Oyo State, Nigeria",
  added: '2026-11-15',
  kind: 'perennial',
  summary: "A climbing woody vine of savanna thickets and secondary forest, also grown for its decorative look.",
  facts: ["WOODY CLIMBER", "SAVANNA THICKETS", "ORNAMENTAL", "ROOT, LEAF MEDICINE", "ALSO BYRSOCARPUS"],
  uses: [
    ["MEDICINE", "In Nigeria its leaves and roots are used for piles, dysentery, gonorrhoea, jaundice and ulcers."],
    ["GARDEN", "It is grown to decorate the surroundings."],
  ],
  history: "It is also known by the older name Byrsocarpus coccineus, and as crimson thyme.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, note: 'LEAF OF A WOODY CLIMBER' },
  form: { type: 'vine', height: 1.0, nodes: 11, leafSize: 1.0, droop: 0.3, arrange: 'alternate', flower: { type: 'cluster', size: 0.7, color: 3 }, fruit: { type: 'berry', size: 0.6, color: 1 } },
  seasons: [
    { id: 'rest', label: "DRY SPELL", from: 0, to: 70, g: [0.8, 0.7], desc: "Growth slows." },
    { id: 'bloom', label: "IN FLOWER", from: 70, to: 140, g: [0.8, 1], desc: "Flower clusters." },
    { id: 'fruiting', label: "FRUITING", from: 140, to: 220, g: [1, 1], desc: "Small fruits." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 220, to: 360, g: [1, 1], desc: "Climbs through thickets." },
  ],
  beds: [{ plantedDay: -1200 }],
});
