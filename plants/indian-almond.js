EA.addSpecies('indian-almond', {
  name: "INDIAN ALMOND", short: "ALMOND", latin: "Terminalia catappa", family: "Combretaceae (combretum family)",
  origin: "Tropical Asia; planted across Nigeria, often called \"fruit\" tree",
  added: '2026-10-23',
  kind: 'perennial',
  summary: "A shade tree whose branches grow in flat, horizontal tiers, giving a pagoda shape. Big, glossy, egg-shaped leaves cluster at the branch tips and turn bright red before falling. Egg-shaped, ridged fruits ripen yellow or red around an oily kernel.",
  facts: ["TREE 10-25 M, TIERED BRANCHES", "LEAVES BIG, GLOSSY, TURN RED", "FRUIT EGG-SHAPED, 2 RIDGES", "KERNEL EDIBLE, OILY", "GIVES DENSE SHADE"],
  uses: [
    ["FOOD", "Children eat the fruit flesh and crack the kernels, eaten raw or roasted."],
    ["SHADE", "Planted in schools and compounds for its wide shade."],
    ["DYE", "Bark, leaves and fruit give tannin and dye."],
  ],
  history: "Indian almond came from Asia and is now a familiar shade tree in Nigerian towns, where Nigerian scientists have analysed its kernel oil.",
  leaf: { shape: 'paddle', len: 1, wid: 0.55, note: 'BIG EGG-SHAPED LEAF, GLOSSY, TURNS RED' },
  form: { type: 'tree', height: 1.35, trunk: 0.45, branches: 9, nodes: 3, spread: 0.4, stemW: 0.07, leafSize: 1.8, arrange: 'whorl', droop: 0.1, flower: { type: 'spike', size: 0.8, color: 3 }, fruit: { type: 'big', size: 0.8, hang: true, color: 2 } },
  seasons: [
    { id: 'dormant', label: "RED LEAF FALL", from: 0, to: 40, g: [0.85, 0.85], desc: "Leaves turn red and drop." },
    { id: 'regrowth', label: "NEW LEAVES", from: 40, to: 80, g: [0.85, 1], desc: "Fresh green leaves burst out." },
    { id: 'bloom', label: "IN BLOOM", from: 80, to: 140, g: [1, 1], desc: "Slender spikes of tiny white flowers." },
    { id: 'fruiting', label: "FRUITING", from: 140, to: 270, g: [1, 1], desc: "Fruits swell and ripen yellow-red." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 270, to: 360, g: [1, 1], desc: "Wide tiered shade." },
  ],
  beds: [{ plantedDay: -5400 }],
});
