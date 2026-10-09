// Scene: Nigeria's seasons, the weather and day and night. Every visitor sees
// the same sky, because the weather is worked out from the shared archive clock.
EA.scene = (function () {
  // In the rainy season a shower starts every RAIN_EVERY real minutes and
  // lasts RAIN_FOR minutes. Some showers turn into thunderstorms.
  const RAIN_EVERY = 10, RAIN_FOR = 3, STORM_CHANCE = 0.45;

  // Palettes, darkest to lightest. The garden is drawn in the Game Boy greens,
  // then each frame is recoloured with the palette for the season and hour.
  const PALS = {
    rainy: EA.config.PAL,
    dry: [[34, 52, 20], [78, 94, 46], [146, 156, 60], [166, 174, 92]],
    harmattan: [[52, 50, 34], [98, 94, 64], [160, 152, 104], [180, 172, 132]],
  };
  const NIGHT_TINT = [12, 22, 52];
  const night = pal => pal.map((c, i) => c.map((v, k) => Math.round(v * (0.42 + i * 0.07) + NIGHT_TINT[k] * 0.55)));
  for (const k of Object.keys(PALS)) PALS[k + '-night'] = night(PALS[k]);

  let preview = null; // { kind, night, rain, storm, sub, until }
  let flash = 0, nextFlash = 3, bolt = null;
  const state = { season: 'rainy', sub: '', night: false, rain: false, storm: false, preview: null, pal: PALS.rainy };

  // Real hour in Nigeria, so night falls for everyone at the same moment.
  function nigeriaHour() {
    const d = new Date();
    return (d.getUTCHours() + d.getUTCMinutes() / 60 + EA.config.UTC_OFFSET_HOURS + 24) % 24;
  }
  function weather() {
    if (EA.clock.season(EA.clock.parts().month).id !== 'rainy') return { rain: false, storm: false };
    const mins = (Date.now() - EA.config.LIVE_AT) / 60000; // real minutes since go-live
    const shower = Math.floor(mins / RAIN_EVERY);
    const rain = mins - shower * RAIN_EVERY < RAIN_FOR;
    return { rain, storm: rain && EA.rng(shower * 7919 + 13)() < STORM_CHANCE };
  }

  function update(dt, day) {
    if (preview && performance.now() > preview.until) setPreview(null);
    const s = EA.clock.season(EA.clock.parts().month); // the real season in Nigeria
    const h = nigeriaHour();
    Object.assign(state, preview ? { season: preview.kind, sub: preview.sub, night: preview.night, rain: preview.rain, storm: preview.storm }
      : { season: s.id, sub: s.sub, night: h < 6.5 || h >= 19, ...weather() });
    state.preview = preview && preview.kind;
    const key = (state.sub === 'HARMATTAN' ? 'harmattan' : state.season) + (state.night ? '-night' : '');
    if (state.pal !== PALS[key]) { state.pal = PALS[key]; theme(); }
    // lightning
    flash = Math.max(0, flash - dt);
    if (state.storm) {
      nextFlash -= dt;
      if (nextFlash <= 0) { flash = 0.18; nextFlash = 3 + Math.random() * 7; bolt = boltPath(); }
    }
  }
  // The page colours follow the scene too.
  function theme() {
    const hex = c => '#' + c.map(v => v.toString(16).padStart(2, '0')).join('');
    state.pal.forEach((c, i) => document.documentElement.style.setProperty('--c' + i, hex(c)));
  }

  function boltPath() {
    let x = 30 + Math.random() * (EA.W - 60), y = 0;
    const pts = [[x, y]];
    while (y < 34) { x += (Math.random() - 0.5) * 10; y += 4 + Math.random() * 5; pts.push([x, Math.min(y, 36)]); }
    return pts;
  }

  // Rain, lightning and harmattan dust, drawn over the garden and birds.
  function draw(ctx, t) {
    const C = EA.config.PAL_HEX;
    if (state.rain) {
      ctx.fillStyle = C[state.night ? 2 : 1];
      const n = state.storm ? 140 : 90, H = EA.H;
      for (let i = 0; i < n; i++) {
        const sp = 150 + (i % 5) * 18;
        const y = ((i * 53.7 + t * sp) % (H + 8)) - 6;
        const x = ((i * 97.3 + y * 0.35) % (EA.W + 10)) - 5;
        ctx.fillRect(Math.round(x), Math.round(y), 1, 3);
      }
      if (flash > 0 && bolt) {
        ctx.fillStyle = C[3];
        for (let i = 1; i < bolt.length; i++) {
          const [x0, y0] = bolt[i - 1], [x1, y1] = bolt[i];
          for (let s = 0; s <= 8; s++) ctx.fillRect(Math.round(x0 + (x1 - x0) * s / 8), Math.round(y0 + (y1 - y0) * s / 8), 1, 1);
        }
      }
    } else if (state.sub === 'HARMATTAN') {
      ctx.fillStyle = C[2];
      for (let i = 0; i < 40; i++) {
        const x = ((i * 61.3 + t * (8 + i % 4 * 3)) % (EA.W + 4)) - 2;
        const y = (i * 37.1 + Math.sin(t * 0.7 + i) * 3) % EA.H;
        ctx.fillRect(Math.round(x), Math.round(y), 1, 1);
      }
    }
  }

  // Swap the Game Boy greens for the scene palette. During a lightning flash
  // everything jumps two shades lighter.
  function recolor(ctx, w, h) {
    const base = EA.config.PAL, pal = state.pal;
    const out = flash > 0 ? [pal[2], pal[3], pal[3], pal[3]] : pal;
    if (out === base) return;
    const img = ctx.getImageData(0, 0, w, h), d = img.data;
    for (let i = 0; i < d.length; i += 4) {
      if (!d[i + 3]) continue;
      for (let k = 0; k < 4; k++) {
        if (d[i] === base[k][0] && d[i + 1] === base[k][1] && d[i + 2] === base[k][2]) {
          d[i] = out[k][0]; d[i + 1] = out[k][1]; d[i + 2] = out[k][2]; break;
        }
      }
    }
    ctx.putImageData(img, 0, 0);
  }

  // Preview buttons: show the last rainy or dry season for a few seconds.
  const bar = document.getElementById('scenes');
  function setPreview(kind) {
    if (kind) {
      const harm = kind === 'dry' && Math.random() < 0.5;
      preview = { kind, night: Math.random() < 0.5, rain: kind === 'rainy', storm: kind === 'rainy',
        sub: harm ? 'HARMATTAN' : '', until: performance.now() + 5000 };
      nextFlash = 0.6;
    } else preview = null;
    if (bar) for (const b of bar.querySelectorAll('button')) b.classList.toggle('on', b.dataset.scene === (kind || 'now'));
  }
  if (bar) bar.addEventListener('click', e => {
    const b = e.target.closest('button[data-scene]');
    if (b) setPreview(b.dataset.scene === 'now' ? null : b.dataset.scene);
  });

  // One line for the terminal and the clock.
  function describe() {
    const s = state;
    const name = s.season === 'rainy' ? 'RAINY SEASON' : 'DRY SEASON';
    const sky = s.storm ? 'THUNDERSTORM' : s.rain ? 'RAIN' : s.sub === 'HARMATTAN' ? 'HARMATTAN HAZE' : s.season === 'rainy' ? 'BRIGHT SPELL' : 'CLEAR';
    return `${name}${s.sub ? ' (' + s.sub + ')' : ''} · ${sky} · ${s.night ? 'NIGHT' : 'DAY'}`;
  }
  function secondsLeft() { return preview ? Math.max(0, Math.ceil((preview.until - performance.now()) / 1000)) : 0; }

  return { state, update, draw, recolor, describe, secondsLeft, weather };
})();
