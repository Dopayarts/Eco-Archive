EA.addSpecies('wild-sorrel', {
  name: "WILD SORREL", short: "WILDSORREL", latin: "Hibiscus asper", family: "Malvaceae (mallow family)",
  origin: "Tropical Africa; eaten in soups in the middle belt and northeast of Nigeria, collected at Eyenkorin, Kwara State",
  added: '2026-11-25',
  kind: 'perennial',
  summary: "A perennial herb up to 2 m with finely prickly, hairy stems. Leaves are lance-shaped to oval or 3-7 lobed, up to 18 cm long. Pale yellow flowers have a red-purple centre, followed by an egg-shaped capsule up to 2 cm with dark brown kidney-shaped seeds.",
  facts: ["HERB TO 2 M", "PRICKLY STEMS", "LOBED LEAVES", "YELLOW, PURPLE EYE", "SOUP VEGETABLE"],
  uses: [
    ["FOOD", "In Nigeria the young fruits thicken soup, and the leaves and calyx are cooked as a soup vegetable."],
    ["MEDICINE", "Used for urethritis in northern Nigeria and as a poison antidote; also taken as a tonic and for jaundice."],
    ["FODDER", "Grazed by livestock, especially camels, and its stems give fibre."],
    ["CAUTION", "Eaten in excess it can bloat cattle, and its leaves hold cardiac glycosides."],
  ],
  history: "Also called false roselle. It is a wild cousin of the roselle used for zobo.",
  leaf: { shape: 'oval', len: 1, wid: 0.7, compound: 'palmate', note: '3-7 LOBED LEAF' },
  form: { type: 'shrub', height: 0.9, branches: 5, nodes: 6, arrange: 'alternate', leafSize: 0.8, droop: 0.2, flower: { type: 'single', size: 0.7, color: 'yellow' }, fruit: { type: 'pod', size: 0.4, color: 1 } },
  seasons: [
    { id: 'regrowth', label: "RAINY GROWTH", from: 150, to: 240, g: [0.4, 1], desc: "New prickly stems." },
    { id: 'bloom', label: "IN FLOWER", from: 240, to: 300, g: [1, 1], desc: "Yellow flowers, purple eye." },
    { id: 'fruiting', label: "FRUITING", from: 300, to: 360, g: [1, 1], desc: "Capsules ripen." },
    { id: 'rest', label: "DRY REST", from: 0, to: 150, g: [1, 0.4], desc: "Growth slows in the dry season." },
  ],
  beds: [{ plantedDay: -400 }],
});
