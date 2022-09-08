import UserDashboard from "src/comps/user/User";
import BasicLayout from "src/layouts/Basic";
import ContentUser from "src/comps/user/Content";
import Head from "next/head";
import { useEffect } from "react";
import { isAuthenticated } from "src/helpers/token";
import { useRouter } from "next/router";
import { message } from "antd";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      message.warn("you need to login first!");
      router.push("/login");
    }
  }, []);

  return (
    <BasicLayout>
      <Head>
        <title>User Dashboard</title>
        <meta property="og:title" content="User Dashboard" key="title" />
      </Head>
      {isAuthenticated() && (
        <UserDashboard>
          <ContentUser />
        </UserDashboard>
      )}
    </BasicLayout>
  );
}
