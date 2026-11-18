EA.addSpecies('cattail', {
  name: "CATTAIL", latin: "Typha domingensis", family: "Typhaceae (cattail family)",
  origin: "Wetlands worldwide; spreading in floodplains of Jigawa, Kano and Yobe, Nigeria",
  added: '2026-11-18',
  kind: 'perennial',
  summary: "A tall marsh plant with a solid stem up to 5 m. Flat leaves reach 1.5 m. A brown cylinder spike carries male flowers on top and reddish-brown female flowers below.",
  facts: ["MARSH PLANT TO 5 M", "LEAVES TO 1.5 M", "BROWN SPIKE", "TINY SEEDS", "INVASIVE IN NORTH"],
  uses: [
    ["CRAFT", "In Nigeria the stems make house screens, and in Kano State they were made into one-person boats."],
    ["FOOD", "In Nigeria the rhizome is eaten as a famine food."],
    ["PROBLEM", "In Jigawa, Kano and Yobe it chokes floodplains, farms and grazing land."],
    ["CAUTION", "The rhizome holds a substance that causes vomiting and purging."],
  ],
  history: "A Nigerian study found it too low in protein to replace normal cattle fodder.",
  leaf: { shape: 'blade', len: 1, wid: 0.08, note: 'FLAT LEAF TO 1.5 M' },
  form: { type: 'grass', height: 1.0, branches: 1, nodes: 8, arrange: 'spiral', leafSize: 0.9, droop: 0.1, flower: { type: 'spike', size: 1.0, color: 1 }, fruit: { type: 'berry', size: 0.2, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 150, g: [1, 1], desc: "Leaves stand in water." },
    { id: 'bloom', label: "IN FLOWER", from: 150, to: 270, g: [1, 1], desc: "Brown spikes rise." },
    { id: 'fruiting', label: "SEEDING", from: 270, to: 360, g: [1, 1], desc: "Spikes fluff and shed seed." },
  ],
  beds: [{ plantedDay: -600 }],
});
