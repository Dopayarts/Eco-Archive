EA.addSpecies('lannea', {
  name: "LANNEA", latin: "Lannea acida", family: "Anacardiaceae (cashew family)",
  origin: "Guinea and Sudan savannas of West and Central Africa; Kano, Nigeria",
  local: "FARU (HAUSA)",
  added: '2026-11-02',
  kind: 'perennial',
  summary: "A small savanna tree up to 12 m with scaly brown-black bark and leaves of narrow leaflets, red-stalked when young. Small fruits ripen yellow to red on bare branches at the end of the dry season.",
  facts: ["TREE UP TO 12 M", "BARK SCALY, DARK", "LEAVES PINNATE", "FRUIT YELLOW TO RED", "FRUITS WHEN LEAFLESS"],
  uses: [
    ["FOOD", "Ripe fruit is eaten; in Kano young leaves and the gum are eaten too."],
    ["DYE", "Parts of the tree are used in dyeing."],
    ["MEDICINE", "Used for stomach pain, diarrhoea and rheumatism."],
  ],
  history: "Lannea fruits ripen while the tree is bare, just as the rains begin.",
  leaf: { shape: 'lance', len: 1, wid: 0.35, compound: 'pinnate', leaflets: 9, note: 'PINNATE LEAF, NARROW OVAL LEAFLETS' },
  form: { type: 'tree', height: 1.1, trunk: 0.35, branches: 9, nodes: 5, spread: 0.36, stemW: 0.06, leafSize: 1.9, arrange: 'alternate', fruit: { type: 'berry', size: 1.8, color: 2 } },
  seasons: [
    { id: 'dormant', label: "BARE", from: 0, to: 60, g: [0.4, 0.4], desc: "Leafless in the harmattan." },
    { id: 'fruiting', label: "FRUITING", from: 60, to: 120, g: [0.4, 0.6], desc: "Fruits ripen on bare twigs." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 120, to: 300, g: [0.7, 1], desc: "Full leaf in the rains." },
    { id: 'dormant', label: "LEAVES FALL", from: 300, to: 360, g: [1, 0.4], desc: "Leaves drop." },
  ],
  beds: [{ plantedDay: -3600 }],
});
