EA.addSpecies('morning-glory', {
  name: "MORNING GLORY", short: "MORNGLORY", latin: "Ipomoea asarifolia", family: "Convolvulaceae (morning glory family)",
  origin: "Across the tropics; in Africa from Cape Verde and Senegal east to Sudan and south to Angola, including Nigeria",
  added: '2026-11-15',
  kind: 'perennial',
  summary: "A hairless perennial herb trailing up to 3 m with short upright shoots. Leaves are heart- to kidney-shaped. Funnel-shaped pinkish-purple flowers have a darker centre, and the fruit is a round capsule.",
  facts: ["TRAILING HERB", "UP TO 3 M LONG", "KIDNEY-SHAPED LEAVES", "PINK-PURPLE FUNNELS", "TOXIC TO STOCK"],
  uses: [
    ["MEDICINE", "In Nigeria a brew of the shoots is put on boils and taken for stomach problems."],
    ["SAND", "It binds sand dunes, and is used as tinder and to dye cloth and hair."],
    ["CAUTION", "Toxic. People and grazing animals do not eat it; fungi living in it can poison cattle, sheep and goats."],
  ],
  history: "Also called ginger-leaf morning glory. In Nigeria horses that graze it by accident can get diarrhoea.",
  leaf: { shape: 'heart', len: 1, wid: 0.9, note: 'KIDNEY-SHAPED LEAF' },
  form: { type: 'vine', height: 0.6, nodes: 12, leafSize: 0.75, droop: 0.5, arrange: 'alternate', flower: { type: 'single', size: 1.1, color: 2 }, fruit: { type: 'berry', size: 0.5, color: 1 } },
  seasons: [
    { id: 'rest', label: "DRY SPELL", from: 0, to: 80, g: [0.8, 0.7], desc: "Growth slows." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 80, to: 200, g: [0.8, 1], desc: "Trails across the ground." },
    { id: 'bloom', label: "IN FLOWER", from: 200, to: 300, g: [1, 1], desc: "Pink-purple funnels." },
    { id: 'fruiting', label: "CAPSULES", from: 300, to: 360, g: [1, 0.9], desc: "Round capsules." },
  ],
  beds: [{ plantedDay: -600 }],
});
