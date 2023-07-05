import { useQuery } from "@tanstack/react-query";

import { getDataById, getDataByType } from "@/api";
import { DataSortType, DataSourceType, TV } from "@/types";

function getPopularTvs() {
  const data = getDataByType<TV>(DataSourceType.tv, DataSortType.popular);
  return data;
}

function getTopRatedTvs() {
  const data = getDataByType<TV>(DataSourceType.tv, DataSortType.top_rated);
  return data;
}

export function useTvs(queryType: DataSortType) {
  const queryObj = {
    [DataSortType.popular]: getPopularTvs,
    [DataSortType.top_rated]: getTopRatedTvs,
  };

  const { data, isLoading } = useQuery({
    queryKey: ["tvs", queryType],
    queryFn: queryObj[queryType],
  });

  return { data, isLoading };
}

export function useTv(tvId: string) {
  const { data, isLoading } = useQuery({
    queryKey: ["tv", tvId],
    queryFn: () => getDataById<TV>(DataSourceType.tv, tvId),
  });

  return { data, isLoading };
}
