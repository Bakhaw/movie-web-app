import { useMemo } from "react";

import { TV } from "@/types";

interface Props {
  query: string;
  tvs: TV[];
}

function useFilteredTvs({ query, tvs }: Props) {
  const filteredMovies = useMemo(
    () =>
      tvs.filter((tv) =>
        query ? tv.name.toLowerCase().includes(query.toLowerCase()) : tv
      ),
    [tvs, query]
  );

  return filteredMovies || [];
}

export default useFilteredTvs;
