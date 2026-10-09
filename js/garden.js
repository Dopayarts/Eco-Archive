// The garden scene: sky, greenhouse, fence, beds and the plants in them.
EA.W = 240;
// The garden shows one plot of ten beds at a time; more plants add more plots.
EA.H = 208;
EA.PLOT = 10;
// Bed names: A1-B5 on the first plot, then 2-A1, 3-B4 and so on.
EA.bedName = (row, col) => { const plot = Math.floor(row / 2); return (plot ? plot + 1 + '-' : '') + 'AB'[row % 2] + (col + 1); };

// 3x5 pixel font. Each row is 3 bits, 4 = left pixel.
EA.font = (function () {
  const G = {
    A: [2, 5, 7, 5, 5], B: [6, 5, 6, 5, 6], C: [3, 4, 4, 4, 3], D: [6, 5, 5, 5, 6], E: [7, 4, 6, 4, 7],
    F: [7, 4, 6, 4, 4], G: [3, 4, 5, 5, 3], H: [5, 5, 7, 5, 5], I: [7, 2, 2, 2, 7], J: [1, 1, 1, 5, 2],
    K: [5, 5, 6, 5, 5], L: [4, 4, 4, 4, 7], M: [5, 7, 7, 5, 5], N: [6, 5, 5, 5, 5], O: [2, 5, 5, 5, 2],
    P: [6, 5, 6, 4, 4], Q: [2, 5, 5, 6, 3], R: [6, 5, 6, 5, 5], S: [3, 4, 2, 1, 6], T: [7, 2, 2, 2, 2],
    U: [5, 5, 5, 5, 7], V: [5, 5, 5, 5, 2], W: [5, 5, 7, 7, 5], X: [5, 5, 2, 5, 5], Y: [5, 5, 2, 2, 2],
    Z: [7, 1, 2, 4, 7], 0: [7, 5, 5, 5, 7], 1: [2, 6, 2, 2, 7], 2: [6, 1, 2, 4, 7], 3: [6, 1, 2, 1, 6],
    4: [5, 5, 7, 1, 1], 5: [7, 4, 6, 1, 6], 6: [3, 4, 7, 5, 7], 7: [7, 1, 2, 2, 2], 8: [7, 5, 7, 5, 7],
    9: [7, 5, 7, 1, 6], ' ': [0, 0, 0, 0, 0], ':': [0, 2, 0, 2, 0], '.': [0, 0, 0, 0, 2], '-': [0, 0, 7, 0, 0],
    '/': [1, 1, 2, 4, 4], '+': [0, 2, 7, 2, 0], '>': [4, 2, 1, 2, 4], '#': [5, 7, 5, 7, 5],
  };
  function draw(ctx, text, x, y, col) {
    ctx.fillStyle = EA.config.PAL_HEX[col];
    text = String(text).toUpperCase();
    for (let i = 0; i < text.length; i++) {
      const g = G[text[i]] || G[' '];
      for (let r = 0; r < 5; r++) for (let b = 0; b < 3; b++) if (g[r] & (4 >> b)) ctx.fillRect(x + i * 4 + b, y + r, 1, 1);
    }
  }
  return { draw, width: t => String(t).length * 4 - 1 };
})();

EA.garden = (function () {
  const W = EA.W, H = EA.H, C = EA.config.PAL_HEX;
  const COLS = [26, 73, 120, 167, 214], ROWS = [122, 190];
  const CELL_H = 52, CELL_W = 22;
  const SPR_W = 84, SPR_H = 84, BASE_X = 42, BASE_Y = 74, SCALE = 46;
  const plants = EA.specimens.map(spec => {
    const cv = document.createElement('canvas'); cv.width = SPR_W; cv.height = SPR_H;
    return { spec, uid: spec.species + '-' + spec.seed, hidden: false, x: COLS[spec.col], y: ROWS[spec.row % 2], cv, ctx: cv.getContext('2d', { willReadFrequently: true }),
      theta: EA.rng(spec.seed)() * Math.PI * 2, img: null, bbox: null, top: null, state: null };
  });
  let plot = 0;
  let lastSway = -1, hover = null, clouds = [[30, 10], [150, 20], [205, 7]];
  const stormClouds = [[0, 6], [45, 12], [95, 5], [140, 13], [190, 7], [240, 11]];

  function rebuild(t, day) {
    const swayStep = Math.floor(t * 6);
    for (const p of shown()) {
      p.state = EA.lifecycle.state(p.spec, day);
      const sway = Math.sin(swayStep * 0.7 + p.spec.seed) * 0.04;
      const id = p.spec.species, fromFile = EA.archive.has(id) && !['unsown', 'seed', 'sprout'].includes(p.state.id);
      const key = p.state.id + ':' + p.state.g.toFixed(3) + ':' + (fromFile ? EA.archive.ready(id) : swayStep);
      if (key === p.key) continue;
      p.key = key;
      p.ctx.clearRect(0, 0, SPR_W, SPR_H);
      if (fromFile) {
        if (EA.archive.ready(id)) EA.archive.draw(p.ctx, SPR_W, SPR_H, EA.archive.modelFor(id, p.state.id),
          { theta: p.theta, scale: SCALE * (EA.species[id].height || 1), cx: BASE_X, cy: BASE_Y, g: p.state.g, levels: [0, 1, 2, 3], outline: 0 });
        p.img = p.ctx.getImageData(0, 0, SPR_W, SPR_H);
      } else {
        const prims = EA.model.plant(p.spec, p.state);
        EA.r3d.render(p.ctx, prims, { theta: p.theta, scale: fitScale(prims), cx: BASE_X, cy: BASE_Y, sway, shade: { lo: 0, hi: 1, top: 2 }, map: [0, 0, 1, 3] });
        p.img = EA.r3d.quantize(p.ctx, SPR_W, SPR_H, 0);
      }
      measure(p);
    }
    lastSway = swayStep;
  }
  // Every plant has a fixed space above its bed (CELL_H tall, CELL_W each side of
  // centre); big plants shrink to fit it, so no plant overlaps another or a name.
  function fitScale(prims) {
    let top = 0.1, wide = 0.1;
    const reach = v => { top = Math.max(top, v[1]); wide = Math.max(wide, Math.hypot(v[0], v[2])); };
    for (const q of prims) {
      if (q.t === 'stem') q.pts.forEach(reach);
      else if (q.t === 'leaf') reach([q.base[0] + q.dir[0] * q.len, q.base[1] + q.dir[1] * q.len, q.base[2] + q.dir[2] * q.len]);
      else if (q.t === 'blob') reach(q.p);
    }
    return Math.min(SCALE, CELL_H / top, CELL_W / wide);
  }
  function measure(p) { // bounding box and highest point, used for clicks and bird perches
    const d = p.img.data; let x0 = SPR_W, y0 = SPR_H, x1 = -1, y1 = -1, top = null;
    for (let y = 0; y < SPR_H; y++) for (let x = 0; x < SPR_W; x++) {
      if (!d[(y * SPR_W + x) * 4 + 3]) continue;
      if (!top && Math.abs(x - BASE_X) < 16) top = [x, y];
      x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y);
    }
    p.bbox = x1 < 0 ? null : [x0 + p.x - BASE_X, y0 + p.y - BASE_Y, x1 + p.x - BASE_X, y1 + p.y - BASE_Y];
    p.top = top && BASE_Y - top[1] > 14 ? [top[0] + p.x - BASE_X, top[1] + p.y - BASE_Y] : null;
  }

  function hit(mx, my) {
    const list = shown();
    for (let i = list.length - 1; i >= 0; i--) {
      const p = list[i], sx = Math.floor(mx - p.x + BASE_X), sy = Math.floor(my - p.y + BASE_Y);
      if (sx >= 0 && sy >= 0 && sx < SPR_W && sy < SPR_H && p.img && p.img.data[(sy * SPR_W + sx) * 4 + 3]) return p;
      if (Math.abs(mx - p.x) <= 20 && my >= p.y - 5 && my <= p.y + 13) return p;
    }
    return null;
  }

  function rect(ctx, x, y, w, h, c) { ctx.fillStyle = C[c]; ctx.fillRect(x, y, w, h); }
  function ellipse(ctx, x, y, rx, ry, c) { ctx.fillStyle = C[c]; ctx.beginPath(); ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2); ctx.fill(); }

  function background(ctx, t, night) {
    const sc = EA.scene.state, wet = sc.rain, hazy = sc.sub === 'HARMATTAN' || sc.sky === 'haze';
    const dull = sc.sky === 'overcast', bright = sc.sky === 'clear';
    rect(ctx, 0, 0, W, 44, night ? 0 : wet ? 2 : 3);
    if (wet || dull) { // heavy cloud hides the sun and moon
    } else if (night) {
      for (let i = 0; i < 30; i++) { const x = (i * 53) % W, y = (i * 29) % 38; if ((i + Math.floor(t * 2)) % 7) rect(ctx, x, y, 1, 1, 2); }
      ellipse(ctx, 26, 12, 6, 6, 3); ellipse(ctx, 29, 10, 5, 5, 0);
    } else {
      ellipse(ctx, 24, 13, 8, 8, 2); ellipse(ctx, 24, 13, 6, 6, 3);
      if (!hazy) for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4 + t * 0.2; rect(ctx, Math.round(24 + Math.cos(a) * 11), Math.round(13 + Math.sin(a) * 11), 1, 1, 2); }
    }
    for (const c of wet || dull ? stormClouds : hazy ? [] : bright ? clouds.slice(0, 1) : clouds) { // drifting clouds
      const x = ((c[0] + t * (wet ? 6 : 3)) % (W + 40)) - 30, y = c[1], k = wet || dull ? 1.6 : 1;
      ellipse(ctx, x, y + 2, 11 * k, 4 * k, night || wet ? 1 : 2); ellipse(ctx, x + 6 * k, y - 1, 7 * k, 5 * k, night || wet ? 1 : 2);
      ellipse(ctx, x, y + 1, 10 * k, 3 * k, night ? 0 : wet ? 1 : dull ? 2 : 3); ellipse(ctx, x + 6 * k, y - 1, 6 * k, 4 * k, night ? 0 : wet ? 1 : dull ? 2 : 3);
    }
    // hills
    ctx.fillStyle = C[night ? 1 : 2]; ctx.beginPath(); ctx.moveTo(0, 44);
    for (let x = 0; x <= W; x += 4) ctx.lineTo(x, 36 + Math.sin(x * 0.03) * 4 + Math.sin(x * 0.11) * 1.5);
    ctx.lineTo(W, 44); ctx.fill();
    // grass with tufts
    rect(ctx, 0, 44, W, H - 44, night ? 2 : 3);
    for (let i = 0; i < 160; i++) {
      const x = (i * 97) % W, y = 48 + ((i * 61) % (H - 50));
      rect(ctx, x, y, 1, 1, night ? 1 : 2); rect(ctx, x + 2, y, 1, 1, night ? 1 : 2); rect(ctx, x + 1, y - 1, 1, 1, night ? 1 : 2);
    }
    greenhouse(ctx, night);
    fence(ctx);
    // stepping stone path between the rows
    for (let x = 4; x < W; x += 14) { ellipse(ctx, x + 3, 140 + (x % 28 ? 1 : -1), 5, 2.5, 1); ellipse(ctx, x + 3, 139 + (x % 28 ? 1 : -1), 4, 2, 2); }
    for (let y = 69; y < 72; y += 8) { ellipse(ctx, 120 + (y % 18 ? 2 : -2), y, 5, 2.5, 1); ellipse(ctx, 120 + (y % 18 ? 2 : -2), y - 1, 4, 2, 2); }
  }
  function greenhouse(ctx, night) {
    const x0 = 82, x1 = 158, base = 62, wall = 36, peak = 14;
    rect(ctx, x0, wall, x1 - x0, base - wall, night ? 3 : 2);
    for (let x = x0; x <= x1; x += 8) rect(ctx, x, wall, 1, base - wall, 0);
    rect(ctx, x0, wall + 12, x1 - x0, 1, 0);
    rect(ctx, x0, base - 5, x1 - x0, 5, 1);
    for (let x = x0; x < x1; x += 4) rect(ctx, x + ((x / 4) % 2 ? 2 : 0), base - 3, 1, 1, 0);
    // roof
    ctx.fillStyle = C[night ? 2 : 3]; ctx.beginPath(); ctx.moveTo(x0 - 3, wall); ctx.lineTo(120, peak); ctx.lineTo(x1 + 3, wall); ctx.fill();
    ctx.strokeStyle = C[0]; ctx.lineWidth = 1;
    for (let i = 1; i < 6; i++) {
      const xx = x0 - 3 + (x1 - x0 + 6) * i / 6;
      ctx.beginPath(); ctx.moveTo(xx + 0.5, wall); ctx.lineTo(120 + (xx - 120) * 0.12 + 0.5, peak + 3); ctx.stroke();
    }
    ctx.beginPath(); ctx.moveTo(x0 - 4, wall + 0.5); ctx.lineTo(120, peak + 0.5); ctx.lineTo(x1 + 4, wall + 0.5); ctx.stroke();
    rect(ctx, 119, peak - 3, 2, 3, 0);
    rect(ctx, x0 - 4, wall, x1 - x0 + 8, 2, 0);
    // door and sign
    rect(ctx, 113, 46, 14, 16, 0); rect(ctx, 115, 48, 4, 14, night ? 3 : 1); rect(ctx, 121, 48, 4, 14, night ? 3 : 1);
    rect(ctx, 97, 38, 47, 8, 0); EA.font.draw(ctx, 'ECO-ARCHIVE', 99, 40, 3);
    // potted plants in the glass
    for (const px of [88, 96, 140, 148]) { rect(ctx, px, 52, 4, 3, 0); ellipse(ctx, px + 2, 50, 3, 2.5, 1); }
  }
  const POSTS = [];
  for (let x = 4; x < 80; x += 12) POSTS.push(x);
  for (let x = 164; x < 240; x += 12) POSTS.push(x);
  function fence(ctx) {
    for (const s of [[0, 80], [160, 240]]) { rect(ctx, s[0], 56, s[1] - s[0], 1, 0); rect(ctx, s[0], 61, s[1] - s[0], 1, 0); }
    for (const x of POSTS) { rect(ctx, x, 52, 3, 13, 0); rect(ctx, x + 1, 53, 1, 11, 2); }
  }

  function bed(ctx, x, y) {
    rect(ctx, x - 21, y - 5, 42, 11, 0);
    rect(ctx, x - 20, y - 4, 40, 9, 2);
    for (let i = 0; i < 14; i++) rect(ctx, x - 18 + ((i * 7) % 36), y - 3 + ((i * 3) % 7), 1, 1, 1);
    rect(ctx, x - 21, y + 6, 42, 1, 2);
  }

  function draw(ctx, t, day, night, mouse) {
    if (Math.floor(t * 6) !== lastSway || day !== draw.lastDay) { rebuild(t, day); draw.lastDay = day; }
    background(ctx, t, night);
    const here = shown();
    for (const row of [...new Set(here.map(q => q.spec.row))].sort((a, b) => a - b)) {
      for (const p of here) if (p.spec.row === row) bed(ctx, p.x, p.y);
      for (const p of here) if (p.spec.row === row) ctx.drawImage(p.cv, p.x - BASE_X, p.y - BASE_Y);
    }
    // Names go on last, on a grass-coloured plate, so tall plants never hide them.
    for (const p of here) {
      const sp = EA.species[p.spec.species];
      const label = (sp.short || sp.name.replace('PEPPERMINT', 'MINT').replace('ALOE VERA', 'ALOE')).slice(0, 10);
      const w = EA.font.width(label), x = p.x - (w >> 1);
      rect(ctx, x - 1, p.y + 8, w + 2, 7, 3);
      EA.font.draw(ctx, label, x, p.y + 9, p === hover || p === EA.selected ? 0 : 1);
      if (p.state.id === 'unsown') EA.font.draw(ctx, 'D-' + Math.ceil(p.state.daysLeft), p.x - 8, p.y - 2, 3);
    }
  }
  function drawOverlay(ctx, t) {
    for (const p of [hover, EA.selected]) {
      if (!p || !p.state || plotOf(p) !== plot) continue;
      const b = p.bbox || [p.x - 20, p.y - 5, p.x + 20, p.y + 6];
      const blink = p === EA.selected ? Math.floor(t * 3) % 2 : 0;
      const pad = 2 + blink, x0 = Math.min(b[0], p.x - 20) - pad, y0 = b[1] - pad, x1 = Math.max(b[2], p.x + 20) + pad, y1 = p.y + 7 + pad;
      for (const [x, y, dx, dy] of [[x0, y0, 1, 1], [x1, y0, -1, 1], [x0, y1, 1, -1], [x1, y1, -1, -1]]) {
        rect(ctx, x, y, 1, 1, 0); rect(ctx, x + dx, y, 1, 1, 0); rect(ctx, x + 2 * dx, y, 1, 1, 0);
        rect(ctx, x, y + dy, 1, 1, 0); rect(ctx, x, y + 2 * dy, 1, 1, 0);
      }
    }
    // HUD: archive date
    const sc = EA.scene.state, cp = EA.clock.parts();
    const z = n => String(n).padStart(2, '0');
    const hud = sc.preview ? `LAST ${sc.preview === 'rainy' ? 'RAINY' : 'DRY'} ${EA.scene.secondsLeft()}` : `${cp.date} ${z(cp.hh)}:${z(cp.mm)} ${cp.sub === 'HARMATTAN' ? 'HARMATTAN' : cp.season}`;
    const bw = EA.font.width(hud) + 4;
    rect(ctx, W - bw - 2, 2, bw, 9, 0);
    EA.font.draw(ctx, hud, W - bw, 4, 3);
    if (EA.clock.peek) { rect(ctx, W - 76, 11, 74, 9, 1); EA.font.draw(ctx, 'PEEK +' + Math.round(EA.clock.peek) + 'D', W - 74, 13, 3); }
  }

  function perches() {
    const list = [];
    for (const x of POSTS) list.push({ id: 'post' + x, x: x + 1, y: 52 });
    for (const x of [90, 100, 110, 130, 140, 150]) list.push({ id: 'roof' + x, x, y: Math.round(14 + Math.abs(x - 120) * 22 / 41) });
    list.push({ id: 'peak', x: 120, y: 11 });
    list.push({ id: 'sign1', x: 104, y: 38 }, { id: 'sign2', x: 136, y: 38 });
    for (const p of shown()) if (p.top) list.push({ id: 'plant' + p.spec.n, x: p.top[0], y: p.top[1] + 1, plant: true });
    return list;
  }

  // Plants in bed order, without the ones an admin removed.
  function visible() { return plants.filter(p => !p.hidden).sort((a, b) => a.spec.n - b.spec.n); }
  // Paging: the plot on screen, and moving between plots.
  const plotOf = p => Math.floor(p.spec.row / 2);
  function shown() { return visible().filter(p => plotOf(p) === plot); }
  function plots() { return Math.max(1, Math.ceil(visible().length / EA.PLOT)); }
  function setPlot(n) {
    plot = ((n % plots()) + plots()) % plots();
    hover = null; draw.lastDay = null;
    for (const p of shown()) p.key = null;
    const label = document.getElementById('plot');
    if (label) label.textContent = `PLOT ${plot + 1}/${plots()}`;
  }
  // Apply the admin's layout: { order: [keys in bed order], hidden: [keys] }.
  function applyLayout(L) {
    const known = new Set(plants.map(p => p.uid)), hidden = new Set((L && L.hidden) || []);
    const order = ((L && L.order) || []).filter(k => known.has(k));
    for (const p of plants) if (!order.includes(p.uid)) order.push(p.uid);
    let i = 0;
    for (const k of order) {
      const p = plants.find(q => q.uid === k);
      p.hidden = hidden.has(k);
      if (p.hidden) { p.spec.n = 1000 + i; continue; }
      const row = Math.floor(i / 5), col = i % 5;
      Object.assign(p.spec, { row, col, n: i + 1, bed: EA.bedName(row, col) });
      p.key = null; // redraw the sprite in its new bed
      p.x = COLS[col]; p.y = ROWS[row % 2]; p.bbox = null; p.top = null;
      if (p.img) measure(p);
      i++;
    }
    if (!EA.selected || EA.selected.hidden) EA.panel.select(null); // refresh the index list
    if (hover && hover.hidden) hover = null;
    setPlot(Math.min(plot, plots() - 1));
  }
  // The greenhouse, used for the hidden admin knock.
  const isBuilding = (x, y) => x >= 79 && x <= 161 && y >= 10 && y <= 62;

  return {
    plants, draw, drawOverlay, hit, perches, visible, applyLayout, isBuilding, setPlot, plotOf,
    get plot() { return plot; },
    showPlant(p) { if (p && plotOf(p) !== plot) setPlot(plotOf(p)); },
    setHover(p) { hover = p; },
  };
})();
