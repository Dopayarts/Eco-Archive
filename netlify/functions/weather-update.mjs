// Scheduled: fetch Lagos weather every 15 minutes, even when nobody is visiting.
import { getStore } from "@netlify/blobs";
import { refresh } from "./weather.mjs";

export default async () => {
  await refresh(getStore({ name: "eco-archive-weather", consistency: "strong" }));
};
export const config = { schedule: "*/15 * * * *" };
