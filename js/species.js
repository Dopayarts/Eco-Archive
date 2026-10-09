// Species records: botany, uses, history and life-cycle timings.
// Day counts are archive days. Perennial seasons use the archive calendar year
// (360 days, day 0 = 1 January) and follow Nigeria's rainy and dry seasons.
EA.species = {
  basil: {
    name: 'BASIL', latin: 'Ocimum basilicum', family: 'Lamiaceae (mint family)',
    origin: 'Tropical Asia, from India to Southeast Asia',
    kind: 'annual',
    summary: 'A tender, fast-growing herb with glossy, cupped leaves set in opposite pairs on a square stem. Every part is aromatic. Pinching the tips keeps it leafy; left alone it sends up white flower spikes and the leaves turn sharper.',
    facts: ['HEIGHT 30-60 CM', 'LEAVES OPPOSITE, OVAL, GLOSSY', 'FLOWERS WHITE TO PALE PINK, IN WHORLS', 'STEM SQUARE IN CROSS-SECTION', 'NEEDS WARMTH: DAMAGED BELOW ~10 C'],
    uses: [
      ['CULINARY', 'The base of Italian pesto, a partner for tomato, and (as Thai basil and holy basil relatives) central to many Southeast Asian dishes. Add at the end of cooking; heat dulls the aroma.'],
      ['TRADITIONAL', 'Leaf tea has long been taken for indigestion and gas. Its aroma comes from oils such as linalool and eugenol.'],
      ['GARDEN', 'Its flowers feed bees, and it is a classic companion plant beside tomatoes.'],
    ],
    history: 'The name comes from the Greek basilikon, "royal". Basil reached the Mediterranean along ancient trade routes from India. In Italy a pot of basil on the windowsill was once a sign of love; in parts of Greece it was linked with mourning. Its close cousin, holy basil or tulsi (Ocimum tenuiflorum), is sacred in Hindu households and is grown in a courtyard shrine.',
    leaf: { shape: 'oval', len: 0.9, wid: 0.52, serr: 0, note: 'SIMPLE OVAL LEAF, SMOOTH EDGE, CUPPED, PINNATE VEINS' },
    stages: [
      { id: 'seed', label: 'SEED', days: 7, g: [0, 0], desc: 'Seeds sit just under the soil. Basil seed swells a gel coat when wet and needs warm soil to wake.' },
      { id: 'sprout', label: 'SPROUT', days: 9, g: [0.04, 0.12], desc: 'Two round seed leaves (cotyledons) unfold. They feed the seedling until true leaves arrive.' },
      { id: 'seedling', label: 'SEEDLING', days: 18, g: [0.12, 0.35], desc: 'The first true leaves appear in opposite pairs, each pair turned 90 degrees from the last.' },
      { id: 'vegetative', label: 'LEAFY GROWTH', days: 30, g: [0.35, 0.9], desc: 'The best harvest window. The stem branches and leaves are at their sweetest before flowering.' },
      { id: 'bud', label: 'BUDDING', days: 8, g: [0.9, 0.95], desc: 'Tight green flower spikes form at the tips. Gardeners pinch these off to keep leaves coming.' },
      { id: 'bloom', label: 'IN BLOOM', days: 21, g: [0.95, 1], desc: 'Whorls of small white flowers open up the spike. Bees visit; leaf flavour turns stronger and more bitter.' },
      { id: 'seeding', label: 'SETTING SEED', days: 14, g: [1, 1], desc: 'Flowers fade to dry calyces, each holding up to four tiny black seeds.' },
      { id: 'senescence', label: 'DYING BACK', days: 8, g: [1, 0.7], desc: 'Its work done, the annual plant wilts and dies. Fallen seed starts the cycle again.' },
    ],
  },

  mint: {
    name: 'PEPPERMINT', latin: 'Mentha x piperita', family: 'Lamiaceae (mint family)',
    origin: 'A natural hybrid of water mint and spearmint, first recorded in Europe',
    kind: 'perennial',
    summary: 'A vigorous perennial that spreads by underground runners (rhizomes). Dark, toothed leaves on square purplish stems carry the cooling oil menthol. In Nigeria it grows best on cool highlands such as the Jos Plateau, surging with the rains and dying back in the harmattan.',
    facts: ['HEIGHT 30-90 CM', 'LEAVES OPPOSITE, TOOTHED, LANCE-SHAPED', 'FLOWERS LILAC, IN DENSE TERMINAL SPIKES', 'SPREADS BY RHIZOMES', 'USUALLY STERILE: GROWN FROM CUTTINGS'],
    uses: [
      ['CULINARY', 'Teas, sauces, desserts and drinks. Spearmint is the sweeter cousin used in mint sauce and mojitos.'],
      ['TRADITIONAL', 'Peppermint tea for indigestion and nausea; diluted oil rubbed on the temples for tension headaches. Enteric-coated peppermint oil is studied for irritable bowel symptoms.'],
      ['CAUTION', 'Undiluted oil can irritate skin, and it is not for use near the faces of infants. It may worsen reflux.'],
    ],
    history: 'Greek myth tells of the nymph Minthe, turned into a humble plant by Persephone; Hades gave it a sweet scent so she would never go unnoticed. Dried peppermint has been reported from Egyptian tombs. The English naturalist John Ray described peppermint as a distinct plant in 1696, and by the 1700s it was a fixture of European medicine chests.',
    leaf: { shape: 'lance', len: 0.9, wid: 0.45, serr: 0.28, note: 'SIMPLE LANCE LEAF, SERRATED EDGE, WRINKLED, PINNATE VEINS' },
    seasons: [
      { id: 'dormant', label: 'DRY-SEASON REST', from: 0, to: 90, g: [0.3, 0.3], desc: 'Harmattan winds and dry soil wither the tops. Only stubs show; the rhizomes wait underground for the rains.' },
      { id: 'regrowth', label: 'FIRST RAINS', from: 90, to: 135, g: [0.3, 0.75], desc: 'The first storms soak the soil and new shoots push up from the rhizomes.' },
      { id: 'vegetative', label: 'LEAFY GROWTH', from: 135, to: 210, g: [0.75, 1], desc: 'Fast, spreading growth through the wet months. Oil content peaks just before flowering, the classic harvest time.' },
      { id: 'bud', label: 'BUDDING', from: 210, to: 225, g: [1, 1], desc: 'Stem tips swell into conical flower heads.' },
      { id: 'bloom', label: 'IN BLOOM', from: 225, to: 270, g: [1, 1], desc: 'Lilac flower spikes, loved by bees and hoverflies.' },
      { id: 'seeding', label: 'SPENT FLOWERS', from: 270, to: 295, g: [1, 0.95], desc: 'Peppermint is a sterile hybrid, so flowers fade without viable seed. It spreads by runners instead.' },
      { id: 'dieback', label: 'DYING BACK', from: 295, to: 360, g: [0.95, 0.3], desc: 'The rains end. Leaves yellow and stems collapse as energy retreats to the roots.' },
    ],
  },

  lavender: {
    name: 'LAVENDER', latin: 'Lavandula angustifolia', family: 'Lamiaceae (mint family)',
    origin: 'Mountain slopes of the western Mediterranean',
    kind: 'perennial',
    summary: 'An evergreen, woody-based shrublet with narrow silver-grey leaves. In the sunny dry season it raises long bare stalks tipped with dense spikes of violet flowers. It wants sun, poor soil and sharp drainage, so in Nigeria it does best on the cooler, drier highlands.',
    facts: ['HEIGHT 30-60 CM', 'LEAVES NARROW, GREY-GREEN, IN TUFTS', 'FLOWERS VIOLET, IN WHORLED SPIKES', 'EVERGREEN, WOODY BASE', 'LIVES 10-15 YEARS WITH PRUNING'],
    uses: [
      ['AROMATIC', 'The oil scents soaps, perfumes and linen sachets. Dried flowers keep their smell for months.'],
      ['TRADITIONAL', 'Used to ease restlessness, anxiety and poor sleep, usually as an inhaled scent or tea. Some small clinical trials report modest calming effects.'],
      ['CULINARY', 'A little goes a long way: in shortbread, honey, and the herbes de Provence blend sold to visitors.'],
      ['CAUTION', 'The oil is not to be swallowed, and it can irritate sensitive skin.'],
    ],
    history: 'Romans scented baths and laundry with lavender, and the name is often linked to the Latin lavare, "to wash". Medieval monastery gardens grew it as a strewing herb. In 1910 the French chemist Rene-Maurice Gattefosse burned his hand, treated it with lavender oil, and went on to coin the word "aromatherapie".',
    leaf: { shape: 'lance', len: 0.95, wid: 0.13, serr: 0, note: 'LINEAR LEAF, ROLLED EDGES, DOWNY GREY SURFACE' },
    seasons: [
      { id: 'bloom', label: 'IN BLOOM', from: 0, to: 50, g: [1, 1], desc: 'Violet flowers open in whorls under the clear harmattan sky. Harvest when about half the flowers are open for the strongest scent.' },
      { id: 'seeding', label: 'SETTING SEED', from: 50, to: 80, g: [1, 1], desc: 'Spikes dry to grey-brown, holding small dark nutlets. Gardeners shear them off now.' },
      { id: 'rest', label: 'RAINY-SEASON REST', from: 80, to: 270, g: [1, 0.85], desc: 'A compact grey mound through the wet months. Lavender hates wet roots, so growth slows and the leaves just hold on.' },
      { id: 'foliage', label: 'NEW GROWTH', from: 270, to: 330, g: [0.85, 1], desc: 'As the rains ease, fresh silver shoots grow from the woody base.' },
      { id: 'bud', label: 'BUDDING', from: 330, to: 360, g: [1, 1], desc: 'Long bare stalks rise, each topped with a closed spike.' },
    ],
  },

  chamomile: {
    name: 'CHAMOMILE', latin: 'Matricaria chamomilla', family: 'Asteraceae (daisy family)',
    origin: 'Southern and Eastern Europe and Western Asia',
    kind: 'annual',
    summary: 'German chamomile is a fine, airy annual with feathery thread-like leaves and small daisy flowers. The yellow centre is hollow and cone-shaped, and the white petals fold back as the flower ages. The flowers smell of apple.',
    facts: ['HEIGHT 20-60 CM', 'LEAVES FINELY DIVIDED, FEATHERY', 'FLOWER HEADS 1-2.5 CM, WHITE RAYS, YELLOW DISC', 'DISC IS HOLLOW INSIDE', 'SELF-SOWS FREELY'],
    uses: [
      ['TRADITIONAL', 'One of the most widely drunk herbal teas, taken for sleep, calm and an upset stomach. The flavonoid apigenin is one of the compounds studied for its mild calming effect.'],
      ['TOPICAL', 'Used in creams, rinses and compresses for irritated skin.'],
      ['CAUTION', 'People allergic to ragweed, daisies or marigolds can react to it. It may interact with blood thinners.'],
    ],
    history: 'The name comes from the Greek chamaimelon, "earth apple", for its scent. Ancient Egyptians dedicated it to the sun god Ra. Anglo-Saxons counted it among their Nine Sacred Herbs. Beatrix Potter has Mrs Rabbit dose Peter with chamomile tea after his escape from Mr McGregor\'s garden.',
    leaf: { shape: 'feather', len: 0.95, wid: 0.4, serr: 0, note: 'BIPINNATE LEAF, CUT INTO THREAD-LIKE SEGMENTS' },
    stages: [
      { id: 'seed', label: 'SEED', days: 10, g: [0, 0], desc: 'Tiny seeds rest on the surface. They need light to germinate, so they are never buried.' },
      { id: 'sprout', label: 'SPROUT', days: 10, g: [0.04, 0.12], desc: 'A haze of tiny seedlings, each with two small seed leaves.' },
      { id: 'seedling', label: 'SEEDLING', days: 14, g: [0.12, 0.35], desc: 'Feathery true leaves form a low rosette.' },
      { id: 'vegetative', label: 'BRANCHING', days: 20, g: [0.35, 0.9], desc: 'Stems shoot up and branch repeatedly, each branch ending in a future flower.' },
      { id: 'bud', label: 'BUDDING', days: 7, g: [0.9, 0.95], desc: 'Round green buttons appear at the branch tips.' },
      { id: 'bloom', label: 'IN BLOOM', days: 35, g: [0.95, 1], desc: 'Waves of apple-scented daisies. Pick them on a dry morning when fully open.' },
      { id: 'seeding', label: 'SETTING SEED', days: 14, g: [1, 1], desc: 'Petals drop or fold down; the yellow cones swell and turn brown with seed.' },
      { id: 'senescence', label: 'DYING BACK', days: 7, g: [1, 0.6], desc: 'The plant browns and dies, leaving seed to sprout again.' },
    ],
  },

  aloe: {
    name: 'ALOE VERA', latin: 'Aloe vera', family: 'Asphodelaceae',
    origin: 'The Arabian Peninsula; now grown in warm dry regions worldwide',
    kind: 'perennial',
    summary: 'A stemless succulent that stores water in thick, fleshy leaves arranged in a rosette. Leaf edges carry small soft teeth. Mature plants send up a tall stalk of tubular yellow flowers, usually in the dry season.',
    facts: ['HEIGHT 60-100 CM', 'LEAVES THICK, TAPERING, TOOTHED EDGES', 'FLOWERS YELLOW TUBES ON A TALL SPIKE', 'STORES WATER IN LEAF GEL', 'SPREADS BY OFFSETS (PUPS)'],
    uses: [
      ['TOPICAL', 'The clear inner gel is a household remedy for minor burns, sunburn and dry skin, and is widely used in cosmetics.'],
      ['TRADITIONAL', 'The yellow latex just under the skin is a strong laxative. The US FDA removed aloe from over-the-counter laxatives in 2002 for lack of safety data.'],
      ['CAUTION', 'Swallowing the latex can cause cramps and other harm. Keep gel use external unless a product says otherwise.'],
    ],
    history: 'Aloe appears in the Egyptian Ebers Papyrus (around 1550 BCE). The Greek physician Dioscorides described its use on wounds in the 1st century CE. Folklore says Alexander the Great sought Socotra island for its aloe to treat his soldiers. Spanish missionaries carried it to the Americas.',
    leaf: { shape: 'tri', len: 0.95, wid: 0.3, serr: 0.35, note: 'THICK SUCCULENT LEAF, TAPERING, SOFT TEETH ALONG THE EDGE' },
    seasons: [
      { id: 'bloom', label: 'IN BLOOM', from: 0, to: 45, g: [1, 1], desc: 'Drooping yellow tubular flowers open from the bottom up in the dry season. Sunbirds and bees feed on the nectar.' },
      { id: 'seeding', label: 'SETTING SEED', from: 45, to: 70, g: [1, 1], desc: 'Spent flowers dry. Cultivated aloe vera rarely sets good seed; it multiplies by pups instead.' },
      { id: 'rosette', label: 'ROSETTE GROWTH', from: 70, to: 320, g: [0.9, 1], desc: 'Steady growth, fastest in the rains. New leaves emerge from the centre of the rosette and fill with gel.' },
      { id: 'bud', label: 'BUDDING', from: 320, to: 360, g: [1, 1], desc: 'As the dry season sets in, a flower stalk rises from among the leaves, its tip packed with buds.' },
    ],
  },
};

// The beds. Perennials were established before Eco-Archive opened.
EA.specimens = [
  { species: 'basil', row: 0, col: 0, sowDay: 0, seed: 11 },
  { species: 'mint', row: 0, col: 1, plantedDay: -720, seed: 23 },
  { species: 'lavender', row: 0, col: 2, plantedDay: -1080, seed: 37 },
  { species: 'chamomile', row: 0, col: 3, sowDay: 0, seed: 41 },
  { species: 'aloe', row: 0, col: 4, plantedDay: -1440, seed: 53 },
  { species: 'chamomile', row: 1, col: 0, sowDay: 21, seed: 67 },
  { species: 'lavender', row: 1, col: 1, plantedDay: -360, seed: 71, vigor: 0.75 },
  { species: 'aloe', row: 1, col: 2, plantedDay: -360, seed: 83, vigor: 0.7, juvenile: true },
  { species: 'mint', row: 1, col: 3, plantedDay: -360, seed: 97, vigor: 0.85 },
  { species: 'basil', row: 1, col: 4, sowDay: 14, seed: 101 },
];
EA.specimens.forEach((s, i) => { s.n = i + 1; s.bed = 'AB'[s.row] + (s.col + 1); });
