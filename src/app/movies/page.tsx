"use client";

import { useMemo, useState } from "react";

import useMovies from "@/hooks/useMovies";
import useQueryParams from "@/hooks/useQueryParams";
import { DataSortType, QueryParams } from "@/types";

import MovieList from "@/components/MovieList";
import SearchForm from "@/components/SearchForm";
import SortTypeSelect from "@/components/SortTypeSelect";

const Page: React.FC = () => {
  const { queryParams } = useQueryParams<QueryParams>();
  const [sortType, setSortType] = useState<DataSortType>(DataSortType.popular);
  function handleSelectChange(value: string) {
    setSortType(value as DataSortType);
  }

  const currentMovies = useMovies(sortType);
  const filteredMovies = useMemo(
    () =>
      currentMovies?.results.filter((movie) =>
        queryParams.search
          ? movie.title.toLowerCase().includes(queryParams.search.toLowerCase())
          : movie
      ),
    [currentMovies?.results, queryParams.search]
  );

  const movieListTitle =
    sortType === DataSortType.popular ? "Popular" : "Top rated";

  return (
    <main className="flex flex-col gap-12 p-6">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <SearchForm searchResults={filteredMovies || []} />
        <SortTypeSelect onValueChange={handleSelectChange} />
      </div>

      <MovieList listTitle={movieListTitle} movies={filteredMovies} />
    </main>
  );
};

export default Page;
