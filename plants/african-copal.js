EA.addSpecies('african-copal', {
  name: "AFRICAN COPAIBA", short: "COPAIBA", latin: "Daniellia oliveri", family: "Fabaceae (pea family)",
  origin: "West and Central African savanna; native to Nigeria",
  added: '2026-10-28',
  kind: 'perennial',
  summary: "A tall savanna tree with smooth whitish bark that flakes off in round patches, showing deep red inner bark. Leaves have 6-11 pairs of leaflets. Scented white flowers appear in the dry season, often on a leafless crown, followed by flat pods holding a single seed.",
  facts: ["TREE UP TO 25-35 M", "BARK FLAKES IN ROUND PATCHES", "LEAVES PINNATE, 6-11 PAIRS", "FLOWERS WHITE, SCENTED", "GIVES A FRAGRANT RESIN"],
  uses: [
    ["RESIN", "The gum is burned as incense and torch fuel and rubbed on cloth and furniture for shine."],
    ["MUSIC", "In Nigeria drums are soaked in a solution of the gum to deepen their tone."],
    ["FODDER", "Cattle browse the leaves; bees visit the flowers for nectar."],
  ],
  history: "One of its English names is Ilorin balsam, after the resin traded from the Nigerian city.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, compound: 'pinnate', leaflets: 14, note: 'PINNATE LEAF, 6-11 PAIRS OF LEAFLETS' },
  form: { type: 'tree', height: 1.45, trunk: 0.5, branches: 9, nodes: 4, spread: 0.36, stemW: 0.08, leafSize: 1.8, arrange: 'alternate', flower: { type: 'cluster', size: 1.3, color: 3 }, fruit: { type: 'pod', size: 1.0, hang: true, color: 2 } },
  seasons: [
    { id: 'bloom', label: "IN BLOOM", from: 0, to: 60, g: [0.8, 0.8], desc: "Scented white flowers on the bare crown." },
    { id: 'fruiting', label: "PODS", from: 60, to: 180, g: [0.8, 1], desc: "Flat pods ripen and split; new leaves come." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 180, to: 270, g: [1, 1], desc: "Full crown in the rains." },
    { id: 'bloom', label: "IN BLOOM", from: 270, to: 360, g: [1, 0.85], desc: "Flowering starts as leaves fall." },
  ],
  beds: [{ plantedDay: -9000 }],
});
