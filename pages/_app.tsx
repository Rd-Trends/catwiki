import "../styles/globals.css";

import { Montserrat } from "@next/font/google";
import type { AppProps } from "next/app";
import { Suspense } from "react";
import { SWRConfig } from "swr";

import ErrorBoundary from "../components/ErrorBoundary";
import { fetcher } from "../utils/fetcher";

const montserrat = Montserrat({
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${montserrat.variable} font-sans`}>
      <SWRConfig value={{ fetcher }}>
        <ErrorBoundary>
          <Suspense fallback="loading from app">
            <Component {...pageProps} />
          </Suspense>
        </ErrorBoundary>
      </SWRConfig>
    </div>
  );
}
