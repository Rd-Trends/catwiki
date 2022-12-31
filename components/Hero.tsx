import Image from "next/image";
import React from "react";
import hero from "../public/images/HeroImagelg.png";
import LargeDeviceSearch from "./LargeDeviceSearch";
import MobileSearch from "./MobileSearch";

const Hero = () => {
  return (
    <div className="h-full relative  rounded-t-[30px] mt-8 bg-cover bg-center py-8 md:py-20 pl-4 md:pl-10 lg:pl-20 ">
      <div className="full absolut top-0 right-0 left-0 bottom-0 -z-[1] rounded-t-[30px]">
        <Image
          src={hero}
          alt=""
          placeholder="blur"
          priority={true}
          quality={100}
          fill
          sizes="100vw"
          className="rounded-t-[30px] object-cover object-center"
        />
      </div>
      <div className="relative">
        <Image
          src="/images/CatwikiLogowhite.svg"
          alt=""
          className="w-[100px] md:w-[200px]"
          width={200}
          height={200}
          priority={true}
          quality={100}
        />
        <h1 className="text-xs md:text-2xl font-medium text-white w-[150px] md:w-[320px] mt-4 md:mt-8">
          Get to know more about your cat breed
        </h1>

        <MobileSearch />
        <LargeDeviceSearch />
      </div>
    </div>
  );
};

export default Hero;
