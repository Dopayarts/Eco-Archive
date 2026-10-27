// Cloudflare Pages entry for /api/scans and everything under it (the logic is in api/scans.mjs).
import { handle } from "../../../api/scans.mjs";
import { serve } from "../../../api/kv.mjs";
export const onRequest = serve(handle, "scans");
