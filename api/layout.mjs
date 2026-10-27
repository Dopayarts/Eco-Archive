// Eco-Archive sync service. Keeps the garden layout (which plants are shown
// and in which beds) in the host's storage (Netlify Blobs or Cloudflare KV), so the website and the desktop app
// share it. Reading is open to everyone; changing it needs ADMIN_PASSWORD,
// set in the site's environment variables.
import { CORS, json, passwordOk, adminPasswords } from "./common.mjs";

// The layout last published on the Netlify site (2026-10-09), used until an
// admin saves one here, so moving hosts doesn't bring hidden beds back.
const START = {
  order: ["basil-11", "mint-23", "lavender-37", "chamomile-41", "aloe-53", "mint-97", "hibiscus-1130", "aloe-83", "chamomile-67", "lavender-71", "basil-101"],
  hidden: ["chamomile-67", "lavender-71", "aloe-83", "basil-101", "mint-97"],
  updatedAt: "2026-10-09T11:54:54.070Z",
};

const cleanList = v => (Array.isArray(v) ? v.filter(x => typeof x === "string" && x.length <= 100).slice(0, 500) : []);

export async function handle(req, { store, env }) {
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: CORS });
  const path = new URL(req.url).pathname;

  if (path.endsWith("/login")) {
    if (req.method !== "POST") return json({ error: "use POST" }, 405);
    if (!adminPasswords(env).length) return json({ error: "ADMIN_PASSWORD is not set on this site" }, 503);
    return passwordOk(req, env) ? json({ ok: true }) : json({ error: "wrong password" }, 401);
  }

  if (req.method === "GET") {
    const layout = (await store.get("layout", { type: "json" })) || START;
    return json(layout);
  }
  if (req.method === "PUT") {
    if (!passwordOk(req, env)) return json({ error: "wrong password" }, 401);
    let body;
    try { body = await req.json(); } catch { return json({ error: "send JSON" }, 400); }
    const layout = { order: cleanList(body.order), hidden: cleanList(body.hidden), updatedAt: new Date().toISOString() };
    await store.setJSON("layout", layout);
    return json(layout);
  }
  return json({ error: "method not allowed" }, 405);
}
