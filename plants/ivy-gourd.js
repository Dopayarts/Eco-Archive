EA.addSpecies('ivy-gourd', {
  name: "IVY GOURD", latin: "Coccinia grandis", family: "Cucurbitaceae (gourd family)",
  origin: "Tropical Africa and Asia; native in Nigeria and West Africa from Senegal to Somalia",
  added: '2026-11-23',
  kind: 'perennial',
  summary: "A climbing or trailing vine up to 20 m from a tuberous root, with male and female plants. Leaves are 3-12 cm long with 3-5 lobes. Yellow-orange flowers give berries 3-7 cm long, green with white stripes when young and red when ripe.",
  facts: ["CLIMBING VINE", "3-5 LOBED LEAVES", "YELLOW FLOWERS", "STRIPED GREEN FRUIT", "RIPENS RED"],
  uses: [
    ["FOOD", "The sweet red fruits are eaten raw or in stews; leaves and shoots are cooked as greens."],
    ["MEDICINE", "Used to lower high blood pressure and treat abscesses; in Niger the roots treat stomach troubles."],
  ],
  history: "Also called scarlet-fruited gourd. It has become an invasive weed in Florida, Australia and the Pacific.",
  leaf: { shape: 'tri', len: 1, wid: 1, note: '3-5 LOBED LEAF' },
  form: { type: 'vine', height: 1.0, branches: 3, nodes: 8, arrange: 'alternate', leafSize: 0.8, droop: 0.2, flower: { type: 'single', size: 0.5, color: 3 }, fruit: { type: 'berry', size: 0.6, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 150, g: [1, 1], desc: "Vines climb." },
    { id: 'bloom', label: "IN FLOWER", from: 150, to: 240, g: [1, 1], desc: "Yellow flowers." },
    { id: 'fruiting', label: "FRUITING", from: 240, to: 360, g: [1, 1], desc: "Striped fruits turn red." },
  ],
  beds: [{ plantedDay: -400 }],
});
