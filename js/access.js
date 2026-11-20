// Accessibility: read-aloud for plant records, keyboard control of the garden, and
// screen reader labels. Speech uses the browser's own voice, so it works offline.
EA.access = (function () {
  const $ = id => document.getElementById(id);
  const cv = $('garden'), tabs = $('tabs');
  const calm = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);

  // ---------- screen reader announcements ----------
  // The terminal types text out letter by letter, which a screen reader would read in
  // fragments, so whole lines are announced here instead.
  const live = document.createElement('div');
  live.className = 'sr-only'; live.setAttribute('aria-live', 'polite'); live.id = 'sr-live';
  document.body.appendChild(live);
  let pending = [], timer = null;
  function announce(text) {
    pending.push(plain(text));
    clearTimeout(timer);
    timer = setTimeout(() => { live.textContent = pending.join('. ').slice(0, 1500); pending = []; }, 150);
  }

  // Terminal text, made easier to hear: no boxes, bars or symbols, and not all capitals.
  function plain(t) {
    return String(t)
      .replace(/\[x\]/g, 'done:').replace(/\[>\]/g, 'now:').replace(/\[ \]/g, '')
      .replace(/\[[#.]+\]/g, '').replace(/[█#*>]/g, ' ').replace(/\/\//g, ',')
      .replace(/ · /g, ', ').replace(/-- (.*?) --/g, '$1')
      .replace(/\b(\d+)D\b/g, '$1 days').replace(/\s*\n\s*/g, '. ').replace(/\.\s*\./g, '.')
      .replace(/ {2,}/g, ' ').trim().toLowerCase();
  }

  // ---------- read aloud ----------
  const synth = window.speechSynthesis, canSpeak = !!(synth && window.SpeechSynthesisUtterance);
  let speaking = false;
  function voice() {
    const vs = synth.getVoices();
    return vs.find(v => /^en[-_]NG/i.test(v.lang)) || vs.find(v => /^en[-_]GB/i.test(v.lang)) || vs.find(v => /^en/i.test(v.lang)) || null;
  }
  function speak(text) {
    if (!canSpeak) return;
    stop();
    // short pieces: some browsers stop reading a single long utterance part way
    const parts = [];
    for (const line of String(text).split(/\n+/)) {
      const s = plain(line);
      if (!s) continue;
      if (parts.length && parts[parts.length - 1].length + s.length < 220) parts[parts.length - 1] += '. ' + s;
      else parts.push(s);
    }
    if (!parts.length) return;
    const v = voice();
    speaking = true; label();
    parts.forEach((s, i) => {
      const u = new SpeechSynthesisUtterance(s);
      if (v) { u.voice = v; u.lang = v.lang; } else u.lang = 'en';
      u.rate = 0.95;
      if (i === parts.length - 1) u.onend = u.onerror = () => { speaking = false; label(); };
      synth.speak(u);
    });
  }
  function stop() {
    if (canSpeak && (speaking || synth.speaking || synth.pending)) synth.cancel();
    speaking = false; label();
  }

  // [LISTEN] button beside the record's tabs
  const listen = document.createElement('button');
  listen.type = 'button'; listen.id = 'listen';
  listen.title = 'Read this record aloud (offline, using your device voice)';
  function label() {
    listen.textContent = speaking ? '[STOP]' : '[LISTEN]';
    listen.setAttribute('aria-label', speaking ? 'Stop reading aloud' : 'Read this record aloud');
    listen.classList.toggle('on', speaking);
  }
  label();
  if (canSpeak) {
    tabs.appendChild(listen);
    listen.addEventListener('click', () => speaking ? stop() : speak(EA.panel.text()));
    if (synth.onvoiceschanged !== undefined) synth.onvoiceschanged = () => {};
  }

  // ---------- keyboard control of the garden ----------
  const here = () => EA.garden.visible().filter(p => EA.garden.plotOf(p) === EA.garden.plot);
  const nameOf = p => EA.species[p.spec.species].name;
  const stageOf = p => EA.lifecycle.state(p.spec, EA.clock.now()).label;
  let cur = -1;
  cv.tabIndex = 0;
  cv.setAttribute('role', 'application');
  cv.setAttribute('aria-roledescription', 'garden');
  function plotLine() {
    return `Plot ${EA.garden.plot + 1} of ${EA.garden.plots ? EA.garden.plots() : 1}, ${here().length} plants.`;
  }
  cv.setAttribute('aria-label', 'Eco-Archive garden. Use left and right arrows to move between plants, Enter to open one, Page Up and Page Down to change plot.');
  function focusPlant(i) {
    const ps = here();
    if (!ps.length) return;
    cur = (i + ps.length) % ps.length;
    EA.garden.setHover(ps[cur]);
    announce(`${nameOf(ps[cur])}, ${stageOf(ps[cur])}, plant ${cur + 1} of ${ps.length}`);
  }
  function changePlot(d) {
    EA.garden.setPlot(EA.garden.plot + d); if (EA.selected) EA.panel.select(null);
    cur = -1; buildList(); announce(plotLine());
  }
  cv.addEventListener('focus', () => announce(plotLine()));
  cv.addEventListener('blur', () => EA.garden.setHover(null));
  cv.addEventListener('keydown', e => {
    const k = e.key;
    if (k === 'ArrowRight' || k === 'ArrowDown') focusPlant(cur + 1);
    else if (k === 'ArrowLeft' || k === 'ArrowUp') focusPlant(cur < 0 ? -1 : cur - 1);
    else if (k === 'Home') focusPlant(0);
    else if (k === 'End') focusPlant(-1);
    else if (k === 'PageDown') changePlot(1);
    else if (k === 'PageUp') changePlot(-1);
    else if ((k === 'Enter' || k === ' ') && cur >= 0 && here()[cur]) EA.panel.select(here()[cur]);
    else return;
    e.preventDefault(); e.stopPropagation();
  });

  // A plain list of this plot's plants for screen readers and keyboards. It stays out of
  // sight until a keyboard user tabs into it.
  const list = document.createElement('div');
  list.id = 'plantlist'; list.className = 'sr-only';
  list.setAttribute('role', 'group'); list.setAttribute('aria-label', 'Plants on this plot');
  cv.after(list);
  let lastKey = '';
  function buildList() {
    const ps = here(), key = EA.garden.plot + ':' + ps.map(p => p.uid).join(',');
    if (key === lastKey) return;
    lastKey = key;
    list.textContent = '';
    for (const p of ps) {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = `[${nameOf(p)}]`;
      b.setAttribute('aria-label', `Open ${nameOf(p).toLowerCase()}, bed ${p.spec.bed}`);
      b.addEventListener('click', () => EA.panel.select(p));
      list.appendChild(b);
    }
  }
  buildList();
  setInterval(buildList, 3000); // plants change as the admin edits the layout
  $('plots').addEventListener('click', () => setTimeout(() => { buildList(); announce(plotLine()); }, 0));

  // ---------- labels ----------
  // Bracketed terminal buttons read as "left bracket..." on some screen readers.
  for (const b of document.querySelectorAll('button')) {
    if (!b.getAttribute('aria-label')) {
      const t = (b.title || b.textContent.replace(/[\[\]]/g, '')).trim();
      if (t) b.setAttribute('aria-label', t.charAt(0).toUpperCase() + t.slice(1).toLowerCase());
    }
  }
  $('in').setAttribute('aria-label', 'Command: type help, search a plant, or listen');
  const tv = $('turn');
  tv.setAttribute('role', 'img');
  tv.setAttribute('aria-label', 'Spinning view of the open plant. Drag to turn it.');
  $('out').setAttribute('aria-live', 'off'); // announced whole by the live region above
  $('out').setAttribute('role', 'log');
  $('out').setAttribute('aria-label', 'Terminal output');

  return { announce, speak, stop, calm, canSpeak, get speaking() { return speaking; } };
})();
