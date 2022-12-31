import Image from "next/image";
import React from "react";

import LargeDeviceSearch from "./LargeDeviceSearch";
import MobileSearch from "./MobileSearch";

const Hero = () => {
  return (
    <div className="h-full  rounded-t-[30px] mt-8 bg-cover bg-center py-8 md:py-20 pl-4 md:pl-10 lg:pl-20 bg-[url('/images/HeroImagesm.png')] md:bg-[url('/images/HeroImagemd.png')] lg:bg-[url('/images/HeroImagelg.png')]">
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
  );
};

export default Hero;
