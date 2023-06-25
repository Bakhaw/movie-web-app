import { useQuery } from "@tanstack/react-query";

import { getTrendingData } from "@/api";
import { DataSourceType, Movie } from "@/types";

function getTrendingMovies() {
  const data = getTrendingData<Movie>(DataSourceType.movie);
  return data;
}

function useTrendingMovies() {
  const { data, isLoading } = useQuery({
    queryKey: ["trending_movies"],
    queryFn: getTrendingMovies,
  });

  return { data, isLoading };
}

export default useTrendingMovies;
