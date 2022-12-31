import { useAtom, useAtomValue } from "jotai";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

import { breedsAtom, fourMostSearchedBreedsAtom } from "../store";

const MostSearchedBreed = () => {
  const fourMostSearchedBreeds = useAtomValue(fourMostSearchedBreedsAtom);

  return (
    <section className="bg-[#E3E1DC] px-4 py-12 md:px-10 lg:px-20 text-[#291507] rounded-b-[30px] ">
      <div>
        <p className=" text-lg font-medium mb-2">Most Searched Breeds</p>
        <hr className="w-[50px] h-[3px] bg-[#291507]" />
        <div className="flex items-end justify-between ">
          <h2 className="text-lg md:text-5xl font-bold max-w-[60%] md:max-w-md lg:max-w-lg mt-8 ">
            66+ Breeds For you to discover
          </h2>
          <Link
            href="/top-10-most-searched-cats"
            className="flex items-center font-bold"
          >
            <span className="mr-4 text-xs md:text-lg">SEE MORE</span>
            <FaLongArrowAltRight />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-4 md:mt-8">
        {fourMostSearchedBreeds.map((breed) => (
          <div key={breed.name}>
            <Image
              src={breed.image!.url}
              alt=""
              width={500}
              height={500}
              className=" rounded-xl mdrounded-3xl aspect-square object-cover object-center "
            />
            <h3 className=" text-xs md:text-lg font-semibold mt-1 md:mt-2 ">
              {breed.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MostSearchedBreed;
