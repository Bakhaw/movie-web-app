import Link from "next/link";

import { getFullImgPath, getFullYear } from "@/lib/utils";
import { TV } from "@/types";

import ListTitle from "../ListTitle";
import LoadingData from "../LoadingData";
import Poster from "../Poster";

interface TvListProps {
  isLoading: boolean;
  listTitle: string;
  tvs?: TV[];
}

const TvList: React.FC<TvListProps> = ({ isLoading, listTitle, tvs }) => (
  <div>
    <ListTitle>{listTitle}</ListTitle>

    {isLoading && <LoadingData />}

    {tvs?.length === 0 && <div className="text-center">No TV to show...</div>}

    <ul className="flex flex-wrap items-start">
      {tvs?.map((tv) => (
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
  </div>
);

export default TvList;
