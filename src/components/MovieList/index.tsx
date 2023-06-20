import Link from "next/link";

import config from "@/config";
import { getFullYear } from "@/lib/utils";
import { Movie } from "@/types";

import EmptyData from "../EmptyData";
import ListTitle from "../ListTitle";
import Poster from "../Poster";

interface MovieListProps {
  listTitle: string;
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ listTitle, movies }) => (
  <div>
    <ListTitle>{listTitle}</ListTitle>

    {movies.length === 0 && <EmptyData />}

    <ul className="flex flex-wrap items-start justify-between">
      {movies.map((movie) => (
        <li
          key={movie.id}
          className="p-2 flex-[100%] sm:flex-[50%] lg:flex-[25%] xl:flex-[20%]"
        >
          <Link href={`/movie/${movie.id}`}>
            <Poster
              src={`${config.TMDB_IMAGE_BASE_URL}${movie.poster_path}`}
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
