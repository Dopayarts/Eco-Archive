// Archive: species added from 3D model files (.glb), drawn in the same
// Game Boy style as the built-in plants.
//
// Each archived species lives in specimens/<id>/ with two files written by
// tools/add_species.py:
//   species.js  EA.addSpecies('<id>', { ...record... })   (edit this by hand)
//   models.js   EA.addModels('<id>', { plant: 'data:...', leaf: ..., bloom: ... })
// specimens/index.js lists the ids so they load with the page.
EA.archive = (function () {
  const sources = {};   // id -> { slot: dataURL }
  const scenes = {};    // id -> { slot: THREE.Object3D } once parsed
  let renderer = null, glCanvas = null;

  function loadAll(ids) { // called from specimens/index.js while the page is still loading
    for (const id of ids) {
      document.write(`<script src="specimens/${id}/species.js"><\/script>`);
      document.write(`<script src="specimens/${id}/models.js"><\/script>`);
    }
  }

  // Plants described by a `form` record, from plants/<id>.js, plus photo data
  // (plants/<id>.photos.js, made by tools/from_photos.py) for the ids in o.photos.
  function loadPlants(ids, o = {}) {
    for (const id of ids) {
      document.write(`<script src="plants/${id}.js"><\/script>`);
      if ((o.photos || []).includes(id)) document.write(`<script src="plants/${id}.photos.js"><\/script>`);
    }
  }
  function addPhotos(id, d) {
    const sp = EA.species[id];
    if (!sp) return;
    if (d.leaf) sp.leaf = Object.assign({}, sp.leaf, d.leaf);
    sp.photos = { plant: d.plant, flower: d.flower, leaf: d.leaf && d.leaf.image };
  }

  function addSpecies(id, rec) {
    EA.species[id] = rec;
    const beds = rec.beds && rec.beds.length ? rec.beds : [{}];
    for (const b of beds) {
      const n = EA.specimens.length;
      const spec = Object.assign({ species: id, seed: 1000 + n * 13 }, b);
      if (rec.kind === 'annual' && spec.sowDay == null) spec.sowDay = 0;
      if (rec.kind !== 'annual' && spec.plantedDay == null) spec.plantedDay = -360;
      spec.row = Math.floor(n / 5); spec.col = n % 5;
      spec.n = n + 1; spec.bed = EA.bedName ? EA.bedName(spec.row, spec.col) : 'AB'[spec.row % 2] + (spec.col + 1);
      EA.specimens.push(spec);
    }
  }

  function addModels(id, slots) { sources[id] = slots; }

  // Parse every model once the loader is available.
  function parseAll() {
    if (!window.THREE || !THREE.GLTFLoader) return;
    for (const id in sources) parse(id, sources[id]);
  }
  function parse(id, slots, done) {
    const loader = new THREE.GLTFLoader();
    scenes[id] = scenes[id] || {};
    for (const slot in slots) {
      loader.load(slots[slot], gltf => { scenes[id][slot] = normalise(gltf.scene, slot === 'leaf'); if (done) done(); },
        undefined, err => console.warn('Could not read model', id, slot, err));
    }
  }
  // Centre the model on its base and scale it to 1 unit tall.
  function normalise(obj, isLeaf) {
    const box = new THREE.Box3().setFromObject(obj);
    const size = box.getSize(new THREE.Vector3()), c = box.getCenter(new THREE.Vector3());
    const h = Math.max(size.y, isLeaf ? Math.max(size.x, size.z) : 0.0001);
    obj.position.set(-c.x, isLeaf ? -c.y : -box.min.y, -c.z);
    const g = new THREE.Group(); g.add(obj); g.scale.setScalar(1 / h);
    const outer = new THREE.Group(); outer.add(g);
    return outer;
  }

  function has(id) { return !!sources[id]; }
  function ready(id) { return !!(scenes[id] && scenes[id].plant); }

  // Pick the model for a stage: a stage-specific file if one was given, else the main one.
  function modelFor(id, stage) {
    const s = scenes[id] || {};
    return s[stage] || (stage === 'seeding' && s.bloom) || s.plant;
  }

  function getRenderer(w, h) {
    if (!renderer) {
      glCanvas = document.createElement('canvas');
      renderer = new THREE.WebGLRenderer({ canvas: glCanvas, alpha: true, antialias: false, preserveDrawingBuffer: true });
      renderer.setPixelRatio(1);
    }
    if (glCanvas.width !== w || glCanvas.height !== h) renderer.setSize(w, h, false);
    return renderer;
  }

  // Draw a model into a 2D canvas, then snap it to the palette by brightness.
  // o: { theta, tilt, scale (px per unit), cx, cy, g (growth 0-1), levels: [palette idx dark->light], outline }
  function draw(ctx, w, h, obj, o) {
    const r = getRenderer(w, h);
    const scene = new THREE.Scene();
    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
    const sun = new THREE.DirectionalLight(0xffffff, 0.9); sun.position.set(-1, 2, 1.5); scene.add(sun);
    obj.rotation.y = o.theta; obj.scale.setScalar(o.g ?? 1);
    scene.add(obj);
    const cam = new THREE.OrthographicCamera(-o.cx / o.scale, (w - o.cx) / o.scale, o.cy / o.scale, -(h - o.cy) / o.scale, -10, 10);
    const tilt = o.tilt ?? 0.35;
    cam.position.set(0, Math.sin(tilt) * 5, Math.cos(tilt) * 5);
    cam.up.set(0, 1, 0); cam.lookAt(0, 0, 0);
    r.setClearColor(0x000000, 0); r.clear();
    r.render(scene, cam);
    scene.remove(obj);
    const tmp = document.createElement('canvas'); tmp.width = w; tmp.height = h;
    const t = tmp.getContext('2d', { willReadFrequently: true });
    t.drawImage(glCanvas, 0, 0);
    toPalette(t, w, h, o.levels || [0, 1, 2, 3], o.outline);
    ctx.drawImage(tmp, 0, 0);
  }
  function toPalette(ctx, w, h, levels, outline) {
    const PAL = EA.config.PAL, img = ctx.getImageData(0, 0, w, h), d = img.data;
    for (let i = 0; i < d.length; i += 4) {
      if (d[i + 3] < 110) { d[i + 3] = 0; continue; }
      let lum = (0.3 * d[i] + 0.59 * d[i + 1] + 0.11 * d[i + 2]) / 255;
      // Non-green colours (petals, berries) are lifted so flowers stand out from foliage.
      if (Math.max(d[i], d[i + 2]) > d[i + 1] + 40) lum = Math.min(1, lum + 0.45);
      // 4x4 ordered dither between bands, the classic handheld look
      const px = (i / 4) % w, py = Math.floor(i / 4 / w);
      const bayer = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5][(py % 4) * 4 + (px % 4)] / 16 - 0.5;
      const k = Math.max(0, Math.min(levels.length - 1, Math.floor(lum * levels.length + bayer * 0.6)));
      const c = PAL[levels[k]];
      d[i] = c[0]; d[i + 1] = c[1]; d[i + 2] = c[2]; d[i + 3] = 255;
    }
    ctx.putImageData(img, 0, 0);
    if (outline != null) EA.r3d.quantize(ctx, w, h, outline);
  }

  // Drag a .glb onto the window to preview it on the turntable (nothing is saved).
  function enableDropPreview() {
    addEventListener('dragover', e => e.preventDefault());
    addEventListener('drop', e => {
      e.preventDefault();
      const f = [...e.dataTransfer.files].find(x => /\.glb$/i.test(x.name));
      if (!f) return EA.panel.say('ONLY .GLB FILES CAN BE PREVIEWED.');
      const rd = new FileReader();
      rd.onload = () => {
        const id = '__preview';
        EA.species[id] = {
          name: f.name.replace(/\.glb$/i, '').toUpperCase().slice(0, 14), latin: 'Preview', family: '-', origin: '-',
          kind: 'perennial', summary: 'An unsaved preview of a dropped model. Run tools/add_species.py to archive it.',
          facts: [], uses: [], history: '-', leaf: { shape: 'oval', len: 0.9, wid: 0.5, serr: 0, note: '-' },
          seasons: [{ id: 'bloom', label: 'PREVIEW', from: 0, to: 360, g: [1, 1], desc: 'Preview only.' }],
        };
        sources[id] = { plant: rd.result };
        scenes[id] = {};
        parse(id, sources[id], () => EA.panel.select({ spec: { species: id, n: 0, bed: '--', seed: 1, plantedDay: 0 } }));
      };
      rd.readAsDataURL(f);
    });
  }

  return { loadAll, loadPlants, addPhotos, addSpecies, addModels, parseAll, has, ready, modelFor, draw, enableDropPreview, scenes };
})();
EA.addSpecies = EA.archive.addSpecies;
EA.addModels = EA.archive.addModels;
EA.loadPlants = EA.archive.loadPlants;
EA.addPhotos = EA.archive.addPhotos;
