// Eco-Archive sync service. Keeps the garden layout (which plants are shown
// and in which beds) in Netlify Blobs, so the website and the desktop app
// share it. Reading is open to everyone; changing it needs ADMIN_PASSWORD,
// set in the Netlify site's environment variables.
import { getStore } from "@netlify/blobs";
import { timingSafeEqual } from "node:crypto";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "content-type, x-admin-password",
  "Access-Control-Allow-Methods": "GET, PUT, POST, OPTIONS",
};
const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...CORS, "content-type": "application/json", "cache-control": "no-store" } });

function passwordOk(req, env) {
  const want = env("ADMIN_PASSWORD") || "";
  const got = req.headers.get("x-admin-password") || "";
  if (!want) return false;
  const a = Buffer.from(got), b = Buffer.from(want);
  return a.length === b.length && timingSafeEqual(a, b);
}

const cleanList = v => (Array.isArray(v) ? v.filter(x => typeof x === "string" && x.length <= 100).slice(0, 500) : []);

export async function handle(req, { store, env }) {
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: CORS });
  const path = new URL(req.url).pathname;

  if (path.endsWith("/login")) {
    if (req.method !== "POST") return json({ error: "use POST" }, 405);
    if (!env("ADMIN_PASSWORD")) return json({ error: "ADMIN_PASSWORD is not set on this site" }, 503);
    return passwordOk(req, env) ? json({ ok: true }) : json({ error: "wrong password" }, 401);
  }

  if (req.method === "GET") {
    const layout = (await store.get("layout", { type: "json" })) || { order: [], hidden: [] };
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

export default req => handle(req, { store: getStore({ name: "eco-archive", consistency: "strong" }), env: k => Netlify.env.get(k) });

export const config = { path: ["/api/layout", "/api/login"] };
