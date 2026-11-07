EA.addSpecies('strophanthus', {
  name: "STROPHANTHUS", short: "STROPHANTH", latin: "Strophanthus hispidus", family: "Apocynaceae (dogbane family)",
  origin: "From Senegal to Uganda, Tanzania and Angola, including Nigeria",
  added: '2026-11-07',
  kind: 'perennial',
  summary: "A hairy shrub up to 5 m or a long liana. Its flowers are white to yellow with red-spotted centres, and their petals end in long, dangling tails. Paired long pods hold seeds topped with a feathery plume.",
  facts: ["SHRUB OR LIANA", "PETALS END IN LONG TAILS", "FLOWERS WHITE TO YELLOW", "PODS LONG, PAIRED", "SEEDS DEADLY"],
  uses: [
    ["ARROW POISON", "In the West African savanna the seeds and latex were the main arrow poison, and it was grown for that."],
    ["MEDICINE", "In Nigeria leaf and stem brews are used for fever, as a laxative and on sores; root brews for rheumatism."],
    ["CAUTION", "The seeds hold strophanthin, a heart poison absorbed through wounds; they can kill."],
  ],
  history: "The explorer Baikie recorded its use by the Nupe of Nigeria in the 19th century. Its strophanthin was later used as a heart drug.",
  leaf: { shape: 'oval', len: 1, wid: 0.5, note: 'HAIRY OVAL LEAF IN PAIRS' },
  form: { type: 'vine', height: 1.1, nodes: 12, leafSize: 1.5, droop: 0.3, flower: { type: 'single', size: 1.2, color: 3 }, fruit: { type: 'pod', size: 1.1, color: 2 } },
  seasons: [
    { id: 'dormant', label: "DRY SEASON", from: 0, to: 90, g: [0.6, 0.6], desc: "Deciduous; fewer leaves." },
    { id: 'bloom', label: "IN FLOWER", from: 90, to: 150, g: [0.6, 0.8], desc: "Tailed flowers." },
    { id: 'vegetative', label: "LEAFY GROWTH", from: 150, to: 300, g: [0.8, 1], desc: "Hairy leaves." },
    { id: 'fruiting', label: "LONG PODS", from: 300, to: 360, g: [1, 0.6], desc: "Paired pods split." },
  ],
  beds: [{ plantedDay: -2880 }],
});
