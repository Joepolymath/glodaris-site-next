import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Head from "next/head";

export default function format({ children }) {
  return (
    <>
      <Head>
        <title>Glodaris</title>
      </Head>

      <Header></Header>

      <main>{children}</main>

      <Footer></Footer>
    </>
  );
}
