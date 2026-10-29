EA.addSpecies('wireweed', {
  name: "WIREWEED", latin: "Sida acuta", family: "Malvaceae (mallow family)",
  origin: "Pantropical weed; roadsides and farms across Nigeria",
  added: '2026-10-29',
  kind: 'perennial',
  summary: "A tough, wiry, much-branched small shrub with narrow, toothed leaves. Small pale yellow flowers open singly in the leaf joints.",
  facts: ["SHRUB UP TO 1 M", "STEMS TOUGH, WIRY", "LEAVES NARROW, TOOTHED", "FLOWERS SMALL, PALE YELLOW", "COMMON WASTELAND WEED"],
  uses: [
    ["MEDICINE", "Used in remedies for fever, headache and skin complaints; leaves from Ikorodu, Lagos have been tested in the lab."],
  ],
  history: "Wireweed dominates roadsides, pastures and wasteland in the tropics. It is also known as broomweed.",
  leaf: { shape: 'lance', len: 1, wid: 0.3, serr: 0.15, note: 'NARROW LANCE LEAF, TOOTHED EDGE' },
  form: { type: 'shrub', height: 0.8, trunk: 0.1, branches: 10, nodes: 7, spread: 0.3, stemW: 0.02, leafSize: 1.0, arrange: 'alternate', flower: { type: 'single', size: 0.8, color: 3 } },
  seasons: [
    { id: 'vegetative', label: "DRY SEASON", from: 0, to: 90, g: [0.85, 0.85], desc: "Tough stems survive the dry season." },
    { id: 'regrowth', label: "REGROWTH", from: 90, to: 180, g: [0.85, 1], desc: "New leaves with the rains." },
    { id: 'bloom', label: "IN BLOOM", from: 180, to: 330, g: [1, 1], desc: "Small yellow flowers open each day." },
    { id: 'seeding', label: "SEEDING", from: 330, to: 360, g: [1, 0.9], desc: "Seed capsules split." },
  ],
  beds: [{ plantedDay: -720 }],
});
