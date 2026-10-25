EA.addSpecies('papyrus', {
  name: "PAPYRUS", latin: "Cyperus papyrus", family: "Cyperaceae (sedge family)",
  origin: "Tropical Africa; native to Nigeria's wetlands",
  added: '2026-10-25',
  kind: 'perennial',
  summary: "A giant sedge with tall, smooth, three-sided green stems and no real leaves. Each stem ends in a big, round mop of thin green rays that carry small brown flower spikes.",
  facts: ["SEDGE UP TO 5 M", "STEMS THREE-SIDED", "NO TRUE LEAVES", "HEAD A MOP OF THIN RAYS", "GROWS IN SWAMPS"],
  uses: [
    ["CRAFT", "Stems are made into mats, baskets and boats."],
    ["WETLAND", "Papyrus swamps filter water and shelter fish and birds."],
  ],
  history: "Ancient Egyptians cut papyrus stems into strips and pressed them into the first paper; the word paper comes from papyrus.",
  leaf: { shape: 'blade', len: 1, wid: 0.12, note: 'THIN GREEN RAYS IN A MOP ON TOP OF THE STEM' },
  form: { type: 'grass', height: 1.35, count: 28, droop: 0.15, stems: 2, flower: { type: 'umbel', size: 1.6, color: 2 } },
  seasons: [
    { id: 'vegetative', label: "DRY SEASON", from: 0, to: 90, g: [0.9, 0.9], desc: "Old stems brown at the edges of the swamp." },
    { id: 'regrowth', label: "NEW STEMS", from: 90, to: 180, g: [0.9, 1], desc: "New stems shoot up with the rains." },
    { id: 'bloom', label: "IN FLOWER", from: 180, to: 300, g: [1, 1], desc: "Brown flower spikes on the mop heads." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 300, to: 360, g: [1, 1], desc: "Tall green stands." },
  ],
  beds: [{ plantedDay: -1800 }],
});
