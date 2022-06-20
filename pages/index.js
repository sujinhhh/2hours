import Head from "next/head";
import HomePage from "./home";
import OneMain from "./PageOne/OneMain";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="the best programmer" />
        <meta
          property="og:image"
          content="https://sujinhhh.github.io/img/main.png"
        />
      </Head>
      <div>
        <OneMain />
        <HomePage />
      </div>
    </>
  );
}
