EA.addSpecies('common-reed', {
  name: "COMMON REED", short: "REED", latin: "Phragmites australis", family: "Poaceae (grass family)",
  origin: "Wetlands worldwide; listed among the aquatic plants of Nigeria",
  added: '2026-11-25',
  kind: 'perennial',
  summary: "A tall wetland grass with upright stems 2-4 m, sometimes 6 m. Flat leaves are 18-60 cm long and up to 6 cm wide. Dense dark purple flower plumes 15-40 cm long turn grey and silky as tiny seeds ripen. It spreads by runners that root as they go.",
  facts: ["GRASS TO 4 M", "RUNNERS ROOT", "LEAVES TO 60 CM", "PURPLE PLUMES", "THATCH"],
  uses: [
    ["FOOD", "Young stems, roots and seeds are eaten after cooking."],
    ["BUILDING", "Its stems are a main thatch for roofs and make drinking straws."],
    ["WATER", "Reed beds are planted to clean dirty water."],
    ["CAUTION", "It forms dense stands that crowd out other plants, and is invasive in North America."],
  ],
  history: "The wind carries its tiny seeds on silky hairs.",
  leaf: { shape: 'blade', len: 1, wid: 0.1, note: 'GRASS BLADE' },
  form: { type: 'grass', height: 1.4, count: 20, stems: 6, droop: 0.35, flower: { type: 'plume', size: 0.8, color: 1 }, fruit: { type: 'berry', size: 0.2, color: 3 } },
  seasons: [
    { id: 'regrowth', label: "RAINY GROWTH", from: 150, to: 270, g: [0.5, 1], desc: "New shoots rise." },
    { id: 'bloom', label: "IN FLOWER", from: 270, to: 330, g: [1, 1], desc: "Purple plumes." },
    { id: 'fruiting', label: "SEEDING", from: 330, to: 360, g: [1, 1], desc: "Plumes turn silky grey." },
    { id: 'rest', label: "DRY REST", from: 0, to: 150, g: [1, 0.5], desc: "Stems stand dry." },
  ],
  beds: [{ plantedDay: -800 }],
});
