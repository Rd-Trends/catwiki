import { useAtomValue } from "jotai";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

import CharacterRating from "../../components/CharacterRating";
import Layout from "../../components/Layout";
import OtherCatPhoto from "../../components/OtherCatPhoto";
import Seo from "../../components/Seo";
import { cat } from "../../interface";
import { breedsAtom } from "../../store";
// import

const Cat = () => {
  const router = useRouter();
  const { id } = router.query;
  const allBreeds = useAtomValue(breedsAtom);
  const breed = useMemo<cat>(() => {
    return allBreeds.filter(
      (breed) => breed.name.toLowerCase() === id?.toString().toLowerCase()
    )[0];
  }, [id, allBreeds]);

  return (
    <Layout>
      <Seo title={`the ${breed?.name} cat`} description={breed?.description} />
      <div className=" md:flex md:justify-between md:items-start lg:mx-6 mt-6 md:mt-8">
        <div className="flex items-center md:w-5/12">
          <div className=" w-[10px] h-72 bg-[#DEC68B] rounded-l-[14px] z-0 "></div>
          <Image
            src={breed?.image?.url!}
            width={500}
            height={500}
            alt={breed?.name}
            className="-z-0 w-[97%] md:w-11/12 min-h-[330px] object-cover object-center rounded-3xl"
            priority={true}
          />
        </div>
        <div className="[&>p]:my-4 [&>div]:my-4 mt-8 md:mt-0 w-full md:w-6/12">
          <h1 className=" text-4xl font-semibold m-0 ">{breed?.name}</h1>
          <p className=" text-lg font-medium "></p>
          <p className=" text-base">{breed?.description}</p>
          <p>
            <strong>Temperament</strong>: {breed?.temperament}
          </p>
          <p>
            <strong>Origin</strong>: {breed?.origin}
          </p>
          <p>
            <strong>Life Span</strong>: {breed?.life_span} years
          </p>
          <CharacterRating name="Adaptibility" rating={breed?.adaptability!} />
          <CharacterRating
            name={"Affection level"}
            rating={breed?.affection_level!}
          />
          <CharacterRating
            name={"Child friendly"}
            rating={breed?.child_friendly!}
          />
          <CharacterRating name={"Grooming"} rating={breed?.grooming!} />
          <CharacterRating
            name={"Intelligence"}
            rating={breed?.intelligence!}
          />
          <CharacterRating
            name={"Health Issues"}
            rating={breed?.health_issues!}
          />
          <CharacterRating
            name={"Social needs"}
            rating={breed?.social_needs!}
          />
          <CharacterRating
            name={"Stranger friendly"}
            rating={breed?.stranger_friendly!}
          />
        </div>
      </div>
      <OtherCatPhoto id={breed?.id!} />
    </Layout>
  );
};

export default Cat;
