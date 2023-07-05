import { ChangeEvent, FormEvent, useRef, useState } from "react";

import useQueryParams from "@/hooks/useQueryParams";
import { Movie, QueryParams, TV } from "@/types";

import SearchResults from "../SearchResults";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface SearchFormProps {
  searchResults: (Movie | TV)[];
}

const SearchForm: React.FC<SearchFormProps> = ({ searchResults }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const { queryParams, setQueryParams } = useQueryParams<QueryParams>();

  function hideSearchResults() {
    setShowSearchResults(false);
  }

  function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    setQueryParams({ search: e.target.value });
  }

  function onInputFocus() {
    setShowSearchResults(true);
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setShowSearchResults(false);
    setQueryParams({ search: inputRef?.current?.value });
  }

  return (
    <div>
      <form
        className="flex flex-col md:flex-row justify-start items-start gap-2"
        onSubmit={onSubmit}
        ref={formRef}
      >
        <div className="md:hidden">
          <Label htmlFor="search">Search Movies & TV shows</Label>
        </div>

        <Input
          id="search"
          className="w-full md:w-[298px]"
          defaultValue={queryParams.search}
          onChange={onInputChange}
          onFocus={onInputFocus}
          placeholder="Black Mirror"
          ref={inputRef}
        />

        <div className="hidden md:block">
          <Button size="sm" variant="default">
            Search
          </Button>
        </div>
      </form>

      <SearchResults
        onClickOutside={hideSearchResults}
        results={searchResults}
        visible={showSearchResults}
      />
    </div>
  );
};
export default SearchForm;
