import Image from "next/image";
import React from "react";
import useSWR from "swr";

import { image } from "../interface";

interface props {
  id: string;
}

const OtherCatPhoto = ({ id }: props) => {
  const { data, error } = useSWR<image[]>(id ? `/api/breeds/${id}` : null);

  return (
    <div className="mt-12 mb-12">
      <h2 className=" font-semibold text-4xl mb-8 ">Other photos</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
        {data
          ? data.map((image) => (
              <Image
                key={image.id}
                src={image?.url!}
                width={500}
                height={500}
                alt=""
                className="-z-0 aspect-square object-cover object-center rounded-3xl"
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default OtherCatPhoto;
