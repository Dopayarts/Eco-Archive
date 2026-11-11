EA.addSpecies('mammee-apple', {
  name: "MAMMEE APPLE", short: "MAMMEE", latin: "Mammea africana", family: "Calophyllaceae (calophyllum family)",
  origin: "Evergreen forest of West and Central Africa from Senegal to Uganda and Angola, including Nigeria",
  added: '2026-11-11',
  kind: 'perennial',
  summary: "A tall evergreen forest tree up to 40-45 m with a straight, buttressed trunk. Thick, glossy dark green leaves sit in pairs. The fruit is a large pale yellow to orange drupe, 7-18 cm long, with small brown warts and 1-4 hard stones.",
  facts: ["TREE UP TO 45 M", "BUTTRESSED TRUNK", "LEAVES THICK, GLOSSY", "FRUIT 7-18 CM, WARTY", "1-4 HARD STONES"],
  uses: [
    ["FOOD", "The ripe fruit has sweet but fibrous pulp; the seeds are eaten and give a cooking oil."],
    ["TIMBER", "The wood, traded as oboto, is used for building, flooring and dug-out canoes."],
    ["MEDICINE", "Bark is used for fever, stomach pains and skin infections; in Nigeria and Liberia it is also a weak fish poison."],
  ],
  history: "Joseph Sabine described it in 1827. In Nigeria planted trees have reached 15 m in 24 years.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, note: 'THICK GLOSSY LEAF IN PAIRS' },
  form: { type: 'tree', height: 1.35, trunk: 0.6, branches: 9, nodes: 5, spread: 0.3, stemW: 0.08, leafSize: 1.3, arrange: 'opposite', droop: 0.15, flower: { type: 'single', size: 0.8, color: 3 }, fruit: { type: 'big', size: 1.2, hang: true, color: 2 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 80, g: [1, 1], desc: "Flowers in the leaf axils." },
    { id: 'fruiting', label: "FRUITING", from: 80, to: 240, g: [1, 1], desc: "Warty fruits swell and ripen." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 240, to: 360, g: [1, 1], desc: "Evergreen crown." },
  ],
  beds: [{ plantedDay: -8000 }],
});
