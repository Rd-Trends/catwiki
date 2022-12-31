import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 px-4 mt-8 md:mt-16 md:px-8 flex flex-col md:flex-row md:items-center justify-between bg-[#000000] text-white rounded-t-[30px] md:rounded-t-[48px] ">
      <Image
        src="/images/CatwikiLogowhite.svg"
        alt=""
        className="w-[100px] mb-4"
        width={200}
        height={200}
      />
      <p className="text-xs md:text-base">
        &copy; created by{" "}
        <a href="https://github.com/rd-trends" className="font-bold ">
          Daniel Ikoyo
        </a>{" "}
        - devChallenges.io {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
