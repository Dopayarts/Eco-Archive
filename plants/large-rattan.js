EA.addSpecies('large-rattan', {
  name: "LARGE RATTAN", short: "BIG RATTAN", latin: "Laccosperma secundiflorum", family: "Arecaceae (palm family)",
  origin: "Tropical African forest from Senegal to DR Congo, including Nigeria",
  added: '2026-11-11',
  kind: 'perennial',
  summary: "A robust clustering rattan palm whose thorny stems grow 25-50 m long, wrapping around trees to climb. Leaves up to 3.5 m carry spines and long leaflets. Greenish-white flowers give reddish, scaly fruits.",
  facts: ["STEMS 25-50 M", "THORNY CLIMBER", "LEAVES UP TO 3.5 M", "FLOWERS GREENISH WHITE", "FRUIT RED, SCALY"],
  uses: [
    ["CANE", "Whole stems make furniture frames, walking sticks, drumsticks and even suspension bridges."],
    ["THATCH", "The leaves have been used to thatch roofs in Sierra Leone, Ghana and Nigeria."],
    ["FOOD", "The palm heart and young shoots are eaten and the sap is drunk."],
  ],
  history: "Its canes are cut from the wild across West and Central Africa, including the Dzanga-Sangha forests of Cameroon, for furniture, mats and baskets.",
  leaf: { shape: 'lance', len: 1, wid: 0.15, compound: 'pinnate', leaflets: 21, note: 'LONG PINNATE PALM LEAF, SPINY' },
  form: { type: 'palm', height: 1.3, trunk: 0.75, count: 9, leafSize: 1.3, droop: 0.45, flower: { type: 'none' }, fruit: { type: 'berry', size: 0.9, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 140, g: [1, 1], desc: "Canes climb through the forest." },
    { id: 'bloom', label: "IN FLOWER", from: 140, to: 200, g: [1, 1], desc: "Greenish-white flowers." },
    { id: 'fruiting', label: "SCALY FRUIT", from: 200, to: 330, g: [1, 1], desc: "Red scaly fruits." },
    { id: 'regrowth', label: "NEW CANES", from: 330, to: 360, g: [1, 1], desc: "New shoots from the clump." },
  ],
  beds: [{ plantedDay: -3000 }],
});
