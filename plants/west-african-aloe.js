EA.addSpecies('west-african-aloe', {
  name: 'W. AFRICAN ALOE', short: 'WILD ALOE', latin: 'Aloe schweinfurthii', family: 'Asphodelaceae (aloe family)',
  origin: 'Savanna of West and Central Africa, native to Nigeria',
  added: '2026-10-15',
  kind: 'perennial',
  summary: 'A native wild aloe: a stemless rosette of thick, sword-shaped, toothed leaves, often spotted pale and tinged red in the dry season. A branched stalk carries loose spikes of hanging, tubular, coral-red to orange flowers.',
  facts: ['ROSETTE 30-60 CM ACROSS', 'LEAVES FLESHY, TOOTHED EDGES', 'FLOWERS TUBULAR, CORAL-RED', 'GROWS ON ROCKY SAVANNA', 'FORMS CLUMPS OF ROSETTES'],
  uses: [
    ['TRADITIONAL', 'Leaf gel and sap are used on burns, wounds and skin complaints, like aloe vera.'],
    ['ORNAMENT', 'Planted in gardens and on graves.'],
  ],
  history: 'This is Nigeria\'s own aloe, growing wild on rocky outcrops and dry savanna, unlike the imported aloe vera of gardens. Older books call it Aloe barteri.',
  leaf: { shape: 'lance', len: 1, wid: 0.22, serr: 0.15, note: 'THICK SWORD-SHAPED FLESHY LEAF, TOOTHED EDGES, PALE SPOTS' },
  form: { type: 'rosette', height: 0.75, count: 14, leafSize: 2.0, flower: { type: 'spike', size: 1.1, color: 2 } },
  seasons: [
    { id: 'bloom', label: 'IN BLOOM', from: 0, to: 50, g: [0.9, 0.9], desc: 'Coral-red flower spikes rise in the dry season; sunbirds visit.' },
    { id: 'seeding', label: 'SETTING SEED', from: 50, to: 100, g: [0.9, 0.85], desc: 'Capsules dry and split; leaves are reddened by drought.' },
    { id: 'regrowth', label: 'FIRST RAINS', from: 100, to: 150, g: [0.85, 1], desc: 'Leaves swell green with water.' },
    { id: 'vegetative', label: 'LEAFY GROWTH', from: 150, to: 320, g: [1, 1], desc: 'New offsets form around the rosette.' },
    { id: 'bud', label: 'BUDDING', from: 320, to: 360, g: [1, 0.95], desc: 'Flower stalks begin to rise.' },
  ],
  beds: [{ plantedDay: -1080 }],
});
