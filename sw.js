// Offline copy of the website: once a page has been opened (and SCAN used once), it
// keeps working with no connection, phone or computer. Every file is served from the
// cache when there is no network; the page is always the newest when online.
const CACHE = 'eco-archive-v1';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin || url.pathname.startsWith('/api/')) return;
  e.respondWith(caches.open(CACHE).then(async cache => {
    const hit = await cache.match(e.request, { ignoreSearch: true });
    const fresh = fetch(e.request).then(res => { if (res.ok) cache.put(e.request, res.clone()); return res; });
    // the page itself: newest when online (today's plants), saved copy when offline
    if (e.request.mode === 'navigate') return fresh.catch(() => hit || Response.error());
    if (hit) { fresh.catch(() => {}); return hit; } // model files: saved copy now, newer one next time
    return fresh;
  }));
});
