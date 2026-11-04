EA.addSpecies('miracle-berry', {
  name: "MIRACLE BERRY", short: "MIRACLE", latin: "Synsepalum dulcificum", family: "Sapotaceae (sapodilla family)",
  origin: "West Africa, including Nigeria, Benin, Ghana and Cameroon",
  local: "AGBAYUN (YORUBA)",
  added: '2026-11-04',
  kind: 'perennial',
  summary: "A slow-growing evergreen shrub up to about 5 m, with deep green, leathery leaves bunched at the branch tips. Small white flowers give bright red berries about 2 cm long, each with one hard, shiny seed.",
  facts: ["SHRUB UP TO 5 M", "LEAVES BUNCHED AT TIPS", "FLOWERS SMALL, WHITE", "BERRY RED, 2 CM", "MAKES SOUR TASTE SWEET"],
  uses: [
    ["FOOD", "After eating the berry, sour foods taste sweet for a while. It has been used to sweeten palm wine and bitter medicines."],
    ["CHEWING STICK", "Twigs are used as chewing sticks; the wood is burned as firewood."],
  ],
  history: "The effect comes from a protein called miraculin. In 1725 the French explorer des Marchais recorded West Africans chewing the berry before meals.",
  leaf: { shape: 'oval', len: 1, wid: 0.4, note: 'LEATHERY DARK LEAF, BUNCHED AT TIPS' },
  form: { type: 'shrub', height: 0.8, trunk: 0.15, branches: 8, nodes: 5, spread: 0.28, stemW: 0.035, leafSize: 1.7, arrange: 'alternate', flower: { type: 'cluster', size: 0.7, color: 3 }, fruit: { type: 'berry', size: 0.9, color: 1 } },
  seasons: [
    { id: 'bloom', label: "IN FLOWER", from: 0, to: 60, g: [1, 1], desc: "Flowers in flushes." },
    { id: 'fruiting', label: "RED BERRIES", from: 60, to: 150, g: [1, 1], desc: "A crop ripens after the rains." },
    { id: 'bloom', label: "IN FLOWER", from: 150, to: 240, g: [1, 1], desc: "Another flush of flowers." },
    { id: 'fruiting', label: "RED BERRIES", from: 240, to: 360, g: [1, 1], desc: "Second crop; a few fruits all year." },
  ],
  beds: [{ plantedDay: -2900 }],
});
