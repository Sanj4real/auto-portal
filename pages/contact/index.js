import BasicLayout from "src/layouts/Basic";
import Contact from "src/comps/contact/Contact";
import Head from "next/head";

export default function contactPage() {
  return (
      <BasicLayout>
        <Head>
        <title>Contact</title>
        <meta property="og:title" content="Contact" key="title" />
      </Head>
        <Contact />
      </BasicLayout>
  );
}
