import Head from "next/head";
import React from "react";

interface props {
  title?: string;
  description?: string
}

const Seo = ({ title = "Discover several Cat breeds | Catwiki", description = "Discover and search several amazing, popular cat breeds!" }: props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={description}
      />

      <meta property="og:url" content="https://rd-catwiki.vercel.app" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={title}
      />
      <meta
        property="og:description"
        content={description}
      />
      <meta
        property="og:image"
        content="https://rd-catwiki.vercel.app/og.png"
      />
      <meta property="og:image:height" content="566" />
      <meta property="og:image:width" content="1280" />
      <link rel="icon" type="image/png" href="/images/devchallenges.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    </Head>
  );
};

export default Seo;
