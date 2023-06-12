import { ApiResponseList, DataSourceType, TimeWindow } from "@/types";
import config from "@/config";

export async function getTrendingData<T>(
  dataSourceType: DataSourceType,
  timeWindow: TimeWindow = TimeWindow.week
): Promise<ApiResponseList<T>> {
  const url = `${config.TMDB_API_BASE_URL}/trending/${dataSourceType}/${timeWindow}?language=fr-FR&api_key=${config.TMDB_API_KEY}`;

  const res = await fetch(url);
  return res.json();
}
