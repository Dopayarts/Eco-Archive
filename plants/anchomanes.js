EA.addSpecies('anchomanes', {
  name: "ANCHOMANES", latin: "Anchomanes difformis", family: "Araceae (arum family)",
  origin: "Forest across much of sub-Saharan Africa, common in West African forest, including Ogun State, Nigeria",
  local: "CHAKARA (HAUSA), OLUMAHI (IGBO), IGO LANGBODO (YORUBA), EBA ENA (EFIK)",
  added: '2026-11-16',
  kind: 'perennial',
  summary: "A large perennial herb from a whitish tuber up to 80 cm long. It sends up one huge leaf on a prickly stalk over 2-3 m tall, split into three with many squared-off leaflets. A pink spathe about 30 cm rises on its own stalk.",
  facts: ["GIANT ARUM", "ONE HUGE LEAF", "PRICKLY STALK", "TUBER UP TO 80 CM", "PINK SPATHE"],
  uses: [
    ["MEDICINE", "In Nigeria it is used for diarrhoea; soaked rhizomes are used for dysentery and fever."],
    ["GARDEN", "It is also grown as an ornamental."],
  ],
  history: "Its Efik name eba ena means cow's udder, and an Izon name means bush cocoyam.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, compound: 'palmate', leaflets: 9, note: 'ONE GIANT DIVIDED LEAF' },
  form: { type: 'broadleaf', height: 1.0, leafSize: 1.2, droop: 0.2, flower: { type: 'single', size: 1.1, color: 1 }, fruit: { type: 'berry', size: 0.6, color: 1 } },
  seasons: [
    { id: 'rest', label: "DRY SPELL", from: 0, to: 90, g: [0.8, 0.8], desc: "Growth slows." },
    { id: 'bloom', label: "PINK SPATHE", from: 90, to: 140, g: [0.8, 1], desc: "Pink spathe." },
    { id: 'vegetative', label: "GIANT LEAF", from: 140, to: 300, g: [1, 1], desc: "One huge prickly leaf." },
    { id: 'fruiting', label: "BERRIES", from: 300, to: 360, g: [1, 0.8], desc: "Berries on the spadix." },
  ],
  beds: [{ plantedDay: -600 }],
});
