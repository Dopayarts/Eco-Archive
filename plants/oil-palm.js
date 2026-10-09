EA.addSpecies('oil-palm', {
  name: 'OIL PALM', latin: 'Elaeis guineensis', family: 'Arecaceae (palm family)',
  origin: 'West and Central Africa, including the forests of southern Nigeria',
  local: 'NKWU (IGBO), OPE (YORUBA), KWAKWA (HAUSA)',
  added: '2026-10-09',
  kind: 'perennial',
  summary: 'A tall palm crowned with long, feathery fronds. Dense bunches of red-orange fruit sit between the frond bases. Every part is used, from the oil and kernels to the sap for palm wine.',
  facts: ['HEIGHT TO 20 M', 'FRONDS PINNATE, 3-5 M LONG', 'FRUIT BUNCHES OF 1000+ FRUITS', 'FRUIT PULP GIVES RED PALM OIL', 'KERNELS GIVE PALM KERNEL OIL'],
  uses: [
    ['CULINARY', 'Red palm oil is the base of countless Nigerian soups and stews, from banga to egusi.'],
    ['DRINK', 'Sap tapped from the palm ferments into palm wine (emu, mmanya nkwu).'],
    ['CRAFT', 'Fronds give brooms, roofing and baskets; the trunk and leaf fibres are used in building.'],
  ],
  history: 'The oil palm is native to West Africa and has fed the region for thousands of years. In the 1800s palm oil became Nigeria\'s main export, and the Niger Delta was once called the Oil Rivers after it.',
  leaf: { shape: 'lance', len: 1, wid: 0.25, compound: 'pinnate', leaflets: 12, note: 'PINNATE FROND, MANY NARROW LEAFLETS, SPINY BASE' },
  form: { type: 'palm', height: 1.5, trunk: 0.5, count: 11, leafSize: 2.1, droop: 0.55, stemW: 0.09, flower: { type: 'cluster', size: 1.2, color: 2 }, fruit: { type: 'big', size: 1.1, color: 1 } },
  seasons: [
    { id: 'bloom', label: 'IN FLOWER', from: 0, to: 60, g: [1, 1], desc: 'Male and female flower clusters form between the fronds.' },
    { id: 'fruiting', label: 'PEAK HARVEST', from: 60, to: 150, g: [1, 1], desc: 'Ripe red bunches are cut; harvest peaks in the late dry season.' },
    { id: 'vegetative', label: 'FROND GROWTH', from: 150, to: 300, g: [1, 1], desc: 'New fronds open from the centre through the rains.' },
    { id: 'bud', label: 'BUDDING', from: 300, to: 360, g: [1, 1], desc: 'Young flower clusters develop in the frond bases.' },
  ],
  beds: [{ plantedDay: -1440 }],
});
