EA.addSpecies('malabar-spinach', {
  name: "MALABAR SPINACH", short: "AMUNUTUTU", latin: "Basella alba", family: "Basellaceae (basella family)",
  origin: "India; grown and eaten widely in Nigeria",
  local: "AMUNUTUTU (YORUBA)",
  added: '2026-10-29',
  kind: 'perennial',
  summary: "A fast, twining vine with thick, juicy stems and glossy, fleshy, heart-shaped leaves. Small white or pink flowers grow on short spikes, followed by small round berries that ripen dark purple.",
  facts: ["TWINING VINE", "STEMS JUICY, THICK", "LEAVES FLESHY, GLOSSY", "FLOWERS SMALL, WHITE-PINK", "BERRIES DARK PURPLE"],
  uses: [
    ["FOOD", "Leaves and young shoots are cooked in soups."],
    ["GARDEN", "Grown on fences as an ornamental too."],
  ],
  history: "Malabar spinach came from India. Unlike true spinach it thrives in heat, so it grows well through the Nigerian year.",
  leaf: { shape: 'heart', len: 1, wid: 0.8, note: 'FLESHY GLOSSY HEART-SHAPED LEAF' },
  form: { type: 'vine', height: 1.15, nodes: 14, leafSize: 1.5, droop: 0.3, flower: { type: 'spike', size: 0.7, color: 3 }, fruit: { type: 'berry', size: 1.8, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 120, g: [0.95, 1], desc: "Leafy vines are picked often." },
    { id: 'bloom', label: "IN FLOWER", from: 120, to: 210, g: [1, 1], desc: "Small flower spikes in the leaf joints." },
    { id: 'fruiting', label: "BERRIES", from: 210, to: 300, g: [1, 1], desc: "Berries ripen dark purple." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 300, to: 360, g: [1, 0.95], desc: "Vines keep growing." },
  ],
  beds: [{ plantedDay: -360 }],
});
