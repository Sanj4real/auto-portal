import BasicLayout from "src/layouts/Basic";
import List from "src/comps/list/List";
// import { QueryClient, dehydrate, prefetchQuery, shouldDehydrateQuery } from "react-query";
// import { vehiclesApi } from "src/api/vehicle/vehicle";

export default function SearchPage({ dehydratedState }) {
  console.log("dehydratedState>", dehydratedState);
  return <BasicLayout>{/* <List  /> */}</BasicLayout>;
}
