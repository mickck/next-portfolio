import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div className='bg-primary'>
      <Header />
      <Head>
        <title>Mike`s portfolio</title>
        <link rel='icon' href='/mk.ico' />
      </Head>
      <div>{children}</div>
      <Footer />
    </div>
  );
}
