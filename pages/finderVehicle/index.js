import BasicLayout from "src/layouts/Basic";
import VehicleFilter from "src/comps/filter/VehicleFilter";
import Head from "next/head";

export default function index() {
  return (
    <BasicLayout>
      <Head>
        <title>Vehicle Finder</title>
        <meta property="og:title" content="Vehicle Finder" key="title" />
      </Head>
      <VehicleFilter />
    </BasicLayout>
  );
}
