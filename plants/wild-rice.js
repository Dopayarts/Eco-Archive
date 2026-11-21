EA.addSpecies('wild-rice', {
  name: "WILD RICE", latin: "Oryza longistaminata", family: "Poaceae (grass family)",
  origin: "Tropical Africa; wild stands at Jebba and Badeggi, Nigeria",
  added: '2026-11-21',
  kind: 'perennial',
  summary: "A perennial grass about 2 m tall with large spreading rhizomes and soft stems. A panicle 20-30 cm long carries spikelets 7-10 mm long with purplish-red awns 4-10 cm long. It grows in swamps, lakes and riversides.",
  facts: ["PERENNIAL GRASS", "SPREADING RHIZOMES", "ABOUT 2 M TALL", "PURPLE-RED AWNS", "FLOWERS IN SEPTEMBER"],
  uses: [
    ["FOOD", "In some places its grains are gathered and eaten."],
    ["FODDER", "Cattle graze it when young."],
    ["THATCH", "The straw is used for thatching."],
    ["WEED", "It is a serious weed in flooded rice fields."],
  ],
  history: "At Jebba it crosses with African and Asian rice, forming a hybrid swarm. Also called red rice.",
  leaf: { shape: 'blade', len: 1, wid: 0.08, note: 'GRASS BLADE TO 30 CM' },
  form: { type: 'grass', height: 1.0, count: 20, stems: 4, droop: 0.4, flower: { type: 'plume', size: 0.7, color: 2 }, fruit: { type: 'berry', size: 0.2, color: 2 } },
  seasons: [
    { id: 'rest', label: "DRY SEASON", from: 0, to: 180, g: [1, 1], desc: "Rhizomes rest in the mud." },
    { id: 'regrowth', label: "RAINY GROWTH", from: 180, to: 300, g: [1, 1], desc: "Shoots with the floods." },
    { id: 'bloom', label: "IN FLOWER", from: 300, to: 330, g: [1, 1], desc: "Awned panicles in September." },
    { id: 'fruiting', label: "SEEDING", from: 330, to: 360, g: [1, 1], desc: "Grains shed." },
  ],
  beds: [{ plantedDay: -800 }],
});
