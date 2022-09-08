import BasicLayout from "src/layouts/Basic";
// import List from "src/comps/list/List";
import ListId from "src/comps/list/ListId";
// import Head from "next/head";

export default function ListPage({ dehydratedState }) {
  console.log("dehydratedState>", dehydratedState);
  return (
    <BasicLayout>
      <ListId vehicles={dehydratedState} />
    </BasicLayout>
  );
}
