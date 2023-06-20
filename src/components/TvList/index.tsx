import Link from "next/link";

import config from "@/config";
import { getFullYear } from "@/lib/utils";
import { TV } from "@/types";

import EmptyData from "../EmptyData";
import ListTitle from "../ListTitle";
import Poster from "../Poster";

interface TvListProps {
  listTitle: string;
  tv: TV[];
}

const TvList: React.FC<TvListProps> = ({ listTitle, tv }) => (
  <div>
    <ListTitle>{listTitle}</ListTitle>

    {tv.length === 0 && <EmptyData />}

    <ul className="flex flex-wrap items-start justify-between">
      {tv.map((tv) => (
        <li
          key={tv.id}
          className="p-2 flex-[100%] sm:flex-[50%] lg:flex-[25%] xl:flex-[20%]"
        >
          <Link href={`/tv/${tv.id}`}>
            <Poster
              src={`${config.TMDB_IMAGE_BASE_URL}${tv.poster_path}`}
              subtitle={getFullYear(tv.first_air_date)}
              title={tv.name}
              height={1080}
              width={1920}
            />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default TvList;
