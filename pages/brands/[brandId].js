import BasicLayout from "src/layouts/Basic";
import ListId from "src/comps/list/ListId";

export default function ListPage({ dehydratedState }) {
  console.log("dehydratedState>", dehydratedState);
  return (
    <BasicLayout>
      <ListId vehicles={dehydratedState} />
    </BasicLayout>
  );
}
