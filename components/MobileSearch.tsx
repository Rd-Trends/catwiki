import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

import { getSearchedBreeds, searchAtom } from "../store";

const dropIn = {
  hidden: {
    y: "-20px",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "spring",
      damping: 40,
      stiffness: 500,
    },
  },
  exit: {
    y: "-20px",
    opacity: 0,
  },
};

const MobileSearch = () => {
  const [search, setSearch] = useAtom(searchAtom);
  const [searchedBreeds] = useAtom(getSearchedBreeds);
  const [showMobileSearch, setShowMobileSearch] = useState<boolean>(false);
  return (
    <>
      {/* show mobile search */}
      <div
        className=" bg-white flex items-center md:hidden rounded-[60px] w-[120px] max-w-fit mt-8 mb-2 text-lg font-medium"
        onClick={() => setShowMobileSearch(true)}
      >
        <p className="py-2 px-4 text-xs font-medium">Search</p>
        <button className="pr-4" aria-label="Search">
          <AiOutlineSearch />
        </button>
      </div>

      <AnimatePresence>
        {showMobileSearch && (
          <motion.div
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className=" fixed top-[5rem] left-0 right-[0] w-[90%] min-h-[200px] max-h-[450px] mx-auto px-4 py-4 bg-white rounded-3xl shadow-[rgba(0,0,0,0.8)] shadow-2xl flex flex-col items-end"
          >
            <button
              className=" bg-[rgba(151,151,151,0.1)] p-2 rounded-lg "
              onClick={() => setShowMobileSearch(false)}
              aria-label="Close searchbox"
            >
              <AiOutlineClose size={20} />
            </button>
            <div className=" flex bg-white md:hidden items-center rounded-[60px] w-full mt-6 mb-2 text-lg font-medium border border-black">
              <input
                type="text"
                className="py-2 px-4 w-10/12 bg-transparent outline-none border-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="enter your breed"
              />
              <button className="p-2 px-4" aria-label="Search">
                <AiOutlineSearch />
              </button>
            </div>
            <div className=" overflow-auto w-full mt-4">
              {searchedBreeds.length
                ? searchedBreeds.map((breed) => (
                    <Link
                      key={breed.name}
                      href={`cat/${breed.name}`}
                      className="py-3 font-medium block w-full text-lg hover:bg-[rgba(151,151,151,0.1)] px-4 hover:rounded-xl "
                    >
                      {breed.name}
                    </Link>
                  ))
                : null}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileSearch;
