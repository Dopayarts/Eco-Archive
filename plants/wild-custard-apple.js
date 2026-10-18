EA.addSpecies('wild-custard-apple', {
  name: "WILD CUSTARD APPLE", short: "ABO IBOBO", latin: "Annona senegalensis", family: "Annonaceae (custard apple family)",
  origin: "Tropical Africa; savanna and woodland across Nigeria",
  local: "ABO IBOBO (YORUBA)",
  added: '2026-10-18',
  kind: 'perennial',
  summary: "A shrub or small savanna tree with soft, bluish-green oval leaves. Thick creamy flowers hang singly or in small groups from the leaf joints, and bumpy fruits ripen from green to yellow and orange, with sweet white pulp tasting a little like pineapple.",
  facts: ["SHRUB OR TREE 2-6 M", "LEAVES OVAL, SOFT, BLUISH-GREEN", "FLOWERS CREAMY, 6 THICK PETALS", "FRUIT BUMPY, RIPENS ORANGE, MANY SEEDS", "RESPROUTS AFTER BUSH FIRES"],
  uses: [
    ["FOOD", "The ripe fruit pulp is eaten fresh; flowers and young leaves are also eaten."],
    ["MEDICINE", "Bark and roots are used in traditional remedies for diarrhoea, toothache and snakebite."],
    ["CRAFT", "The wood makes tool handles and poles; leaves stuff mattresses."],
  ],
  history: "A wild relative of the soursop and sugar apple, it is gathered rather than farmed, and its fruits ripen in the early rains when other food is scarce.",
  leaf: { shape: 'oval', len: 1, wid: 0.6, note: 'SIMPLE OVAL LEAF, SOFT, BLUISH-GREEN, ROUNDED TIP' },
  form: { type: 'shrub', height: 1.0, trunk: 0.3, branches: 7, nodes: 4, spread: 0.3, stemW: 0.04, leafSize: 1.5, arrange: 'alternate', flower: { type: 'single', size: 1.1, color: 3 }, fruit: { type: 'big', size: 0.9, hang: true, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 90, g: [0.9, 0.9], desc: "Leaves toughen through the dry season." },
    { id: 'bloom', label: "IN BLOOM", from: 90, to: 180, g: [0.9, 1], desc: "Creamy flowers open with the first rains." },
    { id: 'fruiting', label: "FRUIT GROWING", from: 180, to: 270, g: [1, 1], desc: "Bumpy fruits swell and turn yellow, then orange." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 270, to: 360, g: [1, 0.9], desc: "Leafy growth; bush fires may burn it back." },
  ],
  beds: [{ plantedDay: -1800 }],
});
