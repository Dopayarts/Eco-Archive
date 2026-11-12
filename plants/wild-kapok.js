EA.addSpecies('wild-kapok', {
  name: "WILD KAPOK", latin: "Bombax buonopozense", family: "Malvaceae (mallow family)",
  origin: "Rainforest from Sierra Leone and Guinea east to Uganda and south to Angola, including Nigeria",
  added: '2026-11-12',
  kind: 'perennial',
  summary: "A large forest tree up to 40 m with winged buttresses and conical spines on its young bark. Leaves are split into 5-9 leaflets like a hand. Big red flowers open while the tree is leafless, followed by dark capsules 8-20 cm long packed with silky white floss.",
  facts: ["TREE UP TO 40 M", "SPINY BARK", "LEAVES OF 5-9 LEAFLETS", "RED FLOWERS ON BARE TREE", "SILKY SEED FLOSS"],
  uses: [
    ["FOOD", "Flowers, young fruits and leaves are eaten; in northern Ghana dried calyces go into soup."],
    ["FIBRE", "The seed floss stuffs pillows and mattresses but cannot be spun."],
    ["MEDICINE", "In Nupeland, north-central Nigeria, the bark was used against sleeping sickness."],
  ],
  history: "It was named in 1816. Its cup-shaped flowers can fill with rainwater and become homes for tiny water animals.",
  leaf: { shape: 'oval', len: 1, wid: 0.4, compound: 'palmate', leaflets: 7, note: 'HAND-LIKE LEAF OF 5-9 LEAFLETS' },
  form: { type: 'tree', height: 1.4, trunk: 0.65, branches: 9, nodes: 5, spread: 0.32, stemW: 0.09, leafSize: 1.3, arrange: 'alternate', droop: 0.15, flower: { type: 'single', size: 1.3, color: 1 }, fruit: { type: 'pod', size: 1.2, hang: true, color: 1 } },
  seasons: [
    { id: 'dormant', label: "BARE, IN FLOWER", from: 0, to: 90, g: [0.6, 0.5], desc: "Red flowers on bare branches." },
    { id: 'fruiting', label: "FLOSS PODS", from: 90, to: 150, g: [0.6, 0.8], desc: "Capsules split, floss drifts." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 150, to: 330, g: [0.8, 1], desc: "Full leaf in the rains." },
    { id: 'regrowth', label: "LEAVES FALL", from: 330, to: 360, g: [1, 0.8], desc: "Leaves drop for the dry season." },
  ],
  beds: [{ plantedDay: -6000 }],
});
