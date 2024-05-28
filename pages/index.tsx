import Head from "next/head";
import { NextPage } from "next/types";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nicks Blog</title>
        <meta name="description" content="My Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Home Page</div>
    </>
  );
};
export default HomePage;
