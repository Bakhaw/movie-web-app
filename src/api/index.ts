import { ApiResponseList, DataSourceType, TimeWindow } from "@/types";
import { fetchData } from "@/utils/fetchData";
import { generateUrl } from "@/utils/generateUrl";

export async function getTrendingData<T>(
  dataSourceType: DataSourceType,
  timeWindow: TimeWindow = TimeWindow.week
): Promise<ApiResponseList<T>> {
  const url = generateUrl(`trending/${dataSourceType}/${timeWindow}`, {});
  const data = fetchData<ApiResponseList<T>>(url);

  return data;
}

export async function getDataById<T>(
  dataSourceType: DataSourceType,
  id: string
): Promise<T> {
  const url = generateUrl(`${dataSourceType}/${id}`, {});
  const data = fetchData<T>(url);

  return data;
}
