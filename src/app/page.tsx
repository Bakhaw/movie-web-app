"use client";

import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

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

  // Filter datas
  const filteredMovies = useMemo(
    () =>
      trendingMovies.filter((movie) =>
        searchText
          ? movie.title.toLowerCase().includes(searchText.toLowerCase())
          : movie
      ),
    [searchText, trendingMovies]
  );

  const filteredTv = useMemo(
    () =>
      trendingTv.filter((tv) =>
        searchText
          ? tv.name.toLowerCase().includes(searchText.toLowerCase())
          : tv
      ),
    [searchText, trendingTv]
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!inputRef.current || !inputRef.current.value) {
      setSearchText("");
    } else {
      setMovies(filteredMovies);
      setTv(filteredTv);
      setSearchText(inputRef.current.value);
    }

    return e;
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
  }

  function handleInputClear() {
    if (!searchText || !inputRef.current) return;

    setSearchText("");
    setQueryParams({ search: "" });
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  async function initData() {
    const [trendingMovies, trendingTv] = await Promise.all([
      getTrendingData<Movie>(DataSourceType.movie),
      getTrendingData<TV>(DataSourceType.tv),
    ]);

    setMovies(trendingMovies.results);
    setTv(trendingTv.results);
  }

  // Load Movies & TV data from the API
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

  return (
    <main className="flex flex-col gap-12 p-6">
      <SearchForm searchResults={[...filteredMovies, ...filteredTv]} />

      <MovieList listTitle="Trending movies" movies={filteredMovies} />
      <TvList listTitle="Trending TV" tvs={filteredTv} />
    </main>
  );
};

export default Page;
