EA.addSpecies('sycamore-fig', {
  name: "SYCAMORE FIG", short: "SYCAMORE", latin: "Ficus sycomorus", family: "Moraceae (fig family)",
  origin: "Tropical Africa; savanna and riverbanks of northern Nigeria",
  added: '2026-10-24',
  kind: 'perennial',
  summary: "A big, spreading fig with a thick trunk and rough, heart-shaped leaves. Bunches of round figs grow straight out of the trunk and old branches, ripening yellowish to pinkish. Its wide crown gives deep shade.",
  facts: ["TREE UP TO 21 M, WIDE CROWN", "LEAVES ROUGH, HEART-SHAPED", "FIGS IN BUNCHES ON OLD WOOD", "FIGS RIPEN YELLOW-PINK", "MILKY LATEX"],
  uses: [
    ["FOOD", "Ripe figs are eaten fresh and feed birds, bats and monkeys."],
    ["SHADE", "Planted for shade in markets and villages."],
    ["WOOD", "Soft wood for mortars, boxes and drums."],
  ],
  history: "The sycamore fig was sacred in ancient Egypt, where its wood was used for coffins. In the West African savanna it is often left standing as a shade tree.",
  leaf: { shape: 'heart', len: 1, wid: 0.75, note: 'ROUGH, BROADLY HEART-SHAPED LEAF' },
  form: { type: 'tree', height: 1.3, trunk: 0.4, branches: 10, nodes: 4, spread: 0.45, stemW: 0.09, leafSize: 1.6, arrange: 'alternate', flower: { type: 'none' }, fruit: { type: 'berry', size: 2.2, color: 3 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 60, g: [1, 1], desc: "Deep shade in the dry season." },
    { id: 'fruiting', label: "FIGS", from: 60, to: 150, g: [1, 1], desc: "Bunches of figs ripen on the trunk." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 150, to: 270, g: [1, 1], desc: "Wide green crown through the rains." },
    { id: 'fruiting', label: "FIGS", from: 270, to: 360, g: [1, 1], desc: "Another crop of figs." },
  ],
  beds: [{ plantedDay: -9000 }],
});
