import { useAtom } from "jotai";
import Link from "next/link";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { getSearchedBreeds, searchAtom } from "../store";

const LargeDeviceSearch = () => {
  const [search, setSearch] = useAtom(searchAtom);
  const [searchedBreeds] = useAtom(getSearchedBreeds);

  return (
    <div className="relative">
      <div className="hidden  bg-white md:flex items-center rounded-[60px] max-w-xs mt-12 mb-2 text-lg font-medium">
        <input
          type="text"
          className="py-4 px-6 bg-transparent outline-none border-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="enter your breed"
        />
        <button>
          <AiOutlineSearch />
        </button>
      </div>

      {searchedBreeds.length ? (
        <div className="hidden md:block max-h-[200px] bg-white absolute rounded-3xl py-3 px-2  w-full max-w-xs overflow-auto scroll-m-8  ">
          {searchedBreeds.map((breed) => (
            <Link
              key={breed.name}
              href={`cat/${breed.name}`}
              className="py-3 font-medium block text-lg hover:bg-[rgba(151,151,151,0.1)] px-4 hover:rounded-xl "
            >
              {breed.name}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default LargeDeviceSearch;
