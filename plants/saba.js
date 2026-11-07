EA.addSpecies('saba', {
  name: "SABA", latin: "Saba senegalensis", family: "Apocynaceae (dogbane family)",
  origin: "West African savanna and Sahel, from Senegal to Nigeria",
  added: '2026-11-07',
  kind: 'perennial',
  summary: "A climber that stays a low shrub in open dry land but in forest becomes a stout liana with stems over 40 m long. All parts bleed sticky white latex. Round yellow fruits the size of a small orange hold big seeds in a soft, sweet-sour pulp.",
  facts: ["LIANA OVER 40 M", "STICKY WHITE LATEX", "FRUIT YELLOW, ORANGE-SIZED", "PULP SWEET AND SOUR", "LIKES RIVERBANKS"],
  uses: [
    ["FOOD", "The fruit is eaten as a snack and made into drinks; it is sold in towns."],
    ["LATEX", "The latex was once tapped for rubber and is still used as glue and to mend tyres and footballs."],
    ["MEDICINE", "Leaves, bark and roots are used for diarrhoea, wounds and headaches."],
  ],
  history: "The pulp's sharp taste has been compared to tamarind and mango. In the rainy season the fruit can be a staple food.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, note: 'OVAL LEAF' },
  form: { type: 'vine', height: 1.15, nodes: 13, leafSize: 1.6, droop: 0.3, flower: { type: 'cluster', size: 0.9, color: 3 }, fruit: { type: 'big', size: 1.0, color: 3 } },
  seasons: [
    { id: 'vegetative', label: "DRY SEASON", from: 0, to: 90, g: [0.9, 0.9], desc: "Leafy climbing stems." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 150, g: [0.9, 1], desc: "Flower clusters." },
    { id: 'fruiting', label: "YELLOW FRUITS", from: 150, to: 300, g: [1, 1], desc: "Fruits ripen in the rains." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 300, to: 360, g: [1, 0.9], desc: "Leafy stems." },
  ],
  beds: [{ plantedDay: -3600 }],
});
