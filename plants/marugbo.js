EA.addSpecies('marugbo', {
  name: "MARUGBO", latin: "Clerodendrum volubile", family: "Lamiaceae (mint family)",
  origin: "Warm and tropical regions; eaten in southern Nigeria, especially Ondo State",
  local: "MARUGBO, EWETA (IKALE, ILAJE); GBANUNU (ONDO); OBENETETE (URHOBO)",
  added: '2026-11-15',
  kind: 'perennial',
  summary: "A leafy plant whose sweet-smelling leaves are eaten as a vegetable in south-west Nigeria. The leaves are rich in protein, fibre and minerals, and are normally cooked before eating.",
  facts: ["LEAFY VEGETABLE", "SWEET AROMA", "COOKED, NOT RAW", "MAKES BLACK SOUP", "MAGIC LEAF"],
  uses: [
    ["FOOD", "Leaves are blended with pepper and onion and cooked with fish or meat into marugbo black soup."],
    ["MEDICINE", "In south-west Nigeria it is used for appetite, recovery after childbirth, arthritis, rheumatism, gout and swelling."],
  ],
  history: "It is popularly called magic leaf in south-western Nigeria. The Ikale, Ilaje and Apoi peoples of Ondo State value it most.",
  leaf: { shape: 'oval', len: 1, wid: 0.55, note: 'SWEET-SMELLING LEAF' },
  form: { type: 'vine', height: 1.1, nodes: 12, leafSize: 1.0, droop: 0.3, arrange: 'opposite', flower: { type: 'cluster', size: 0.8, color: 2 }, fruit: { type: 'berry', size: 0.6, color: 1 } },
  seasons: [
    { id: 'rest', label: "DRY SPELL", from: 0, to: 90, g: [0.8, 0.8], desc: "Growth slows." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 90, to: 240, g: [0.8, 1], desc: "Leaves picked for soup." },
    { id: 'bloom', label: "IN FLOWER", from: 240, to: 300, g: [1, 1], desc: "Flower clusters." },
    { id: 'fruiting', label: "FRUITING", from: 300, to: 360, g: [1, 0.9], desc: "Small fruits." },
  ],
  beds: [{ plantedDay: -800 }],
});
