EA.addSpecies('bougainvillea', {
  name: "BOUGAINVILLEA", short: "BOUGAINVIL", latin: "Bougainvillea glabra", family: "Nyctaginaceae (four-o'clock family)",
  origin: "Brazil; brought to Nigeria in colonial times by way of Kew Gardens",
  added: '2026-10-24',
  kind: 'perennial',
  summary: "A thorny, scrambling climber that clambers over walls and fences. What look like petals are papery bracts in magenta, pink or purple, three of them around three tiny white tube flowers.",
  facts: ["THORNY CLIMBER", "BRACTS PAPERY, BRIGHT", "TRUE FLOWERS TINY, WHITE", "THREE FLOWERS PER CLUSTER", "BLOOMS IN THE HARMATTAN"],
  uses: [
    ["GARDEN", "Trained over walls, gates and fences for colour."],
    ["SECURITY", "Its thorns make it a protective hedge."],
  ],
  history: "Bougainvillea was spread from Kew Gardens to British colonies, Nigeria among them. It is one of the few plants that blaze with colour in the harmattan.",
  leaf: { shape: 'oval', len: 0.9, wid: 0.55, note: 'SMOOTH OVAL LEAF, SHARP THORNS AT THE JOINTS' },
  form: { type: 'vine', height: 1.2, nodes: 18, leafSize: 1.5, droop: 0.35, flower: { type: 'cluster', size: 2.4, color: 3 } },
  seasons: [
    { id: 'bloom', label: "IN BLOOM", from: 0, to: 120, g: [1, 1], desc: "Bracts blaze through the harmattan." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 120, to: 240, g: [1, 1], desc: "Long green shoots in the rains." },
    { id: 'bloom', label: "IN BLOOM", from: 240, to: 360, g: [1, 1], desc: "Colour returns as the rains end." },
  ],
  beds: [{ plantedDay: -2700 }],
});
