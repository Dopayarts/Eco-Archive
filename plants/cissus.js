EA.addSpecies('cissus', {
  name: "CISSUS", latin: "Cissus quadrangularis", family: "Vitaceae (grape family)",
  origin: "Africa and Asia; eaten as a vegetable in Nigeria and gathered at Nsukka",
  added: '2026-11-23',
  kind: 'perennial',
  summary: "A low, climbing plant with fleshy, four-sided stems, each section 8-10 cm long and winged on the corners. Small leaves and tendrils grow at the joints.",
  facts: ["CLIMBER", "FOUR-SIDED STEMS", "FLESHY JOINTS", "TENDRILS", "EDIBLE ROOT"],
  uses: [
    ["FOOD", "It is eaten as a vegetable in Nigeria; the root is rich in starch."],
    ["MEDICINE", "Root extracts are used for inflammation and pain; a Nsukka study supported this in mice."],
  ],
  history: "Its square, jointed stems look like a chain of green links.",
  leaf: { shape: 'heart', len: 1, wid: 0.8, note: 'SMALL LEAF AT JOINTS' },
  form: { type: 'vine', height: 0.8, branches: 3, nodes: 6, arrange: 'alternate', leafSize: 0.5, droop: 0.2, flower: { type: 'cluster', size: 0.3, color: 3 }, fruit: { type: 'berry', size: 0.3, color: 1 } },
  seasons: [
    { id: 'vegetative', label: "LEAFY GROWTH", from: 0, to: 180, g: [1, 1], desc: "Fleshy stems climb." },
    { id: 'bloom', label: "IN FLOWER", from: 180, to: 270, g: [1, 1], desc: "Small flowers." },
    { id: 'fruiting', label: "FRUITING", from: 270, to: 360, g: [1, 1], desc: "Small berries." },
  ],
  beds: [{ plantedDay: -500 }],
});
