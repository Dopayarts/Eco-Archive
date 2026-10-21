EA.addSpecies('carrot', {
  name: "CARROT", latin: "Daucus carota", family: "Apiaceae (carrot family)",
  origin: "Central Asia; in Nigeria grown mostly on the cool Jos Plateau",
  local: "KARAS (HAUSA)",
  added: '2026-10-21',
  kind: 'annual',
  summary: "A low rosette of finely divided, feathery leaves above a swelling orange taproot. Left a second year it would send up a tall stalk of white lace-like flower umbels, but the root is pulled long before that.",
  facts: ["HERB 20-40 CM IN LEAF", "LEAVES FINELY DIVIDED, FEATHERY", "ROOT ORANGE, TAPERING", "FLOWERS WHITE UMBELS (2ND YEAR)", "NEEDS COOL WEATHER"],
  uses: [
    ["FOOD", "Eaten raw or cooked in salads, fried rice and stews."],
  ],
  history: "The Jos Plateau supplies much of Nigeria's carrots, grown on irrigated plots in the dry season and trucked to cities across the country.",
  leaf: { shape: 'thread', len: 1, wid: 0.5, compound: 'bipinnate', note: 'FINELY DIVIDED FEATHERY LEAF' },
  form: { type: 'rosette', height: 0.6, count: 10, leafSize: 1.4, pitch: [0.9, 1.4], droop: 0.25, flower: { type: 'umbel', size: 1, color: 3 } },
  stages: [
    { id: 'seed', label: "SEED", days: 7, g: [0, 0], desc: "Seeds are sown in a nursery or straight into beds." },
    { id: 'sprout', label: "SPROUT", days: 7, g: [0.04, 0.12], desc: "Tiny seed leaves appear." },
    { id: 'seedling', label: "SEEDLING", days: 20, g: [0.12, 0.35], desc: "Thin feathery leaves appear." },
    { id: 'vegetative', label: "LEAFY GROWTH", days: 30, g: [0.35, 0.9], desc: "The leaf rosette fills out." },
    { id: 'fruiting', label: "HEADING UP", days: 25, g: [0.9, 1], desc: "The root swells and colours orange." },
    { id: 'senescence', label: "HARVEST", days: 8, g: [1, 0.8], desc: "Roots are pulled and bunched." },
  ],
  beds: [{ sowDay: 274 }],
});
