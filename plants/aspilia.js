EA.addSpecies('aspilia', {
  name: "ASPILIA", latin: "Aspilia africana", family: "Asteraceae (daisy family)",
  origin: "Tropical Africa; a common herb of Nigerian farms and fallows",
  local: "YUNYUN (YORUBA), ORANGILA (IGBO), TOZALIN (HAUSA), EDEMEDONG (EFIK)",
  added: '2026-10-29',
  kind: 'perennial',
  summary: "A bristly herb about 1 m tall with rough, lance-shaped leaves in opposite pairs. Small yellow, daisy-like flower heads sit on long stalks at the stem tips.",
  facts: ["HERB ABOUT 1 M", "STEMS AND LEAVES BRISTLY", "LEAVES ROUGH, OPPOSITE", "FLOWER HEADS YELLOW", "CALLED HAEMORRHAGE PLANT"],
  uses: [
    ["MEDICINE", "Crushed leaves are pressed on fresh cuts to stop bleeding; in rat studies leaf extracts shortened bleeding time and sped wound healing."],
    ["CAUTION", "Evidence is from animal tests only, not people."],
  ],
  history: "Aspilia is called the haemorrhage plant because of its traditional use on fresh wounds. Researchers in Nigeria tested this use in 2007.",
  leaf: { shape: 'lance', len: 1, wid: 0.35, serr: 0.1, note: 'ROUGH LANCE LEAF, BRISTLY, OPPOSITE PAIRS' },
  form: { type: 'herb', height: 0.85, stems: 2, nodes: 7, branches: 2, arrange: 'opposite', leafSize: 1.3, droop: 0.25, flower: { type: 'head', size: 1.3, color: 3 } },
  seasons: [
    { id: 'dormant', label: "DRY SEASON", from: 0, to: 90, g: [0.7, 0.7], desc: "Stems dry back in the harmattan." },
    { id: 'regrowth', label: "REGROWTH", from: 90, to: 180, g: [0.7, 1], desc: "New shoots with the rains." },
    { id: 'bloom', label: "IN BLOOM", from: 180, to: 330, g: [1, 1], desc: "Yellow flower heads over the fallow." },
    { id: 'seeding', label: "SEEDING", from: 330, to: 360, g: [1, 0.8], desc: "Heads dry and drop seed." },
  ],
  beds: [{ plantedDay: -360 }],
});
