import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div className='bg-primary'>
      <Header />
      <Head>
        <title>Mike`s portfolio</title>
        <meta name='description' content='Today also needs to do coding hard.' />
        <link rel='icon' href='/mk2.ico' />
      </Head>
      <div>{children}</div>
      <Footer />
    </div>
  );
}
