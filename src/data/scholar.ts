// Runtime data is loaded from /data/scholar.json via fetch().

import type { Scholar } from "../lib/types";

export async function fetchScholar(): Promise<Scholar> {
  const response = await fetch("/data/scholar.json");
  if (!response.ok) {
    throw new Error(
      `Failed to fetch scholar.json: ${response.status} ${response.statusText}`
    );
  }
  return (await response.json()) as Scholar;
}
