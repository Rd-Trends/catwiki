import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const WhyHaveACat = () => {
  return (
    <section className="mt-16  flex flex-col md:flex-row justify-between items-center px-0 md:px-10 lg:px-20">
      <div className=" text-[#291507] ">
        <hr className="w-[60px] h-[4px] bg-[#291507] mb-4" />
        <h2 className=" text-4xl md:text-[40px] md:leading-[48px] lg:text-5xl font-bold md:max-w-md ">
          Why should you have a cat?
        </h2>
        <p className=" text-lg font-medium md:max-w-md my-4 md:my-8">
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety levels
        </p>
        <Link
          href="https://www.helpguide.org/articles/healthy-living/joys-of-owning-a-cat.htm#:~:text=Owning%20a%20cat%20can%20bring,be%20an%20extremely%20rewarding%20relationship."
          rel="norefferer"
          target="_blank"
          className="flex items-center font-bold"
        >
          <span className="mr-4 text-xs md:text-lg">SEE MORE</span>
          <FaLongArrowAltRight />
        </Link>
      </div>
      <div className=" flex space-x-4 mt-12 md:mt-0 md:w-1/2">
        <div className="flex flex-col items-end space-y-4 w-7/12">
          <Image
            src="/images/image 2.png"
            width={500}
            height={500}
            alt=""
            className=""
          />
          <Image
            src="/images/image 1.png"
            alt=""
            width={500}
            height={500}
            className="w-8/12 h-fit"
          />
        </div>
        <Image
          src="/images/image 3.png"
          alt=""
          width={500}
          height={500}
          className=" w-5/12 h-fit"
        />
      </div>
    </section>
  );
};

export default WhyHaveACat;
