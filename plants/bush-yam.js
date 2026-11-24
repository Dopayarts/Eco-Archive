EA.addSpecies('bush-yam', {
  name: "BUSH YAM", latin: "Dioscorea praehensilis", family: "Dioscoreaceae (yam family)",
  origin: "West Africa; eaten as famine food in northern Nigeria and kept in collections at IITA, Ibadan",
  added: '2026-11-24',
  kind: 'perennial',
  summary: "A climbing yam with spiny, purplish-green stems up to 15 m. Opposite, heart-based leaves are 4-10 cm long. Tubers up to 60 cm have white to yellowish flesh, a bitter purple layer under the skin and a crown of thorny roots.",
  facts: ["CLIMBING YAM", "SPINY STEMS TO 15 M", "HEART-BASED LEAVES", "TUBER TO 60 CM", "THORNY ROOT CROWN"],
  uses: [
    ["FOOD", "In northern Nigeria the tuber is eaten as famine food; it is boiled or pounded into fufu in lean seasons."],
    ["SHOOTS", "Young shoots are eaten in Congo."],
    ["CAUTION", "The tuber is bitter and needs careful preparation, and the stems and roots are spiny."],
  ],
  history: "Also called forest yam. Its seeds are stored at IITA, Ibadan.",
  leaf: { shape: 'heart', len: 1, wid: 0.6, note: 'HEART-BASED LEAF' },
  form: { type: 'vine', height: 1.1, branches: 3, nodes: 8, arrange: 'opposite', leafSize: 0.8, droop: 0.2, flower: { type: 'spike', size: 0.5, color: 3 }, fruit: { type: 'pod', size: 0.5, color: 2 } },
  seasons: [
    { id: 'dormant', label: "DORMANT", from: 0, to: 150, g: [0.3, 0.3], desc: "Tuber rests underground." },
    { id: 'regrowth', label: "RAINY GROWTH", from: 150, to: 240, g: [0.3, 1], desc: "Spiny vines climb." },
    { id: 'bloom', label: "IN FLOWER", from: 240, to: 300, g: [1, 1], desc: "Small flower spikes." },
    { id: 'fruiting', label: "FRUITING", from: 300, to: 360, g: [1, 0.6], desc: "Winged seeds; vines die back." },
  ],
  beds: [{ plantedDay: -400 }],
});
