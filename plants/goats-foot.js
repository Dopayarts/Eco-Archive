EA.addSpecies('goats-foot', {
  name: "GOAT'S FOOT", short: "GOATS FOOT", latin: "Ipomoea pes-caprae", family: "Convolvulaceae (morning glory family)",
  origin: "Sea shores of the tropics; dominates the shoreline strand in Akwa Ibom State, Nigeria",
  added: '2026-11-19',
  kind: 'perennial',
  summary: "A creeping perennial with hollow stems up to 30 m that root as they run over sand. Leathery leaves are deeply notched at the tip like a goat hoof. Funnel flowers are pink to reddish purple with a darker centre.",
  facts: ["CREEPER TO 30 M", "ROOTS AT NODES", "NOTCHED LEAF", "PINK-PURPLE FUNNEL", "FLOATING SEEDS"],
  uses: [
    ["SAND", "It binds sand and is one of the first plants on new dunes."],
    ["MEDICINE", "In West Africa leaf preparations go on ulcers and abscesses."],
    ["FARM", "Livestock browse the leaves, and the stems make rope."],
  ],
  history: "Also called beach morning glory. Its hairy seeds float and spread on ocean currents.",
  leaf: { shape: 'round', len: 1, wid: 1, note: 'LEATHERY LEAF, NOTCHED TIP' },
  form: { type: 'vine', height: 0.35, branches: 5, nodes: 8, arrange: 'alternate', leafSize: 0.9, droop: 0.1, flower: { type: 'single', size: 1.0, color: 1 }, fruit: { type: 'pod', size: 0.5, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 120, g: [1, 1], desc: "Runners spread over sand." },
    { id: 'bloom', label: "IN FLOWER", from: 120, to: 240, g: [1, 1], desc: "Pink-purple funnels." },
    { id: 'fruiting', label: "CAPSULES", from: 240, to: 360, g: [1, 1], desc: "Capsules of floating seeds." },
  ],
  beds: [{ plantedDay: -600 }],
});
