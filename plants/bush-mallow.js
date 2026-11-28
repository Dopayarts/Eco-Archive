EA.addSpecies('bush-mallow', {
  name: "BUSH MALLOW", short: "BUSHMALLOW", latin: "Abutilon mauritianum", family: "Malvaceae (mallow family)",
  origin: "Drier tropical Africa from Senegal to Somalia; used in Nigerian folk medicine",
  local: "FURU, KAWO",
  added: '2026-11-28',
  kind: 'perennial',
  summary: "A perennial herb or shrub up to 2.5 m with sticky stems. Large heart-based, toothed leaves reach 18 cm. Single yellow, orange or reddish flowers give a round fruit of 20-40 black segments.",
  facts: ["SHRUB TO 2.5 M", "HEART LEAVES", "YELLOW FLOWERS", "BLACK SEGMENTED FRUIT", "COUGH REMEDY"],
  uses: [
    ["MEDICINE", "In Nigeria its root infusion is a cooling drink for fever, the bark a diuretic, and the seeds a cough remedy."],
    ["FOOD", "Its leaves and flowers are cooked as a vegetable."],
    ["CRAFT", "Stems are chew sticks and give fibre for cord and baskets."],
  ],
  history: "Also called country mallow. In Benin it flowers and fruits all year.",
  leaf: { shape: 'heart', len: 1, wid: 0.8, note: 'TOOTHED LEAF' },
  form: { type: 'shrub', height: 1.0, branches: 6, nodes: 6, arrange: 'alternate', leafSize: 0.9, droop: 0.2, flower: { type: 'single', size: 0.5, color: 'yellow' }, fruit: { type: 'berry', size: 0.4, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 150, to: 240, g: [1, 1], desc: "Big soft leaves." },
    { id: 'bloom', label: "IN FLOWER", from: 240, to: 330, g: [1, 1], desc: "Yellow flowers." },
    { id: 'fruiting', label: "FRUITING", from: 330, to: 360, g: [1, 1], desc: "Black segmented fruit." },
    { id: 'rest', label: "DRY REST", from: 0, to: 150, g: [1, 0.8], desc: "Growth slows." },
  ],
  beds: [{ plantedDay: -500 }],
});
