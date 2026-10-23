EA.addSpecies('okpehe', {
  name: "AFRICAN MESQUITE", short: "OKPEHE", latin: "Prosopis africana", family: "Fabaceae (pea family)",
  origin: "Savanna Africa; across Nigeria's middle belt and north",
  added: '2026-10-23',
  kind: 'perennial',
  summary: "A savanna tree with rough, dark bark and feathery, twice-divided leaves of many small leaflets. Dense yellowish flower spikes are followed by thick, dark brown pods that do not split, holding hard seeds in sweetish pulp.",
  facts: ["TREE 4-20 M", "LEAVES BIPINNATE, FEATHERY", "FLOWERS IN YELLOWISH SPIKES", "PODS THICK, DARK, DO NOT SPLIT", "VERY HARD, HEAVY WOOD"],
  uses: [
    ["FOOD", "Seeds are fermented into okpehe, a local soup condiment."],
    ["WOOD", "Hard wood for tool handles, mortars and charcoal."],
  ],
  history: "African mesquite is a lesser-known legume of Nigeria. Researchers at Ilorin and elsewhere study okpehe, the condiment made by fermenting its seeds.",
  leaf: { shape: 'oval', len: 0.9, wid: 0.45, compound: 'bipinnate', note: 'TWICE-PINNATE LEAF, MANY SMALL LEAFLETS' },
  form: { type: 'tree', height: 1.25, trunk: 0.45, branches: 8, nodes: 4, spread: 0.32, stemW: 0.06, leafSize: 1.5, arrange: 'alternate', flower: { type: 'spike', size: 1.1, color: 3 }, fruit: { type: 'pod', size: 1.3, hang: true, color: 1 } },
  seasons: [
    { id: 'dormant', label: "LEAF FALL", from: 0, to: 60, g: [0.8, 0.8], desc: "Leaves thin out in the dry season." },
    { id: 'bloom', label: "IN BLOOM", from: 60, to: 120, g: [0.8, 1], desc: "Yellowish flower spikes appear with new leaves." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 120, to: 240, g: [1, 1], desc: "Feathery crown through the rains." },
    { id: 'fruiting', label: "PODS RIPENING", from: 240, to: 360, g: [1, 0.85], desc: "Thick pods darken and fall." },
  ],
  beds: [{ plantedDay: -7200 }],
});
