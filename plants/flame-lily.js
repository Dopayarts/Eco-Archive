EA.addSpecies('flame-lily', {
  name: "FLAME LILY", latin: "Gloriosa superba", family: "Colchicaceae (autumn crocus family)",
  origin: "Native to most of Africa south of the Sahara, including Nigeria, and to tropical Asia",
  added: '2026-11-09',
  kind: 'perennial',
  summary: "A climbing lily that grows each year from a fleshy underground tuber, holding on with tendrils at its leaf tips and reaching about 4 m. The showy flowers have six petals, bright red to orange, often yellow at the base. Fruits are fleshy capsules full of red seeds.",
  facts: ["CLIMBER TO 4 M", "GROWS FROM A TUBER", "LEAF TIPS ARE TENDRILS", "PETALS RED AND YELLOW", "ALL PARTS POISONOUS"],
  uses: [
    ["POISON", "In Nigeria it has been used as an arrow poison."],
    ["MEDICINE", "Used in traditional medicine for gout, arthritis, snakebite and worms; wild plants are dug up for the medicine trade."],
    ["GARDEN", "A popular ornamental climber."],
    ["CAUTION", "Every part is poisonous, the tubers most of all (colchicine). Tubers mistaken for yam or sweet potato have killed people."],
  ],
  history: "It is the national flower of Zimbabwe. In 1947 Queen Elizabeth II was given a diamond brooch shaped like it on a visit to what was then Rhodesia.",
  leaf: { shape: 'lance', len: 1, wid: 0.3, note: 'NARROW LEAF ENDING IN A CURLING TENDRIL' },
  form: { type: 'vine', height: 1.2, nodes: 12, leafSize: 1.2, droop: 0.3, arrange: 'alternate', flower: { type: 'single', size: 1.4, color: 3 }, fruit: { type: 'pod', size: 0.8, color: 2 } },
  seasons: [
    { id: 'dormant', label: "RESTING TUBER", from: 0, to: 150, g: [0, 0], desc: "Only the tuber survives the dry season." },
    { id: 'vegetative', label: "CLIMBING", from: 150, to: 220, g: [0.1, 1], desc: "Shoots climb by their tendrils." },
    { id: 'bloom', label: "IN FLOWER", from: 220, to: 300, g: [1, 1], desc: "Red and yellow flames." },
    { id: 'fruiting', label: "SEED PODS", from: 300, to: 360, g: [1, 0.3], desc: "Pods split showing red seeds, then the vine dies back." },
  ],
  beds: [{ plantedDay: -900 }],
});
