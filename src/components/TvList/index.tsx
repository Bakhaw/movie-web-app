import Link from "next/link";

import { getFullImgPath, getFullYear } from "@/lib/utils";
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

    {tv.length === 0 ? (
      <EmptyData />
    ) : (
      <ul className="flex flex-wrap items-start">
        {tv.map((tv) => (
          <li key={tv.id} className="p-2 w-[50%] lg:w-[25%] xl:w-[20%]">
            <Link href={`/tv/${tv.id}`}>
              <Poster
                src={`${getFullImgPath(tv.poster_path)}`}
                subtitle={getFullYear(tv.first_air_date)}
                title={tv.name}
                height={1080}
                width={1920}
              />
            </Link>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default TvList;
