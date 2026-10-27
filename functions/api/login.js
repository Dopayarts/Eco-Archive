// Cloudflare Pages entry for /api/login (the logic is in api/layout.mjs).
import { handle } from "../../api/layout.mjs";
import { serve } from "../../api/kv.mjs";
export const onRequest = serve(handle, "layout");
