EA.addSpecies('wild-date-palm', {
  name: "WILD DATE PALM", short: "WILD DATE", latin: "Phoenix reclinata", family: "Arecaceae (palm family)",
  origin: "Sub-Saharan Africa from Senegal to Ethiopia and south, including Nigeria",
  added: '2026-11-03',
  kind: 'perennial',
  summary: "A clumping palm up to 10-15 m, often with several leaning stems. Feathery leaves up to 4 m long carry over 100 leaflets a side. Male and female plants are separate; female plants bear small orange date-like fruits.",
  facts: ["PALM UP TO 15 M", "GROWS IN CLUMPS", "STEMS OFTEN LEAN", "FEATHER LEAVES TO 4 M", "FRUIT SMALL, ORANGE"],
  uses: [
    ["DRINK", "The sap is tapped and fermented into palm wine."],
    ["CRAFT", "Leaflets are woven into mats, baskets, hats and rope."],
    ["FOOD", "The fruit and the heart of the crown are eaten."],
  ],
  history: "The wild date palm is a relative of the date palm. Its trunks resist termites and are used for posts.",
  leaf: { shape: 'lance', len: 1, wid: 0.15, compound: 'pinnate', leaflets: 16, note: 'FEATHER FROND, MANY STIFF LEAFLETS' },
  form: { type: 'palm', height: 1.3, trunk: 0.5, count: 12, leafSize: 1.8, droop: 0.45, stemW: 0.05, flower: { type: 'cluster', size: 1, color: 3 }, fruit: { type: 'big', size: 1.0, color: 3 } },
  seasons: [
    { id: 'vegetative', label: "DRY SEASON", from: 0, to: 90, g: [1, 1], desc: "Evergreen fronds." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 180, g: [1, 1], desc: "Cream flower spikes." },
    { id: 'fruiting', label: "FRUITING", from: 180, to: 330, g: [1, 1], desc: "Orange fruits." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 330, to: 360, g: [1, 1], desc: "Evergreen." },
  ],
  beds: [{ plantedDay: -7200 }],
});
