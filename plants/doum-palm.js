EA.addSpecies('doum-palm', {
  name: "DOUM PALM", latin: "Hyphaene thebaica", family: "Arecaceae (palm family)",
  origin: "Dry Africa and Arabia; along the rivers of northern Nigeria",
  local: "GORUBA (HAUSA)",
  added: '2026-10-18',
  kind: 'perennial',
  summary: "An unusual palm whose trunk forks again and again, with a tuft of big fan-shaped leaves at each branch end. Leaf stalks carry hooked spines. Female trees carry hard, shiny brown fruits that taste a little like gingerbread.",
  facts: ["PALM UP TO 17 M, TRUNK BRANCHES", "LEAVES FAN-SHAPED, UP TO 1.8 M", "LEAF STALKS WITH CURVED SPINES", "FRUIT HARD, GLOSSY BROWN, ONE SEED", "MALE AND FEMALE TREES"],
  uses: [
    ["FOOD", "The dry fruit rind is chewed or made into sweets; unripe kernels are eaten."],
    ["CRAFT", "Leaves make mats, baskets, brooms, rope and thatch."],
    ["WOOD", "Trunks make posts and beams."],
  ],
  history: "One of the few palms that branch, the doum palm grows along the Niger and other rivers of the dry north, where its leaves supply a whole weaving trade.",
  leaf: { shape: 'blade', len: 1, wid: 0.2, compound: 'palmate', leaflets: 9, note: 'FAN LEAF, STIFF FOLDED SEGMENTS, SPINY STALK' },
  form: { type: 'palm', height: 1.4, trunk: 0.6, count: 10, leafSize: 1.8, droop: 0.3, stemW: 0.07, flower: { type: 'cluster', size: 1, color: 3 }, fruit: { type: 'big', size: 1.1, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "DRY GROWTH", from: 0, to: 90, g: [1, 1], desc: "Fan leaves stay green through the dry season." },
    { id: 'bloom', label: "IN BLOOM", from: 90, to: 150, g: [1, 1], desc: "Long flower spikes hang among the leaves." },
    { id: 'fruiting', label: "FRUIT GROWING", from: 150, to: 300, g: [1, 1], desc: "Fruits grow and harden." },
    { id: 'harvest', label: "FRUIT SEASON", from: 300, to: 360, g: [1, 1], desc: "Brown fruits ripen and are gathered." },
  ],
  beds: [{ plantedDay: -7200 }],
});
