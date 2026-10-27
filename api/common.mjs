// Shared by the website's API on both hosts: Netlify (netlify/functions/) and
// Cloudflare Pages (functions/). Plain web code, so it runs on either.
export const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "content-type, x-admin-password",
  "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
};
export const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...CORS, "content-type": "application/json", "cache-control": "no-store" } });

// The admin password from ADMIN_PASSWORD (or a second one from ADMIN_PASSWORD_2),
// compared in constant time.
export function passwordOk(req, env) {
  const got = new TextEncoder().encode(req.headers.get("x-admin-password") || "");
  return [env("ADMIN_PASSWORD"), env("ADMIN_PASSWORD_2")].some(p => same(new TextEncoder().encode(p || ""), got));
}
function same(want, got) {
  if (!want.length || want.length !== got.length) return false;
  let d = 0;
  for (let i = 0; i < want.length; i++) d |= want[i] ^ got[i];
  return d === 0;
}

export const fromBase64 = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
export function toBase64(buf) {
  const a = new Uint8Array(buf);
  let s = "";
  for (let i = 0; i < a.length; i += 0x8000) s += String.fromCharCode(...a.subarray(i, i + 0x8000));
  return btoa(s);
}
