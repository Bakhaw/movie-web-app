"use client";

import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { getDataByType } from "@/api";
import useQueryParams from "@/hooks/useQueryParams";
import { DataSortType, DataSourceType, Movie } from "@/types";

import MovieList from "@/components/MovieList";
import SearchForm from "@/components/SearchForm";
import Select from "@/components/Select";

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

  function handleSelectChange(e: ChangeEvent<HTMLSelectElement>) {
    setSortType(e.target.value as DataSortType);
  }

  // Load Movies data from the API
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

  return (
    <main className="flex flex-col gap-12 p-6">
      <div className="flex justify-between gap-4 flex-wrap">
        <SearchForm
          inputRef={inputRef}
          onClear={clearInput}
          onSubmit={handleSubmit}
        />

        <Select
          options={["popular", "top_rated"]}
          onChange={handleSelectChange}
        />
      </div>

      <MovieList movies={filteredMovies} />
    </main>
  );
};

export default Page;
