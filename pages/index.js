import Head from "next/head";
import HomePage from "./home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta property="og:title" content="Home"/>
<meta property="og:description" content="Welcome to my blog!"/>
<meta property="og:type" content="website"/>
<meta property="og:url" content="https://phiilu.com/"/>
<meta property="og:image" content="https://phiilu.com/images/og/840e64ab9334b9d5d555c85e0d073179.png"/>
      </Head>
      <div>
        <HomePage />
      </div>
    </>
  );
}
