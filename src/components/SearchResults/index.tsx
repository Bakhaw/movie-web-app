import { useEffect, useRef } from "react";
import Link from "next/link";

import { getFullImgPath } from "@/lib/utils";
import { Movie, TV } from "@/types";

import Poster from "../Poster";

import { ScrollArea } from "../ui/scroll-area";

interface SearchResultsProps {
  onClickOutside: () => void;
  results: (Movie | TV)[];
  visible: boolean;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  onClickOutside,
  results,
  visible,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /**
     * Hide the results if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);

  if (!visible) return null;

  return (
    <ScrollArea
      className="!absolute !z-50 h-56 w-[calc(100%-48px)] md:w-[298px] rounded-md border p-4 bg-background"
      ref={ref}
    >
      <ul className="flex flex-col gap-4">
        {results.map((result) => (
          <li
            key={result.id}
            className="bg-grey text-white hover:bg-purple-light/60"
          >
            <Link
              className="flex gap-2"
              href={`/${result.media_type}/${result.id}`}
            >
              <Poster
                height={72}
                width={48}
                src={getFullImgPath(result.poster_path)}
              />
              <div className="text-sm">
                <p>{"title" in result && result.title}</p>
                <p>{"name" in result && result.name}</p>

                <p>
                  {"release_date" in result &&
                    new Date(result.release_date).getFullYear()}
                </p>
                <p>
                  {"first_air_date" in result &&
                    new Date(result.first_air_date).getFullYear()}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </ScrollArea>
  );
};

export default SearchResults;
