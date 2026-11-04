EA.addSpecies('silk-rubber', {
  name: "SILK RUBBER", short: "SILKRUBBER", latin: "Funtumia elastica", family: "Apocynaceae (dogbane family)",
  origin: "Deciduous forest of tropical Africa, including Nigeria",
  added: '2026-11-04',
  kind: 'perennial',
  summary: "A fast-growing tree up to 30 m with pale, grey-patched bark full of white latex. Glossy opposite leaves have wavy edges. White to yellowish flowers in clusters give pairs of woody pods about 15 cm long, holding seeds tufted with white silky hairs.",
  facts: ["TREE UP TO 30 M", "WHITE LATEX", "LEAVES GLOSSY, PAIRED", "PODS WOODY, IN PAIRS", "SEEDS WITH SILKY FLOSS"],
  uses: [
    ["RUBBER", "The latex sets easily and gives good rubber, but far less than para rubber."],
    ["MEDICINE", "The bark is used as an astringent, the leaves for diarrhoea and whooping cough, and the latex on sores."],
    ["OTHER", "The seed floss stuffs cushions; the soft white wood is carved into spoons and bowls."],
  ],
  history: "Also called Lagos silk rubber. Before para rubber spread, it was West Africa's great rubber hope, with large plantations in Nigeria around 1900.",
  leaf: { shape: 'oval', len: 1, wid: 0.4, note: 'GLOSSY LEAF, WAVY EDGE' },
  form: { type: 'tree', height: 1.3, trunk: 0.5, branches: 11, nodes: 6, spread: 0.32, stemW: 0.06, leafSize: 1.9, arrange: 'opposite', flower: { type: 'cluster', size: 1.0, color: 3 }, fruit: { type: 'pod', size: 1.1, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "DRY SEASON", from: 0, to: 90, g: [1, 1], desc: "Leafy crown." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 180, g: [1, 1], desc: "Clusters of pale flowers." },
    { id: 'fruiting', label: "PAIRED PODS", from: 180, to: 330, g: [1, 1], desc: "Woody pods split to free floss." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 330, to: 360, g: [1, 1], desc: "Leafy crown." },
  ],
  beds: [{ plantedDay: -9000 }],
});
