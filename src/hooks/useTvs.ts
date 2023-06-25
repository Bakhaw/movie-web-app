import { useQuery } from "@tanstack/react-query";

import { getDataByType } from "@/api";
import { DataSortType, DataSourceType, TV } from "@/types";

function getPopularTvs() {
  const data = getDataByType<TV>(DataSourceType.tv, DataSortType.popular);
  return data;
}

function getTopRatedTvs() {
  const data = getDataByType<TV>(DataSourceType.tv, DataSortType.top_rated);
  return data;
}

function useTvs(queryType: DataSortType) {
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

export default useTvs;
