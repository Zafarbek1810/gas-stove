import Head from 'next/head'
import Container from "../src/Components/Common/Container";
import HomePage from "../src/Components/Pages/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gas stove</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage/>
    </>
  )
}
