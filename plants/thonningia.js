EA.addSpecies('thonningia', {
  name: "THONNINGIA", latin: "Thonningia sanguinea", family: "Balanophoraceae",
  origin: "Tropical African forests; used across Nigeria",
  added: '2026-11-18',
  kind: 'perennial',
  summary: "A fleshy root parasite up to 20 cm tall with no green colour at all. It lives on tree roots and pushes up red to pink flower heads from the forest floor.",
  facts: ["ROOT PARASITE", "UP TO 20 CM", "NO CHLOROPHYLL", "RED FLOWER HEADS", "FEEDS ON TREE ROOTS"],
  uses: [
    ["FOOD", "Hausa people in northern Nigeria use the tuber as a condiment."],
    ["MEDICINE", "In Nigeria it is taken as an aphrodisiac, and in central Nigeria it is made into an ointment."],
    ["CUSTOM", "Flower heads are tied to the ankles of infants."],
  ],
  history: "Also called ground pineapple, for the look of its scaly red flower heads.",
  leaf: { shape: 'lance', len: 0.6, wid: 0.3, note: 'RED SCALE LEAF, NOT GREEN' },
  form: { type: 'rosette', height: 0.25, branches: 1, nodes: 3, arrange: 'spiral', leafSize: 0.5, droop: 0.1, flower: { type: 'head', size: 1.2, color: 1 }, fruit: { type: 'berry', size: 0.3, color: 1 } },
  seasons: [
    { id: 'rest', label: "HIDDEN UNDERGROUND", from: 0, to: 150, g: [0.4, 0.4], desc: "Tubers rest on tree roots." },
    { id: 'bloom', label: "IN FLOWER", from: 150, to: 300, g: [1, 1], desc: "Red flower heads push up." },
    { id: 'fruiting', label: "SEEDING", from: 300, to: 360, g: [1, 1], desc: "Heads ripen." },
  ],
  beds: [{ plantedDay: -800 }],
});
