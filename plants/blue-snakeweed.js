EA.addSpecies('blue-snakeweed', {
  name: "BLUE SNAKEWEED", short: "SNAKEWEED", latin: "Stachytarpheta cayennensis", family: "Verbenaceae (verbena family)",
  origin: "From tropical America; now pantropical, including Africa and southern Nigeria",
  added: '2026-11-15',
  kind: 'perennial',
  summary: "A perennial herb or shrub up to 2-2.5 m with a woody base. Oval leaves in pairs are rough with sharp teeth. A very thin flower spike up to 45 cm carries purple-blue flowers that each last only one day.",
  facts: ["HERB OR SHRUB", "UP TO 2.5 M", "ROUGH TOOTHED LEAVES", "SPIKE UP TO 45 CM", "FLOWERS LAST A DAY"],
  uses: [
    ["MEDICINE", "In southern Nigeria it is widely accepted as a malaria remedy; leaves are sold at Uyo market."],
    ["TEA", "Its leaves are brewed as a tea, so it is also called Brazilian tea."],
  ],
  history: "It is named after Cayenne in French Guiana. Other names include bluetop, rattail and false vervain.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, note: 'ROUGH TOOTHED LEAF' },
  form: { type: 'shrub', height: 0.7, branches: 5, nodes: 6, trunk: 0.2, spread: 0.35, arrange: 'opposite', leafSize: 0.8, droop: 0.15, flower: { type: 'spike', size: 1.1, color: 2 }, fruit: { type: 'berry', size: 0.3, color: 1 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 150, g: [1, 1], desc: "Blue flowers, one day each." },
    { id: 'fruiting', label: "SEEDING", from: 150, to: 220, g: [1, 1], desc: "Seeds form." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 220, to: 360, g: [1, 1], desc: "Bushy growth." },
  ],
  beds: [{ plantedDay: -600 }],
});
