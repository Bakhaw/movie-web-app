import { getDataById } from "@/api";
import { getFullImgPath } from "@/lib/utils";
import { DataSourceType, TV } from "@/types";

import Bio from "@/components/Bio";
import DetailsTable from "@/components/DetailsTable";
import Poster from "@/components/Poster";
import Rating from "@/components/Rating";

import { ScrollArea } from "@/components/ui/scroll-area";

interface PageProps {
  params: {
    id: string;
  };
}

async function Page({ params }: PageProps) {
  const tv = await getDataById<TV>(DataSourceType.tv, params.id);

  return (
    <div
      className="flex flex-col justify-end min-h-[calc(100vh-64px)] md:min-h-screen text-white"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%), url(${getFullImgPath(
          tv.backdrop_path
        )})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <ScrollArea className="h-[60vh] border-t-8">
        <div className="flex flex-col lg:flex-row justify-start items-start gap-6 p-6">
          <div className="hidden lg:flex flex-col gap-2">
            <Poster
              height={360}
              width={240}
              src={getFullImgPath(tv.poster_path)}
            />

            <Rating voteAverage={tv.vote_average} voteCount={tv.vote_count} />
          </div>

          <div className="w-full">
            <div>
              <Bio overview={tv.overview} title={tv.name} />

              <div className="mt-12">
                <DetailsTable
                  genres={tv.genres}
                  originalCountry={tv.original_language}
                  releaseDate={tv.first_air_date}
                  totalEpisodes={tv.number_of_episodes}
                  totalSeasons={tv.number_of_seasons}
                />
              </div>
            </div>

            <div className="mt-12 w-fit">
              <h1 className="text-2xl font-bold mb-6">Links</h1>

              <div>
                <a
                  className="block underline"
                  href={tv.homepage}
                  target="_blank"
                >
                  Official website
                </a>

                <a
                  className="block underline mt-2"
                  href={`https://www.youtube.com/results?search_query=${tv.name}+trailer`}
                  target="_blank"
                >
                  Watch trailer
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}

export default Page;
