// Cloudflare Pages entry for /api/weather (the logic is in api/weather.mjs).
import { handle } from "../../api/weather.mjs";
import { serve } from "../../api/kv.mjs";
export const onRequest = serve(handle, "weather");
