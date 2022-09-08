import BasicLayout from "src/layouts/Basic";
import Register from "src/comps/auth/register/Register";
import Head from "next/head";

export default function RegisterPage() {
  return (
    <BasicLayout>
      <Head>
        <title>Register</title>
        <meta property="og:title" content="Register" key="title" />
      </Head>
      <Register />
    </BasicLayout>
  );
}
