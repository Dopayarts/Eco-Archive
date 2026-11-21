EA.addSpecies('king-bamboo', {
  name: "KING BAMBOO", short: "KINGBAMBOO", latin: "Raphia sudanica", family: "Arecaceae (palm family)",
  origin: "West Africa from Senegal and Gambia to northern Nigeria; planted in Nigeria",
  added: '2026-11-21',
  kind: 'perennial',
  summary: "A clustering palm with a stout trunk 2-3 m tall, sometimes 10 m. Pinnate leaves up to 12 m have an orange-yellow midrib and leaflets edged with black spines. It flowers and fruits once, then dies. The 5-8 cm fruits are covered in reddish or yellowish scales.",
  facts: ["CLUSTERING PALM", "LEAVES TO 12 M", "SPINY LEAFLETS", "SCALY FRUITS", "FLOWERS ONCE, DIES"],
  uses: [
    ["BUILDING", "Leaves thatch roofs; the midribs make furniture, ladders and canoe poles."],
    ["DRINK", "It is an important source of palm wine in Nigeria and Guinea."],
    ["CRAFT", "Raffia fibre makes twine, mats and baskets."],
    ["CAUTION", "The fruit pulp is used as a fish poison, and the bark has been used to cause abortion."],
  ],
  history: "Also called northern raphia. It is listed as Near Threatened.",
  leaf: { shape: 'blade', len: 1, wid: 0.12, compound: 'pinnate', note: 'PINNATE LEAF TO 12 M' },
  form: { type: 'palm', height: 1.3, trunk: 0.3, count: 12, leafSize: 2.2, stemW: 0.1, droop: 0.4, flower: { type: 'plume', size: 0.8, color: 2 }, fruit: { type: 'big', size: 0.7, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 360, g: [1, 1], desc: "Huge feather leaves." },
  ],
  beds: [{ plantedDay: -3000 }],
});
