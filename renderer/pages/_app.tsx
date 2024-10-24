import React from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import Head from "next/head";
import { Toaster } from "../components/sonner";
import pkg from "../../package.json";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          {pkg.description} {pkg.version}
        </title>
      </Head>
      <Toaster richColors closeButton position="bottom-left" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
