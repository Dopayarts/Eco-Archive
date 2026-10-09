// Hidden admin panel: knock on the greenhouse four times to open it.
// Where changes are saved depends on where the app runs:
//  - on claude.ai: the artifact's shared store, for its owner and editors;
//  - on the website or in the desktop app: the website's sync service
//    (/api/layout), unlocked with the admin password, so every copy updates;
//  - a local copy that cannot reach the sync service: this device only.
EA.admin = (function () {
  const box = document.getElementById('admin');
  let layout = { order: [], hidden: [] };
  let allowed = false;       // may this viewer open the panel at all
  let needsLogin = false;    // the sync service wants the admin password
  let pw = null;             // admin password for this visit
  let store = null;          // { save(layout) } once known
  let where = '';            // shown in the panel footer
  let knocks = [], confirm = null, status = '', saving = Promise.resolve(), lastSeen = '';

  async function init() {
    if (window.claude && claude.use) return useClaude();
    const base = location.protocol === 'file:' ? EA.config.SYNC_URL : location.origin;
    if (base && await pull(base)) return useSync(base);
    useLocal();
  }

  async function useClaude() {
    const [user, db] = await Promise.all([claude.use('user'), claude.use('db')]);
    allowed = user ? await user.canEdit() : false;
    if (!db) return;
    const ref = db.doc('garden/layout');
    where = 'SAVED FOR EVERY VIEWER';
    store = { save: L => ref.set(L) };
    ref.onSnapshot(snap => { if (snap.exists) show(snap.data()); }, () => {});
  }

  // Website / desktop: read the shared layout, and keep checking for changes.
  async function pull(base) {
    try {
      const r = await fetch(base + '/api/layout', { cache: 'no-store' });
      if (!r.ok || !(r.headers.get('content-type') || '').includes('json')) return false;
      const d = await r.json(), text = JSON.stringify(d);
      if (text !== lastSeen) { lastSeen = text; show(d); }
      return true;
    } catch (e) { return false; }
  }
  function useSync(base) {
    allowed = true; needsLogin = true; where = 'SYNCED TO EVERY COPY';
    try { pw = sessionStorage.getItem('eco-archive-pw'); } catch (e) {}
    setInterval(() => { if (!document.hidden) pull(base); }, 20000);
    store = { save: async L => {
      const r = await fetch(base + '/api/layout', { method: 'PUT', headers: { 'content-type': 'application/json', 'x-admin-password': pw || '' }, body: JSON.stringify(L) });
      if (r.status === 401) { forget(); throw { message: 'Wrong password. Log in again.' }; }
      if (!r.ok) throw { message: 'The sync service did not answer. Try again.' };
      lastSeen = JSON.stringify(await r.json());
    } };
    store.login = async attempt => {
      const r = await fetch(base + '/api/login', { method: 'POST', headers: { 'x-admin-password': attempt } });
      return r.ok;
    };
  }
  function forget() { pw = null; try { sessionStorage.removeItem('eco-archive-pw'); } catch (e) {} }

  function useLocal() {
    // A local copy with no connection to the website: the panel is yours, saved on this device.
    // A website without the sync service stays locked, because anyone could open it.
    allowed = location.protocol === 'file:'; where = 'SAVED ON THIS DEVICE ONLY';
    try { const s = JSON.parse(localStorage.getItem('eco-archive-layout') || 'null'); if (s) layout = s; } catch (e) {}
    EA.garden.applyLayout(layout);
    store = { save: async L => { try { localStorage.setItem('eco-archive-layout', JSON.stringify(L)); } catch (e) { throw { message: 'This browser blocked saving.' }; } } };
  }

  function show(d) {
    layout = { order: [...(d.order || [])], hidden: [...(d.hidden || [])] };
    EA.garden.applyLayout(layout);
    if (!box.hidden) render();
  }

  function knock() {
    const now = performance.now();
    knocks = knocks.filter(t => now - t < 1600).concat(now);
    if (knocks.length >= 4 && allowed) { knocks = []; open(); }
  }

  function current() { // the layout as the garden shows it now
    return {
      order: [...EA.garden.plants].sort((a, b) => a.spec.n - b.spec.n).map(p => p.uid),
      hidden: EA.garden.plants.filter(p => p.hidden).map(p => p.uid),
    };
  }
  function commit(next, msg) {
    layout = next; EA.garden.applyLayout(layout); confirm = null;
    status = 'SAVING...'; render();
    saving = saving.then(() => store ? store.save({ order: layout.order, hidden: layout.hidden }) : null)
      .then(() => { status = msg; render(); })
      .catch(e => { status = 'NOT SAVED: ' + ((e && e.message) || 'try again').toUpperCase(); render(); });
  }

  const name = p => EA.species[p.spec.species].name;
  function act(kind, key) {
    const L = current();
    const i = L.order.indexOf(key), p = EA.garden.plants.find(q => q.uid === key);
    if (kind === 'up' || kind === 'down') { // swap with the neighbouring visible bed
      const vis = L.order.filter(k => !L.hidden.includes(k)), v = vis.indexOf(key), w = vis[v + (kind === 'up' ? -1 : 1)];
      if (!w) return;
      const j = L.order.indexOf(w); [L.order[i], L.order[j]] = [L.order[j], L.order[i]];
      return commit(L, `MOVED ${name(p)}.`);
    }
    if (kind === 'remove') { confirm = key; return render(); }
    if (kind === 'yes') { L.hidden.push(key); return commit(L, `REMOVED ${name(p)}. RESTORE IT BELOW ANY TIME.`); }
    if (kind === 'no') { confirm = null; return render(); }
    if (kind === 'restore') { L.hidden = L.hidden.filter(k => k !== key); L.order.splice(i, 1); L.order.splice(L.order.length, 0, key); return commit(L, `RESTORED ${name(p)}.`); }
    if (kind === 'reset') { confirm = '__reset'; return render(); }
    if (kind === 'reset-yes') return commit({ order: [], hidden: [] }, 'BACK TO THE ORIGINAL LAYOUT.');
    if (kind === 'close') return close();
    if (kind === 'logout') { forget(); return close(); }
  }

  function renderLogin(msg) {
    box.innerHTML = `<div class="win">
      <div class="bar"><span>ADMIN :: LOG IN</span><button data-k="close" data-key="">[CLOSE]</button></div>
      <form id="admin-login" class="login"><label for="admin-pw">PASSWORD</label>
      <input id="admin-pw" type="password" autocomplete="current-password"><button type="submit">[ENTER]</button></form>
      <div class="foot"><span class="st">${msg || 'CHANGES SYNC TO THE WEBSITE AND THE DESKTOP APP.'}</span></div></div>`;
    const f = box.querySelector('#admin-login'), inp = box.querySelector('#admin-pw');
    inp.focus();
    f.addEventListener('submit', async e => {
      e.preventDefault();
      const attempt = inp.value;
      renderLogin('CHECKING...');
      let ok = false;
      try { ok = await store.login(attempt); } catch (err) { return renderLogin('COULD NOT REACH THE SYNC SERVICE.'); }
      if (!ok) return renderLogin('WRONG PASSWORD.');
      pw = attempt; try { sessionStorage.setItem('eco-archive-pw', pw); } catch (err) {}
      render();
    });
  }

  function render() {
    if (needsLogin && !pw) return renderLogin();
    const vis = EA.garden.visible(), gone = EA.garden.plants.filter(p => p.hidden);
    const b = (k, key, label) => `<button data-k="${k}" data-key="${key || ''}">[${label}]</button>`;
    const rows = vis.map((p, i) => confirm === p.uid
      ? `<div class="row warn">REMOVE ${name(p)} FROM ${p.spec.bed}? ${b('yes', p.uid, 'YES')} ${b('no', p.uid, 'NO')}</div>`
      : `<div class="row"><span>${p.spec.bed}  ${name(p).padEnd(11)}</span><span>${i ? b('up', p.uid, 'UP') : '<i>[UP]</i>'} ${i < vis.length - 1 ? b('down', p.uid, 'DN') : '<i>[DN]</i>'} ${b('remove', p.uid, 'REMOVE')}</span></div>`).join('');
    const removed = gone.length ? gone.map(p => `<div class="row"><span>${name(p)}</span>${b('restore', p.uid, 'RESTORE')}</div>`).join('')
      : '<div class="row dim">NOTHING REMOVED.</div>';
    box.innerHTML = `<div class="win">
      <div class="bar"><span>ADMIN :: GARDEN LAYOUT</span>${b('close', '', 'CLOSE')}</div>
      <div class="sub">BEDS IN ORDER</div>${rows}
      <div class="sub">REMOVED PLANTS</div>${removed}
      <div class="foot">${confirm === '__reset' ? `PUT EVERY PLANT BACK IN ITS FIRST BED? ${b('reset-yes', '', 'YES')} ${b('no', '', 'NO')}` : b('reset', '', 'RESET LAYOUT')}
      <span class="st">${status || where}</span></div>
      ${needsLogin ? `<div class="foot">${b('logout', '', 'LOG OUT')}</div>` : ''}</div>`;
  }
  box.addEventListener('click', e => {
    const t = e.target.closest('button[data-k]');
    if (t) act(t.dataset.k, t.dataset.key);
    else if (e.target === box) close();
  });
  addEventListener('keydown', e => { if (e.key === 'Escape' && !box.hidden) close(); else if (!box.hidden) e.stopPropagation(); }, true);
  function open() { status = ''; confirm = null; render(); box.hidden = false; }
  function close() { box.hidden = true; }

  init();
  return { knock };
})();
