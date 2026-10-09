EA.addSpecies('cocoyam', {
  name: 'COCOYAM', latin: 'Colocasia esculenta', family: 'Araceae (arum family)',
  origin: 'Southeast Asia; grown in Nigeria for centuries, especially in the south-east',
  local: 'EDE (IGBO), KOKO (YORUBA), GWAZA (HAUSA); TARO',
  added: '2026-10-09',
  kind: 'perennial',
  summary: 'Huge heart-shaped leaves held up on long, juicy stalks rise straight from an underground corm. Rain beads and rolls off the waxy leaves. The starchy corms are the crop.',
  facts: ['HEIGHT 0.5-1.5 M', 'LEAVES LARGE, HEART-SHAPED, PELTATE', 'GROWS FROM AN UNDERGROUND CORM', 'LOVES WET SOIL', 'NIGERIA IS THE WORLD\'S LARGEST GROWER'],
  uses: [
    ['CULINARY', 'Corms are boiled, pounded or used to thicken ofe onugbu and oha soup. Young leaves are cooked in some dishes.'],
    ['CAUTION', 'All raw parts contain needle-like calcium oxalate crystals that sting the mouth. Always cook thoroughly.'],
  ],
  history: 'Taro is one of the world\'s oldest crops, first farmed in Southeast Asia and carried westward. It reached West Africa long ago and became a staple of the Igbo heartland. Nigeria now grows more cocoyam than any other country.',
  leaf: { shape: 'heart', len: 1, wid: 0.85, note: 'LARGE PELTATE HEART-SHAPED LEAF, WAXY, PROMINENT VEINS' },
  form: { type: 'broadleaf', height: 1.0, count: 6, leafSize: 1.3, leafPitch: -0.45, droop: 0.1 },
  seasons: [
    { id: 'dormant', label: 'CORMS RESTING', from: 0, to: 75, g: [0.3, 0.3], desc: 'Leaves have died back; the corms wait in the dry soil.' },
    { id: 'regrowth', label: 'FIRST RAINS', from: 75, to: 130, g: [0.3, 0.75], desc: 'Rolled new leaves push up and unfurl after the first storms.' },
    { id: 'vegetative', label: 'LEAFY GROWTH', from: 130, to: 270, g: [0.75, 1], desc: 'Big leaves reach full size; the corms swell underground.' },
    { id: 'maturing', label: 'CORMS MATURE', from: 270, to: 320, g: [1, 0.8], desc: 'Harvest time: the corms are full and the leaves start to tire.' },
    { id: 'dieback', label: 'DYING BACK', from: 320, to: 360, g: [0.8, 0.3], desc: 'Leaves yellow and collapse as the dry season starts.' },
  ],
  beds: [{ plantedDay: -360 }],
});
