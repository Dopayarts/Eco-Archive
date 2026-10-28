EA.addSpecies('apa', {
  name: "AFZELIA", short: "APA", latin: "Afzelia africana", family: "Fabaceae (pea family)",
  origin: "West and Central African savanna and dry forest; native to Nigeria",
  added: '2026-10-28',
  kind: 'perennial',
  summary: "A spreading tree with bright green leaves of 7-17 pairs of leaflets and sprays of white flowers striped red or pink. Thick, woody black pods split to show shiny black seeds, each capped with a bright orange aril.",
  facts: ["TREE 6-30 M", "LEAVES PINNATE, BRIGHT GREEN", "FLOWERS WHITE, RED STRIPE", "POD THICK, WOODY, BLACK", "SEEDS BLACK, ORANGE CAP"],
  uses: [
    ["WOOD", "Decay- and termite-resistant timber (doussie); a traditional wood for djembe drums."],
    ["FODDER", "Leaves are cut for livestock in the dry season."],
    ["CAUTION", "The black seeds are poisonous."],
  ],
  history: "Apa is listed as Vulnerable because so many trees have been felled for timber and fodder.",
  leaf: { shape: 'oval', len: 1, wid: 0.55, compound: 'pinnate', leaflets: 10, note: 'PINNATE LEAF, OVAL LEAFLETS, BRIGHT GREEN' },
  form: { type: 'tree', height: 1.3, trunk: 0.45, branches: 10, nodes: 4, spread: 0.4, stemW: 0.08, leafSize: 1.8, arrange: 'alternate', flower: { type: 'cluster', size: 1.1, color: 3 }, fruit: { type: 'pod', size: 1.4, hang: true, color: 1 } },
  seasons: [
    { id: 'dormant', label: "LEAF FALL", from: 0, to: 60, g: [0.85, 0.8], desc: "Leaves drop in the harmattan." },
    { id: 'bloom', label: "IN BLOOM", from: 60, to: 120, g: [0.8, 1], desc: "White, red-striped flowers with the new leaves." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 120, to: 240, g: [1, 1], desc: "Full crown in the rains." },
    { id: 'fruiting', label: "PODS", from: 240, to: 360, g: [1, 0.9], desc: "Woody pods ripen black and split." },
  ],
  beds: [{ plantedDay: -9000 }],
});
