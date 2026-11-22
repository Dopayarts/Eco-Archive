EA.addSpecies('spiny-tree-fern', {
  name: "TREE FERN", latin: "Cyathea manniana", family: "Cyatheaceae (tree fern family)",
  origin: "Tropical Africa; rare in Ngel Nyaki forest on the Mambilla Plateau, Nigeria",
  added: '2026-11-22',
  kind: 'perennial',
  summary: "An evergreen tree fern up to 7 m tall with a slender trunk about 10 cm thick, armed with fierce spines. Its fronds are cut three times and reach 2.4 m long, on spiny stalks. Prop stems can creep and start new trunks.",
  facts: ["TREE FERN TO 7 M", "SPINY TRUNK", "FRONDS TO 2.4 M", "MONTANE STREAMS", "NO FLOWERS"],
  uses: [
    ["MEDICINE", "An infusion of the pith and young leaves is used for stomach complaints, to ease childbirth and against tapeworms."],
    ["CAUTION", "The trunk and frond stalks carry sharp spines."],
  ],
  history: "Also called spiny tree fern and sheshino. It grows by streams in mountain forest from 350 to 2,000 m.",
  leaf: { shape: 'lance', len: 1, wid: 0.3, compound: 'bipinnate', note: 'FROND, 3 TIMES CUT' },
  form: { type: 'palm', height: 1.4, trunk: 0.5, count: 12, leafSize: 2.0, droop: 0.5, stemW: 0.06, flower: { type: 'none' } },
  seasons: [
    { id: 'vegetative', label: "NEW FRONDS", from: 0, to: 360, g: [1, 1], desc: "Fronds uncurl from the crown." },
  ],
  beds: [{ plantedDay: -5000 }],
});
