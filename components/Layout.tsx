import Image from "next/image";
import Link from "next/link";
import React from "react";

import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" pt-6 mx-4 md:mx-20 lg:mx-20 flex flex-col justify-between min-h-screen ">
      <Link href="/" className=" no-underline " aria-label="visit homepage">
        <Image
          src="/images/CatwikiLogo.svg"
          alt=""
          width={200}
          height={200}
          quality={100}
          priority={true}
          className=" w-[150px]"
        />
      </Link>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
