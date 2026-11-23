EA.addSpecies('biscuit-grass', {
  name: "BISCUIT GRASS", short: "BISCUITGRS", latin: "Paspalum vaginatum", family: "Poaceae (grass family)",
  origin: "Coasts of West Africa and the Americas; a dominant grass of brackish marshes at Warri and swamps at Ibeju-Lekki, Nigeria",
  added: '2026-11-23',
  kind: 'perennial',
  summary: "A perennial grass that spreads by runners and rhizomes, with stems 10-80 cm tall and blue-green leaf blades 10-19 cm long. Its seed head is usually a pair of slender branches up to 8 cm long.",
  facts: ["PERENNIAL GRASS", "SPREADS BY RUNNERS", "BLUE-GREEN BLADES", "PAIRED SEED SPIKES", "SALT TOLERANT"],
  uses: [
    ["SHORE", "It binds coastal soil against erosion and is used as turf."],
    ["CLEAN-UP", "It survives crude oil pollution; a University of Benin study tested it for cleaning oil-soaked soil from Warri."],
    ["FODDER", "Livestock graze it."],
  ],
  history: "Also called seashore paspalum, saltwater couch and swamp couch.",
  leaf: { shape: 'blade', len: 1, wid: 0.08, note: 'BLUE-GREEN BLADE' },
  form: { type: 'grass', height: 0.5, count: 18, stems: 4, droop: 0.4, flower: { type: 'plume', size: 0.5, color: 2 }, fruit: { type: 'berry', size: 0.2, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 180, g: [1, 1], desc: "Runners creep over the mud." },
    { id: 'bloom', label: "IN FLOWER", from: 180, to: 300, g: [1, 1], desc: "Paired seed spikes." },
    { id: 'fruiting', label: "SEEDING", from: 300, to: 360, g: [1, 1], desc: "Seeds shed." },
  ],
  beds: [{ plantedDay: -500 }],
});
