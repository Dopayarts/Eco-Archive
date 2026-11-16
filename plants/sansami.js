EA.addSpecies('sansami', {
  name: "SANSAMI", latin: "Stereospermum kunthianum", family: "Bignoniaceae (trumpet vine family)",
  origin: "Savanna across Africa from Senegal to Sudan, Ethiopia and the Red Sea, south to Zimbabwe; found in Ogun State, Nigeria",
  local: "SANSAMI (HAUSA), UMANA (TIV), AYADA (YORUBA), ALAKIRITI (IGBO)",
  added: '2026-11-16',
  kind: 'perennial',
  summary: "A deciduous shrub or tree usually 3-15 m with thin grey-black bark that flakes in patches. Leaves are pinnate, about 25 cm long. Fragrant pink to purple flowers about 5 cm long open on bare branches in the dry season. Slender paired pods up to 60 cm split to free winged seeds.",
  facts: ["TREE 3-15 M", "FLAKING BARK", "PINK FLOWERS ON BARE TREE", "PODS UP TO 60 CM", "WINGED SEEDS"],
  uses: [
    ["MEDICINE", "Pods are chewed with salt for coughs; the bark is boiled for bronchitis, pneumonia and dysentery."],
    ["TEETH", "Twigs are chewed for toothache and to clean teeth; chewed bark stains lips red-brown as a cosmetic."],
    ["WOOD", "The white wood makes mortars, tool handles and furniture."],
  ],
  history: "The dry pods stay on the tree for months after the seeds have gone.",
  leaf: { shape: 'oval', len: 1, wid: 0.45, compound: 'pinnate', leaflets: 7, note: 'PINNATE LEAF, ABOUT 25 CM' },
  form: { type: 'tree', height: 0.95, trunk: 0.4, branches: 8, nodes: 5, spread: 0.33, stemW: 0.07, leafSize: 1.0, arrange: 'alternate', droop: 0.15, flower: { type: 'cluster', size: 1.0, color: 1 }, fruit: { type: 'pod', size: 1.3, hang: true, color: 1 } },
  seasons: [
    { id: 'dormant', label: "BARE, IN FLOWER", from: 0, to: 100, g: [0.6, 0.5], desc: "Pink flowers on bare branches." },
    { id: 'fruiting', label: "LONG PODS", from: 100, to: 180, g: [0.6, 0.8], desc: "Pods split, winged seeds." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 180, to: 330, g: [0.8, 1], desc: "Full leaf in the rains." },
    { id: 'regrowth', label: "LEAVES FALL", from: 330, to: 360, g: [1, 0.8], desc: "Leaves drop." },
  ],
  beds: [{ plantedDay: -2500 }],
});
