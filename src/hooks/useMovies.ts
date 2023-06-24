import { useQuery } from "@tanstack/react-query";

import { getDataByType } from "@/api";
import { DataSortType, DataSourceType, Movie } from "@/types";

function getPopularMovies() {
  const data = getDataByType<Movie>(DataSourceType.movie, DataSortType.popular);
  return data;
}

function getTopRatedMovies() {
  const data = getDataByType<Movie>(
    DataSourceType.movie,
    DataSortType.top_rated
  );
  return data;
}

function useMovies(queryType: DataSortType) {
  const queryObj = {
    [DataSortType.popular]: getPopularMovies,
    [DataSortType.top_rated]: getTopRatedMovies,
  };

  const { data } = useQuery({
    queryKey: ["movies", queryType],
    queryFn: queryObj[queryType],
  });

  return data;
}

export default useMovies;
