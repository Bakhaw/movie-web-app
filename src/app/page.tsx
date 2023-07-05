"use client";

import useFilteredMovies from "@/hooks/useFilteredMovies";
import useQueryParams from "@/hooks/useQueryParams";
import useTrendingMovies from "@/hooks/useTrendingMovies";
import useTrendingTvs from "@/hooks/useTrendingTvs";
import { QueryParams } from "@/types";

import MovieList from "@/components/MovieList";
import SearchForm from "@/components/SearchForm";
import TvList from "@/components/TvList";
import useFilteredTvs from "@/hooks/useFilteredTvs";

const Page: React.FC = () => {
  const { queryParams } = useQueryParams<QueryParams>();

  const { data: trendingMovies, isLoading: isMoviesLoading } =
    useTrendingMovies();
  const { data: trendingTvs, isLoading: isTvsLoading } = useTrendingTvs();

  const filteredMovies = useFilteredMovies({
    movies: trendingMovies?.results || [],
    query: queryParams.search || "",
  });

  const filteredTvs = useFilteredTvs({
    query: queryParams.search || "",
    tvs: trendingTvs?.results || [],
  });

  console.log("loading movies:", isMoviesLoading);

  return (
    <main className="flex flex-col gap-12 p-6">
      <SearchForm
        key="search-form"
        searchResults={[...filteredMovies, ...filteredTvs]}
      />

      <MovieList
        isLoading={isMoviesLoading}
        listTitle="Trending movies"
        movies={filteredMovies}
      />
      <TvList
        isLoading={isTvsLoading}
        listTitle="Trending TV"
        tvs={filteredTvs}
      />
    </main>
  );
};

export default Page;
