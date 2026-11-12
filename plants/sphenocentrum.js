EA.addSpecies('sphenocentrum', {
  name: "SPHENOCENTRUM", short: "SPHENOCENT", latin: "Sphenocentrum jollyanum", family: "Menispermaceae (moonseed family)",
  origin: "Forest of West Africa from Ivory Coast to Nigeria and Cameroon",
  added: '2026-11-12',
  kind: 'perennial',
  summary: "A small evergreen shrub about 1.5 m tall with bright yellow roots and grey bark. Male and female flowers grow on separate plants. Clusters of 3-12 fleshy fruits ripen yellow to orange.",
  facts: ["SHRUB ABOUT 1.5 M", "ROOTS BRIGHT YELLOW", "BARK GREY", "MALE, FEMALE PLANTS", "FRUIT YELLOW-ORANGE"],
  uses: [
    ["MEDICINE", "In Nigeria a root brew dresses tropical ulcers; the root is also a tonic and used for stomach complaints and high blood pressure."],
    ["FOOD", "The fruit is eaten against tiredness."],
    ["WOUNDS", "A leaf brew is used to stop wounds bleeding."],
  ],
  history: "It is the only species in its genus. In Nigeria and Benin it is now considered locally vulnerable from over-collection.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, note: 'SIMPLE LEAF IN A SPIRAL' },
  form: { type: 'shrub', height: 0.6, branches: 4, nodes: 5, trunk: 0.2, spread: 0.3, arrange: 'alternate', leafSize: 1.3, droop: 0.25, flower: { type: 'cluster', size: 0.6, color: 2 }, fruit: { type: 'berry', size: 0.9, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 120, g: [1, 1], desc: "Evergreen leaves." },
    { id: 'bloom', label: "IN FLOWER", from: 120, to: 180, g: [1, 1], desc: "Small flower clusters." },
    { id: 'fruiting', label: "FRUITING", from: 180, to: 300, g: [1, 1], desc: "Orange fruits ripen." },
    { id: 'regrowth', label: "NEW LEAVES", from: 300, to: 360, g: [1, 1], desc: "Fresh shoots." },
  ],
  beds: [{ plantedDay: -800 }],
});
