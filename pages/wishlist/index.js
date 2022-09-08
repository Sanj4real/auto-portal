import BasicLayout from "src/layouts/Basic";
import Wishlist from "src/comps/wishlist/Wish";
import Head from "next/head";
import UserDashboard from "src/comps/user/User";

export default function Cart() {
  return (
    <BasicLayout>
      <Head>
        <title>Wishlist</title>
        <meta property="og:title" content="Wishlist" key="title" />
      </Head>
        <UserDashboard>
            <Wishlist />
        </UserDashboard>
    </BasicLayout>
  );
}
