// Static fallback data for the site.
// Runtime data is loaded from /data/scholar.json via fetch().

import type { Scholar } from "../lib/types";

export const scholar: Scholar = {
  profileUrl:
    "https://scholar.google.com/citations?user=7GKKBLkAAAAJ&hl=en",
  totals: {
    citations: 1035,
    citationsSince: { year: 2022, value: 847 },
    hIndex: 11,
    hIndexSince: { year: 2022, value: 11 },
    i10Index: 15,
    i10IndexSince: { year: 2022, value: 12 },
  },
  perYear: [
    { year: 2013, count: 3 },
    { year: 2014, count: 10 },
    { year: 2015, count: 9 },
    { year: 2016, count: 14 },
    { year: 2017, count: 5 },
    { year: 2018, count: 18 },
    { year: 2019, count: 33 },
    { year: 2020, count: 92 },
    { year: 2021, count: 108 },
    { year: 2022, count: 141 },
    { year: 2023, count: 159 },
    { year: 2024, count: 171 },
    { year: 2025, count: 200 },
    { year: 2026, count: 68 },
  ],
};

export async function fetchScholar(): Promise<Scholar> {
  const response = await fetch("/data/scholar.json");
  if (!response.ok) {
    throw new Error(
      `Failed to fetch scholar.json: ${response.status} ${response.statusText}`
    );
  }
  return (await response.json()) as Scholar;
}
