import Link from "next/link";

import { TV } from "@/types";
import { POSTER_BASE_HEIGHT } from "@/config/constants";

import ListContainer from "../ListContainer";
import ListTitle from "../ListTitle";
import Poster from "../Poster";

interface TvListProps {
  tv: TV[];
}

const TvList: React.FC<TvListProps> = ({ tv }) => (
  <div>
    <ListTitle>TV</ListTitle>

    <ListContainer columnWidth={320}>
      {tv.map((tv) => (
        <li key={tv.id}>
          <Link href={`/tv/${tv.id}`}>
            <Poster
              height={POSTER_BASE_HEIGHT}
              src={tv.poster_path}
              title={tv.name}
            />
          </Link>
        </li>
      ))}
    </ListContainer>
  </div>
);

export default TvList;
