// Netlify entry for /api/layout and /api/login (the logic is in api/layout.mjs).
import { getStore } from "@netlify/blobs";
import { handle } from "../../api/layout.mjs";

export default req => handle(req, { store: getStore({ name: "eco-archive", consistency: "strong" }), env: k => Netlify.env.get(k) });

export const config = { path: ["/api/layout", "/api/login"] };
