import { fetchData, generateUrl } from "@/lib/utils";
import {
  ApiResponseList,
  DataSortType,
  DataSourceType,
  TimeWindow,
} from "@/types";

/**
 * Fetches trending data from a specified data source for a given time window.
 *
 * @param dataSourceType - The type of data source (e.g., "movies", "tv").
 * @param timeWindow - The time window for which to retrieve trending data (default: TimeWindow.week).
 * @returns {Promise<ApiResponseList<T>>} - A Promise that resolves to the fetched trending data.
 */
export async function getTrendingData<T>(
  dataSourceType: DataSourceType,
  timeWindow: TimeWindow = TimeWindow.week
): Promise<ApiResponseList<T>> {
  const url = generateUrl(`trending/${dataSourceType}/${timeWindow}`, {});
  const data = fetchData<ApiResponseList<T>>(url);

  return data;
}

/**
 * Fetches data of a specific item by its ID from a specified data source.
 *
 * @param dataSourceType - The type of data source (e.g., "movies", "tv").
 * @param id - The ID of the item to fetch.
 * @returns {Promise<T>} - A Promise that resolves to the fetched data.
 */
export async function getDataById<T>(
  dataSourceType: DataSourceType,
  id: string
): Promise<T> {
  const url = generateUrl(`${dataSourceType}/${id}`, {});
  const data = fetchData<T>(url);

  return data;
}

/**
 * Fetches data of a specific type from a specified data source.
 *
 * @param dataSourceType - The type of data source (e.g., "movies", "tv").
 * @param dataSortType - The sorting type of the data (e.g., "popular", "top_rated").
 * @returns {Promise<ApiResponseList<T>>} - A Promise that resolves to the fetched data.
 */
export function getDataByType<T>(
  dataSourceType: DataSourceType,
  dataSortType: DataSortType
): Promise<ApiResponseList<T>> {
  const url = generateUrl(`${dataSourceType}/${dataSortType}`, {});
  const data = fetchData<ApiResponseList<T>>(url);

  return data;
}
