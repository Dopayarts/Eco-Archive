EA.addSpecies('true-indigo', {
  name: "TRUE INDIGO", short: "INDIGO", latin: "Indigofera tinctoria", family: "Fabaceae (pea family)",
  origin: "Tropical Asia and Africa; native in Nigeria, where the Yoruba are famed for indigo dyeing",
  added: '2026-11-22',
  kind: 'perennial',
  summary: "A leguminous shrub 1-2 m tall with erect, woody stems that turn brown with age. Pinnate leaves carry 5-15 pairs of smooth oval leaflets. Small pea-like flowers in pink, violet or purple grow in short sprays, followed by slender pods 2-3 cm long.",
  facts: ["SHRUB 1-2 M", "PINNATE LEAVES", "PINK-PURPLE FLOWERS", "THIN PODS 2-3 CM", "BLUE DYE PLANT"],
  uses: [
    ["DYE", "Its leaves give indigo, the blue dye used for resist-dyed cloth; a University of Ilorin study dyed local fabric with it."],
    ["SOIL", "It fixes nitrogen and enriches the soil."],
    ["MEDICINE", "Traditionally used for bronchitis, ulcers and skin disorders."],
  ],
  history: "The Yoruba of Nigeria are known for their skill with indigo. Also called Indian indigo.",
  leaf: { shape: 'oval', len: 1, wid: 0.55, compound: 'pinnate', note: 'PINNATE, 5-15 PAIRS' },
  form: { type: 'shrub', height: 0.8, branches: 6, nodes: 6, arrange: 'alternate', leafSize: 0.6, droop: 0.1, flower: { type: 'spike', size: 0.5, color: 2 }, fruit: { type: 'pod', size: 0.5, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 150, g: [1, 1], desc: "Leafy stems." },
    { id: 'bloom', label: "IN FLOWER", from: 150, to: 240, g: [1, 1], desc: "Small pea flowers." },
    { id: 'fruiting', label: "PODDING", from: 240, to: 330, g: [1, 1], desc: "Slender pods." },
    { id: 'rest', label: "RESTING", from: 330, to: 360, g: [1, 1], desc: "Growth slows." },
  ],
  beds: [{ plantedDay: -300 }],
});
