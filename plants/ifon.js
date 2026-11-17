EA.addSpecies('ifon', {
  name: "IFON", latin: "Olax subscorpioidea", family: "Olacaceae (olax family)",
  origin: "Found across Nigeria and elsewhere in Africa, including Senegal and DR Congo",
  local: "IFON (YORUBA), GWAANON KURMII (HAUSA), IGBULU, OSAJA (IGBO), UKPAKON (ESAN), OCHEJA (IGALA)",
  added: '2026-11-17',
  kind: 'perennial',
  summary: "A shrub or tree up to about 10 m with long slender branches that often hang down. Flowers are whitish. Round fruits turn from green to bright yellow. Its roots and cut bark smell of garlic.",
  facts: ["SHRUB OR TREE 10 M", "DROOPING BRANCHES", "WHITISH FLOWERS", "YELLOW ROUND FRUIT", "GARLIC-SCENTED ROOT"],
  uses: [
    ["TEETH", "In western Nigeria the stem and roots are chewing sticks."],
    ["MEDICINE", "Roots are used for asthma, diabetes and rheumatism; leaves for convulsions, jaundice and mental illness."],
    ["SCALP", "In Ibadan the seeds are mixed with black soap for children's scalp infections."],
  ],
  history: "The genus name Olax comes from a Latin word meaning smelly.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, note: 'SIMPLE LEAF ON DROOPING TWIG' },
  form: { type: 'shrub', height: 1.0, branches: 7, nodes: 6, trunk: 0.35, spread: 0.4, arrange: 'alternate', leafSize: 0.95, droop: 0.5, flower: { type: 'cluster', size: 0.5, color: 3 }, fruit: { type: 'berry', size: 0.7, color: 3 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 90, g: [1, 1], desc: "Drooping leafy branches." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 150, g: [1, 1], desc: "Whitish flowers." },
    { id: 'fruiting', label: "YELLOW FRUIT", from: 150, to: 270, g: [1, 1], desc: "Fruits turn yellow." },
    { id: 'regrowth', label: "NEW LEAVES", from: 270, to: 360, g: [1, 1], desc: "Fresh shoots." },
  ],
  beds: [{ plantedDay: -2000 }],
});
