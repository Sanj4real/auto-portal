import BasicLayout from "src/layouts/Basic";
import UserDashboard from "src/comps/user/User";
import Quick from "src/comps/user/sell/Quick";

export default function Index() {
  return (
    <BasicLayout>
      <UserDashboard>
        <Quick />
      </UserDashboard>
    </BasicLayout>
  );
}
