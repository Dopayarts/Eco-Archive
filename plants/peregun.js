EA.addSpecies('peregun', {
  name: "TREE DRACAENA", short: "PEREGUN", latin: "Dracaena arborea", family: "Asparagaceae (asparagus family)",
  origin: "West and west-central African wet forests; grown around Nigerian homes",
  local: "PEREGUN (YORUBA)",
  added: '2026-10-28',
  kind: 'perennial',
  summary: "A palm-like tree with a slender grey trunk that branches into a few stout arms, each topped by a tuft of long, narrow, strap-shaped leaves up to 1.5 m long. Small flowers hang in large, drooping sprays from the branch tips.",
  facts: ["TREE UP TO 20 M", "TRUNK SLENDER, FEW ARMS", "LEAVES STRAP-LIKE, IN TUFTS", "FLOWERS IN HANGING SPRAYS", "GROWS FROM CUTTINGS"],
  uses: [
    ["BOUNDARY", "Planted across West Africa to mark land boundaries and graves."],
    ["MEDICINE", "Root decoctions are used in Yoruba medicine for stomach pains."],
  ],
  history: "Dracaena stems mark boundaries and funeral sites in West Africa; the Horniman Museum holds a dracaena stem from an Anang shrine.",
  leaf: { shape: 'blade', len: 1, wid: 0.12, note: 'LONG STRAP-SHAPED LEAF, IN TUFTS AT BRANCH TIPS' },
  form: { type: 'palm', height: 1.3, trunk: 0.55, count: 14, leafSize: 1.6, droop: 0.35, stemW: 0.06, flower: { type: 'plume', size: 1.0, color: 3 }, fruit: { type: 'berry', size: 1.6, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 90, g: [1, 1], desc: "Evergreen tufts." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 150, g: [1, 1], desc: "Drooping flower sprays." },
    { id: 'fruiting', label: "FRUITING", from: 150, to: 240, g: [1, 1], desc: "Small berries ripen." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 240, to: 360, g: [1, 1], desc: "New leaves unfold from the tufts." },
  ],
  beds: [{ plantedDay: -3600 }],
});
