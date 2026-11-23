EA.addSpecies('feretia', {
  name: "FERETIA", latin: "Feretia apodanthera", family: "Rubiaceae (coffee family)",
  origin: "Tropical Africa; used in northern Nigeria and collected at Magami village, Gusau, Zamfara State",
  local: "KURU-KURU (HAUSA, FULANI)",
  added: '2026-11-23',
  kind: 'perennial',
  summary: "A shrub or small tree 2-6 m tall with winding, twisting branches and simple, oval leaves. Flowers appear on short side shoots, usually before the leaves, and the small fruits are 3-7 mm across.",
  facts: ["SHRUB 2-6 M", "TWISTING BRANCHES", "OVAL LEAVES", "FLOWERS BEFORE LEAVES", "TINY FRUITS"],
  uses: [
    ["MEDICINE", "The Hausa of Kano boil the root for stomach upset and to help men; it is also used for urinary infections, wounds and syphilis."],
    ["RESEARCH", "A Nigerian study found the root bark reduced inflammation in tests."],
  ],
  history: "Its root contains harman, an alkaloid that was only slightly toxic to cells in tests.",
  leaf: { shape: 'oval', len: 1, wid: 0.6, note: 'SIMPLE OVAL LEAF' },
  form: { type: 'shrub', height: 0.9, branches: 7, nodes: 5, arrange: 'opposite', leafSize: 0.6, droop: 0.15, flower: { type: 'cluster', size: 0.4, color: 3 }, fruit: { type: 'berry', size: 0.3, color: 1 } },
  seasons: [
    { id: 'dormant', label: "LEAFLESS", from: 0, to: 60, g: [0.8, 0.8], desc: "Bare twisting branches." },
    { id: 'bloom', label: "IN FLOWER", from: 60, to: 120, g: [0.8, 0.9], desc: "Flowers before the leaves." },
    { id: 'fruiting', label: "FRUITING", from: 120, to: 210, g: [0.9, 1], desc: "Small fruits." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 210, to: 360, g: [1, 1], desc: "Full leaf." },
  ],
  beds: [{ plantedDay: -2000 }],
});
