import BasicLayout from "src/layouts/Basic";
import UserDashboard from "src/comps/user/User";
import History from "src/comps/user/order/History";

export default function index() {
  return (
    <BasicLayout>
      <UserDashboard>
        <History />
      </UserDashboard>
    </BasicLayout>
  );
}
