import Head from "next/head";
import HomePage from "./home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="the best programmer" />
    <meta property="og:url"                content="http://gocoder.tistory.com" />
<meta property="og:type"               content="website" />
<meta property="og:title"              content="고코더의 IT Express" />
<meta property="og:description"        content="모든 IT 정보를 " />
     <meta
          property="og:image"
          content="https://sujinhhh.github.io/img/main.png"
        />
      </Head>
      <div>
        <HomePage />
      </div>
    </>
  );
}
