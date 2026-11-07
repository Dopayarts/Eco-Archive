EA.addSpecies('gamji', {
  name: "GAMJI", latin: "Ficus platyphylla", family: "Moraceae (fig family)",
  origin: "Savanna from Senegal to Somalia, including northern and central Nigeria",
  local: "GAMJI (HAUSA)",
  added: '2026-11-07',
  kind: 'perennial',
  summary: "A deciduous fig tree up to 20 m with a huge spreading crown and pale brown, scaly bark. It sometimes starts life on another tree. Large leaves up to 25 cm long. Small reddish figs, 1-1.5 cm across, grow in clusters at the leaf bases.",
  facts: ["FIG TREE UP TO 20 M", "HUGE SPREADING CROWN", "LEAVES UP TO 25 CM", "FIGS SMALL, REDDISH", "DECIDUOUS"],
  uses: [
    ["MEDICINE", "In Nigeria the stem bark is used for depression, epilepsy and psychosis, and to expel worms."],
    ["ANTIDOTE", "It is used as an antidote to poison in several cultures."],
  ],
  history: "In Dungung, Plateau State, where it is used for epilepsy, a recent survey warned that the remaining gamji trees face local extinction.",
  leaf: { shape: 'oval', len: 1, wid: 0.6, note: 'LARGE BROAD FIG LEAF' },
  form: { type: 'tree', height: 1.2, trunk: 0.45, branches: 12, nodes: 6, spread: 0.42, stemW: 0.08, leafSize: 2.0, arrange: 'alternate', flower: { type: 'none' }, fruit: { type: 'berry', size: 0.7, color: 1 } },
  seasons: [
    { id: 'dormant', label: "LEAF FALL", from: 0, to: 90, g: [1, 0.6], desc: "Leaves drop in the dry season." },
    { id: 'regrowth', label: "NEW LEAVES", from: 90, to: 150, g: [0.6, 1], desc: "New leaves flush." },
    { id: 'fruiting', label: "FIG CLUSTERS", from: 150, to: 270, g: [1, 1], desc: "Clusters of small red figs." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 270, to: 360, g: [1, 1], desc: "Wide crown." },
  ],
  beds: [{ plantedDay: -9000 }],
});
