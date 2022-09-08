import UserDashboard from "src/comps/user/User";
import BasicLayout from "src/layouts/Basic";
import Head from "next/head";
import Rating from "src/comps/user/rating/Rating";

export default function index() {
  return (
    <div>
      <BasicLayout>
        <Head>
          <title>My Account | Auto Portal</title>
          <meta
            property="og:title"
            content="My Account | Auto Portal"
            key="title"
          />
        </Head>
        <UserDashboard>
          <Rating />
        </UserDashboard>
      </BasicLayout>
    </div>
  );
}
