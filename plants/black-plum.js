EA.addSpecies('black-plum', {
  name: "BLACK PLUM", latin: "Vitex doniana", family: "Lamiaceae (mint family)",
  origin: "Tropical African savanna and forest edges, including Nigeria",
  local: "DINYA (HAUSA), OORI-NLA (YORUBA), UCHA KORO (IGBO)",
  added: '2026-10-29',
  kind: 'perennial',
  summary: "A savanna tree with a rounded crown and leaves of five stalked leaflets spread like a hand. Dense clusters of small white flowers with a purple lip are followed by oblong fruits that ripen purplish-black with sweet, prune-like pulp around a hard stone.",
  facts: ["TREE 8-18 M", "LEAVES OF 5 LEAFLETS", "FLOWERS WHITE, PURPLE LIP", "FRUIT BLACK, PRUNE-LIKE", "DROPS LEAVES IN DRY SEASON"],
  uses: [
    ["FOOD", "Ripe fruit is eaten fresh and made into jam; leaves are used as a cooking herb."],
    ["BEES", "Flowers support beekeeping."],
    ["WOOD", "Firewood, charcoal and timber."],
  ],
  history: "Black plum is a familiar fruit tree of the African savanna, and its sweet fruit is gathered from wild trees.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, compound: 'palmate', leaflets: 5, note: 'HAND-LIKE LEAF OF 5 STALKED LEAFLETS' },
  form: { type: 'tree', height: 1.2, trunk: 0.4, branches: 10, nodes: 4, spread: 0.4, stemW: 0.07, leafSize: 1.8, arrange: 'opposite', flower: { type: 'cluster', size: 1.0, color: 3 }, fruit: { type: 'berry', size: 2.2, color: 1 } },
  seasons: [
    { id: 'dormant', label: "LEAF FALL", from: 0, to: 60, g: [0.8, 0.8], desc: "Leaves drop in the harmattan." },
    { id: 'bloom', label: "IN BLOOM", from: 60, to: 120, g: [0.8, 1], desc: "Flowers with the new leaves." },
    { id: 'fruiting', label: "FRUITING", from: 120, to: 240, g: [1, 1], desc: "Fruits ripen black." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 240, to: 360, g: [1, 0.85], desc: "Rounded crown in the rains." },
  ],
  beds: [{ plantedDay: -7200 }],
});
