EA.addSpecies('smilax', {
  name: "SMILAX", latin: "Smilax anceps", family: "Smilacaceae",
  origin: "Tropical and southern Africa, Madagascar and nearby islands; found in Akwa Ibom State, Nigeria",
  added: '2026-11-17',
  kind: 'perennial',
  summary: "A vigorous scrambling vine up to 5 m with tough stems full of hooked prickles and paired coiled tendrils. Leathery leaves are 4-14 cm. Greenish-white flowers in round clusters give berries that ripen red, purple then black.",
  facts: ["CLIMBER TO 5 M", "HOOKED PRICKLES", "PAIRED TENDRILS", "LEATHERY LEAVES", "BERRIES RED TO BLACK"],
  uses: [
    ["MEDICINE", "In Akwa Ibom the leaf is used for infertility, joint and stomach pain, and insect stings."],
    ["FOOD", "The ripe berries are slightly sweet and sour."],
  ],
  history: "Its name anceps is explained as Latin for dangerous, a warning about its hooked prickles. It was also named Smilax kraussiana.",
  leaf: { shape: 'oval', len: 1, wid: 0.6, note: 'LEATHERY LEAF, 4-14 CM' },
  form: { type: 'vine', height: 1.1, nodes: 12, leafSize: 1.0, droop: 0.3, arrange: 'alternate', flower: { type: 'umbel', size: 0.6, color: 2 }, fruit: { type: 'berry', size: 0.6, color: 1 } },
  seasons: [
    { id: 'rest', label: "DRY SPELL", from: 0, to: 80, g: [0.8, 0.8], desc: "Growth slows." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 80, to: 200, g: [0.8, 1], desc: "Scrambles over bushes." },
    { id: 'bloom', label: "IN FLOWER", from: 200, to: 260, g: [1, 1], desc: "Round flower clusters." },
    { id: 'fruiting', label: "BERRIES", from: 260, to: 360, g: [1, 1], desc: "Berries turn black." },
  ],
  beds: [{ plantedDay: -1000 }],
});
