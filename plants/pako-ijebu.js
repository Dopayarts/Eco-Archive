EA.addSpecies('pako-ijebu', {
  name: "PAKO IJEBU", latin: "Massularia acuminata", family: "Rubiaceae (coffee family)",
  origin: "Tropical high forest of West and west-central Africa, including southern Nigeria",
  local: "PAKO IJEBU, ORIN IJEBU (YORUBA)",
  added: '2026-11-04',
  kind: 'perennial',
  summary: "An evergreen forest shrub or small tree up to about 5 m, on the borderline between shrub and tree. Its large leaves are elliptic with a drawn-out tip and almost no stalk. Narrow, beaked flowers about 5 cm long sit in short clusters at the leaf bases.",
  facts: ["SHRUB OR TREE TO 5 M", "EVERGREEN", "LEAVES LARGE, NEARLY STALKLESS", "FLOWERS ABOUT 5 CM LONG", "A PRIZED CHEWING STICK"],
  uses: [
    ["CHEWING STICK", "The stem is one of the favourite chewing sticks of south-west Nigeria, used to clean the teeth."],
    ["MEDICINE", "Stem decoctions are taken as a tonic in Yoruba medicine."],
  ],
  history: "A 2019 survey in Idanre Forest Reserve, Ondo State, listed pako ijebu among the preferred chewing-stick plants that have become rare there.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, note: 'LARGE ELLIPTIC LEAF, POINTED TIP' },
  form: { type: 'shrub', height: 0.9, trunk: 0.15, branches: 7, nodes: 5, spread: 0.3, stemW: 0.04, leafSize: 1.3, arrange: 'opposite', flower: { type: 'single', size: 1.0, color: 3 }, fruit: { type: 'big', size: 0.7, color: 2 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 90, g: [1, 1], desc: "Beaked flowers open around January." },
    { id: 'fruiting', label: "FRUITING", from: 90, to: 210, g: [1, 1], desc: "Fruits ripen." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 210, to: 360, g: [1, 1], desc: "Evergreen leaves." },
  ],
  beds: [{ plantedDay: -3600 }],
});
