"use client";

import { useState } from "react";

import useFilteredTvs from "@/hooks/useFilteredTvs";
import useQueryParams from "@/hooks/useQueryParams";
import useTvs from "@/hooks/useTvs";
import { DataSortType, QueryParams } from "@/types";

import SearchForm from "@/components/SearchForm";
import SortTypeSelect from "@/components/SortTypeSelect";
import TvList from "@/components/TvList";

const Page: React.FC = () => {
  const { queryParams } = useQueryParams<QueryParams>();
  const [sortType, setSortType] = useState<DataSortType>(DataSortType.popular);
  function handleSelectChange(value: string) {
    setSortType(value as DataSortType);
  }

  const { data: tvs, isLoading } = useTvs(sortType);
  const filteredTvs = useFilteredTvs({
    query: queryParams.search || "",
    tvs: tvs?.results || [],
  });

  const tvsListTitle =
    sortType === DataSortType.popular ? "Popular TV" : "Top rated TV";

  return (
    <main className="flex flex-col gap-12 p-6">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <SearchForm searchResults={filteredTvs} />
        <SortTypeSelect onValueChange={handleSelectChange} />
      </div>

      <TvList
        isLoading={isLoading}
        listTitle={tvsListTitle}
        tvs={filteredTvs}
      />
    </main>
  );
};

export default Page;
