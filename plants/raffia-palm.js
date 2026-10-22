EA.addSpecies('raffia-palm', {
  name: "RAFFIA PALM", short: "RAFFIA", latin: "Raphia hookeri", family: "Arecaceae (palm family)",
  origin: "West and Central Africa; swamps and stream banks of southern Nigeria",
  local: "NGWO (IGBO)",
  added: '2026-10-22',
  kind: 'perennial',
  summary: "A palm of swampy ground with a short trunk and some of the longest leaves of any plant, up to 12 m. Long hanging flower spikes come at the end of its life, followed by egg-shaped fruits covered in shiny overlapping scales.",
  facts: ["PALM, TRUNK UP TO 10 M", "LEAVES PINNATE, UP TO 12 M", "FRUIT SCALY, EGG-SHAPED", "TAPPED FOR PALM WINE", "PIASSAVA FIBRE FROM LEAF STALKS"],
  uses: [
    ["DRINK", "Tapped for milky palm wine, called ngwo in Igbo; the tapper is onye ngwo."],
    ["CRAFT", "Leaf-stalk fibre (piassava) makes brooms, brushes and rope; leaves make mats and roofing."],
    ["FARMING", "The stiff midribs are used as yam stakes."],
  ],
  history: "Calabar piassava from Nigeria was a big export in the 1950s and 1960s, until plastic brooms took over.",
  leaf: { shape: 'lance', len: 1, wid: 0.15, compound: 'pinnate', leaflets: 16, note: 'VERY LONG PINNATE FROND, NARROW LEAFLETS' },
  form: { type: 'palm', height: 1.5, trunk: 0.35, count: 12, leafSize: 2.4, droop: 0.4, stemW: 0.1, flower: { type: 'spike', size: 1.3, color: 2 }, fruit: { type: 'big', size: 1.2, hang: true, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 120, g: [1, 1], desc: "Huge fronds arch out from the crown." },
    { id: 'bloom', label: "IN FLOWER", from: 120, to: 180, g: [1, 1], desc: "Long flower spikes hang from the crown." },
    { id: 'fruiting', label: "FRUITING", from: 180, to: 330, g: [1, 1], desc: "Scaly fruits swell in heavy bunches." },
    { id: 'vegetative', label: "TAPPING", from: 330, to: 360, g: [1, 1], desc: "Tappers cut into the crown for wine." },
  ],
  beds: [{ plantedDay: -3600 }],
});
