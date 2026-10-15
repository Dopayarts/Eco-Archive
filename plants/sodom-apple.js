EA.addSpecies('sodom-apple', {
  name: 'SODOM APPLE', short: 'BOMUBOMU', latin: 'Calotropis procera', family: 'Apocynaceae (dogbane family)',
  origin: 'Dry tropical Africa and Asia; common in northern Nigeria on sandy, disturbed ground',
  local: 'BOMUBOMU (YORUBA), TUMFAFIYA (HAUSA)',
  added: '2026-10-15',
  kind: 'perennial',
  summary: 'A soft-wooded, grey-green shrub with large, thick, waxy oval leaves in pairs, full of white milky latex. Star-shaped flowers are white with purple tips. Big, puffy, green fruits split to release seeds on silky white parachutes.',
  facts: ['SHRUB 2-5 M', 'LEAVES LARGE, THICK, WAXY, GREY-GREEN', 'LATEX WHITE, ABUNDANT', 'FLOWERS WHITE AND PURPLE STARS', 'FRUITS INFLATED, FULL OF SILKY SEEDS'],
  uses: [
    ['FOOD', 'Fulani women use leaf and stem extract to curdle milk into wara (soft cheese); cooking makes it safe.'],
    ['CRAFT', 'The silky seed floss stuffs pillows; stem fibre makes string.'],
    ['CAUTION', 'The latex is poisonous and burns the eyes; it contains heart-active compounds.'],
  ],
  history: 'Sodom apple grows from the Sahara\'s edge to India. In Nigeria it is closely linked with wara, the fresh cheese sold by Fulani women.',
  leaf: { shape: 'oval', len: 1, wid: 0.65, note: 'LARGE THICK OVAL LEAF, WAXY, GREY-GREEN, STALKLESS' },
  form: { type: 'shrub', height: 1.1, branches: 4, nodes: 4, trunk: 0.3, spread: 0.26, arrange: 'opposite', leafSize: 1.35, flower: { type: 'cluster', size: 1, color: 3 }, fruit: { type: 'big', size: 1.1, color: 2 } },
  seasons: [
    { id: 'bloom', label: 'IN BLOOM', from: 0, to: 90, g: [1, 1], desc: 'Flowers through the dry season when little else does.' },
    { id: 'fruiting', label: 'FRUITING', from: 90, to: 160, g: [1, 1], desc: 'Puffy fruits split; silky seeds float away.' },
    { id: 'vegetative', label: 'LEAFY GROWTH', from: 160, to: 300, g: [1, 1], desc: 'Grows on through the rains.' },
    { id: 'bloom', label: 'IN BLOOM', from: 300, to: 360, g: [1, 1], desc: 'Flowering picks up again as the land dries.' },
  ],
  beds: [{ plantedDay: -720 }],
});
