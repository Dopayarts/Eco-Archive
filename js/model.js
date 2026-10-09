// Procedural 3D plant models. Each plant is a list of simple primitives
// (stems, leaves, blobs) in plant units: 1.0 is roughly a mature plant's height.
// The same model drives the garden sprite and the turntable.
EA.model = (function () {
  const PI = Math.PI;
  const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
  const mul = (a, s) => [a[0] * s, a[1] * s, a[2] * s];
  const norm = a => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
  const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  const dirOf = (yaw, pitch) => [Math.cos(pitch) * Math.cos(yaw), Math.sin(pitch), Math.cos(pitch) * Math.sin(yaw)];

  function leaf(base, yaw, pitch, len, wid, shape, o = {}) {
    const dir = dirOf(yaw, pitch);
    let side = Math.abs(dir[1]) > 0.98 ? [-Math.sin(yaw), 0, Math.cos(yaw)] : norm(cross([0, 1, 0], dir));
    if (o.roll) {
      const c = Math.cos(o.roll), s = Math.sin(o.roll), w = cross(dir, side);
      side = norm(add(mul(side, c), mul(w, s)));
    }
    return { t: 'leaf', base, dir, side, len, wid, shape, droop: o.droop || 0, serr: o.serr || 0, veins: !!o.veins, col: o.col };
  }
  const stem = (pts, w, col = 1) => ({ t: 'stem', pts, w, col });
  const blob = (p, r, col, ring) => ({ t: 'blob', p, r, col, ring });

  // Flower colour by phase: buds dark, open flowers light, seed heads dark.
  const flowerCol = ph => (ph === 'bloom' ? 3 : ph === 'bud' ? 2 : 1);
  function phaseOf(st) {
    if (st === 'bud' || st === 'bloom' || st === 'seeding') return st;
    return null;
  }

  function sprout(g, r) {
    const h = 0.03 + g * 0.6, out = [stem([[0, 0, 0], [0, h, 0]], 0.02, 2)];
    const yaw = r() * PI;
    for (const k of [0, 1]) out.push(leaf([0, h, 0], yaw + k * PI, 0.35, 0.05 + g * 0.5, 0.03 + g * 0.25, 'cot'));
    return out;
  }
  const seedMound = () => [blob([0, 0.01, 0], 0.025, 0), blob([0.05, 0.005, 0.02], 0.015, 0)];

  function opposite(out, x, z, H, nodes, size, r, opt) {
    const lean = [(r() - 0.5) * 0.12, (r() - 0.5) * 0.12];
    const P = t => [x + lean[0] * t * t, H * t, z + lean[1] * t * t];
    const pts = [];
    for (let i = 0; i <= nodes; i++) pts.push(P(i / nodes));
    out.push(stem(pts, opt.stemW || 0.025, opt.stemCol ?? 1));
    for (let i = 1; i <= nodes; i++) {
      const t = i / nodes, s = size * (1 - 0.5 * t);
      const yaw0 = i * PI / 2 + r() * 0.4;
      for (const k of [0, 1]) {
        out.push(leaf(P(t * 0.97), yaw0 + k * PI, opt.wilt ? -0.6 : 0.3 - t * 0.2, 0.26 * s, 0.14 * s * (opt.narrow || 1), opt.shape || 'oval',
          { droop: opt.wilt ? 0.5 : 0.25, roll: 0.35, serr: opt.serr || 0 }));
      }
    }
    return P(1);
  }

  function basil(g, st, r) {
    const out = [], wilt = st === 'senescence', ph = phaseOf(st);
    const H = 0.75 * g, nodes = Math.max(2, Math.round(2 + 5 * g));
    const top = opposite(out, 0, 0, H, nodes, Math.min(1, g * 1.4), r, { wilt });
    if (g > 0.55) { // side shoots from the lower nodes
      for (let b = 0; b < 2; b++) {
        const yaw = b * PI + PI / 4 + r() * 0.3, y = H * (0.3 + 0.15 * b);
        const tip = [Math.cos(yaw) * 0.17, y + 0.2 * g, Math.sin(yaw) * 0.17];
        out.push(stem([[0, y, 0], tip], 0.02));
        for (const k of [0, 1]) out.push(leaf(tip, yaw + PI / 2 + k * PI, wilt ? -0.5 : 0.25, 0.17, 0.09, 'oval', { droop: 0.2, roll: 0.3 }));
        if (ph) spike(out, tip, 0.15 * g, ph, 0.025);
      }
    }
    if (ph) spike(out, top, 0.25 * g, ph, 0.03);
    return out;
  }
  // A flower spike made of whorls of small blobs.
  function spike(out, base, len, ph, rad, n = 4) {
    const tip = add(base, [0, len, 0]);
    out.push(stem([base, tip], 0.015, 1));
    const rings = Math.max(3, Math.round(len / 0.035));
    for (let i = 1; i <= rings; i++) {
      const y = base[1] + len * i / rings, rr = rad * (1 - 0.4 * i / rings);
      for (let k = 0; k < n; k++) {
        const a = k * 2 * PI / n + i;
        out.push(blob([base[0] + Math.cos(a) * rr, y, base[2] + Math.sin(a) * rr], ph === 'bloom' ? 0.022 : 0.016, flowerCol(ph)));
      }
    }
  }

  function mint(g, st, r) {
    const out = [], ph = phaseOf(st), wilt = st === 'dieback';
    if (st === 'dormant') {
      for (let i = 0; i < 5; i++) {
        const a = r() * 2 * PI, d = 0.05 + r() * 0.12, p = [Math.cos(a) * d, 0, Math.sin(a) * d];
        out.push(stem([p, add(p, [0, 0.05 + r() * 0.05, 0])], 0.02, 0));
        out.push(leaf(p, r() * 2 * PI, -0.05, 0.08, 0.05, 'oval', { serr: 0.3 }));
      }
      return out;
    }
    const n = 3 + Math.round(2 * g);
    for (let i = 0; i < n; i++) {
      const a = i * 2.4 + r(), d = i ? 0.08 + r() * 0.12 : 0;
      const x = Math.cos(a) * d, z = Math.sin(a) * d;
      const H = 0.6 * g * (0.75 + r() * 0.3);
      const top = opposite(out, x, z, H, Math.max(2, Math.round(2 + 4 * g)), 0.75, r,
        { serr: 0.3, shape: 'lance', narrow: 0.85, wilt, stemCol: 0 });
      if (ph) {
        const tip = add(top, [0, 0.1, 0]);
        out.push(stem([top, tip], 0.015, 0));
        for (let k = 0; k < 9; k++) {
          const y = top[1] + 0.012 * k, ang = k * 2.1;
          out.push(blob([top[0] + Math.cos(ang) * 0.025, y, top[2] + Math.sin(ang) * 0.025], 0.02, flowerCol(ph)));
        }
      }
    }
    return out;
  }

  function lavender(g, st, r) {
    const out = [], ph = phaseOf(st);
    const shoots = 16;
    for (let i = 0; i < shoots; i++) { // the grey foliage mound
      const yaw = i * 2.4 + r() * 0.3, pitch = 0.75 + r() * 0.6, len = (0.22 + r() * 0.1) * g;
      const d = dirOf(yaw, pitch), tip = mul(d, len);
      out.push(stem([[0, 0, 0], tip], 0.02, 0));
      for (let k = 1; k <= 4; k++) {
        const p = mul(d, len * k / 4);
        out.push(leaf(p, yaw + (k % 2 ? 0.8 : -0.8), pitch - 0.2, 0.09, 0.016, 'lance', { col: 2 }));
      }
    }
    if (ph) {
      const stalks = 14;
      for (let i = 0; i < stalks; i++) {
        const yaw = i * 2.4 + r(), pitch = 1.15 + r() * 0.3, len = (0.55 + r() * 0.2) * g;
        const base = mul(dirOf(yaw, 1.0), 0.12 * g), d = dirOf(yaw, pitch), tip = add(base, mul(d, len));
        out.push(stem([base, tip], 0.012, 2));
        for (let k = 0; k < 7; k++) {
          const p = add(base, mul(d, len * (0.75 + k * 0.04)));
          out.push(blob(p, ph === 'bloom' ? 0.026 : 0.018, flowerCol(ph)));
        }
      }
    }
    return out;
  }

  function chamomile(g, st, r) {
    const out = [], ph = phaseOf(st);
    const feathers = (a, b) => { // thread-like leaflets along a stem segment
      for (let k = 1; k <= 3; k++) {
        const p = add(a, mul(add(b, mul(a, -1)), k / 4));
        out.push(leaf(p, r() * 2 * PI, 0.2 + r() * 0.5, 0.07, 0.012, 'thread', { col: 2 }));
      }
    };
    for (let i = 0; i < 7; i++) { // basal rosette
      out.push(leaf([0, 0.01, 0], i * 0.9, 0.25, 0.14 * Math.min(1, g * 2), 0.05, 'feather'));
    }
    if (g < 0.4) return out;
    const tips = [], stems = 4;
    for (let i = 0; i < stems; i++) {
      const yaw = i * 1.6 + r(), H = 0.6 * g * (0.8 + r() * 0.3);
      const mid = [Math.cos(yaw) * 0.06, H * 0.5, Math.sin(yaw) * 0.06];
      const top = [Math.cos(yaw) * 0.1, H, Math.sin(yaw) * 0.1];
      out.push(stem([[0, 0, 0], mid, top], 0.015, 1));
      feathers([0, 0, 0], mid); feathers(mid, top);
      tips.push(top);
      for (let b = 0; b < 2; b++) { // branches
        const by = yaw + (b ? 0.9 : -0.9), from = b ? mid : add(mid, [0, H * 0.15, 0]);
        const end = add(from, [Math.cos(by) * 0.13, H * 0.35, Math.sin(by) * 0.13]);
        out.push(stem([from, end], 0.012, 1));
        feathers(from, end);
        tips.push(end);
      }
    }
    if (ph) for (const t of tips) {
      if (ph === 'bud') out.push(blob(t, 0.02, 2));
      else if (ph === 'bloom') out.push(blob(t, 0.045, 3, { r: 0.022, col: 1 }));
      else out.push(blob(t, 0.025, 1));
    }
    return out;
  }

  function aloe(g, st, r) {
    const out = [], ph = phaseOf(st), n = 14;
    for (let i = 0; i < n; i++) {
      const t = i / n;
      out.push(leaf([0, 0.02, 0], i * 2.4, 0.45 + 0.75 * t, 0.62 * g * (1 - 0.35 * t), 0.09 * g + 0.02, 'tri',
        { droop: 0.15 * (1 - t), serr: 0.25, roll: 0.3 }));
    }
    if (ph) {
      const H = 1.25 * g, top = [0.03, H, 0];
      out.push(stem([[0, 0, 0], [0.02, H * 0.6, 0], top], 0.02, 1));
      const rows = ph === 'seeding' ? 5 : 9;
      for (let i = 0; i < rows; i++) {
        const y = H - 0.3 + i * 0.033;
        for (let k = 0; k < 3; k++) {
          const a = k * 2.1 + i;
          out.push(blob([top[0] + Math.cos(a) * 0.045, y, Math.sin(a) * 0.045], ph === 'bloom' ? 0.022 : 0.016, flowerCol(ph)));
        }
      }
    }
    return out;
  }


  // ---------- Plant forms ----------
  // New species describe themselves with a `form` record instead of custom
  // code. One builder per growth habit; the species' `leaf` record sets the
  // leaf shape (simple, or compound: pinnate, bipinnate, palmate, trifoliate).
  //   form: { type, height, stems, nodes, branches, count, arrange, leafSize,
  //           pitch: [lo, hi], droop, flower: { type, size, color }, fruit: { type, size } }
  const FLOWERING = ['bud', 'bloom', 'seeding', 'fruiting'];
  const rot = (v, yaw) => [v[0] * Math.cos(yaw) - v[2] * Math.sin(yaw), v[1], v[0] * Math.sin(yaw) + v[2] * Math.cos(yaw)];

  // One leaf, simple or compound, growing from `at` towards (yaw, pitch).
  function foliage(out, at, yaw, pitch, size, L, o = {}) {
    // L.wid is the leaf's full width as a fraction of its length.
    const len = 0.26 * size * (L.len || 0.9), wid = 0.14 * size * (L.wid || 0.5);
    const droop = (o.droop ?? 0.25) + (o.wilt ? 0.4 : 0), p = o.wilt ? pitch - 0.5 : pitch;
    const prof = !L.compound && L.profile; // a traced outline replaces the shape of simple leaves
    const shape = prof || L.shape || 'oval', serr = prof ? 0 : L.serr || 0, col = o.col;
    const c = L.compound;
    if (!c) { out.push(leaf(at, yaw, p, len, wid, shape, { droop, roll: 0.35, serr, col })); return; }
    const d = dirOf(yaw, p), petiole = len * (c === 'palmate' ? 0.55 : 0.2);
    const pt = t => add(at, add(mul(d, len * 1.6 * t), [0, -droop * len * t * t, 0]));
    if (c === 'palmate' || c === 'trifoliate') { // lobes fan out from the petiole tip
      const tip = add(at, mul(d, petiole));
      out.push(stem([at, tip], 0.012, 1));
      const n = c === 'trifoliate' ? 3 : (L.leaflets || 7), spread = c === 'trifoliate' ? 1.4 : 2.6;
      for (let i = 0; i < n; i++) {
        const a = (i / (n - 1) - 0.5) * spread;
        out.push(leaf(tip, yaw + a, p - Math.abs(a) * 0.25, len * (1 - Math.abs(a) * 0.18), wid * 0.45, shape, { droop, roll: 0.3, serr, col }));
      }
      return;
    }
    // pinnate and bipinnate: a rachis with leaflets in pairs
    const pairs = L.leaflets || 6, pts = [];
    for (let i = 0; i <= 6; i++) pts.push(pt(i / 6));
    out.push(stem(pts, 0.01, 1));
    for (let i = 1; i <= pairs; i++) {
      const t = 0.15 + 0.85 * i / pairs, q = pt(t), s = 1 - 0.35 * t;
      for (const k of [-1, 1]) {
        if (c === 'bipinnate') { // pinnae carrying many tiny leaflets
          const pd = dirOf(yaw + k * 1.1, p - 0.1), pe = add(q, mul(pd, len * 0.55 * s));
          out.push(stem([q, pe], 0.006, 1));
          for (let j = 1; j <= 4; j++) {
            const r0 = add(q, mul(pd, len * 0.55 * s * j / 4.5));
            for (const m of [-1, 1]) out.push(leaf(r0, yaw + k * 1.1 + m * 1.2, p, len * 0.12, wid * 0.12, 'oval', { col }));
          }
        } else out.push(leaf(q, yaw + k * 1.25, p + 0.1, len * 0.42 * s, wid * 0.32, shape, { droop: droop * 0.5, roll: 0.3, serr, col }));
      }
    }
    if (o.terminal !== false && c === 'pinnate') out.push(leaf(pt(1), yaw, p, len * 0.35, wid * 0.3, shape, { serr, col }));
  }

  // Flowers and fruit at a branch tip, by phase.
  function bloomAt(out, tip, F, ph, r, up = [0, 1, 0]) {
    const fl = F.flower || {}, fr = F.fruit, sz = fl.size || 1;
    if (ph === 'seeding' || ph === 'fruiting') {
      if (!fr) { if (fl.type && fl.type !== 'none') out.push(blob(tip, 0.016 * sz, 1)); return; }
      const fs = fr.size || 1;
      if (fr.type === 'pod') for (let k = 0; k < 3; k++) { // slim pods hanging or pointing up
        const a = k * 2.1 + r(), b = add(tip, [Math.cos(a) * 0.02, 0, Math.sin(a) * 0.02]);
        out.push(stem([b, add(b, [Math.cos(a) * 0.04 * fs, (fr.hang ? -0.12 : 0.12) * fs, Math.sin(a) * 0.04 * fs])], 0.02 * fs, fr.color ?? 2));
      } else if (fr.type === 'big') out.push(blob(add(tip, [0, -0.04 * fs, 0]), 0.06 * fs, fr.color ?? 2));
      else for (let k = 0; k < 4; k++) { const a = k * 1.6 + r(); out.push(blob(add(tip, [Math.cos(a) * 0.03, -0.01 * k, Math.sin(a) * 0.03]), 0.018 * fs, fr.color ?? 3)); }
      return;
    }
    const col = flowerCol(ph), fc = ph === 'bloom' ? (fl.color ?? 3) : col;
    switch (fl.type) {
      case 'spike': spike(out, tip, 0.12 * sz, ph, 0.025 * sz, 4); break;
      case 'head':
        if (ph === 'bloom') out.push(blob(tip, 0.04 * sz, fc, { r: 0.018 * sz, col: fl.center ?? 1 }));
        else out.push(blob(tip, 0.02 * sz, col));
        break;
      case 'single': out.push(blob(add(tip, mul(up, 0.02)), (ph === 'bloom' ? 0.038 : 0.022) * sz, fc)); break;
      case 'umbel':
        for (let k = 0; k < 7; k++) { const a = k * 0.9, q = add(tip, [Math.cos(a) * 0.05 * sz, 0.04 * sz, Math.sin(a) * 0.05 * sz]); out.push(stem([tip, q], 0.006, 1)); out.push(blob(q, 0.014 * sz, fc)); }
        break;
      case 'plume':
        for (let k = 0; k < 10; k++) out.push(blob(add(tip, [Math.sin(k) * 0.02, 0.012 * k * sz, Math.cos(k) * 0.02]), 0.012 * sz, ph === 'bloom' ? 2 : 1));
        break;
      case 'cluster':
        for (let k = 0; k < 6; k++) { const a = k * 1.05 + r() * 0.3; out.push(blob(add(tip, [Math.cos(a) * 0.03 * sz, 0.015 * (k % 2), Math.sin(a) * 0.03 * sz]), (ph === 'bloom' ? 0.02 : 0.014) * sz, fc)); }
        break;
    }
  }

  function stubs(out, r) { // dormant: a few short stubs at soil level
    for (let i = 0; i < 5; i++) {
      const a = r() * 2 * PI, d = 0.04 + r() * 0.1, p = [Math.cos(a) * d, 0, Math.sin(a) * d];
      out.push(stem([p, add(p, [0, 0.04 + r() * 0.04, 0])], 0.02, 0));
    }
  }

  // Leaves along a stem path, opposite, alternate or in whorls.
  function leavesAlong(out, P, nodes, F, L, size, r, wilt, from = 1) {
    const per = F.arrange === 'opposite' ? 2 : F.arrange === 'whorl' ? 3 : 1;
    for (let i = from; i <= nodes; i++) {
      const t = i / nodes, s = size * (1 - 0.45 * t);
      const yaw0 = per === 2 ? i * PI / 2 : i * 2.4;
      for (let k = 0; k < per; k++) foliage(out, P(t * 0.97), yaw0 + k * 2 * PI / per + r() * 0.3, 0.3 - t * 0.2, s, L, { wilt, droop: F.droop });
    }
  }
  const path = (from, H, lean) => t => [from[0] + lean[0] * t * t, from[1] + H * t, from[2] + lean[1] * t * t];
  const pts = (P, n = 6) => Array.from({ length: n + 1 }, (_, i) => P(i / n));

  const FORMS = {
    herb(F, L, g, st, r, ph, wilt) {
      const out = [], H = (F.height || 0.7) * g, n = F.stems || 1, size = (F.leafSize || 1) * Math.min(1, 0.3 + g);
      for (let s = 0; s < n; s++) {
        const a = s * 2.4 + r(), d = s ? 0.05 + r() * 0.08 : 0;
        const P = path([Math.cos(a) * d, 0, Math.sin(a) * d], H * (s ? 0.75 + r() * 0.25 : 1), [(r() - 0.5) * 0.15 + Math.cos(a) * d, (r() - 0.5) * 0.15 + Math.sin(a) * d]);
        const nodes = Math.max(2, Math.round((F.nodes || 5) * (0.4 + 0.6 * g)));
        out.push(stem(pts(P), F.stemW || 0.022, F.stemCol ?? 1));
        leavesAlong(out, P, nodes, F, L, size, r, wilt);
        if (ph) bloomAt(out, P(1), F, ph, r);
        for (let b = 0; b < (g > 0.5 ? F.branches || 0 : 0); b++) { // side shoots
          const t0 = 0.35 + 0.4 * b / Math.max(1, F.branches), from = P(t0), yaw = b * 2.4 + s + r();
          const tip = add(from, [Math.cos(yaw) * 0.15 * g, H * 0.3, Math.sin(yaw) * 0.15 * g]);
          out.push(stem([from, tip], 0.016, F.stemCol ?? 1));
          const Q = t => add(from, mul(add(tip, mul(from, -1)), t));
          leavesAlong(out, Q, 2, F, L, size * 0.7, r, wilt);
          if (ph) bloomAt(out, tip, F, ph, r);
        }
      }
      return out;
    },
    shrub(F, L, g, st, r, ph, wilt) {
      const out = [], H = (F.height || 0.85) * g, trunk = H * (F.trunk ?? 0.25), n = F.branches || 5, size = (F.leafSize || 0.9) * Math.min(1, 0.3 + g);
      const base = [0, trunk, 0];
      out.push(stem([[0, 0, 0], base], F.stemW || 0.035, 1));
      for (let b = 0; b < n; b++) {
        const yaw = b * 2.4 + r() * 0.4, spread = (F.spread ?? 0.3) * (0.6 + r() * 0.5);
        const tip = add(base, [Math.cos(yaw) * spread, (H - trunk) * (0.7 + r() * 0.3), Math.sin(yaw) * spread]);
        const mid = add(mul(add(base, tip), 0.5), [Math.cos(yaw) * spread * 0.15, 0, Math.sin(yaw) * spread * 0.15]);
        out.push(stem([base, mid, tip], 0.022, F.stemCol ?? 1));
        const Q = t => t < 0.5 ? add(base, mul(add(mid, mul(base, -1)), t * 2)) : add(mid, mul(add(tip, mul(mid, -1)), (t - 0.5) * 2));
        leavesAlong(out, Q, Math.max(2, Math.round((F.nodes || 4) * (0.4 + 0.6 * g))), F, L, size, r, wilt);
        if (ph) bloomAt(out, tip, F, ph, r);
      }
      return out;
    },
    tree(F, L, g, st, r, ph, wilt) {
      const out = [], H = (F.height || 1.2) * g, trunk = H * (F.trunk ?? 0.5), n = F.branches || 6, size = (F.leafSize || 1) * Math.min(1, 0.35 + g);
      const lean = (r() - 0.5) * 0.06, top = [lean, trunk, 0];
      out.push(stem([[0, 0, 0], [lean * 0.3, trunk * 0.5, 0], top], (F.stemW || 0.05) * (0.5 + g * 0.5), 1));
      for (let b = 0; b < n; b++) {
        const yaw = b * 2.4 + r() * 0.3, up = 0.35 + r() * 0.5, len = (H - trunk) * (0.7 + r() * 0.4) + (F.spread ?? 0.25);
        const from = add(top, [0, -trunk * 0.25 * (b % 3) / 3, 0]), tip = add(from, mul(dirOf(yaw, up), len));
        out.push(stem([from, tip], 0.02, 1));
        const Q = t => add(from, mul(add(tip, mul(from, -1)), t));
        leavesAlong(out, Q, Math.max(2, Math.round((F.nodes || 3) * (0.5 + 0.5 * g))), F, L, size, r, wilt, 1);
        if (ph) bloomAt(out, tip, F, ph, r);
      }
      return out;
    },
    rosette(F, L, g, st, r, ph, wilt) {
      const out = [], n = F.count || 12, pr = F.pitch || [0.35, 1.2], size = (F.leafSize || 1.6) * Math.min(1, 0.25 + g);
      for (let i = 0; i < n; i++) {
        const t = i / n;
        foliage(out, [0, 0.02, 0], i * 2.4, pr[0] + (pr[1] - pr[0]) * t, size * (1 - 0.3 * t), L, { wilt, droop: F.droop ?? 0.15 });
      }
      if (ph) {
        const Hs = (F.height || 0.9) * g, top = [0.02, Hs, 0];
        out.push(stem([[0, 0, 0], [0.01, Hs * 0.6, 0], top], 0.018, 1));
        bloomAt(out, top, F, ph, r);
      }
      return out;
    },
    grass(F, L, g, st, r, ph, wilt) {
      const out = [], n = F.count || 18, H = (F.height || 0.9) * g;
      for (let i = 0; i < n; i++) {
        const yaw = i * 2.4 + r(), pitch = 0.9 + r() * 0.55, len = H * (0.6 + r() * 0.5);
        const b = [Math.cos(yaw) * 0.03, 0, Math.sin(yaw) * 0.03];
        out.push(leaf(b, yaw, wilt ? pitch - 0.5 : pitch, len, 0.03 * (L.wid || 0.5) * 2, L.shape || 'blade', { droop: (F.droop ?? 0.45) + (wilt ? 0.4 : 0), roll: 0.2, col: i % 3 ? undefined : 2 }));
      }
      if (ph) for (let k = 0; k < (F.stems || 3); k++) {
        const yaw = k * 2.1 + r(), tip = [Math.cos(yaw) * 0.12, H * 1.15, Math.sin(yaw) * 0.12];
        out.push(stem([[0, 0, 0], tip], 0.01, 1)); bloomAt(out, tip, F, ph, r);
      }
      return out;
    },
    vine(F, L, g, st, r, ph, wilt) {
      const out = [], H = (F.height || 1.0) * g, size = (F.leafSize || 1) * Math.min(1, 0.3 + g);
      if (F.trailing) { // runners spreading over the ground
        for (let k = 0; k < (F.stems || 4); k++) {
          const yaw = k * 1.6 + r(), len = 0.45 * g + 0.05, P = t => [Math.cos(yaw) * len * t, 0.03 + Math.sin(t * PI) * 0.06 * g, Math.sin(yaw) * len * t];
          out.push(stem(pts(P), 0.015, 1));
          for (let i = 1; i <= 4; i++) { foliage(out, P(i / 4.4), yaw + (i % 2 ? 1 : -1) * 1.1, 0.5, size, L, { wilt, droop: 0.3 }); if (ph && i % 2) bloomAt(out, P(i / 4.4), F, ph, r); }
        }
        return out;
      }
      out.push(stem([[0.06, 0, 0], [0.06, H * 1.05, 0]], 0.012, 1)); // a support stake
      const turns = 2.5, P = t => [0.06 + Math.cos(t * turns * 2 * PI) * 0.05, H * t, Math.sin(t * turns * 2 * PI) * 0.05];
      out.push(stem(pts(P, 24), 0.015, 1));
      const nodes = Math.max(3, Math.round((F.nodes || 8) * (0.3 + 0.7 * g)));
      for (let i = 1; i <= nodes; i++) {
        const t = i / nodes, q = P(t), yaw = t * turns * 2 * PI;
        foliage(out, q, yaw, 0.15, size * (1 - 0.3 * t), L, { wilt, droop: F.droop ?? 0.4 });
        if (ph && i % 3 === 0) bloomAt(out, q, F, ph, r);
      }
      return out;
    },
    palm(F, L, g, st, r, ph, wilt) {
      const out = [], H = (F.height || 1.1) * g, trunk = H * (F.trunk ?? 0.55), n = F.count || 9, size = (F.leafSize || 2.2) * Math.min(1, 0.3 + g);
      const top = [0, trunk, 0];
      out.push(stem([[0, 0, 0], top], (F.stemW || 0.06) * (0.6 + 0.4 * g), 1));
      for (let y = 0.1; y < 0.95; y += 0.18) out.push(stem([[-0.03, trunk * y, 0], [0.03, trunk * y, 0]], 0.012, 2)); // leaf scars
      for (let i = 0; i < n; i++) foliage(out, top, i * 2.4, 0.2 + (i % 3) * 0.35, size, L, { wilt, droop: F.droop ?? 0.5 });
      if (ph) bloomAt(out, add(top, [0.03, -0.04, 0]), F, ph, r);
      return out;
    },
    fern(F, L, g, st, r, ph, wilt) {
      const out = [], n = F.count || 9, size = (F.leafSize || 1.8) * Math.min(1, 0.3 + g);
      const leafRec = Object.assign({ compound: 'pinnate', leaflets: 9, shape: 'lance' }, L);
      for (let i = 0; i < n; i++) foliage(out, [0, 0.01, 0], i * 2.4, 0.7 + (i % 3) * 0.2, size, leafRec, { wilt, droop: F.droop ?? 0.55, terminal: false });
      return out;
    },
    broadleaf(F, L, g, st, r, ph, wilt) {
      const out = [], n = F.count || 5, H = (F.height || 0.8) * g, size = (F.leafSize || 2.2) * Math.min(1, 0.3 + g);
      const trunk = (F.trunk || 0) * H;
      if (trunk) out.push(stem([[0, 0, 0], [0, trunk, 0]], (F.stemW || 0.07) * (0.6 + 0.4 * g), 1)); // a pseudostem, as in plantain
      for (let i = 0; i < n; i++) {
        const yaw = i * 2.4 + r() * 0.3, pl = H * (0.55 + 0.45 * (i / n)) - trunk, d = dirOf(yaw, 1.25);
        const from = [0, trunk, 0], tip = add(from, mul(d, Math.max(0.05, pl)));
        if (!trunk) out.push(stem([from, tip], 0.02, F.stemCol ?? 1)); // long leaf stalk
        foliage(out, tip, yaw, F.leafPitch ?? 0.15, size, L, { wilt, droop: F.droop ?? 0.2 });
      }
      if (ph) bloomAt(out, [0.02, Math.max(trunk, H * 0.6), 0], F, ph, r);
      return out;
    },
  };

  function fromForm(sp, g, st, r) {
    const F = sp.form, ph = FLOWERING.includes(st) ? st : null;
    const wilt = st === 'senescence' || st === 'dieback';
    if (st === 'dormant') { const out = []; stubs(out, r); return out; }
    return (FORMS[F.type] || FORMS.herb)(F, sp.leaf || {}, g, st, r, ph, wilt);
  }

  const builders = { basil, mint, lavender, chamomile, aloe };

  function plant(spec, st) {
    const r = EA.rng(spec.seed * 7919);
    if (st.id === 'unsown') return [];
    if (st.id === 'seed') return seedMound();
    if (st.id === 'sprout') return sprout(st.g, r);
    const sp = EA.species[spec.species];
    if (builders[spec.species]) return builders[spec.species](st.g, st.id, r);
    return sp && sp.form ? fromForm(sp, st.g, st.id, r) : [];
  }

  // A single leaf, large, for the turntable's leaf mode.
  function leafModel(speciesId) {
    const L = EA.species[speciesId].leaf;
    const out = [stem([[0, -0.62, 0], [0, -0.45, 0]], 0.02, 2)];
    if (L.shape === 'feather') { // chamomile: a rachis with thread-like segments
      const pts = [];
      for (let i = 0; i <= 10; i++) pts.push([0.03 * Math.sin(i), -0.45 + i * 0.09, 0]);
      out.push(stem(pts, 0.015, 2));
      for (let i = 1; i <= 9; i++) {
        const p = pts[i], s = 1 - i / 11;
        for (const k of [0, PI]) {
          const yaw = k, pitch = 0.5;
          out.push(leaf(p, yaw, pitch, 0.32 * s, 0.025, 'thread', { col: 2 }));
          const d = dirOf(yaw, pitch);
          for (let j = 1; j <= 3; j++) {
            const q = add(p, mul(d, 0.32 * s * j / 4));
            out.push(leaf(q, yaw, pitch + (j % 2 ? 0.9 : -0.5), 0.1 * s, 0.018, 'thread', { col: 3 }));
          }
        }
      }
      return out;
    }
    if (L.compound) { // compound leaf: lay the whole leaf out flat, facing the viewer
      const big = Object.assign({}, L, { len: 1.6, wid: 0.9 });
      const tmp = [];
      foliage(tmp, [0, -0.45, 0], PI / 2, L.compound === 'palmate' ? 1.25 : 1.45, 2.4, big, { droop: 0, terminal: true });
      return out.concat(tmp);
    }
    out.push({ t: 'leaf', base: [0, -0.45, 0], dir: [0, 1, 0], side: [1, 0, 0], len: L.len, wid: L.wid / 2,
      shape: L.profile || L.shape, droop: 0, arch: 0.3, serr: L.profile ? 0 : L.serr, veins: true, thick: L.shape === 'tri' });
    return out;
  }

  return { plant, leafModel };
})();

// Software renderer: project, depth-sort and draw primitives, then snap the
// result to the 4-colour palette so everything stays crisp pixel art.
EA.r3d = (function () {
  const SHAPES = {
    oval: t => Math.sin(Math.PI * Math.pow(t, 0.75)),
    lance: t => Math.sin(Math.PI * Math.pow(t, 0.55)) * 0.9,
    tri: t => Math.pow(1 - t, 0.85),
    thread: t => 1 - t * 0.6,
    cot: t => Math.sin(Math.PI * t),
    feather: t => Math.sin(Math.PI * Math.pow(t, 0.6)),
    heart: t => Math.pow(Math.sin(Math.PI * Math.pow(t, 0.55)), 0.7),
    round: t => Math.pow(Math.sin(Math.PI * t), 0.6),
    blade: t => 0.9 - t * 0.75,
    paddle: t => Math.pow(Math.sin(Math.PI * t), 0.3),
    needle: t => 0.35 - t * 0.3,
  };
  // A leaf outline traced from a photo: widths from base (t=0) to tip (t=1).
  const profiles = new WeakMap();
  function profileFn(a) {
    if (!profiles.has(a)) profiles.set(a, t => { const x = t * (a.length - 1), i = Math.min(a.length - 2, Math.floor(x)); return a[i] + (a[i + 1] - a[i]) * (x - i); });
    return profiles.get(a);
  }
  const Lt = (() => { const v = [-0.45, 0.75, 0.55], l = Math.hypot(...v); return v.map(x => x / l); })();

  function render(ctx, prims, o) {
    const pal = EA.config.PAL_HEX;
    const c = Math.cos(o.theta), s = Math.sin(o.theta);
    const tilt = o.tilt ?? 0.35, ct = Math.cos(tilt), st = Math.sin(tilt);
    const sc = o.scale, sway = o.sway || 0, shade = o.shade || { lo: 1, hi: 2, top: 2 };
    const M = o.map || [0, 1, 2, 3]; // remaps fixed colours, e.g. darker plants on the light garden
    const P = v => {
      const x = v[0] + sway * v[1] * v[1];
      const rx = x * c + v[2] * s, rz = -x * s + v[2] * c;
      return [o.cx + rx * sc, o.cy - (v[1] * ct - rz * st) * sc, rz];
    };
    const R = n => [n[0] * c + n[2] * s, n[1], -n[0] * s + n[2] * c];
    const items = [];
    for (const p of prims) {
      if (p.t === 'stem') {
        for (let i = 0; i < p.pts.length - 1; i++) {
          const a = P(p.pts[i]), b = P(p.pts[i + 1]);
          items.push({ z: (a[2] + b[2]) / 2, k: 'seg', a, b, w: Math.max(1, p.w * sc), col: M[p.col] });
        }
      } else if (p.t === 'leaf') {
        const fn = Array.isArray(p.shape) ? profileFn(p.shape) : SHAPES[p.shape] || SHAPES.oval;
        let N = Math.min(18, Math.max(4, Math.round(p.len * sc / 2)));
        if (Array.isArray(p.shape)) N = Math.max(N, Math.min(p.shape.length - 1, Math.round(p.len * sc)));
        if (p.serr) N *= 2;
        const L = [], Rr = [], mid = [], nrm = [p.dir[1] * p.side[2] - p.dir[2] * p.side[1], p.dir[2] * p.side[0] - p.dir[0] * p.side[2], p.dir[0] * p.side[1] - p.dir[1] * p.side[0]];
        for (let i = 0; i <= N; i++) {
          const t = i / N;
          const cen = [p.base[0] + p.dir[0] * p.len * t, p.base[1] + p.dir[1] * p.len * t - p.droop * p.len * t * t, p.base[2] + p.dir[2] * p.len * t];
          if (p.arch) { const k = p.arch * p.len * t * t; cen[0] += nrm[0] * k; cen[1] += nrm[1] * k; cen[2] += nrm[2] * k; }
          let w = p.wid * fn(t);
          if (p.serr && i > 0 && i < N) w *= i % 2 ? 1 + p.serr : 1 - p.serr * 0.4;
          L.push(P([cen[0] + p.side[0] * w, cen[1] + p.side[1] * w, cen[2] + p.side[2] * w]));
          Rr.push(P([cen[0] - p.side[0] * w, cen[1] - p.side[1] * w, cen[2] - p.side[2] * w]));
          mid.push(P(cen));
        }
        const n = R([p.dir[1] * p.side[2] - p.dir[2] * p.side[1], p.dir[2] * p.side[0] - p.dir[0] * p.side[2], p.dir[0] * p.side[1] - p.dir[1] * p.side[0]]);
        const b = Math.abs(n[0] * Lt[0] + n[1] * Lt[1] + n[2] * Lt[2]);
        const col = p.col != null ? M[p.col] : (b > 0.8 ? shade.top : b > 0.4 ? shade.hi : shade.lo);
        const z = mid.reduce((a, m) => a + m[2], 0) / mid.length;
        items.push({ z, k: 'poly', pts: L.concat(Rr.reverse()), col, veins: p.veins ? { mid, L, R: Rr.slice().reverse(), thick: p.thick } : null });
      } else if (p.t === 'blob') {
        const q = P(p.p);
        items.push({ z: q[2], k: 'dot', q, r: p.r * sc, col: M[p.col], ring: p.ring && { r: p.ring.r, col: M[p.ring.col] } });
      }
    }
    items.sort((a, b) => a.z - b.z);
    ctx.lineCap = 'round';
    for (const it of items) {
      if (it.k === 'seg') {
        ctx.strokeStyle = pal[it.col]; ctx.lineWidth = it.w;
        ctx.beginPath(); ctx.moveTo(it.a[0], it.a[1]); ctx.lineTo(it.b[0], it.b[1]); ctx.stroke();
      } else if (it.k === 'poly') {
        ctx.fillStyle = pal[it.col];
        ctx.beginPath(); ctx.moveTo(it.pts[0][0], it.pts[0][1]);
        for (const q of it.pts) ctx.lineTo(q[0], q[1]);
        ctx.closePath(); ctx.fill();
        if (it.veins) drawVeins(ctx, it, pal);
      } else {
        dot(ctx, it.q, it.r, pal[it.col]);
        if (it.ring) dot(ctx, it.q, it.ring.r * sc, pal[it.ring.col]);
      }
    }
  }
  function dot(ctx, q, r, color) {
    ctx.fillStyle = color;
    if (r < 0.9) { ctx.fillRect(Math.round(q[0]), Math.round(q[1]), 1, 1); return; }
    ctx.beginPath(); ctx.arc(q[0], q[1], r, 0, Math.PI * 2); ctx.fill();
  }
  function drawVeins(ctx, it, pal) {
    const dark = pal[Math.max(0, it.col - 1)];
    ctx.strokeStyle = dark; ctx.lineWidth = 1;
    const m = it.veins.mid;
    ctx.beginPath(); ctx.moveTo(m[0][0], m[0][1]);
    for (const q of m) ctx.lineTo(q[0], q[1]);
    ctx.stroke();
    if (it.veins.thick) return;
    const n = m.length;
    for (let i = 2; i < n - 2; i += 2) {
      for (const side of [it.veins.L, it.veins.R]) {
        const e = side[Math.min(n - 1, i + 2)], a = m[i];
        ctx.beginPath(); ctx.moveTo(a[0], a[1]);
        ctx.lineTo(a[0] + (e[0] - a[0]) * 0.8, a[1] + (e[1] - a[1]) * 0.8); ctx.stroke();
      }
    }
  }

  // Snap every pixel to the palette; optionally add a 1px outline.
  function quantize(ctx, w, h, outline) {
    const PAL = EA.config.PAL, img = ctx.getImageData(0, 0, w, h), d = img.data;
    for (let i = 0; i < d.length; i += 4) {
      if (d[i + 3] < 110) { d[i + 3] = 0; continue; }
      let best = 0, bd = 1e9;
      for (let k = 0; k < 4; k++) {
        const dr = d[i] - PAL[k][0], dg = d[i + 1] - PAL[k][1], db = d[i + 2] - PAL[k][2];
        const dd = dr * dr + dg * dg * 1.3 + db * db;
        if (dd < bd) { bd = dd; best = k; }
      }
      d[i] = PAL[best][0]; d[i + 1] = PAL[best][1]; d[i + 2] = PAL[best][2]; d[i + 3] = 255;
    }
    if (outline != null) {
      const a = new Uint8Array(w * h);
      for (let j = 0; j < w * h; j++) a[j] = d[j * 4 + 3] ? 1 : 0;
      const oc = PAL[outline];
      for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
        const j = y * w + x;
        if (a[j]) continue;
        if ((x > 0 && a[j - 1]) || (x < w - 1 && a[j + 1]) || (y > 0 && a[j - w]) || (y < h - 1 && a[j + w])) {
          d[j * 4] = oc[0]; d[j * 4 + 1] = oc[1]; d[j * 4 + 2] = oc[2]; d[j * 4 + 3] = 255;
        }
      }
    }
    ctx.putImageData(img, 0, 0);
    return img;
  }

  return { render, quantize };
})();
