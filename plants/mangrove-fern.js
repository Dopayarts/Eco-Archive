EA.addSpecies('mangrove-fern', {
  name: "MANGROVE FERN", short: "MANGRVFERN", latin: "Acrostichum aureum", family: "Pteridaceae (brake fern family)",
  origin: "Tropical coasts worldwide; in Nigerian mangroves at the University of Lagos lagoon, Buguma and Okrika",
  added: '2026-11-22',
  kind: 'perennial',
  summary: "A large fern whose glossy, leathery fronds grow to 1.8 m long. Its dark green leaflets are widely spaced. The upper leaflets are covered beneath in brick-red spore cases, giving them a felted look.",
  facts: ["LARGE FERN", "FRONDS TO 1.8 M", "LEATHERY LEAFLETS", "BRICK-RED SPORES", "NO FLOWERS"],
  uses: [
    ["MEDICINE", "In Nigeria it is used for stomach-ache, skin diseases and migraine."],
    ["RESEARCH", "A Lagos study found its leaf extract protected the liver and kidneys of rats."],
    ["FOOD", "Young fronds are eaten as a vegetable in parts of Asia."],
  ],
  history: "Also called golden leather fern, swamp fern and tiger fern.",
  leaf: { shape: 'lance', len: 1, wid: 0.25, compound: 'pinnate', note: 'LEATHERY FROND' },
  form: { type: 'fern', height: 1.1, count: 14, leafSize: 2.0, droop: 0.45 },
  seasons: [
    { id: 'vegetative', label: "NEW FRONDS", from: 0, to: 360, g: [1, 1], desc: "Fronds rise from the mud." },
  ],
  beds: [{ plantedDay: -800 }],
});
