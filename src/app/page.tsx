"use client";

import { ChangeEvent, FormEvent, useRef, useState } from "react";

import useFilteredMovies from "@/hooks/useFilteredMovies";
import useFilteredTvs from "@/hooks/useFilteredTvs";
import useQueryParams from "@/hooks/useQueryParams";
import useTrendingMovies from "@/hooks/useTrendingMovies";
import useTrendingTvs from "@/hooks/useTrendingTvs";
import { QueryParams } from "@/types";

import MovieList from "@/components/MovieList";
import TvList from "@/components/TvList";
// import SearchForm from "@/components/SearchForm";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Page: React.FC = () => {
  const { queryParams, setQueryParams } = useQueryParams<QueryParams>();

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

  const inputRef = useRef<HTMLInputElement>(null);
  const [showSearchResults, setShowSearchResults] = useState(false);

  function hideSearchResults() {
    setShowSearchResults(false);
  }

  function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    setQueryParams({ search: e.target.value });
  }

  function onInputFocus() {
    setShowSearchResults(true);
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setShowSearchResults(false);
    setQueryParams({ search: inputRef?.current?.value });
  }

  return (
    <main className="flex flex-col gap-12 p-6">
      <form
        className="flex flex-col md:flex-row justify-start items-start gap-2"
        onSubmit={onSubmit}
      >
        <div className="md:hidden">
          <Label htmlFor="search">Search Movies & TV shows</Label>
        </div>

        <Input
          id="search"
          className="w-full md:w-[298px]"
          defaultValue={queryParams.search}
          onChange={onInputChange}
          onFocus={onInputFocus}
          placeholder="Black Mirror"
          ref={inputRef}
        />

        <div className="hidden md:block">
          <Button size="sm" variant="default">
            Search
          </Button>
        </div>
      </form>

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
