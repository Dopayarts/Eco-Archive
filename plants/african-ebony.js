EA.addSpecies('african-ebony', {
  name: "AFRICAN EBONY", short: "EBONY", latin: "Diospyros mespiliformis", family: "Ebenaceae (ebony family)",
  origin: "Tropical Africa; savanna and riverine woodland of northern Nigeria",
  added: '2026-10-24',
  kind: 'perennial',
  summary: "A dense, evergreen tree with dark, glossy, leathery leaves; new leaves flush pink-red. Small creamy flowers are followed by round fruits that ripen yellow to purplish and taste sweet.",
  facts: ["TREE UP TO 25 M OR MORE", "LEAVES DARK, LEATHERY, GLOSSY", "NEW LEAVES PINK-RED", "FRUIT ROUND, YELLOW TO PURPLE", "HEARTWOOD DARK AND HARD"],
  uses: [
    ["FOOD", "Ripe fruits are eaten fresh and dried; they have been studied in northern Nigeria."],
    ["WOOD", "Hard, dark heartwood for carving, tool handles and furniture."],
    ["SHADE", "Its dense crown gives year-round shade."],
  ],
  history: "African ebony is often found on old termite mounds and along rivers in the savanna, and is left standing when land is cleared because of its fruit.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, note: 'DARK GLOSSY LEATHERY LEAF, POINTED TIP' },
  form: { type: 'tree', height: 1.35, trunk: 0.4, branches: 11, nodes: 5, spread: 0.38, stemW: 0.08, leafSize: 1.9, arrange: 'alternate', flower: { type: 'cluster', size: 0.9, color: 3 }, fruit: { type: 'berry', size: 2.2, color: 3 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 60, g: [1, 1], desc: "Evergreen through the dry season." },
    { id: 'bloom', label: "IN BLOOM", from: 60, to: 120, g: [1, 1], desc: "Small creamy flowers among pink new leaves." },
    { id: 'fruiting', label: "FRUITING", from: 120, to: 240, g: [1, 1], desc: "Round fruits swell and ripen." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 240, to: 360, g: [1, 1], desc: "Dense dark crown." },
  ],
  beds: [{ plantedDay: -9000 }],
});
