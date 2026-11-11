EA.addSpecies('pastureweed', {
  name: "PASTUREWEED", short: "PASTURWEED", latin: "Cyathula prostrata", family: "Amaranthaceae (amaranth family)",
  origin: "Throughout the tropics and subtropics; common in Nigeria, such as around Ibadan",
  added: '2026-11-11',
  kind: 'perennial',
  summary: "A sprawling perennial herb with pairs of diamond-shaped, pointed, thinly hairy leaves. Slender spikes carry tiny flowers in groups of 3-5 whose tips end in hooked bristles that catch on fur and clothes.",
  facts: ["SPRAWLING HERB", "LEAVES IN PAIRS", "LEAVES DIAMOND-SHAPED", "SLENDER FLOWER SPIKES", "HOOKED BURRS"],
  uses: [
    ["MEDICINE", "Used in tropical medicine for sores, wounds, rheumatism and dysentery."],
    ["RESEARCH", "Leaves collected in Ibadan have been studied in Nigerian labs."],
    ["OTHER", "It is also eaten as food and used as a soap source."],
  ],
  history: "Its genus name means small cup. Its five stamens join at the base into a thin cup.",
  leaf: { shape: 'oval', len: 1, wid: 0.6, note: 'DIAMOND-SHAPED, POINTED AT BOTH ENDS' },
  form: { type: 'herb', height: 0.45, stems: 4, nodes: 6, branches: 3, arrange: 'opposite', leafSize: 0.7, droop: 0.4, flower: { type: 'spike', size: 0.8, color: 2 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 120, g: [1, 1], desc: "Slender spikes of burrs." },
    { id: 'rest', label: "DRY SPELL", from: 120, to: 170, g: [0.8, 0.7], desc: "Growth slows." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 170, to: 300, g: [0.7, 1], desc: "Spreads in the rains." },
    { id: 'fruiting', label: "BURRS", from: 300, to: 360, g: [1, 1], desc: "Hooked burrs ripen." },
  ],
  beds: [{ plantedDay: -300 }],
});
