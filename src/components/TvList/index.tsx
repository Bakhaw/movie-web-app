import Link from "next/link";

import { TV } from "@/types";

import EmptyData from "../EmptyData";
import ListContainer from "../ListContainer";
import ListTitle from "../ListTitle";
import Poster from "../Poster";

interface TvListProps {
  tv: TV[];
}

const TvList: React.FC<TvListProps> = ({ tv }) => (
  <div>
    <ListTitle>TV</ListTitle>

    {tv.length === 0 && <EmptyData />}

    <ListContainer columnWidth={240}>
      {tv.map((tv) => (
        <li key={tv.id}>
          <Link href={`/tv/${tv.id}`}>
            <Poster src={tv.poster_path} title={tv.name} />
          </Link>
        </li>
      ))}
    </ListContainer>
  </div>
);

export default TvList;
