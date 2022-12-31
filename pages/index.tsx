import Link from "next/link";
import React, { Suspense } from "react";

import Hero from "../components/Hero";
import Layout from "../components/Layout";
import MostSearchedBreed from "../components/MostSearchedBreed";
import Seo from "../components/Seo";
import WhyHaveACat from "../components/WhyHaveACat";

const Home = () => {
  return (
    <Layout>
      <Seo />
      <Suspense fallback="loading">
        <Hero />
        <MostSearchedBreed />
      </Suspense>
      <WhyHaveACat />
    </Layout>
  );
};

export default Home;
