EA.addSpecies('blood-lily', {
  name: "BLOOD LILY", latin: "Scadoxus multiflorus", family: "Amaryllidaceae (daffodil family)",
  origin: "Native to most of Africa south of the Sahara, including Nigeria, and to south-west Arabia",
  added: '2026-11-09',
  kind: 'perennial',
  summary: "A bulb plant that sends up a spotted stalk 12-75 cm tall topped by a ball of 10-200 scarlet flowers. The flowers often open before the leaves. Small red berries follow.",
  facts: ["GROWS FROM A BULB", "STALK UP TO 75 CM", "BALL OF 10-200 FLOWERS", "SCARLET, FADING PINK", "BERRIES 5-10 MM"],
  uses: [
    ["GARDEN", "Grown for its bright red flower balls."],
    ["POISON", "In parts of tropical Africa it has gone into arrow and fishing poisons."],
    ["CAUTION", "Strongly toxic; its alkaloids can kill sheep and goats that eat the leaves or bulbs."],
  ],
  history: "It was first named Haemanthus multiflorus in 1795. Rafinesque moved it to Scadoxus in 1838, but most botanists ignored that until 1976.",
  leaf: { shape: 'oval', len: 1, wid: 0.4, note: 'BROAD LEAF ON A SPOTTED STEM' },
  form: { type: 'rosette', height: 0.6, count: 7, leafSize: 1.9, pitch: [0.9, 1.3], droop: 0.25, flower: { type: 'umbel', size: 1.7, color: 3 } },
  seasons: [
    { id: 'dormant', label: "RESTING BULB", from: 0, to: 120, g: [0, 0], desc: "The bulb rests through the dry season." },
    { id: 'bloom', label: "IN FLOWER", from: 120, to: 170, g: [0.3, 0.7], desc: "Red flower balls come up before the leaves." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 170, to: 300, g: [0.8, 1], desc: "Leaves grow through the rains." },
    { id: 'fruiting', label: "BERRIES", from: 300, to: 360, g: [1, 0.3], desc: "Red berries, then the leaves die back." },
  ],
  beds: [{ plantedDay: -800 }],
});
