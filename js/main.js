// Main loop: draw the garden, move the birds, wire up the mouse.
(function () {
  const cv = document.getElementById('garden');
  cv.height = EA.H;
  const ctx = cv.getContext('2d', { willReadFrequently: true });
  EA.archive.parseAll();
  EA.archive.enableDropPreview();
  ctx.imageSmoothingEnabled = false;
  let mouse = null, last = performance.now(), t0 = last;

  function fit() { // integer scaling keeps pixels square and sharp
    const box = document.getElementById('stage').getBoundingClientRect();
    const s = Math.max(1, Math.floor(Math.min(box.width / EA.W, (box.height - 90) / EA.H)));
    cv.style.width = EA.W * s + 'px'; cv.style.height = EA.H * s + 'px';
  }
  addEventListener('resize', fit); fit();
  EA.garden.setPlot(0);
  document.getElementById('plots').addEventListener('click', e => {
    const b = e.target.closest('button[data-plot]');
    if (b) { EA.garden.setPlot(EA.garden.plot + +b.dataset.plot); EA.panel.select(null); }
  });

  function toCanvas(e) {
    const r = cv.getBoundingClientRect();
    return { x: (e.clientX - r.left) * EA.W / r.width, y: (e.clientY - r.top) * EA.H / r.height };
  }
  cv.addEventListener('pointermove', e => {
    mouse = toCanvas(e);
    const p = EA.garden.hit(mouse.x, mouse.y);
    EA.garden.setHover(p); cv.style.cursor = p ? 'pointer' : 'default';
  });
  cv.addEventListener('pointerleave', () => { mouse = null; EA.garden.setHover(null); });
  cv.addEventListener('click', e => {
    const m = toCanvas(e), p = EA.garden.hit(m.x, m.y);
    if (!p && EA.garden.isBuilding(m.x, m.y)) return EA.admin.knock();
    EA.panel.select(p);
  });
  addEventListener('keydown', e => {
    if (e.key === 'Escape') EA.panel.select(null);
    else if (document.activeElement !== document.getElementById('in') && e.key.length === 1 && !e.metaKey && !e.ctrlKey) document.getElementById('in').focus();
  });

  function frame(now) {
    const dt = Math.min(0.1, (now - last) / 1000), t = (now - t0) / 1000;
    last = now;
    const day = EA.clock.now();
    EA.scene.update(dt, day);
    EA.garden.draw(ctx, t, day, EA.scene.state.night, mouse);
    EA.birds.update(dt, mouse);
    EA.birds.draw(ctx);
    EA.scene.draw(ctx, t);
    EA.garden.drawOverlay(ctx, t);
    EA.r3d.quantize(ctx, EA.W, EA.H, null);
    EA.scene.recolor(ctx, EA.W, EA.H);
    EA.panel.update(dt, t);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
