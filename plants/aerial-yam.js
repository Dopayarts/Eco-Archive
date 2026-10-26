EA.addSpecies('aerial-yam', {
  name: "AERIAL YAM", short: "AIR YAM", latin: "Dioscorea bulbifera", family: "Dioscoreaceae (yam family)",
  origin: "Tropical Africa and Asia; grown by smallholders in Nigeria",
  added: '2026-10-26',
  kind: 'annual',
  summary: "A twining yam vine with large, heart-shaped leaves. Besides an underground tuber, it grows potato-like bulbils in the leaf joints, which drop off and sprout into new plants.",
  facts: ["TWINING VINE", "LEAVES BIG, HEART-SHAPED", "BULBILS IN THE LEAF JOINTS", "BULBILS SPROUT INTO PLANTS", "SOME FORMS ARE BITTER, TOXIC"],
  uses: [
    ["FOOD", "Bulbils of edible types are cooked and eaten."],
    ["RESEARCH", "Nigeria's root crop institute at Umudike and IITA hold collections of it."],
  ],
  history: "The aerial yam is traditionally grown by Nigerian smallholders. African forms tend to be more toxic than Asian ones, so only known edible types are eaten, after cooking.",
  leaf: { shape: 'heart', len: 1, wid: 0.8, note: 'LARGE HEART-SHAPED LEAF, CURVED VEINS' },
  form: { type: 'vine', height: 1.35, nodes: 12, leafSize: 1.5, droop: 0.3, flower: { type: 'spike', size: 0.6, color: 3 }, fruit: { type: 'big', size: 0.9, color: 2 } },
  stages: [
    { id: 'seed', label: "BULBIL", days: 14, g: [0, 0], desc: "Bulbils are planted with the rains." },
    { id: 'sprout', label: "SPROUT", days: 10, g: [0.04, 0.12], desc: "A wiry shoot pushes up." },
    { id: 'seedling', label: "YOUNG VINE", days: 25, g: [0.12, 0.35], desc: "The vine finds a stake and twines." },
    { id: 'vegetative', label: "LEAFY GROWTH", days: 60, g: [0.35, 0.9], desc: "Heart-shaped leaves cover the stake." },
    { id: 'fruiting', label: "BULBILS", days: 50, g: [0.9, 1], desc: "Bulbils swell in the leaf joints." },
    { id: 'senescence', label: "DYING BACK", days: 20, g: [1, 0.4], desc: "The vine yellows; bulbils and tubers are harvested." },
  ],
  beds: [{ sowDay: 394 }],
});
