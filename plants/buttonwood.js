EA.addSpecies('buttonwood', {
  name: "BUTTONWOOD", latin: "Conocarpus erectus", family: "Combretaceae (combretum family)",
  origin: "Shores of the Americas and West Africa; native in Nigeria, on sandy ground at the edge of the Niger Delta swamps",
  added: '2026-11-22',
  kind: 'perennial',
  summary: "Usually a dense shrub 1-4 m tall with several trunks, sometimes a tree to 20 m. Grey to brown bark breaks into thin scales. Shiny, dark green leaves 2-7 cm long are silky below. Flowers without petals form round buttons that ripen into red-brown cone-like heads.",
  facts: ["SHRUB 1-4 M", "SCALY GREY BARK", "SHINY LEAVES", "BUTTON FLOWERS", "SALT GLANDS"],
  uses: [
    ["FUEL", "It makes good firewood and charcoal, and is good for smoking fish and meat."],
    ["TANNIN", "The bark is rich in tannin."],
    ["GARDEN", "It is grown as an ornamental and for bonsai."],
  ],
  history: "Also called button mangrove. Two salt glands at each leaf base let it live by the sea.",
  leaf: { shape: 'oval', len: 1, wid: 0.4, note: 'SHINY, SILKY BELOW' },
  form: { type: 'shrub', height: 1.0, branches: 8, nodes: 5, arrange: 'alternate', leafSize: 0.7, droop: 0.1, flower: { type: 'head', size: 0.4, color: 2 }, fruit: { type: 'berry', size: 0.4, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 150, g: [1, 1], desc: "Evergreen." },
    { id: 'bloom', label: "IN FLOWER", from: 150, to: 240, g: [1, 1], desc: "Round button flowers." },
    { id: 'fruiting', label: "FRUITING", from: 240, to: 330, g: [1, 1], desc: "Red-brown cones." },
    { id: 'rest', label: "RESTING", from: 330, to: 360, g: [1, 1], desc: "Growth slows." },
  ],
  beds: [{ plantedDay: -3000 }],
});
