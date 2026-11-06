EA.addSpecies('sarcophrynium', {
  name: "SARCOPHRYNIUM", short: "SARCOPHRYN", latin: "Sarcophrynium brachystachyum", family: "Marantaceae (arrowroot family)",
  origin: "West and Central African forest, from Senegal to DR Congo, including Nigeria",
  added: '2026-11-06',
  kind: 'perennial',
  summary: "A rhizome herb that grows in tufts of about ten big leaves. Each blade is 20-40 cm long on a stalk up to 1.5 m. Short spikes of small pinkish-white to purplish flowers give fleshy orange-red fruits with three seeds.",
  facts: ["TUFTED FOREST HERB", "LEAVES 20-40 CM", "LEAF STALKS UP TO 1.5 M", "FLOWERS PINKISH WHITE", "FRUITS ORANGE-RED"],
  uses: [
    ["KOLA", "In Nigeria the dried leaves are packed with kola nuts to keep them fresh."],
    ["WRAPPING", "Leaves wrap cassava and other food, cover cooking pots and thatch roofs."],
    ["CRAFT", "Split leaf stalks are used for tying and plaited into mats and baskets."],
  ],
  history: "In Cameroon the leaves are also made into plates, cups, fans and sleeping-mat cushions.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, note: 'BIG OVAL LEAF ON LONG STALK' },
  form: { type: 'broadleaf', height: 0.8, count: 9, leafSize: 1.7, droop: 0.25, flower: { type: 'spike', size: 0.7, color: 3 }, fruit: { type: 'berry', size: 0.7, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "DRY SEASON", from: 0, to: 90, g: [0.8, 0.8], desc: "Leaves hold on in the shade." },
    { id: 'regrowth', label: "NEW LEAVES", from: 90, to: 180, g: [0.8, 1], desc: "New leaves with the rains." },
    { id: 'bloom', label: "IN FLOWER", from: 180, to: 270, g: [1, 1], desc: "Small pinkish flowers." },
    { id: 'fruiting', label: "ORANGE FRUITS", from: 270, to: 360, g: [1, 0.9], desc: "Orange-red fruits." },
  ],
  beds: [{ plantedDay: -1440 }],
});
