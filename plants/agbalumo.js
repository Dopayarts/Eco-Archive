EA.addSpecies('agbalumo', {
  name: "AGBALUMO", latin: "Chrysophyllum albidum (syn. Gambeya albida)", family: "Sapotaceae (sapodilla family)",
  origin: "West and Central African forests; southern Nigeria",
  local: "AGBALUMO (YORUBA), UDARA (IGBO), AGWALUMA (HAUSA)",
  added: '2026-10-16',
  kind: 'perennial',
  summary: "African star apple: a tall forest tree with leaves glossy green above and silvery-brown beneath, so the crown flashes in the wind. Round fruits ripen orange in the dry season, with sticky, sweet-sour pulp around shiny brown seeds in a star pattern.",
  facts: ["TREE UP TO 35 M", "LEAVES GREEN ABOVE, SILVERY-BROWN BELOW", "LATEX WHITE AND STICKY", "FRUIT ROUND, ORANGE, SEEDS IN A STAR", "SEASON: DRY SEASON, AROUND DECEMBER TO MARCH"],
  uses: [
    ["FOOD", "Eaten fresh in huge quantities in season; children chew the skin like gum."],
    ["TRADITIONAL", "Bark and leaves are used for fever and diabetes; evidence is limited."],
  ],
  history: "Agbalumo season is one of the markers of the Nigerian dry season, when the fruit floods markets and social media. Most fruit still comes from forest and farm trees, not orchards.",
  leaf: { shape: 'oval', len: 1, wid: 0.4, note: 'SIMPLE OBLONG LEAF, GLOSSY ABOVE, SILVERY-BROWN BELOW' },
  form: { type: 'tree', height: 1.45, trunk: 0.5, branches: 6, nodes: 4, spread: 0.26, stemW: 0.05, leafSize: 1.8, arrange: 'alternate', flower: { type: 'cluster', size: 0.6, color: 3 }, fruit: { type: 'big', size: 0.8, hang: true, color: 2 } },
  seasons: [
    { id: 'harvest', label: "AGBALUMO SEASON", from: 0, to: 80, g: [1, 1], desc: "Ripe orange fruits fall and fill the markets." },
    { id: 'regrowth', label: "NEW LEAVES", from: 80, to: 130, g: [1, 1], desc: "Fresh leaves flash silver beneath." },
    { id: 'bloom', label: "IN BLOOM", from: 130, to: 190, g: [1, 1], desc: "Small cream flowers cluster along the twigs." },
    { id: 'fruiting', label: "FRUIT GROWING", from: 190, to: 330, g: [1, 1], desc: "Hard green fruits grow slowly through the rains." },
    { id: 'harvest', label: "AGBALUMO SEASON", from: 330, to: 360, g: [1, 1], desc: "The first ripe fruits arrive." },
  ],
  beds: [{ plantedDay: -2880 }],
});
