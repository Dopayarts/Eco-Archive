EA.addSpecies('boarwood', {
  name: "BOARWOOD", latin: "Symphonia globulifera", family: "Clusiaceae (mangosteen family)",
  origin: "Tropical Africa and America; native in Nigeria",
  added: '2026-11-22',
  kind: 'perennial',
  summary: "An evergreen tree up to 25 m, sometimes 40 m, with sticky yellow latex and stilt roots in swamps. Glossy, leathery leaves grow in opposite pairs. Waxy crimson flowers give warty round berries 1.5-4.5 cm long.",
  facts: ["TREE TO 25 M", "YELLOW STICKY LATEX", "STILT ROOTS", "CRIMSON FLOWERS", "WARTY BERRIES"],
  uses: [
    ["MEDICINE", "In Nigeria the gum is taken for gonorrhoea and as a diuretic."],
    ["TIMBER", "The wood is used for building, floors and carpentry."],
    ["GLUE", "The bark gum is used as glue."],
    ["GARDEN", "It may be grown for its red flowers."],
  ],
  history: "Also called hog gum and chewstick. It fruits most in the dry season.",
  leaf: { shape: 'lance', len: 1, wid: 0.35, note: 'GLOSSY, OPPOSITE' },
  form: { type: 'tree', height: 1.5, trunk: 0.55, branches: 8, nodes: 5, spread: 0.22, stemW: 0.08, leafSize: 1.2, arrange: 'opposite', droop: 0.15, flower: { type: 'cluster', size: 0.6, color: 1 }, fruit: { type: 'berry', size: 0.6, color: 2 } },
  seasons: [
    { id: 'fruiting', label: "FRUITING", from: 0, to: 150, g: [1, 1], desc: "Most fruit in the dry season." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 150, to: 270, g: [1, 1], desc: "Glossy crown." },
    { id: 'bloom', label: "IN FLOWER", from: 270, to: 360, g: [1, 1], desc: "Crimson waxy flowers." },
  ],
  beds: [{ plantedDay: -7000 }],
});
