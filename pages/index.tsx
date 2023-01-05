import Link from "next/link";
import React, { Suspense } from "react";

import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import MostSearchedBreed from "../components/MostSearchedBreed";
import Seo from "../components/Seo";
import WhyHaveACat from "../components/WhyHaveACat";

const Home = () => {
  return (
    <Layout>
      <Seo />
      <Suspense fallback={<Loader />}>
        <Hero />
        <MostSearchedBreed />
      </Suspense>
      <WhyHaveACat />
    </Layout>
  );
};

export default Home;
