import { useAtomValue } from "jotai";
import Image from "next/image";
import React from "react";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { tenMostSearchedBreedsAtom } from "../store";

const Page = () => {
  const breeds = useAtomValue(tenMostSearchedBreedsAtom);
  return (
    <Layout>
      <Seo
        title="Top 10 most serached breeds"
        description="10 most popular searched cat breeds"
      />
      <div className="text-[#291507] my-8">
        <h1 className=" text-4xl font-bold mb-8">
          Top 10 most serached breeds
        </h1>
        <div className="space-y-12">
          {breeds.map((breed, index) => (
            <div
              className="flex flex-col md:flex-row space-y-8 md:space-x-8 md:space-y-0 "
              key={breed?.name}
            >
              <Image
                src={breed?.image?.url!}
                alt=""
                width={500}
                height={500}
                className=" w-full md:w-[200px] rounded-2xl md:rounded-3xl aspect-square object-cover object-center"
                priority={index < 3 ? true : false}
              />
              <div className="max-w-[800px]">
                <h2 className="font-bold text-4xl mb-4">{`${index + 1}. ${
                  breed?.name
                }`}</h2>
                <p className="font-meduim text-lg">{breed?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Page;
