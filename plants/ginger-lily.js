EA.addSpecies('ginger-lily', {
  name: "GINGER LILY", short: "GINGERLILY", latin: "Costus afer", family: "Costaceae (spiral ginger family)",
  origin: "West and Central African forest; moist forest and riversides in southern Nigeria",
  added: '2026-10-30',
  kind: 'perennial',
  summary: "A cane-like herb up to 4 m tall with leaves set in a spiral up the stem. Cone-shaped flower spikes at the top bear white flowers with a yellow throat.",
  facts: ["HERB UP TO 4 M", "STEMS CANE-LIKE", "LEAVES IN A SPIRAL", "FLOWER CONE AT THE TOP", "FLOWERS WHITE, YELLOW THROAT"],
  uses: [
    ["MEDICINE", "In Nigeria the peeled stem is chewed against nausea and to quench thirst; stem and root are used for cough and malaria."],
    ["FODDER", "Fed to goats, sheep and snails."],
    ["CAUTION", "Stem sap can burn open wounds, and a root extract caused miscarriage in rats; avoid in pregnancy."],
  ],
  history: "Ginger lily is a weed of rice fields in southern Nigeria, where it also crosses with a related Costus.",
  leaf: { shape: 'oval', len: 1, wid: 0.4, note: 'SIMPLE LEAF, SPIRALLING UP THE CANE' },
  form: { type: 'herb', height: 1.15, stems: 3, nodes: 9, branches: 0, arrange: 'alternate', leafSize: 1.5, droop: 0.2, flower: { type: 'spike', size: 1.2, color: 3 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 90, g: [0.9, 0.9], desc: "Canes stand in damp shade." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 270, g: [1, 1], desc: "Flower cones open with the rains." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 270, to: 360, g: [1, 0.9], desc: "It flowers whenever the soil stays wet." },
  ],
  beds: [{ plantedDay: -1080 }],
});
