import BasicLayout from "src/layouts/Basic";
import FAQ from "src/comps/faqpage/FAQ";
import Head from "next/head";

export default function FaqPage() {
  return (
    <BasicLayout>
      <Head>
        <title>FAQ</title>
        <meta property="og:title" content="FAQ" key="title" />
      </Head>
      <FAQ />
    </BasicLayout>
  );
}
