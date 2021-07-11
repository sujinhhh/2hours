import { useState, useEffect } from "react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="the best programmer" />
      </Head>
      <div>
        <div>Home</div>
        <button className="btn-r"> Click</button>
      </div>
    </>
  );
}
