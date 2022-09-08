import BasicLayout from "src/layouts/Basic";
import Login from "src/comps/auth/login/Login";
import Head from "next/head";

export default function LoginPage() {
  return (
    <BasicLayout>
      <Head>
        <title>Login</title>
        <meta property="og:title" content="Login" key="title" />
      </Head>
      <Login />
    </BasicLayout>
  );
}
