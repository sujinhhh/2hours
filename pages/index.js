import { useState, useEffect } from "react";
import Head from "next/head";
import Main from "./home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="the best programmer" />
      </Head>
      <div>{/* <Main /> */}</div>
    </>
  );
}
