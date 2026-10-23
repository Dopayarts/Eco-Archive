EA.addSpecies('flamboyant', {
  name: "FLAMBOYANT", latin: "Delonix regia", family: "Fabaceae (pea family)",
  origin: "Madagascar; planted as an ornamental across Nigeria",
  added: '2026-10-23',
  kind: 'perennial',
  summary: "A spreading, umbrella-shaped tree with feathery, light green leaves of many tiny leaflets. In season the crown is covered in big orange-red to scarlet flowers. Long, flat, woody, dark brown pods hang on through the year.",
  facts: ["TREE 10-15 M, WIDE CROWN", "LEAVES FEATHERY, TWICE PINNATE", "FLOWERS SCARLET, 5-13 CM", "PODS WOODY, UP TO 75 CM", "FLOWERS AT 4-5 YEARS OLD"],
  uses: [
    ["SHADE", "Planted for shade and colour along streets and in compounds."],
    ["BEES", "Flowers are good bee forage."],
    ["FUEL", "Pods and wood are burned; hard seeds are used as beads."],
  ],
  history: "Flame trees come from Madagascar and were planted across the tropics for their blaze of red flowers.",
  leaf: { shape: 'oval', len: 0.8, wid: 0.45, compound: 'bipinnate', note: 'FEATHERY TWICE-PINNATE LEAF, TINY LEAFLETS' },
  form: { type: 'tree', height: 1.2, trunk: 0.4, branches: 9, nodes: 4, spread: 0.4, stemW: 0.07, leafSize: 1.5, arrange: 'alternate', droop: 0.3, flower: { type: 'cluster', size: 2.4, color: 3 }, fruit: { type: 'pod', size: 2.0, hang: true, color: 1 } },
  seasons: [
    { id: 'dormant', label: "LEAF FALL", from: 0, to: 60, g: [0.8, 0.8], desc: "The crown thins in the dry season; old pods hang on." },
    { id: 'bloom', label: "IN BLOOM", from: 60, to: 150, g: [0.8, 1], desc: "The crown blazes red as new leaves come." },
    { id: 'fruiting', label: "PODS GROWING", from: 150, to: 270, g: [1, 1], desc: "Long green pods grow and harden brown." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 270, to: 360, g: [1, 0.9], desc: "Feathery green crown." },
  ],
  beds: [{ plantedDay: -5400 }],
});
