EA.addSpecies('tannia', {
  name: "TANNIA", latin: "Xanthosoma sagittifolium", family: "Araceae (arum family)",
  origin: "Tropical America; grown alongside taro as cocoyam in southern Nigeria",
  added: '2026-10-19',
  kind: 'perennial',
  summary: "A large, stemless plant with huge arrow-shaped leaves on long stalks, rising from a thick underground corm. Unlike taro, the leaf stalk joins at the notch of the leaf, not in the middle. Small potato-sized cormels grow around the main corm.",
  facts: ["PLANT 1-2 M", "LEAVES HUGE, ARROW-SHAPED", "STALK JOINS AT THE LEAF NOTCH", "CORM WITH CORMELS AROUND IT", "ALSO CALLED NEW COCOYAM"],
  uses: [
    ["FOOD", "Cormels are boiled, pounded, or used to thicken soups like ofe onugbu."],
    ["FOOD", "Young leaves are cooked as a vegetable."],
  ],
  history: "Tannia came to West Africa from the Americas, which is why it is called the new cocoyam; the older cocoyam is taro. Nigerian researchers often study the two side by side.",
  leaf: { shape: 'heart', len: 1, wid: 0.75, note: 'HUGE ARROW-SHAPED LEAF, STALK AT THE NOTCH, PALE VEINS' },
  form: { type: 'broadleaf', height: 1.15, count: 6, leafSize: 1.45, leafPitch: -0.3, droop: 0.15 },
  seasons: [
    { id: 'dormant', label: "DRY REST", from: 0, to: 60, g: [0.4, 0.4], desc: "Leaves die back in the dry season; corms rest underground." },
    { id: 'regrowth', label: "NEW LEAVES", from: 60, to: 150, g: [0.4, 1], desc: "New arrow leaves unroll with the rains." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 150, to: 300, g: [1, 1], desc: "Huge leaves; cormels swell underground." },
    { id: 'senescence', label: "HARVEST", from: 300, to: 360, g: [1, 0.4], desc: "Leaves yellow and the cormels are dug up." },
  ],
  beds: [{ plantedDay: -360 }],
});
