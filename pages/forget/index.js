import React from "react";
import Forget from "src/comps/auth/forget/Forget";
import BasicLayout from "src/layouts/Basic";
import ForgetForm from "src/comps/auth/forget/ForgetForm";
import Head from 'next/head'

export default function index() {
  return (
    <BasicLayout>
      <Head>
        <title>Forget</title>
        <meta property="og:title" content="Forget" key="title" />
      </Head>
      <Forget>
        <ForgetForm />
      </Forget>
    </BasicLayout>
  );
}
