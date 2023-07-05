"use client";

import { useState } from "react";

import useFilteredMovies from "@/hooks/useFilteredMovies";
import { useMovies } from "@/hooks/useMovies";
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

  const { data: movies, isLoading } = useMovies(sortType);
  const filteredMovies = useFilteredMovies({
    movies: movies?.results || [],
    query: queryParams.search || "",
  });

  const movieListTitle =
    sortType === DataSortType.popular ? "Popular" : "Top rated";

  return (
    <main className="flex flex-col gap-12 p-6">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <SearchForm searchResults={filteredMovies} />
        <SortTypeSelect onValueChange={handleSelectChange} />
      </div>

      <MovieList
        isLoading={isLoading}
        listTitle={movieListTitle}
        movies={filteredMovies}
      />
    </main>
  );
};

export default Page;
