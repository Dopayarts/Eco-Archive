EA.addSpecies('tea-senna', {
  name: "TEA SENNA", latin: "Chamaecrista mimosoides", family: "Fabaceae (pea family)",
  origin: "Tropical and southern Africa and Asia; native in Nigeria",
  added: '2026-11-28',
  kind: 'perennial',
  summary: "A small shrub or herb with a woody base up to 1 m. Each leaf has 20-80 pairs of tiny narrow leaflets that fold when touched. Single bright yellow flowers give flat, strap-shaped pods 3-6 cm with 10-20 brown seeds.",
  facts: ["SUBSHRUB TO 1 M", "FEATHERY LEAVES", "TOUCH-SHY", "BRIGHT YELLOW", "FLAT PODS"],
  uses: [
    ["MEDICINE", "In India its root is used for diarrhoea and stomach cramps; powdered leaves for wounds and mouth ulcers."],
    ["FARM", "It improves soil and was tried as green manure."],
  ],
  history: "Also called fish-bone cassia and Japanese tea.",
  leaf: { shape: 'blade', len: 1, wid: 0.2, compound: 'pinnate', note: '20-80 LEAFLET PAIRS' },
  form: { type: 'shrub', height: 0.6, branches: 6, nodes: 6, arrange: 'alternate', leafSize: 0.7, droop: 0.2, flower: { type: 'single', size: 0.4, color: 'yellow' }, fruit: { type: 'pod', size: 0.4, color: 1 } },
  seasons: [
    { id: 'regrowth', label: "RAINY GROWTH", from: 150, to: 240, g: [0.6, 1], desc: "Feathery leaves." },
    { id: 'bloom', label: "IN FLOWER", from: 240, to: 300, g: [1, 1], desc: "Bright yellow flowers." },
    { id: 'fruiting', label: "PODDING", from: 300, to: 360, g: [1, 1], desc: "Flat pods." },
    { id: 'rest', label: "DRY REST", from: 0, to: 150, g: [1, 0.6], desc: "Woody base rests." },
  ],
  beds: [{ plantedDay: -300 }],
});
