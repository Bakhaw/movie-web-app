import { FormEvent, RefObject } from "react";

import IconClose from "@/icons/IconClose";
import SearchButton from "../SearchButton";

interface SearchFormProps {
  onClear: () => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  inputRef: RefObject<HTMLInputElement>;
}

const SearchForm: React.FC<SearchFormProps> = ({
  onClear,
  onSubmit,
  inputRef,
}) => (
  <form
    className="flex flex-wrap justify-center items-center sm:justify-start gap-2"
    onSubmit={onSubmit}
  >
    <div className="flex justify-between items-center border-white border-b-[1px] placeholder:text-white">
      <input
        className="h-10 w-full md:w-[260px] px-4 text-white bg-purple rounded-sm outline-none"
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
);

export default SearchForm;
