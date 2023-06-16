import {
  ChangeEvent,
  FormEvent,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";

import config from "@/config";
import { Movie, TV } from "@/types";

import IconClose from "@/icons/IconClose";
import SearchButton from "../SearchButton";

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
        className="flex justify-start items-center gap-2"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between items-center border-white border-b-[1px] placeholder:text-white">
          <input
            className="h-10 w-[180px] md:w-[260px] px-4 text-white bg-purple rounded-sm outline-none"
            onChange={onInputChange}
            onFocus={handleInputFocus}
            ref={inputRef}
            placeholder="Search"
            type="text"
          />

          <button type="button">
            <IconClose className="text-sm text-white mr-2" onClick={onClear} />
          </button>
        </div>

        <SearchButton />
      </form>

      {showResultsPlaceholder &&
        resultsPlaceholder &&
        resultsPlaceholder.length > 0 && (
          <div
            className="absolute z-50 max-h-56 w-[218px] md:w-[298px] bg-white overflow-y-scroll"
            ref={resultsPlaceholderRef}
          >
            <ul className="flex flex-col gap-4 p-2 bg-grey">
              {resultsPlaceholder?.map((result) => (
                <li
                  key={result.id}
                  className="bg-grey text-white hover:bg-purple-light/60"
                >
                  <Link
                    className="flex gap-2"
                    href={`/${result.media_type}/${result.id}`}
                  >
                    <img
                      alt="Poster"
                      className="w-12"
                      src={`${config.TMDB_IMAGE_BASE_URL}${result.poster_path}`}
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
          </div>
        )}
    </div>
  );
};
export default SearchForm;
