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
import { DataSortType, DataSourceType, TV } from "@/types";

import SearchForm from "@/components/SearchForm";
import Select from "@/components/Select";
import TvList from "@/components/TvList";

interface QueryParams {
  search: string;
}

const Page: React.FC = () => {
  const { queryParams, setQueryParams } = useQueryParams<QueryParams>();
  const [searchText, setSearchText] = useState(queryParams.search || "");
  const inputRef = useRef<HTMLInputElement>(null);

  const [popularTv, setPopularTv] = useState<TV[]>([]);
  const [topRatedTv, setTopRatedTv] = useState<TV[]>([]);
  const [sortType, setSortType] = useState<DataSortType>(DataSortType.popular);

  async function initData() {
    const [popularTv, topRatedTv] = await Promise.all([
      getDataByType<TV>(DataSourceType.tv, DataSortType.popular),
      getDataByType<TV>(DataSourceType.tv, DataSortType.top_rated),
    ]);

    setPopularTv(popularTv.results);
    setTopRatedTv(topRatedTv.results);
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

  // Load TV data from the API
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

  const currentTv = sortType === DataSortType.popular ? popularTv : topRatedTv;

  // Filter datas
  const filteredTv = useMemo(
    () =>
      currentTv.filter((tv) =>
        searchText
          ? tv.name.toLowerCase().includes(searchText.toLowerCase())
          : tv
      ),
    [currentTv, searchText]
  );

  const tvsListTitle =
    sortType === DataSortType.popular ? "Popular TV" : "Top rated TV";

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

      <TvList listTitle={tvsListTitle} tv={filteredTv} />
    </main>
  );
};

export default Page;
