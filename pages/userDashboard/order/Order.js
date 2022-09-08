import BasicLayout from "src/layouts/Basic";
import UserDashboard from "src/comps/user/User";
import Order from "src/comps/user/order/Order";

export default function index() {
  return (
    <BasicLayout>
      <UserDashboard>
        <Order />
      </UserDashboard>
    </BasicLayout>
  );
}
