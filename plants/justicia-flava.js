EA.addSpecies('justicia-flava', {
  name: "JUSTICIA FLAVA", short: "JUSTICIA", latin: "Justicia flava", family: "Acanthaceae (acanthus family)",
  origin: "Tropical Africa; collected at Ugonoba village, Edo State, Nigeria",
  local: "IGHEREJE (URHOBO)",
  added: '2026-11-21',
  kind: 'perennial',
  summary: "An erect or trailing herb up to 120 cm, often woody at the base. Opposite leaves are up to 8 cm long. Bright yellow flowers about 1 cm long crowd a dense spike up to 20 cm, followed by small hairy capsules of four seeds.",
  facts: ["HERB TO 120 CM", "OPPOSITE LEAVES", "BRIGHT YELLOW SPIKE", "HAIRY CAPSULES", "WILD VEGETABLE"],
  uses: [
    ["MEDICINE", "Healers in southern Nigeria use the leaf to help prevent preterm birth."],
    ["REMEDY", "Used for dysentery, fevers, diarrhoea in children and hookworm."],
    ["FOOD", "In Guinea the leaves are cooked in soups and stews."],
    ["CAUTION", "Large doses of leaf extract caused mild damage to organs in mice, and the leaves can cause vomiting."],
  ],
  history: "Also called yellow justicia, after its yellow flowers.",
  leaf: { shape: 'lance', len: 1, wid: 0.4, note: 'OPPOSITE LEAF TO 8 CM' },
  form: { type: 'herb', height: 0.6, branches: 4, nodes: 6, arrange: 'opposite', leafSize: 0.8, droop: 0.15, flower: { type: 'spike', size: 0.8, color: 3 }, fruit: { type: 'pod', size: 0.3, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 150, g: [1, 1], desc: "Leafy stems." },
    { id: 'bloom', label: "IN FLOWER", from: 150, to: 270, g: [1, 1], desc: "Yellow flower spikes." },
    { id: 'fruiting', label: "SEEDING", from: 270, to: 360, g: [1, 1], desc: "Hairy capsules." },
  ],
  beds: [{ plantedDay: -400 }],
});
