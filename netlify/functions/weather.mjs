// Netlify entry for /api/weather (the logic is in api/weather.mjs).
import { getStore } from "@netlify/blobs";
import { handle } from "../../api/weather.mjs";

export default async req => handle(req, { store: getStore({ name: "eco-archive-weather", consistency: "strong" }) });
export const config = { path: "/api/weather" };
