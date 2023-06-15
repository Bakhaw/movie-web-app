import config from "@/config";

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
