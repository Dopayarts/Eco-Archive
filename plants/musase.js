EA.addSpecies('musase', {
  name: "MUSASE", latin: "Albizia ferruginea", family: "Fabaceae (legume family)",
  origin: "West and Central Africa from Senegal east to Uganda and south to northern Angola, including Nigeria",
  added: '2026-11-13',
  kind: 'perennial',
  summary: "A large deciduous tree up to 45-50 m with rough scaly bark. Leaves are twice-pinnate with tiny hairy leaflets; new growth is red. Round heads of white to yellow flowers with long stamens give flat pods 15-24 cm long.",
  facts: ["TREE UP TO 45-50 M", "SCALY BARK", "RED NEW LEAVES", "PUFFBALL FLOWERS", "FLAT PAPERY PODS"],
  uses: [
    ["FUEL", "In Nigeria it has been recommended for fuelwood plantations."],
    ["TIMBER", "Wood for building, floors, furniture and veneer."],
    ["SHADE", "Planted as a shade and roadside tree; goats eat its leaves."],
  ],
  history: "Also called West African albizia. Its leaves fall after the rains. It is rated Near Threatened.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, compound: 'bipinnate', leaflets: 10, note: 'TINY HAIRY LEAFLETS' },
  form: { type: 'tree', height: 1.4, trunk: 0.55, branches: 9, nodes: 5, spread: 0.3, stemW: 0.08, leafSize: 1.0, arrange: 'alternate', droop: 0.15, flower: { type: 'head', size: 0.9, color: 3 }, fruit: { type: 'pod', size: 1.0, color: 1 } },
  seasons: [
    { id: 'dormant', label: "LEAVES FALL", from: 0, to: 90, g: [0.7, 0.6], desc: "Bare after the rains." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 150, g: [0.6, 1], desc: "Puffball flowers with red new leaves." },
    { id: 'fruiting', label: "PODS", from: 150, to: 230, g: [1, 1], desc: "Pods split, seeds blow away." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 230, to: 360, g: [1, 1], desc: "Full crown." },
  ],
  beds: [{ plantedDay: -5000 }],
});
