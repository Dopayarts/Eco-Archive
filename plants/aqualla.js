EA.addSpecies('aqualla', {
  name: "AQUALLA", latin: "Gardenia aqualla", family: "Rubiaceae (coffee family)",
  origin: "Savanna from Senegal to Nigeria and Cameroon, east to Sudan and Uganda",
  added: '2026-11-17',
  kind: 'perennial',
  summary: "An evergreen shrub or small tree about 3 m tall of shady savanna lowlands. It has fragrant yellow flowers and oval yellow fruits.",
  facts: ["SHRUB ABOUT 3 M", "EVERGREEN", "FRAGRANT YELLOW FLOWERS", "YELLOW OVAL FRUIT", "SAVANNA LOWLANDS"],
  uses: [
    ["FOOD", "The fruit is eaten raw."],
    ["MEDICINE", "Stem bark is used for bowel problems, roots for period pain and mouth infections, leaves for leprosy."],
    ["RESEARCH", "Its stem bark has been studied in Nigeria for germ-killing compounds."],
  ],
  history: "It grows on alluvial terraces in the savanna.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, note: 'SIMPLE LEAF' },
  form: { type: 'shrub', height: 0.75, branches: 6, nodes: 5, trunk: 0.3, spread: 0.35, arrange: 'opposite', leafSize: 0.7, droop: 0.15, flower: { type: 'single', size: 0.9, color: 3 }, fruit: { type: 'berry', size: 0.8, color: 3 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 90, g: [1, 1], desc: "Fragrant yellow flowers." },
    { id: 'fruiting', label: "FRUITING", from: 90, to: 200, g: [1, 1], desc: "Yellow fruits." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 200, to: 360, g: [1, 1], desc: "Evergreen." },
  ],
  beds: [{ plantedDay: -1500 }],
});
