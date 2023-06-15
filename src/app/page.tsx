"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

import { getTrendingData } from "@/api";
import useQueryParams from "@/hooks/useQueryParams";
import { DataSourceType, Movie, TV } from "@/types";

import MovieList from "@/components/MovieList";
import SearchForm from "@/components/SearchForm";
import TvList from "@/components/TvList";

interface QueryParams {
  search: string;
}

const Page: React.FC = () => {
  const { queryParams, setQueryParams } = useQueryParams<QueryParams>();
  const [searchText, setSearchText] = useState(queryParams.search || "");
  const inputRef = useRef<HTMLInputElement>(null);

  const [trendingMovies, setMovies] = useState<Movie[]>([]);
  const [trendingTv, setTv] = useState<TV[]>([]);

  async function initData() {
    const [trendingMovies, trendingTv] = await Promise.all([
      getTrendingData<Movie>(DataSourceType.movie),
      getTrendingData<TV>(DataSourceType.tv),
    ]);

    setMovies(trendingMovies.results);
    setTv(trendingTv.results);
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

  // Load Movies & TV data from the API
  useEffect(() => {
    initData();
  }, []);

  // Synchronize queryParams with input tag
  useEffect(() => {
    if (!searchText) return;

    setQueryParams({ search: searchText });
  }, [searchText]);

  useEffect(() => {
    if (!queryParams.search || !inputRef.current) return;

    setSearchText(queryParams.search);
    inputRef.current.value = queryParams.search;
  }, [queryParams.search]);

  // Filter datas
  const filteredMovies = trendingMovies.filter((movie) =>
    searchText
      ? movie.title.toLowerCase().includes(searchText.toLowerCase())
      : movie
  );

  const filteredTv = trendingTv.filter((tv) =>
    searchText ? tv.name.toLowerCase().includes(searchText.toLowerCase()) : tv
  );

  return (
    <main className="flex flex-col gap-12 p-6">
      <SearchForm
        inputRef={inputRef}
        onClear={clearInput}
        onSubmit={handleSubmit}
      />

      <MovieList movies={filteredMovies} />
      <TvList tv={filteredTv} />
    </main>
  );
};

export default Page;
