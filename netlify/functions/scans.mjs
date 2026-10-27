// Netlify entry for /api/scans (the logic is in api/scans.mjs).
import { getStore } from "@netlify/blobs";
import { handle } from "../../api/scans.mjs";

export default req => handle(req, { store: getStore({ name: "eco-archive-scans", consistency: "strong" }), env: k => Netlify.env.get(k) });

export const config = { path: ["/api/scans", "/api/scans/*"] };
