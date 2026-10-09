// Birds: fly in, settle on the greenhouse, fence and plants, peck about,
// and scatter when the mouse comes near.
EA.birds = (function () {
  const W = EA.W, H = EA.H;
  // '0' dark, '1' mid, '2' light; anchor (ax, ay) is the feet (or body) point.
  const F = {
    perch: { ax: 3, ay: 5, rows: ['....00.', '...0201', '000000.', '.01110.', '..0.0..'] },
    peck: { ax: 3, ay: 5, rows: ['.......', '.......', '0000000', '.011102', '..0.0.1'] },
    up: { ax: 3, ay: 3, rows: ['..00...', '...00..', '...00..', '0000201', '.0000..'] },
    down: { ax: 3, ay: 1, rows: ['0000201', '.0000..', '..00...', '..0....'] },
  };
  const birds = [];
  let occupied = {};
  const rnd = (a, b) => a + Math.random() * (b - a);

  function spawnPoint() {
    const side = Math.random() < 0.5 ? -10 : W + 10;
    return [side, rnd(5, 50)];
  }
  function make(i) {
    const [x, y] = spawnPoint();
    return { x, y, vx: 0, vy: 0, state: 'away', timer: 1 + i * 1.7, face: 1, flap: 0, perch: null, peck: 0 };
  }
  for (let i = 0; i < 6; i++) birds.push(make(i));

  function choosePerch(b) {
    const list = EA.garden.perches().filter(p => !occupied[p.id]);
    if (!list.length) return null;
    // Birds like the roof and plant tops a little more than the fence.
    const weighted = list.flatMap(p => (p.plant ? [p, p, p] : p.id.startsWith('roof') || p.id === 'peak' ? [p, p] : [p]));
    const p = weighted[Math.floor(Math.random() * weighted.length)];
    occupied[p.id] = b;
    return p;
  }
  function release(b) { if (b.perch && occupied[b.perch.id] === b) delete occupied[b.perch.id]; b.perch = null; }

  function scare(b, mx, my) {
    release(b);
    const dx = b.x - mx, dy = b.y - my, d = Math.hypot(dx, dy) || 1;
    b.vx = dx / d * 90 + rnd(-20, 20); b.vy = -rnd(60, 100);
    b.state = 'flee'; b.face = b.vx >= 0 ? 1 : -1;
  }

  function update(dt, mouse) {
    // Birds shelter from the rain: everyone leaves and nobody comes back until it stops.
    const raining = EA.scene.state.rain;
    // Keep perches on plants in sync with the plants as they grow.
    const live = {}; for (const p of EA.garden.perches()) live[p.id] = p;
    for (const b of birds) {
      if (b.perch && b.perch.plant) {
        const p = live[b.perch.id];
        if (!p) { release(b); b.state = 'leave'; b.target = spawnPoint(); }
        else { b.perch = p; if (b.state === 'perch') { b.x = p.x; b.y = p.y; } }
      }
      b.flap += dt;
      if (mouse && b.state !== 'away' && b.state !== 'flee' && Math.hypot(b.x - mouse.x, b.y - mouse.y) < 18) {
        scare(b, mouse.x, mouse.y);
        for (const o of birds) if (o !== b && o.state === 'perch' && Math.hypot(o.x - b.x, o.y - b.y) < 34) scare(o, mouse.x, mouse.y);
      }
      if (raining && (b.state === 'perch' || b.state === 'arrive')) {
        release(b); b.state = 'leave'; b.target = spawnPoint(); b.target[1] = -20; b.vy = -30;
      }
      if (b.state === 'away') {
        b.timer -= dt;
        if (raining) { b.timer = Math.max(b.timer, 2); continue; }
        if (b.timer <= 0) {
          const p = choosePerch(b);
          if (p) { [b.x, b.y] = spawnPoint(); b.perch = p; b.state = 'arrive'; } else b.timer = 2;
        }
      } else if (b.state === 'arrive' || b.state === 'leave') {
        const tx = b.state === 'arrive' ? b.perch.x : b.target[0], ty = b.state === 'arrive' ? b.perch.y : b.target[1];
        const dx = tx - b.x, dy = ty - b.y, d = Math.hypot(dx, dy);
        const sp = Math.min(55, 15 + d * 1.2);
        b.vx += (dx / (d || 1) * sp - b.vx) * Math.min(1, dt * 3);
        b.vy += (dy / (d || 1) * sp - b.vy) * Math.min(1, dt * 3);
        b.x += b.vx * dt; b.y += b.vy * dt + Math.sin(b.flap * 9) * 0.15;
        if (Math.abs(b.vx) > 2) b.face = b.vx > 0 ? 1 : -1;
        if (b.state === 'arrive' && d < 1.5) { b.x = tx; b.y = ty; b.state = 'perch'; b.timer = rnd(6, 22); b.vx = b.vy = 0; }
        if (b.state === 'leave' && (b.x < -12 || b.x > W + 12 || b.y < -12)) { b.state = 'away'; b.timer = rnd(3, 10); }
      } else if (b.state === 'perch') {
        b.timer -= dt;
        b.peck = Math.max(0, b.peck - dt);
        if (Math.random() < dt * 0.5) b.peck = 0.25;
        if (Math.random() < dt * 0.3) b.face *= -1;
        if (b.timer <= 0) {
          release(b);
          if (Math.random() < 0.4) { const p = choosePerch(b); if (p) { b.perch = p; b.state = 'arrive'; b.vy = -30; continue; } }
          b.state = 'leave'; b.target = spawnPoint(); b.target[1] = -20; b.vy = -30;
        }
      } else if (b.state === 'flee') {
        b.x += b.vx * dt; b.y += b.vy * dt; b.vy -= 20 * dt;
        if (b.x < -12 || b.x > W + 12 || b.y < -12) { b.state = 'away'; b.timer = rnd(4, 9); }
      }
    }
  }

  function sprite(ctx, f, x, y, face) {
    const pal = EA.config.PAL_HEX;
    const w = f.rows[0].length;
    for (let r = 0; r < f.rows.length; r++) for (let c = 0; c < w; c++) {
      const ch = f.rows[r][c];
      if (ch === '.') continue;
      ctx.fillStyle = pal[+ch];
      const px = face > 0 ? c - f.ax : f.ax - c;
      ctx.fillRect(Math.round(x) + px, Math.round(y) - f.ay + r, 1, 1);
    }
  }
  function draw(ctx) {
    for (const b of birds) {
      if (b.state === 'away') continue;
      let f;
      if (b.state === 'perch') f = b.peck > 0 ? F.peck : F.perch;
      else f = Math.floor(b.flap * (b.state === 'flee' ? 16 : 9)) % 2 ? F.up : F.down;
      sprite(ctx, f, b.x, b.y, b.face);
    }
  }
  return { update, draw, birds };
})();
