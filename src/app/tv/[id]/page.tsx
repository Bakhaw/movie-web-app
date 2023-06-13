import { DataSourceType, TV } from "@/types";
import { getDataById } from "@/api";
import config from "@/config";

import Poster from "@/components/Poster";
import Bio from "@/components/Bio";
import DetailsTable from "@/components/DetailsTable";

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
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%), url(${config.TMDB_IMAGE_BASE_URL}${tv.backdrop_path})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col lg:flex-row justify-start items-start gap-6 h-[60vh] p-6 bg-purple-dark/70 border-orange border-t-8 overflow-y-scroll">
        <div className="hidden lg:inline">
          <Poster
            disableHover
            src={tv.poster_path}
            title={
              <div className="flex items-center gap-4">
                <div className="flex justify-center items-center h-14 w-14 text-lg font-bold border-orange border-2 rounded-full">
                  {Math.round(tv.vote_average * 100) / 100}
                </div>
                <span className="block">{tv.vote_count} votes</span>
              </div>
            }
          />
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
              <a className="block underline" href={tv.homepage} target="_blank">
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
    </div>
  );
}

export default Page;
