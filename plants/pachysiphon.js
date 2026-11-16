EA.addSpecies('pachysiphon', {
  name: "PACHYSIPHON", short: "PACHYSIPH", latin: "Tabernaemontana pachysiphon", family: "Apocynaceae (dogbane family)",
  origin: "Tropical Africa from Ghana east to Sudan and Kenya and south to Angola; used in southern Nigeria",
  added: '2026-11-16',
  kind: 'perennial',
  summary: "A shrub or small tree up to 15 m with leathery dark green leaves in pairs. It is full of white latex. Sweet-scented white to pale yellow flowers give paired round green fruits up to 15 cm across.",
  facts: ["SMALL TREE TO 15 M", "WHITE LATEX", "LEATHERY PAIRED LEAVES", "SCENTED WHITE FLOWERS", "ROUND FRUIT 15 CM"],
  uses: [
    ["MEDICINE", "In Nigeria a root bark brew is taken for insanity; leaves are used for headache and sores."],
    ["CLOTH", "In southern Nigeria its bark fibre is made into cloth."],
    ["WOUNDS", "The latex is put on fresh cuts to stop bleeding, and mends cracked pots."],
    ["CAUTION", "Its alkaloids cause convulsions at high doses."],
  ],
  history: "Its latex was once mixed into rubber, and thickened into birdlime.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, note: 'LEATHERY LEAF IN PAIRS' },
  form: { type: 'tree', height: 1.0, trunk: 0.4, branches: 8, nodes: 5, spread: 0.33, stemW: 0.07, leafSize: 1.2, arrange: 'opposite', droop: 0.15, flower: { type: 'cluster', size: 0.9, color: 3 }, fruit: { type: 'big', size: 1.0, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 90, g: [1, 1], desc: "Glossy crown." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 160, g: [1, 1], desc: "Scented white flowers." },
    { id: 'fruiting', label: "FRUITING", from: 160, to: 280, g: [1, 1], desc: "Round green fruits." },
    { id: 'regrowth', label: "NEW LEAVES", from: 280, to: 360, g: [1, 1], desc: "Fresh leaves." },
  ],
  beds: [{ plantedDay: -2500 }],
});
