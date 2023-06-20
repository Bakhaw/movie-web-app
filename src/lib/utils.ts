import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import config from "@/config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFullYear(date: string) {
  return new Date(date).getFullYear().toString();
}

export async function fetchData<T>(url: string): Promise<T> {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    return res.json();
  } catch (error) {
    console.error("Error while fetching data:", error);
    throw error;
  }
}

export function generateUrl(
  endpoint: string,
  queryParams: Record<string, string>
): string {
  const queryString = Object.keys(queryParams)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`
    )
    .join("&");

  const url = `${config.TMDB_API_BASE_URL}/${endpoint}?${queryString}&language=en-US&api_key=${config.TMDB_API_KEY}`;

  return url;
}
