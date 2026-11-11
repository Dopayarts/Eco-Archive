EA.addSpecies('serendipity-berry', {
  name: "SERENDIPITY", short: "SERENDIP", latin: "Dioscoreophyllum cumminsii", family: "Menispermaceae (moonseed family)",
  origin: "West African forest; studied in the semi-deciduous forests of Nigeria",
  added: '2026-11-11',
  kind: 'perennial',
  summary: "A woody climbing plant of the forest that bears bunches of 45-98 small berries. The berry pulp holds monellin, a protein that tastes far sweeter than sugar.",
  facts: ["WOODY CLIMBER", "BERRIES IN BUNCHES", "45-98 BERRIES A BUNCH", "PULP VERY SWEET", "PROTEIN SWEETENER"],
  uses: [
    ["FOOD", "The sweet berries are eaten from the wild; Nigerian studies found their pulp rich in soluble sugars."],
    ["SCIENCE", "Its protein monellin is 800-2000 times sweeter than sugar and is studied as a natural sweetener."],
    ["FOREST", "Nigerian ecologists have studied how its wild populations survive in forest."],
  ],
  history: "Monellin was found in its fruit in 1969, first mistaken for a carbohydrate. It was named in 1972 after the Monell Chemical Senses Center in Philadelphia.",
  leaf: { shape: 'heart', len: 1, wid: 0.85, note: 'BROAD LEAF ON A CLIMBING STEM' },
  form: { type: 'vine', height: 1.2, nodes: 12, leafSize: 1.3, droop: 0.3, arrange: 'alternate', flower: { type: 'spike', size: 0.6, color: 2 }, fruit: { type: 'berry', size: 0.8, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 120, g: [0.8, 1], desc: "Shoots climb into the trees." },
    { id: 'bloom', label: "IN FLOWER", from: 120, to: 180, g: [1, 1], desc: "Small flower sprays." },
    { id: 'fruiting', label: "SWEET BERRIES", from: 180, to: 300, g: [1, 1], desc: "Bunches of sweet berries." },
    { id: 'regrowth', label: "NEW SHOOTS", from: 300, to: 360, g: [1, 0.9], desc: "Fresh growth." },
  ],
  beds: [{ plantedDay: -700 }],
});
