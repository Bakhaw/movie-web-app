import { useQuery } from "@tanstack/react-query";

import { getTrendingData } from "@/api";
import { DataSourceType, TV } from "@/types";

function getTrendingTvs() {
  const data = getTrendingData<TV>(DataSourceType.tv);
  return data;
}

function useTrendingTvs() {
  const { data, isLoading } = useQuery({
    queryKey: ["trending_tvs"],
    queryFn: getTrendingTvs,
  });

  return { data, isLoading };
}

export default useTrendingTvs;
