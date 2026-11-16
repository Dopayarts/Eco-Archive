EA.addSpecies('hoslundia', {
  name: "HOSLUNDIA", latin: "Hoslundia opposita", family: "Lamiaceae (mint family)",
  origin: "Across sub-Saharan Africa from Senegal to Somalia and south to South Africa; widely grown in Nigeria",
  local: "OKE OTA (IGBO), EFIRIN ODAN (YORUBA)",
  added: '2026-11-16',
  kind: 'perennial',
  summary: "A spreading shrub-like herb up to 3-4 m with sharply four-angled stems. Velvety grey-green toothed leaves in pairs smell strongly. Small white flowers grow in loose sprays, followed by fleshy ribbed fruits that ripen bright orange.",
  facts: ["SHRUBBY HERB TO 4 M", "SQUARE STEMS", "STRONG-SMELLING LEAVES", "SMALL WHITE FLOWERS", "BRIGHT ORANGE FRUIT"],
  uses: [
    ["MEDICINE", "In Nigeria it is used for stomach pain, mouth sores, sore throat, epilepsy and malaria."],
    ["FOOD", "The fruit is edible and loved by birds."],
  ],
  history: "It often regrows and flowers after bush fires. Its leaf and fruit oils were studied from plants in Ilorin.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, note: 'VELVETY TOOTHED LEAF' },
  form: { type: 'shrub', height: 0.75, branches: 6, nodes: 6, trunk: 0.2, spread: 0.38, arrange: 'opposite', leafSize: 0.7, droop: 0.2, flower: { type: 'spike', size: 0.6, color: 3 }, fruit: { type: 'berry', size: 0.5, color: 1 } },
  seasons: [
    { id: 'rest', label: "DRY SPELL", from: 0, to: 80, g: [0.8, 0.7], desc: "Regrows after fire." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 80, to: 200, g: [0.8, 1], desc: "Square stems spread." },
    { id: 'bloom', label: "IN FLOWER", from: 200, to: 280, g: [1, 1], desc: "Small white flowers." },
    { id: 'fruiting', label: "ORANGE FRUIT", from: 280, to: 360, g: [1, 1], desc: "Fruits turn orange." },
  ],
  beds: [{ plantedDay: -700 }],
});
