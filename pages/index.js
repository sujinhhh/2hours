import Head from "next/head";
import HomePage from "./home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="the best programmer" />
    <meta property="og:url"                content="https://2hours.vercel.app/" />
    <meta property="og:type"               content="website" />
    <meta property="og:title"              content="web developer" />
     <meta property="og:description"        content="web developer " />
     <meta property="og:image"    content="https://sujinhhh.github.io/img/main.png"
        />
      </Head>
      <div>
        <HomePage />
      </div>
    </>
  );
}
