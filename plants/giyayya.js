EA.addSpecies('giyayya', {
  name: "GIYAYYA", latin: "Mitragyna inermis", family: "Rubiaceae (coffee family)",
  origin: "Tropical Africa from Senegal and Mauritania east to Sudan, including northern Nigeria such as Kano State",
  local: "GIYAYYA (HAUSA), KAWI (KANURI)",
  added: '2026-11-14',
  kind: 'perennial',
  summary: "A shrub or small tree up to 16 m with a dense, wide crown and branches low on the trunk. Its light-brown wood is fine-grained, lasts in water and resists termites.",
  facts: ["SMALL TREE TO 16 M", "DENSE WIDE CROWN", "WOOD LASTS IN WATER", "RESISTS TERMITES", "BARK GIVES YELLOW DYE"],
  uses: [
    ["MEDICINE", "Leaves and bark are used against fever and malaria, and for dysentery."],
    ["FAMINE FOOD", "In Kano State it is recorded as a famine food."],
    ["CRAFT", "The wood makes writing boards, prayer slates and tools; branches are woven into baskets."],
  ],
  history: "It is valued far more as a medicine than for its wood; it is also used for epilepsy.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, note: 'LEAVES IN OPPOSITE PAIRS' },
  form: { type: 'tree', height: 1.0, trunk: 0.35, branches: 8, nodes: 5, spread: 0.35, stemW: 0.07, leafSize: 1.0, arrange: 'opposite', droop: 0.15, flower: { type: 'head', size: 0.7, color: 3 }, fruit: { type: 'berry', size: 0.6, color: 1 } },
  seasons: [
    { id: 'rest', label: "DRY SPELL", from: 0, to: 90, g: [0.9, 0.8], desc: "Leaves hold through the dry season." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 160, g: [0.8, 1], desc: "Round flower heads." },
    { id: 'fruiting', label: "FRUITING", from: 160, to: 250, g: [1, 1], desc: "Small fruit heads." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 250, to: 360, g: [1, 1], desc: "Dense crown." },
  ],
  beds: [{ plantedDay: -2000 }],
});
