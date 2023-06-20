import {
  ChangeEvent,
  FormEvent,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";

import { getFullImgPath } from "@/lib/utils";
import { Movie, TV } from "@/types";

import { Input } from "../ui/input";

import { ScrollArea } from "../ui/scroll-area";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

import Poster from "../Poster";

interface SearchFormProps {
  onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  inputRef: RefObject<HTMLInputElement>;
  resultsPlaceholder?: (Movie | TV)[];
}

const SearchForm: React.FC<SearchFormProps> = ({
  onInputChange,
  onClear,
  onSubmit,
  inputRef,
  resultsPlaceholder,
}) => {
  const [showResultsPlaceholder, setShowResultsPlaceholder] =
    useState<boolean>(false);

  function handleInputFocus() {
    setShowResultsPlaceholder(true);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setShowResultsPlaceholder(false);
    onSubmit(e);
  }

  const resultsPlaceholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /**
     * Hide the results if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (
        resultsPlaceholderRef.current &&
        !resultsPlaceholderRef.current.contains(event.target as Node)
      ) {
        setShowResultsPlaceholder(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [resultsPlaceholderRef]);

  return (
    <div>
      <form
        className="flex flex-col md:flex-row justify-start items-start gap-2"
        onSubmit={handleSubmit}
      >
        <div className="md:hidden">
          <Label htmlFor="search">Search Movies & TV shows</Label>
        </div>

        <Input
          id="search"
          className="w-full md:w-[298px]"
          onChange={onInputChange}
          onFocus={handleInputFocus}
          placeholder="Black Mirror"
          ref={inputRef}
        />

        <div className="hidden md:block">
          <Button size="sm" variant="default">
            Search
          </Button>
        </div>
      </form>

      {showResultsPlaceholder &&
        resultsPlaceholder &&
        resultsPlaceholder.length > 0 && (
          <ScrollArea
            className="!absolute !z-50 h-56 w-[calc(100%-48px)] md:w-[298px] rounded-md border p-4 bg-background"
            ref={resultsPlaceholderRef}
          >
            <ul className="flex flex-col gap-4">
              {resultsPlaceholder?.map((result) => (
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
        )}
    </div>
  );
};
export default SearchForm;
