// Eco-Archive scan library. Anyone can send a SCAN photo with the plant's right name;
// it waits for an admin, who confirms the plant (optionally a variety), names a new
// plant, or rejects it. Confirmed scans form the library: shown in each plant's photo
// gallery, matched by SCAN straight away, and used by the next retrain
// (tools/plant_id/pull_scans.cjs). Admin actions need ADMIN_PASSWORD, like /api/layout.
// Storage: Netlify Blobs or Cloudflare KV, through the store passed to handle().
//   POST   /api/scans              send a scan (admins: saved as confirmed when labelled)
//   GET    /api/scans              admin: scans waiting for review, with photos
//   GET    /api/scans/library      everyone: confirmed scans (no photos)
//   GET    /api/scans/photo/<id>   everyone: a confirmed scan's photo
//   POST   /api/scans/<id>         admin: { action: 'confirm', label, name, variety } or { action: 'reject' }
//   DELETE /api/scans/<id>         admin: take a confirmed scan out of the library
import { CORS, json, passwordOk, fromBase64, toBase64 } from "./common.mjs";

const MAX_PHOTO = 400 * 1024, MAX_PENDING = 300, EMB_BYTES = 1280;
const text = (v, n) => (typeof v === "string" ? v.replace(/[\u0000-\u001f<>]/g, " ").trim().slice(0, n) : "");
const label = v => (typeof v === "string" && /^(new:)?[a-z0-9-]{1,60}$/.test(v) ? v : "");
const pub = s => ({ id: s.id, label: s.label, name: s.name, variety: s.variety, at: s.at, emb: s.emb });

async function library(store) { return (await store.get("library", { type: "json" })) || []; }
async function saveLibrary(store, list) { await store.setJSON("library", list); }

export async function handle(req, { store, env }) {
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: CORS });
  const parts = new URL(req.url).pathname.replace(/\/+$/, "").split("/").slice(3); // after /api/scans
  const admin = passwordOk(req, env);

  if (req.method === "GET" && parts[0] === "library") return json(await library(store));
  if (req.method === "GET" && parts[0] === "photo" && parts[1]) {
    const s = await store.get("scan/" + parts[1], { type: "json" });
    if (!s || (s.status !== "ok" && !admin)) return json({ error: "not found" }, 404);
    const photo = await store.get("photo/" + parts[1], { type: "arrayBuffer" });
    if (!photo) return json({ error: "not found" }, 404);
    return new Response(photo, { headers: { ...CORS, "content-type": "image/jpeg", "cache-control": "public, max-age=86400" } });
  }

  if (req.method === "POST" && !parts.length) { // a new scan
    let b;
    try { b = await req.json(); } catch { return json({ error: "send JSON" }, 400); }
    const m = /^data:image\/jpeg;base64,([A-Za-z0-9+/=]+)$/.exec(b.photo || "");
    const photo = m && fromBase64(m[1]);
    if (!photo || photo.length > MAX_PHOTO) return json({ error: "photo must be a JPEG under 400 KB" }, 400);
    let emb = "";
    try { if (typeof b.emb === "string" && fromBase64(b.emb).length === EMB_BYTES) emb = b.emb; } catch { /* not base64 */ }
    if (!emb) return json({ error: "missing scan features" }, 400);
    const pending = (await store.list({ prefix: "pending/" })).blobs.length;
    if (!admin && pending >= MAX_PENDING) return json({ error: "the review queue is full; try again later" }, 429);
    const id = crypto.randomUUID().slice(0, 13);
    const s = {
      id, at: new Date().toISOString(), status: "pending", emb,
      suggest: text(b.suggest, 60), note: text(b.note, 300), from: text(b.from, 40),
      guess: Array.isArray(b.guess) ? b.guess.slice(0, 3).map(g => ({ id: text(g && g.id, 80), p: Math.max(0, Math.min(1, +(g && g.p) || 0)) })) : [],
    };
    await store.set("photo/" + id, photo);
    if (admin && label(b.label)) { // an admin adding to the library directly
      Object.assign(s, { status: "ok", label: label(b.label), name: text(b.name, 60), variety: text(b.variety, 60) });
      await store.setJSON("scan/" + id, s);
      await saveLibrary(store, [...(await library(store)), pub(s)]);
      return json({ ok: true, id, status: "ok" });
    }
    await store.setJSON("scan/" + id, s);
    await store.set("pending/" + id, "1");
    return json({ ok: true, id, status: "pending" });
  }

  if (!admin) return json({ error: "wrong password" }, 401);

  if (req.method === "GET" && !parts.length) { // the review queue, oldest first
    const ids = (await store.list({ prefix: "pending/" })).blobs.map(x => x.key.slice(8));
    const out = [];
    for (const id of ids) {
      const s = await store.get("scan/" + id, { type: "json" });
      const photo = await store.get("photo/" + id, { type: "arrayBuffer" });
      if (s) out.push({ ...s, emb: undefined, photo: photo ? "data:image/jpeg;base64," + toBase64(photo) : "" });
    }
    return json(out.sort((a, b) => a.at.localeCompare(b.at)));
  }

  const id = parts[0] && /^[a-f0-9-]{1,40}$/.test(parts[0]) ? parts[0] : "";
  const s = id && await store.get("scan/" + id, { type: "json" });
  if (!s) return json({ error: "no such scan" }, 404);

  if (req.method === "POST") {
    let b;
    try { b = await req.json(); } catch { return json({ error: "send JSON" }, 400); }
    if (b.action === "reject") {
      await Promise.all([store.delete("scan/" + id), store.delete("photo/" + id), store.delete("pending/" + id)]);
      await saveLibrary(store, (await library(store)).filter(x => x.id !== id));
      return json({ ok: true });
    }
    if (b.action === "confirm" && label(b.label)) {
      Object.assign(s, { status: "ok", label: label(b.label), name: text(b.name, 60), variety: text(b.variety, 60) });
      await store.setJSON("scan/" + id, s);
      await store.delete("pending/" + id);
      await saveLibrary(store, [...(await library(store)).filter(x => x.id !== id), pub(s)]);
      return json({ ok: true });
    }
    return json({ error: "action must be confirm (with a label) or reject" }, 400);
  }
  if (req.method === "DELETE") {
    await Promise.all([store.delete("scan/" + id), store.delete("photo/" + id), store.delete("pending/" + id)]);
    await saveLibrary(store, (await library(store)).filter(x => x.id !== id));
    return json({ ok: true });
  }
  return json({ error: "method not allowed" }, 405);
}
