EA.addSpecies('false-rubber', {
  name: "FALSE RUBBER", short: "FALSERUBBR", latin: "Holarrhena floribunda", family: "Apocynaceae (dogbane family)",
  origin: "From Senegal to Sudan and south to DR Congo and Angola, including Nigeria",
  added: '2026-11-07',
  kind: 'perennial',
  summary: "A shrub or tree up to 25 m with white latex in all parts. Leaves in pairs. Dense clusters of fragrant white flowers open just after the new leaves. Very long, thin paired pods, 30-60 cm, hang down and release seeds with hair tufts.",
  facts: ["TREE UP TO 25 M", "WHITE LATEX", "FLOWERS WHITE, SCENTED", "PODS 30-60 CM, PAIRED", "SEEDS WITH HAIR TUFTS"],
  uses: [
    ["MEDICINE", "Bark brews are used for dysentery and diarrhoea; stem bark and leaves for fever and malaria."],
    ["WOOD", "The wood is carved into combs, handles and small utensils."],
    ["CAUTION", "Its alkaloids can affect the heart and nerves, and the latex has been used as arrow and fish poison."],
  ],
  history: "Its bark is sold as kurchi or conessi bark, after the alkaloid conessine. It sheds its leaves at the end of the dry season and flowers briefly as new ones come.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, note: 'OVAL LEAF IN PAIRS' },
  form: { type: 'tree', height: 1.15, trunk: 0.45, branches: 11, nodes: 6, spread: 0.34, stemW: 0.06, leafSize: 1.8, arrange: 'opposite', flower: { type: 'cluster', size: 1.0, color: 3 }, fruit: { type: 'pod', size: 1.4, hang: true, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "DRY SEASON", from: 0, to: 90, g: [1, 1], desc: "Leafy crown." },
    { id: 'dormant', label: "LEAF FALL", from: 90, to: 120, g: [1, 0.5], desc: "Leaves drop at the end of the dry season." },
    { id: 'bloom', label: "IN FLOWER", from: 120, to: 160, g: [0.5, 0.9], desc: "Brief white flowering with new leaves." },
    { id: 'fruiting', label: "LONG PODS", from: 160, to: 300, g: [0.9, 1], desc: "Long pods hang." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 300, to: 360, g: [1, 1], desc: "Leafy crown." },
  ],
  beds: [{ plantedDay: -7200 }],
});
