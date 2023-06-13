import Link from "next/link";

import { Movie } from "@/types";

import ListContainer from "../ListContainer";
import ListTitle from "../ListTitle";
import Poster from "../Poster";

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => (
  <div>
    <ListTitle>Movies</ListTitle>

    <ListContainer columnWidth={240}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movie/${movie.id}`}>
            <Poster src={movie.poster_path} title={movie.title} />
          </Link>
        </li>
      ))}
    </ListContainer>
  </div>
);

export default MovieList;
