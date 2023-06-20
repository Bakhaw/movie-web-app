"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

import { getDataByType } from "@/api";
import useQueryParams from "@/hooks/useQueryParams";
import { DataSortType, DataSourceType, Movie } from "@/types";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import MovieList from "@/components/MovieList";
import SearchForm from "@/components/SearchForm";

interface QueryParams {
  search: string;
}

const Page: React.FC = () => {
  const { queryParams, setQueryParams } = useQueryParams<QueryParams>();
  const [searchText, setSearchText] = useState(queryParams.search || "");
  const inputRef = useRef<HTMLInputElement>(null);

  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [sortType, setSortType] = useState<DataSortType>(DataSortType.popular);

  async function initData() {
    const [popularMovies, topRatedMovies] = await Promise.all([
      getDataByType<Movie>(DataSourceType.movie, DataSortType.popular),
      getDataByType<Movie>(DataSourceType.movie, DataSortType.top_rated),
    ]);

    setPopularMovies(popularMovies.results);
    setTopRatedMovies(topRatedMovies.results);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!inputRef.current || !inputRef.current.value) {
      setSearchText("");
    } else {
      setSearchText(inputRef.current.value);
    }
    return e;
  }

  function clearInput() {
    if (!searchText || !inputRef.current) return;

    setSearchText("");
    setQueryParams({ search: "" });
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  function handleSelectChange(value: string) {
    setSortType(value as DataSortType);
  }

  // Load Movies data from the API
  useEffect(() => {
    initData();
  }, []);

  // Synchronize queryParams with input tag
  useEffect(() => {
    if (!searchText) return;

    setQueryParams({ search: searchText });
  }, [searchText, setQueryParams]);

  useEffect(() => {
    if (!queryParams.search || !inputRef.current) return;

    setSearchText(queryParams.search);
    inputRef.current.value = queryParams.search;
  }, [queryParams.search]);

  const currentMovies =
    sortType === DataSortType.popular ? popularMovies : topRatedMovies;

  // Filter datas
  const filteredMovies = useMemo(
    () =>
      currentMovies.filter((movie) =>
        searchText
          ? movie.title.toLowerCase().includes(searchText.toLowerCase())
          : movie
      ),
    [currentMovies, searchText]
  );

  const moviesListTitle =
    sortType === DataSortType.popular ? "Popular" : "Top rated";

  return (
    <main className="flex flex-col gap-12 p-6">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <SearchForm
          inputRef={inputRef}
          onClear={clearInput}
          onSubmit={handleSubmit}
        />

        <Select
          defaultValue={DataSortType.popular}
          onValueChange={handleSelectChange}
        >
          <SelectTrigger className="w-28">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={DataSortType.popular}>Popular</SelectItem>
            <SelectItem value={DataSortType.top_rated}>Top rated</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <MovieList listTitle={moviesListTitle} movies={filteredMovies} />
    </main>
  );
};

export default Page;
