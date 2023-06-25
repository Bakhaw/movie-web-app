import { useMemo } from "react";

import { Movie } from "@/types";

interface Props {
  movies: Movie[];
  query: string;
}

function useFilteredMovies({ movies, query }: Props) {
  const filteredMovies = useMemo(
    () =>
      movies?.filter((movie) =>
        query ? movie.title.toLowerCase().includes(query.toLowerCase()) : movie
      ),
    [movies, query]
  );

  return filteredMovies || [];
}

export default useFilteredMovies;
