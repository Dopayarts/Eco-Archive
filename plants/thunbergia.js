EA.addSpecies('thunbergia', {
  name: "THUNBERGIA", latin: "Thunbergia alata", family: "Acanthaceae (acanthus family)",
  origin: "Tropical Africa; native in Nigeria",
  added: '2026-11-25',
  kind: 'perennial',
  summary: "A twining perennial climber up to 5 m from a woody rootstock. Hairy leaves are triangular to heart-shaped, 3.5-7.5 cm. Orange-yellow five-petalled flowers have a black-violet throat. The hairy fruit has a round base and a long beak and holds four seeds.",
  facts: ["CLIMBER TO 5 M", "HEART LEAVES", "ORANGE FLOWERS", "DARK EYE", "BEAKED FRUIT"],
  uses: [
    ["GARDEN", "Grown on fences, screens and arches for its flowers."],
    ["FOOD", "Its leaves are cooked as a vegetable, and it feeds stock in East Africa."],
    ["MEDICINE", "Leaves are put on the head for headache, and leaf sap is used for sore eyes and piles."],
    ["CAUTION", "Some people get skin rashes from it, and it can smother other plants."],
  ],
  history: "Also called black-eyed Susan vine. Children use its fruit as a spinning top.",
  leaf: { shape: 'heart', len: 1, wid: 0.6, note: 'HAIRY LEAF' },
  form: { type: 'vine', height: 1.0, branches: 3, nodes: 8, arrange: 'opposite', leafSize: 0.7, droop: 0.2, flower: { type: 'single', size: 0.6, color: 'yellow' }, fruit: { type: 'pod', size: 0.3, color: 2 } },
  seasons: [
    { id: 'regrowth', label: "RAINY GROWTH", from: 150, to: 240, g: [0.6, 1], desc: "Stems twine upward." },
    { id: 'bloom', label: "IN FLOWER", from: 240, to: 330, g: [1, 1], desc: "Orange flowers, dark eye." },
    { id: 'fruiting', label: "FRUITING", from: 330, to: 360, g: [1, 1], desc: "Beaked fruits." },
    { id: 'rest', label: "DRY REST", from: 0, to: 150, g: [1, 0.6], desc: "Growth slows." },
  ],
  beds: [{ plantedDay: -500 }],
});
