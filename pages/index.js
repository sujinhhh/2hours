import Head from "next/head";
import HomePage from "./home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="the best programmer" />
      </Head>
      <div>
        <HomePage />
      </div>
    </>
  );
}
