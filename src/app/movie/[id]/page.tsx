"use client";

import { useMovie } from "@/hooks/useMovies";
import { getFullImgPath } from "@/lib/utils";

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

function Page({ params }: PageProps) {
  const { data: movie, isLoading } = useMovie(params.id);

  if (!movie || isLoading) return null;

  return (
    <div
      className="flex flex-col justify-end min-h-[calc(100vh-64px)] md:min-h-screen text-white"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%), url(${getFullImgPath(
          movie.backdrop_path
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
              src={getFullImgPath(movie.poster_path)}
            />

            <Rating
              voteAverage={movie.vote_average}
              voteCount={movie.vote_count}
            />
          </div>

          <div className="w-full">
            <div>
              <Bio overview={movie.overview} title={movie.title} />

              <div className="mt-12">
                <DetailsTable
                  genres={movie.genres}
                  originalCountry={movie.original_language}
                  releaseDate={movie.release_date}
                  runtime={movie.runtime}
                />
              </div>
            </div>

            <div className="mt-12 w-fit">
              <h1 className="text-2xl font-bold mb-6">Links</h1>

              <div>
                <a
                  className="block underline"
                  href={movie.homepage}
                  target="_blank"
                >
                  Official website
                </a>

                <a
                  className="block underline mt-2"
                  href={`https://www.youtube.com/results?search_query=${movie.title}+trailer`}
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
