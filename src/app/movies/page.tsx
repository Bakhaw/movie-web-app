"use client";

import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";

import { getDataByType } from "@/api";
import useQueryParams from "@/hooks/useQueryParams";
import { DataSortType, DataSourceType, Movie } from "@/types";

import MovieList from "@/components/MovieList";
import SearchForm from "@/components/SearchForm";

interface QueryParams {
  search: string;
}

const Page: React.FC = () => {
  const { queryParams, setQueryParams } = useQueryParams<QueryParams>();
  const [searchText, setSearchText] = useState(queryParams.search || "");
  const inputRef = useRef<HTMLInputElement>(null);

  const [movies, setMovies] = useState<Movie[]>([]);
  const [sortType, setSortType] = useState<DataSortType>(DataSortType.popular);

  async function initData() {
    const popularMovies = await getDataByType<Movie>(
      DataSourceType.movie,
      sortType
    );

    setMovies(popularMovies.results);
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

  function handleSelectChange(e: ChangeEvent<HTMLSelectElement>) {
    setSortType(e.target.value as DataSortType);
  }

  // Load Movies & TV data from the API
  useEffect(() => {
    initData();
  }, [sortType]);

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
  const filteredMovies = movies.filter((movie) =>
    searchText
      ? movie.title.toLowerCase().includes(searchText.toLowerCase())
      : movie
  );

  return (
    <main className="flex flex-col gap-12 p-6">
      <div className="flex justify-between">
        <SearchForm
          inputRef={inputRef}
          onClear={clearInput}
          onSubmit={handleSubmit}
        />

        <select onChange={handleSelectChange}>
          <option value="popular">popular</option>
          <option value="top_rated">top rated</option>
        </select>
      </div>

      <MovieList movies={filteredMovies} />
    </main>
  );
};

export default Page;