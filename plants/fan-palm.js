EA.addSpecies('fan-palm', {
  name: "AFRICAN FAN PALM", short: "GIGINYA", latin: "Borassus aethiopum", family: "Arecaceae (palm family)",
  origin: "Tropical African savanna, including Nigeria",
  local: "GIGINYA (HAUSA)",
  added: '2026-10-30',
  kind: 'perennial',
  summary: "A tall, unbranched palm up to 20 m whose trunk swells high up on older trees. A round crown of huge, bluish-green fan leaves sits on stalks edged with black spines. Female trees bear big orange-brown fruits.",
  facts: ["PALM UP TO 20 M", "TRUNK SWELLS HIGH UP", "FAN LEAVES UP TO 3.5 M", "LEAF STALKS SPINY", "MALE AND FEMALE TREES"],
  uses: [
    ["FOOD", "The fruit pulp is eaten, and the starchy young shoots from sprouted seeds are roasted as a delicacy."],
    ["DRINK", "Sap from the flower stalks makes palm wine."],
    ["CRAFT", "Leaves make mats, bags, baskets and fans; the termite-proof trunks make posts and rafters."],
  ],
  history: "Giginya grows across the African savanna. Its starchy sprouted seedlings are valued in times of hunger.",
  leaf: { shape: 'blade', len: 1, wid: 0.2, compound: 'palmate', leaflets: 11, note: 'HUGE FAN LEAF, BLUISH, BLACK SPINES ON THE STALK' },
  form: { type: 'palm', height: 1.5, trunk: 0.72, count: 12, leafSize: 1.9, droop: 0.25, stemW: 0.08, flower: { type: 'cluster', size: 1, color: 3 }, fruit: { type: 'big', size: 1.3, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "DRY SEASON", from: 0, to: 90, g: [1, 1], desc: "Fan crown stays green." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 180, g: [1, 1], desc: "Flower stalks may be tapped for wine." },
    { id: 'fruiting', label: "FRUITING", from: 180, to: 330, g: [1, 1], desc: "Heavy orange-brown fruits." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 330, to: 360, g: [1, 1], desc: "It flowers and fruits all year." },
  ],
  beds: [{ plantedDay: -10800 }],
});
