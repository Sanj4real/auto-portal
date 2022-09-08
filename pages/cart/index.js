import BasicLayout from "src/layouts/Basic";
import CartPage from "src/comps/cartPage/cart";
import Head from "next/head";

export default function Cart() {
  return (
    
    <BasicLayout>
      <Head>
        <title>Cart</title>
        <meta property="og:title" content="Cart" key="title" />
      </Head>
      <CartPage />
    </BasicLayout>
  );
}
