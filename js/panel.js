// Terminal side panel: specimen records, the turntable, and a command line.
EA.panel = (function () {
  const $ = id => document.getElementById(id);
  const out = $('out'), input = $('in'), viewer = $('viewer'), tabs = $('tabs');
  const tv = $('turn'), tctx = tv.getContext('2d', { willReadFrequently: true });
  const TW = tv.width, TH = tv.height;
  let tab = 'info', mode = 'plant', theta = 0.6, spin = 0.7, drag = null;
  let typing = null; // {el, text, i}
  let follow = true; // scroll to the newest line (commands) or stay at the top (records)
  let bodyEl = null;

  // ---------- output ----------
  function clear() { out.textContent = ''; typing = null; }
  function type(text, cls) {
    const el = document.createElement('div');
    if (cls) el.className = cls;
    out.appendChild(el);
    if (typing) flush();
    typing = { el, text, i: 0 };
    return el;
  }
  function scroll() { out.scrollTop = follow ? out.scrollHeight : 0; }
  function flush() { if (typing) { typing.el.textContent = typing.text; typing = null; } scroll(); }
  function tick() {
    if (!typing) return;
    typing.i = Math.min(typing.text.length, typing.i + 6);
    typing.el.textContent = typing.text.slice(0, typing.i) + (typing.i < typing.text.length ? '█' : '');
    if (typing.i >= typing.text.length) typing = null;
    scroll();
  }
  const queue = []; // lines waiting to be typed after the current one
  function say(text, cls, cb) { queue.push([text, cls, cb]); }
  function pump() { if (!typing && queue.length) { const [t, c, cb] = queue.shift(); const el = type(t, c); if (cb) cb(el); } }

  // ---------- content ----------
  const bar = (f, n = 12) => '[' + '#'.repeat(Math.round(f * n)).padEnd(n, '.') + ']';
  const days = d => d < 1 ? `${Math.round(d * 24)}H` : `${d.toFixed(1)} DAYS`;

  function header(p) {
    const sp = EA.species[p.spec.species], st = EA.lifecycle.state(p.spec, EA.clock.now());
    return `${sp.name}  //  ${sp.latin.toUpperCase()}\nBED ${p.spec.bed} · SPECIMEN #${String(p.spec.n).padStart(2, '0')} · ${st.label}`;
  }
  function body(p) {
    const sp = EA.species[p.spec.species], st = EA.lifecycle.state(p.spec, EA.clock.now());
    if (tab === 'info') {
      return `FAMILY  ${sp.family}\nORIGIN  ${sp.origin}\n${sp.local ? `LOCAL   ${sp.local}\n` : ''}HABIT   ${sp.kind === 'annual' ? 'ANNUAL' : 'PERENNIAL'}\n\n${sp.summary}\n\n` +
        sp.facts.map(f => '* ' + f).join('\n') + `\n\nLEAF: ${sp.leaf.note}`;
    }
    if (tab === 'uses') {
      return sp.uses.map(([k, v]) => `> ${k}\n  ${v}`).join('\n\n') +
        '\n\n-- RECORDED FOR EDUCATION ONLY. NOT MEDICAL ADVICE. --';
    }
    if (tab === 'history') return sp.history;
    // life cycle
    const now = EA.clock.now();
    let s = '';
    if (sp.kind === 'annual') {
      const len = sp.stages.reduce((a, x) => a + x.days, 0);
      s += `ANNUAL · ONE CYCLE = ${len} ARCHIVE DAYS (~${EA.clock.realSpan(len)} REAL)\n`;
      s += st.id === 'unsown' ? `SOWING IN ${days(st.daysLeft)}\n\n` : `CYCLE ${st.cycle} · AGE ${st.age.toFixed(1)} DAYS\n\n`;
      sp.stages.forEach((x, i) => {
        const mark = i < st.idx ? '[x]' : i === st.idx ? '[>]' : '[ ]';
        s += `${mark} ${x.label.padEnd(13)} ${String(x.days).padStart(3)}D` + (i === st.idx ? ' ' + bar(st.progress, 8) : '') + '\n';
      });
    } else {
      s += `PERENNIAL · FOLLOWS NIGERIA'S RAINY AND DRY SEASONS\nGROWTH CALENDAR ${EA.clock.date(EA.clock.doy(now))} · YEAR ${st.cycle} (DEMO SPEED)\n\n`;
      sp.seasons.forEach((x, i) => {
        const mark = i < st.idx ? '[x]' : i === st.idx ? '[>]' : '[ ]';
        s += `${mark} ${x.label.padEnd(17)} ${EA.clock.date(x.from)}-${EA.clock.date(x.to - 1)}` + (i === st.idx ? ' ' + bar(st.progress, 6) : '') + '\n';
      });
    }
    const cur = (sp.stages || sp.seasons)[st.idx];
    if (cur) s += `\nNOW: ${st.label}\n${cur.desc}\n`;
    s += `\nNEXT: ${st.next.label} IN ${days(st.daysLeft)} (~${EA.clock.realSpan(st.daysLeft)} REAL)`;
    return s;
  }

  function show(p, animate = true) {
    clear(); queue.length = 0; follow = false; bodyEl = null;
    if (!p) {
      viewer.hidden = true; tabs.hidden = true;
      return;
    }
    viewer.hidden = false; tabs.hidden = false;
    const photos = EA.species[p.spec.species].photos || {};
    for (const m of ['photo', 'flower']) viewer.querySelector(`[data-mode=${m}]`).hidden = !photos[m === 'photo' ? 'plant' : 'flower'];
    if ((mode === 'photo' && !photos.plant) || (mode === 'flower' && !photos.flower)) mode = 'plant';
    for (const b of tabs.querySelectorAll('button')) b.classList.toggle('on', b.dataset.tab === tab);
    for (const b of viewer.querySelectorAll('button')) b.classList.toggle('on', b.dataset.mode === mode);
    if (animate) { say(header(p), 'hd'); say(body(p), '', el => { bodyEl = el; }); }
    else { type(header(p), 'hd'); flush(); bodyEl = type(body(p)); flush(); }
  }

  function select(p) {
    EA.selected = p;
    queue.length = 0;
    if (p) { theta = 0.6; EA.garden.showPlant(p); }
    show(p);
    if (!p) welcome();
  }

  function welcome() {
    clear(); follow = true;
    say('ECO-ARCHIVE.OS 0.1  ::  LIVING SPECIMEN ARCHIVE', 'hd');
    say(`LIVE SINCE ${new Date(EA.config.LIVE_AT).toISOString().slice(0, 16).replace('T', ' ')} UTC\n` +
      `EVERY VISITOR SEES THE SAME GARDEN. CLOCK AND SEASONS: REAL NIGERIAN TIME.\nPLANTS GROW AT DEMO SPEED: 1 REAL HOUR = ${EA.config.DAYS_PER_REAL_HOUR} ARCHIVE DAY.`);
    say(list(true));
    say(`${EA.garden.visible().length} SPECIMENS ON ${Math.ceil(EA.garden.visible().length / EA.PLOT)} PLOTS. CLICK A PLANT, OR TYPE HELP.`);
  }
  function list(plotOnly, items) {
    const now = EA.clock.now();
    let ps = items || EA.garden.visible();
    if (plotOnly) ps = ps.filter(p => EA.garden.plotOf(p) === EA.garden.plot);
    return '  #  BED   SPECIMEN       STAGE\n' + ps.map(p => p.spec).map(s => {
      const st = EA.lifecycle.state(s, now);
      return `${String(s.n).padStart(3)}  ${s.bed.padEnd(5)} ${EA.species[s.species].name.padEnd(14)} ${st.label}`;
    }).join('\n');
  }

  // ---------- commands ----------
  const HELP = `COMMANDS
  LS            LIST ALL SPECIMENS
  OPEN <N|NAME> OPEN A SPECIMEN (EG. OPEN 3, OPEN MINT)
  INFO USES HISTORY CYCLE   SWITCH TAB
  PLANT | LEAF  SWITCH TURNTABLE MODE
  FIND <NAME>   SEARCH BY NAME, LOCAL NAME OR LATIN
  CSV           DOWNLOAD EVERY PLANT'S DETAILS AS A SPREADSHEET
  TIME          SHOW THE CLOCK AND LAGOS WEATHER
  PEEK <DAYS>   PREVIEW THE GARDEN AHEAD (PEEK 0 TO RETURN)
  CLOSE         BACK TO THE INDEX
  CLEAR         CLEAR THE SCREEN`;
  function run(cmd) {
    const [c, ...rest] = cmd.trim().toLowerCase().split(/\s+/);
    const arg = rest.join(' ');
    if (!c) return;
    // Commands that switch the view redraw the record instead of echoing.
    if (['info', 'uses', 'history', 'cycle'].includes(c)) {
      tab = c; if (EA.selected) return show(EA.selected, false);
    } else if (c === 'plant' || c === 'leaf') {
      mode = c; if (EA.selected) return show(EA.selected, false);
    }
    follow = true;
    say('> ' + cmd, 'echo');
    if (c === 'help' || c === '?') return say(HELP);
    if (c === 'ls' || c === 'list') return say(list(false));
    if (c === 'csv' || c === 'export') {
      if (location.protocol === 'file:') return say('THE SPREADSHEET IS BUILT FOR THE WEBSITE: ' + EA.config.SYNC_URL + '/plants.csv');
      const a = document.createElement('a'); a.href = 'plants.csv'; a.download = 'eco-archive-plants.csv'; a.click();
      return say('DOWNLOADING PLANTS.CSV.');
    }
    if (c === 'find' || c === 'search') {
      if (!arg) return say('USAGE: FIND <NAME>   E.G. FIND UGU');
      const hits = EA.garden.visible().filter(p => { const sp = EA.species[p.spec.species];
        return [sp.name, sp.latin, sp.local || '', sp.family].join(' ').toLowerCase().includes(arg); });
      return say(hits.length ? list(false, hits) + '\nTYPE OPEN <#> TO VIEW ONE.' : 'NOTHING FOUND.');
    }
    if (c === 'clear') { clear(); queue.length = 0; return; }
    if (c === 'close' || c === 'exit') return select(null);
    if (c === 'time' || c === 'weather') {
      return say(`ARCHIVE ${EA.clock.stamp()}\n${EA.scene.describe()}\nARCHIVE DAYS GROWN SINCE LIVE: ${EA.clock.realDays().toFixed(2)} (1 PER REAL HOUR)` +
        '\nCLOCK, SEASONS AND DAY/NIGHT FOLLOW REAL NIGERIAN TIME: RAINS APR-OCT, DRY NOV-MAR, HARMATTAN DEC-FEB.' +
        (EA.clock.peek ? `\nPEEKING +${EA.clock.peek} DAYS AHEAD` : ''));
    }
    if (c === 'peek') {
      const n = parseFloat(arg);
      if (isNaN(n) || n < 0 || n > 3600) return say('USAGE: PEEK <DAYS>   (0-3600)');
      EA.clock.peek = n;
      return say(n ? `PREVIEWING THE GARDEN ${n} ARCHIVE DAYS AHEAD. THE SHARED CLOCK IS UNCHANGED.` : 'BACK TO THE PRESENT.');
    }
    if (['info', 'uses', 'history', 'cycle', 'plant', 'leaf'].includes(c)) return say('OPEN A SPECIMEN FIRST.');
    if (c === 'open' || c === 'cat') {
      const n = parseInt(arg, 10);
      const p = EA.garden.visible().find(q => q.spec.n === n || q.spec.bed.toLowerCase() === arg ||
        EA.species[q.spec.species].name.toLowerCase().startsWith(arg) || q.spec.species === arg ||
        (EA.species[q.spec.species].local || '').toLowerCase().split(/[ ,()]+/).includes(arg));
      return p ? select(p) : say('NO SUCH SPECIMEN. TRY LS.');
    }
    say(`UNKNOWN COMMAND: ${c.toUpperCase()}. TYPE HELP.`);
  }

  $('cmd').addEventListener('submit', e => { e.preventDefault(); const v = input.value; input.value = ''; run(v); });
  tabs.addEventListener('click', e => { const t = e.target.dataset.tab; if (t) { tab = t; show(EA.selected, false); } });
  viewer.addEventListener('click', e => { const m = e.target.dataset.mode; if (m) { mode = m; show(EA.selected, false); } });
  out.addEventListener('click', () => { flush(); while (queue.length) { pump(); flush(); } });

  // ---------- turntable ----------
  tv.addEventListener('pointerdown', e => { drag = { x: e.clientX, t: theta }; tv.setPointerCapture(e.pointerId); });
  tv.addEventListener('pointermove', e => { if (drag) theta = drag.t + (e.clientX - drag.x) * 0.02; });
  tv.addEventListener('pointerup', () => { drag = null; });

  const pictures = {};
  function picture(src) { if (!pictures[src]) { pictures[src] = new Image(); pictures[src].src = src; } return pictures[src]; }

  function drawTurntable(dt, t) {
    const p = EA.selected;
    if (!p) return;
    if (!drag) theta += dt * spin;
    const pal = EA.config.PAL_HEX;
    tctx.fillStyle = pal[0]; tctx.fillRect(0, 0, TW, TH);
    // floor grid
    tctx.fillStyle = pal[1];
    for (let x = 0; x < TW; x += 8) tctx.fillRect(x, 0, 1, TH);
    for (let y = 0; y < TH; y += 8) tctx.fillRect(0, y, TW, 1);
    tctx.fillStyle = pal[0]; tctx.fillRect(4, 4, TW - 8, TH - 8);
    // photos taken of the real plant, as pixel art
    const photos = EA.species[p.spec.species].photos || {};
    const still = mode === 'photo' ? photos.plant : mode === 'flower' ? photos.flower : null;
    const card = mode === 'leaf' && photos.leaf;
    if (still || card) {
      const img = picture(still || card);
      if (img.complete && img.naturalWidth) {
        const k = Math.min((TW - 12) / img.naturalWidth, (TH - 20) / img.naturalHeight), w = img.naturalWidth * k, h = img.naturalHeight * k;
        tctx.imageSmoothingEnabled = false;
        if (still) tctx.drawImage(img, Math.round((TW - w) / 2), Math.round((TH - 10 - h) / 2), Math.round(w), Math.round(h));
        else { // the photographed leaf spins like a card
          const sx = Math.cos(theta), cw = Math.max(1, Math.abs(w * sx));
          tctx.save(); tctx.translate(TW / 2, 0); if (sx < 0) tctx.scale(-1, 1);
          tctx.drawImage(img, Math.round(-cw / 2), Math.round((TH - 10 - h) / 2), Math.round(cw), Math.round(h));
          tctx.restore();
        }
      }
      EA.font.draw(tctx, still ? (mode === 'photo' ? 'PHOTO' : 'FLOWER PHOTO') : 'LEAF PHOTO', 6, TH - 9, 2);
      EA.scene.recolor(tctx, TW, TH);
      return;
    }
    let prims, scale, cy;
    if (mode === 'leaf') {
      prims = EA.model.leafModel(p.spec.species); scale = 92; cy = TH / 2 + 4;
    } else {
      const st = EA.lifecycle.state(p.spec, EA.clock.now());
      prims = EA.model.plant(p.spec, st);
      let top = 0.2, wide = 0.2;
      const reach = v => { top = Math.max(top, v[1]); wide = Math.max(wide, Math.hypot(v[0], v[2])); };
      for (const q of prims) {
        if (q.t === 'stem') q.pts.forEach(reach);
        if (q.t === 'leaf') reach([q.base[0] + q.dir[0] * q.len, q.base[1] + q.dir[1] * q.len, q.base[2] + q.dir[2] * q.len]);
        if (q.t === 'blob') reach(q.p);
      }
      scale = Math.min(110, (TH - 30) / top, (TW / 2 - 6) / wide); cy = TH - 16;
      // pedestal
      tctx.fillStyle = pal[1]; tctx.beginPath(); tctx.ellipse(TW / 2, cy + 3, 30, 7, 0, 0, 7); tctx.fill();
      tctx.fillStyle = pal[2]; tctx.beginPath(); tctx.ellipse(TW / 2, cy, 30, 7, 0, 0, 7); tctx.fill();
      tctx.fillStyle = pal[1]; tctx.beginPath(); tctx.ellipse(TW / 2, cy, 22, 4.5, 0, 0, 7); tctx.fill();
      tctx.fillStyle = pal[0];
      for (let i = 0; i < 8; i++) { const a = theta + i * Math.PI / 4; tctx.fillRect(Math.round(TW / 2 + Math.cos(a) * 26), Math.round(cy + Math.sin(a) * 5.5), 1, 1); }
      if (st.id === 'unsown') EA.font.draw(tctx, 'NOT YET SOWN', TW / 2 - 23, TH / 2, 2);
    }
    const id = p.spec.species, st = EA.lifecycle.state(p.spec, EA.clock.now());
    const leafFile = mode === 'leaf' && EA.archive.scenes[id] && EA.archive.scenes[id].leaf;
    if (leafFile || (mode === 'plant' && EA.archive.has(id) && !['unsown', 'seed', 'sprout'].includes(st.id))) {
      // a species archived from a 3D file
      if (leafFile) EA.archive.draw(tctx, TW, TH, leafFile, { theta, tilt: 0.15, scale: 92, cx: TW / 2, cy: TH / 2 + 4, levels: [1, 2, 3] });
      else if (EA.archive.ready(id)) EA.archive.draw(tctx, TW, TH, EA.archive.modelFor(id, st.id),
        { theta, tilt: 0.3, scale: TH - 34, cx: TW / 2, cy, g: st.g, levels: [1, 2, 3] });
      else EA.font.draw(tctx, 'LOADING MODEL', TW / 2 - 25, TH / 2, 2);
    } else {
      EA.r3d.render(tctx, prims, { theta, tilt: mode === 'leaf' ? 0.15 : 0.3, scale, cx: TW / 2, cy, sway: 0, shade: { lo: 1, hi: 2, top: 3 } });
    }
    EA.r3d.quantize(tctx, TW, TH, null);
    const deg = String(Math.round(((theta * 180 / Math.PI) % 360 + 360) % 360)).padStart(3, '0');
    EA.font.draw(tctx, (mode === 'leaf' ? 'LEAF' : 'PLANT') + ' ROT ' + deg, 6, TH - 9, 2);
    EA.scene.recolor(tctx, TW, TH);
  }

  let sinceRefresh = 0;
  function update(dt, t) {
    pump(); tick();
    drawTurntable(dt, t);
    $('clk').textContent = EA.clock.stamp() + (EA.clock.peek ? '  [PEEK]' : '');
    // keep the life-cycle tab live once it has finished typing
    sinceRefresh += dt;
    if (sinceRefresh > 2 && EA.selected && tab === 'cycle' && !typing && !queue.length) {
      sinceRefresh = 0;
      if (bodyEl && bodyEl.isConnected) bodyEl.textContent = body(EA.selected);
    }
  }

  welcome();
  return { select, update, run, say };
})();
