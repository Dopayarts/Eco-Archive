EA.addSpecies('bamboo-palm', {
  name: "BAMBOO PALM", short: "BAMBOOPALM", latin: "Raphia vinifera", family: "Arecaceae (palm family)",
  origin: "West Africa; abundant along the creeks of the Niger Delta, Cross River, Lagos and Ikorodu, Nigeria",
  added: '2026-11-23',
  kind: 'perennial',
  summary: "A palm with a stout trunk up to 5 m and arching feather leaves up to 13 m long. Its shiny leaflets up to 1.5 m long have spiny edges. It flowers and fruits once, then dies; the 5-9 cm fruits are covered in yellow-brown scales.",
  facts: ["PALM TO 5 M", "LEAVES TO 13 M", "SPINY LEAFLETS", "SCALY FRUITS", "FLOWERS ONCE, DIES"],
  uses: [
    ["FIBRE", "Raffia from young leaflets makes baskets, mats, hats, bags and rope."],
    ["BUILDING", "In Nigeria and Benin the stems are used for house frames; leaves thatch roofs."],
    ["FOOD", "The fruit flesh is eaten and fermented into a strong drink."],
    ["CAUTION", "The fruit is used as a fish poison."],
  ],
  history: "Also called king bamboo palm and West African piassava palm. It takes about 8 years to flower.",
  leaf: { shape: 'blade', len: 1, wid: 0.12, compound: 'pinnate', note: 'LEAF TO 13 M' },
  form: { type: 'palm', height: 1.3, trunk: 0.35, count: 12, leafSize: 2.3, stemW: 0.1, droop: 0.4, flower: { type: 'plume', size: 0.9, color: 2 }, fruit: { type: 'big', size: 0.8, hang: true, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 360, g: [1, 1], desc: "Huge arching leaves." },
  ],
  beds: [{ plantedDay: -3000 }],
});
