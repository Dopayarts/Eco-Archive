EA.addSpecies('obeche', {
  name: "OBECHE", latin: "Triplochiton scleroxylon", family: "Malvaceae (mallow family)",
  origin: "West and Central Africa; rainforests of southern Nigeria",
  added: '2026-10-22',
  kind: 'perennial',
  summary: "A huge forest tree with tall buttresses and a wide crown of hand-shaped, lobed leaves like a maple. Small white-and-purple flowers are followed by winged fruits. Its pale yellow wood is light and soft for a hardwood.",
  facts: ["TREE UP TO 50 M, BIG BUTTRESSES", "LEAVES HAND-SHAPED, LOBED", "FRUITS WINGED", "WOOD PALE YELLOW, LIGHT", "EKITI STATE TREE"],
  uses: [
    ["WOOD", "Light timber for veneer, furniture, mouldings and even electric guitars."],
    ["SILK", "Its leaves feed caterpillars of the African silk moth, which spin wild silk cocoons."],
  ],
  history: "Obeche is an important Nigerian timber tree and the official tree of Ekiti State. Heavy harvesting from the wild is unsustainable in some areas.",
  leaf: { shape: 'lance', len: 0.9, wid: 0.45, compound: 'palmate', leaflets: 5, note: 'HAND-SHAPED LEAF, 5 SHALLOW LOBES' },
  form: { type: 'tree', height: 1.55, trunk: 0.6, branches: 8, nodes: 3, spread: 0.34, stemW: 0.09, leafSize: 1.6, arrange: 'alternate', flower: { type: 'cluster', size: 1, color: 3 }, fruit: { type: 'pod', size: 0.8, color: 2 } },
  seasons: [
    { id: 'dormant', label: "LEAF FALL", from: 0, to: 40, g: [0.8, 0.8], desc: "Leaves drop in the dry season." },
    { id: 'bloom', label: "IN BLOOM", from: 40, to: 80, g: [0.8, 1], desc: "Flowers open as new leaves come." },
    { id: 'fruiting', label: "WINGED FRUITS", from: 80, to: 150, g: [1, 1], desc: "Winged fruits ripen and blow away." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 150, to: 360, g: [1, 1], desc: "Full maple-like crown through the rains." },
  ],
  beds: [{ plantedDay: -10800 }],
});
