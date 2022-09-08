import BasicLayout from "src/layouts/Basic";
import About from "src/comps/about/About";
import Head from "next/head";

export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>About Us</title>
        <meta property="og:title" content="About Us" key="title" />
      </Head>
      <BasicLayout>
        <About />
      </BasicLayout>
    </div>
  );
}
