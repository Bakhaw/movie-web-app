import { useQuery } from "@tanstack/react-query";

import { getDataById, getDataByType } from "@/api";
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

export function useMovies(queryType: DataSortType) {
  const queryObj = {
    [DataSortType.popular]: getPopularMovies,
    [DataSortType.top_rated]: getTopRatedMovies,
  };

  const { data, isLoading } = useQuery({
    queryKey: ["movies", queryType],
    queryFn: queryObj[queryType],
  });

  return { data, isLoading };
}

export function useMovie(movieId: string) {
  const { data, isLoading } = useQuery({
    queryKey: ["movie", movieId],
    queryFn: () => getDataById<Movie>(DataSourceType.movie, movieId),
  });

  return { data, isLoading };
}
