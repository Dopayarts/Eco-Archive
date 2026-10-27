// Cloudflare KV, shaped like the Netlify Blobs store the api/ handlers expect.
// One KV namespace (bound as EA) holds every store, each under its own prefix.
export function kvStore(kv, name) {
  const key = k => name + "/" + k;
  return {
    get: (k, o = {}) => kv.get(key(k), o.type === "json" ? "json" : o.type === "arrayBuffer" ? "arrayBuffer" : "text"),
    set: (k, v) => kv.put(key(k), v),
    setJSON: (k, v) => kv.put(key(k), JSON.stringify(v)),
    delete: k => kv.delete(key(k)),
    async list({ prefix = "" } = {}) {
      const blobs = [];
      let cursor;
      do {
        const r = await kv.list({ prefix: key(prefix), cursor });
        blobs.push(...r.keys.map(x => ({ key: x.name.slice(name.length + 1) })));
        cursor = r.list_complete ? null : r.cursor;
      } while (cursor);
      return { blobs };
    },
  };
}

// Run one of the api/ handlers as a Cloudflare Pages Function.
export function serve(handle, name) {
  return ({ request, env }) => {
    if (!env.EA) return new Response(JSON.stringify({ error: "storage is not set up: bind a KV namespace as EA" }),
      { status: 503, headers: { "content-type": "application/json", "Access-Control-Allow-Origin": "*" } });
    return handle(request, { store: kvStore(env.EA, name), env: k => env[k] });
  };
}
