EA.addSpecies('persicaria', {
  name: "PERSICARIA", latin: "Persicaria senegalensis", family: "Polygonaceae (knotweed family)",
  origin: "Africa; in the mud zone of Nigerian wetlands and the Kainji and Jebba lake basins",
  added: '2026-11-24',
  kind: 'perennial',
  summary: "An upright perennial herb up to 3 m with brown, striped stems swollen above the joints. Lance-shaped leaves reach 30 cm. Small pink, greenish or white flowers crowd spikes up to 10 cm, followed by shiny black nuts.",
  facts: ["HERB TO 3 M", "SWOLLEN JOINTS", "LEAVES TO 30 CM", "PINK FLOWER SPIKES", "SHINY BLACK NUTS"],
  uses: [
    ["MEDICINE", "In Nigeria pounded leaves are put on swellings, sores and skin problems; with potash they are rubbed on rheumatic limbs."],
    ["FOOD", "Tender leaves are cooked as a vegetable, and livestock graze it in drought."],
    ["CAUTION", "The roots are said to be toxic, and the leaves are rich in saponins that kill snails."],
  ],
  history: "Also called silver snake root.",
  leaf: { shape: 'lance', len: 1, wid: 0.25, note: 'LANCE LEAF TO 30 CM' },
  form: { type: 'herb', height: 1.0, branches: 4, nodes: 7, arrange: 'alternate', leafSize: 1.0, droop: 0.2, flower: { type: 'spike', size: 0.6, color: 3 }, fruit: { type: 'berry', size: 0.2, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 150, g: [1, 1], desc: "Tall stems by the water." },
    { id: 'bloom', label: "IN FLOWER", from: 150, to: 270, g: [1, 1], desc: "Pink flower spikes." },
    { id: 'fruiting', label: "SEEDING", from: 270, to: 360, g: [1, 1], desc: "Black nuts." },
  ],
  beds: [{ plantedDay: -500 }],
});
