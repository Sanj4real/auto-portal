import BasicLayout from "src/layouts/Basic";
import Terms from "src/comps/terms/Terms";
import Head from "next/head";

export default function TermsPage() {
  return (
    <BasicLayout>
      <Head>
        <title>Tearms and Conditions</title>
        <meta property="og:title" content="Tearms and Conditions" key="title" />
      </Head>
      <Terms />
    </BasicLayout>
  );
}
