EA.addSpecies('worowo', {
  name: "WOROWO", latin: "Solanecio biafrae", family: "Asteraceae (daisy family)",
  origin: "Forest zone from Guinea to Uganda; grown on a small scale mainly in Nigeria and Cameroon",
  added: '2026-11-10',
  kind: 'perennial',
  summary: "A climbing herb with succulent, hairless stems up to 3 m. Its glossy, fleshy leaves are simple or deeply lobed. Dense clusters of small pale yellow tube flowers give tiny seeds with tufts of white silky hair.",
  facts: ["CLIMBER TO 3 M", "SUCCULENT STEMS", "GLOSSY FLESHY LEAVES", "FLOWERS PALE YELLOW", "SEEDS WITH WHITE FLUFF"],
  uses: [
    ["FOOD", "A favourite leaf vegetable in south-west Nigeria, cooked with pepper, tomato and onion."],
    ["MEDICINE", "Yoruba healers use the leaf juice to stop bleeding from cuts."],
    ["MARKET", "The leaves are now scarce and sell for several times the price of amaranth or ewedu."],
  ],
  history: "A Yoruba saying holds that worowo soup does not need meat. The plant is also tied to old Yoruba rites against smallpox.",
  leaf: { shape: 'oval', len: 1, wid: 0.55, serr: 0.15, note: 'FLESHY, GLOSSY LEAF, SOMETIMES LOBED' },
  form: { type: 'vine', height: 1.0, nodes: 12, leafSize: 1.3, droop: 0.3, arrange: 'alternate', flower: { type: 'cluster', size: 0.9, color: 3 } },
  seasons: [
    { id: 'rest', label: "DRY SPELL", from: 0, to: 120, g: [0.6, 0.6], desc: "Growth slows in the dry season." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 120, to: 260, g: [0.6, 1], desc: "Succulent shoots climb." },
    { id: 'bloom', label: "IN FLOWER", from: 260, to: 320, g: [1, 1], desc: "Pale yellow flower clusters." },
    { id: 'fruiting', label: "FLUFFY SEEDS", from: 320, to: 360, g: [1, 0.6], desc: "Seeds drift on white hairs." },
  ],
  beds: [{ plantedDay: -500 }],
});
