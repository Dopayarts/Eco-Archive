EA.addSpecies('soursop', {
  name: "SOURSOP", latin: "Annona muricata", family: "Annonaceae (custard apple family)",
  origin: "Tropical America; grown in gardens across southern Nigeria",
  added: '2026-10-16',
  kind: 'perennial',
  summary: "A small evergreen tree with glossy, dark, pointed leaves that smell strong when crushed. Thick, fleshy yellow-green flowers grow from the trunk and branches, becoming large, heart-shaped green fruits covered in soft spines, with white, juicy, tangy flesh.",
  facts: ["TREE 4-8 M", "LEAVES GLOSSY, OBLONG, STRONG SMELL", "FLOWERS THICK, YELLOW-GREEN, ON OLD WOOD", "FRUIT LARGE, GREEN, SOFT SPINES", "SEEDS BLACK, NOT EDIBLE"],
  uses: [
    ["FOOD", "The flesh is eaten fresh or blended into drinks."],
    ["TRADITIONAL", "Leaf tea is widely promoted for sleep and even cancer; there is no good evidence for cancer claims."],
    ["CAUTION", "Seeds, and heavy long-term use of leaf and fruit, contain annonacin, linked to nerve damage; do not swallow the seeds."],
  ],
  history: "Soursop came from the Caribbean and South America. In Nigeria it has become popular in recent years, with seedlings and leaf tea widely sold.",
  leaf: { shape: 'lance', len: 1, wid: 0.38, note: 'SIMPLE OBLONG LEAF, GLOSSY, POINTED, STRONG-SMELLING' },
  form: { type: 'tree', height: 1.2, trunk: 0.4, branches: 5, nodes: 5, spread: 0.24, stemW: 0.04, leafSize: 1.6, arrange: 'alternate', flower: { type: 'single', size: 0.8, color: 2 }, fruit: { type: 'big', size: 1.3, hang: true, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "DRY SEASON", from: 0, to: 80, g: [1, 0.95], desc: "Growth slows; some leaves fall." },
    { id: 'bloom', label: "IN BLOOM", from: 80, to: 150, g: [0.95, 1], desc: "Thick flowers appear on trunk and branches." },
    { id: 'fruiting', label: "FRUIT GROWING", from: 150, to: 240, g: [1, 1], desc: "Spiny green fruits swell heavily." },
    { id: 'harvest', label: "FRUIT SEASON", from: 240, to: 320, g: [1, 1], desc: "Fruits soften and are picked." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 320, to: 360, g: [1, 1], desc: "A rest before the next flowering." },
  ],
  beds: [{ plantedDay: -1440 }],
});
