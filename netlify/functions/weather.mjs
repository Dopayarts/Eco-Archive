// Lagos weather for the garden. Every 15 minutes Netlify runs weather-update.mjs,
// which calls refresh() here; /api/weather serves the latest reading (and
// refreshes it itself if it is older than that). Data: Open-Meteo, no key; its
// current conditions update every 15 minutes.
import { getStore } from "@netlify/blobs";

const LAGOS = { latitude: 6.4541, longitude: 3.3947 };
const URL_ = `https://api.open-meteo.com/v1/forecast?latitude=${LAGOS.latitude}&longitude=${LAGOS.longitude}` +
  "&current=weather_code,temperature_2m,relative_humidity_2m,precipitation,cloud_cover,is_day&timezone=Africa%2FLagos";
const MAX_AGE = 15 * 60 * 1000;
const CORS = { "Access-Control-Allow-Origin": "*" };

// WMO weather codes -> the garden's skies.
export function skyFor(code) {
  if (code >= 95) return "storm";
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return "rain";
  if (code === 45 || code === 48) return "haze";
  if (code === 3) return "overcast";
  if (code === 1 || code === 2) return "cloudy";
  return "clear";
}
const WORDS = { 0: "CLEAR", 1: "MAINLY CLEAR", 2: "PARTLY CLOUDY", 3: "OVERCAST", 45: "FOG/HAZE", 48: "FOG/HAZE",
  51: "LIGHT DRIZZLE", 53: "DRIZZLE", 55: "HEAVY DRIZZLE", 61: "LIGHT RAIN", 63: "RAIN", 65: "HEAVY RAIN",
  80: "SHOWERS", 81: "HEAVY SHOWERS", 82: "VIOLENT SHOWERS", 95: "THUNDERSTORM", 96: "THUNDERSTORM, HAIL", 99: "THUNDERSTORM, HAIL" };

export async function refresh(store, fetchFn = fetch) {
  const r = await fetchFn(URL_);
  if (!r.ok) throw new Error("open-meteo " + r.status);
  const c = (await r.json()).current;
  const reading = {
    place: "LAGOS", code: c.weather_code, sky: skyFor(c.weather_code), words: WORDS[c.weather_code] || "CODE " + c.weather_code,
    tempC: Math.round(c.temperature_2m), humidity: c.relative_humidity_2m, precipitationMm: c.precipitation,
    cloudCover: c.cloud_cover, isDay: !!c.is_day, observed: c.time, fetchedAt: new Date().toISOString(),
  };
  await store.setJSON("lagos", reading);
  return reading;
}

export async function handle(req, { store, fetchFn = fetch }) {
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: CORS });
  let reading = await store.get("lagos", { type: "json" });
  if (!reading || Date.now() - Date.parse(reading.fetchedAt) > MAX_AGE) {
    try { reading = await refresh(store, fetchFn); } catch (e) { if (!reading) return new Response(JSON.stringify({ error: "weather unavailable" }), { status: 503, headers: { ...CORS, "content-type": "application/json" } }); }
  }
  return new Response(JSON.stringify(reading), { headers: { ...CORS, "content-type": "application/json", "cache-control": "public, max-age=120" } });
}

export default async req => handle(req, { store: getStore({ name: "eco-archive-weather", consistency: "strong" }) });
export const config = { path: "/api/weather" };
