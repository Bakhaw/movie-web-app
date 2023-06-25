import Link from "next/link";

import { getFullImgPath, getFullYear } from "@/lib/utils";
import { Movie } from "@/types";

import ListTitle from "../ListTitle";
import LoadingData from "../LoadingData";
import Poster from "../Poster";

interface MovieListProps {
  isLoading: boolean;
  listTitle: string;
  movies?: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({
  isLoading,
  listTitle,
  movies,
}) => (
  <div>
    <ListTitle>{listTitle}</ListTitle>

    {isLoading && <LoadingData />}

    {movies?.length === 0 && (
      <div className="text-center">No movies to show...</div>
    )}

    <ul className="flex flex-wrap items-start">
      {movies?.map((movie) => (
        <li key={movie.id} className="p-2 w-[50%] lg:w-[25%] xl:w-[20%]">
          <Link href={`/movie/${movie.id}`}>
            <Poster
              src={`${getFullImgPath(movie.poster_path)}`}
              subtitle={getFullYear(movie.release_date)}
              title={movie.title}
              height={1080}
              width={1920}
            />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default MovieList;
