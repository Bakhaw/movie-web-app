import { DataSourceType, Movie, TV } from "@/types";
import { getTrendingData } from "@/api";

import MovieList from "@/components/MovieList";
import TvList from "@/components/TvList";

export default async function Home() {
  const [movies, tv] = await Promise.all([
    getTrendingData<Movie>(DataSourceType.movie),
    getTrendingData<TV>(DataSourceType.tv),
  ]);

  return (
    <main className="flex flex-col gap-12 p-6">
      <MovieList movies={movies.results} />
      <TvList tv={tv.results} />
    </main>
  );
}
