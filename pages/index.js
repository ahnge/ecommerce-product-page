import Head from "next/head";
import ProductPage from "../components/home/ProductPage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="this is a challenge from frontendmentor website completed by nayzaw."
        />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <ProductPage />
    </div>
  );
}
