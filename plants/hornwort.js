EA.addSpecies('hornwort', {
  name: "HORNWORT", latin: "Ceratophyllum demersum", family: "Ceratophyllaceae (hornwort family)",
  origin: "Fresh water worldwide; in the Niger Delta and the Kainji and Jebba lakes, Nigeria",
  added: '2026-11-24',
  kind: 'perennial',
  summary: "A rootless water plant that floats under the surface, with stems 1-3 m long. Stiff, brittle leaves grow in whorls of 6-12 and fork into thread-like toothed parts. Tiny flowers give small nuts with three spines.",
  facts: ["UNDERWATER PLANT", "NO ROOTS", "WHORLED LEAVES", "THREAD-LIKE FORKS", "SPINY LITTLE NUTS"],
  uses: [
    ["FISH", "In the Niger Delta it gives fish places to spawn and hide."],
    ["AQUARIUM", "It is a popular aquarium plant."],
    ["CAUTION", "Thick stands shelter the snails that spread bilharzia."],
  ],
  history: "Also called coontail. It holds back algae by releasing chemicals into the water.",
  leaf: { shape: 'thread', len: 1, wid: 0.1, note: 'FORKED THREAD LEAF' },
  form: { type: 'herb', height: 0.6, branches: 6, nodes: 8, arrange: 'whorl', leafSize: 0.5, droop: 0.1, flower: { type: 'none' } },
  seasons: [
    { id: 'vegetative', label: "UNDERWATER GROWTH", from: 0, to: 360, g: [1, 1], desc: "Floats below the surface." },
  ],
  beds: [{ plantedDay: -300 }],
});
