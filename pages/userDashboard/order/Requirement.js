import BasicLayout from "src/layouts/Basic";
import UserDashboard from "src/comps/user/User";
import Requirement from "src/comps/user/order/Requirement";

export default function index() {
  return (
    <BasicLayout>
      {/* <UserDashboard> */}
        <Requirement />
      {/* </UserDashboard> */}
    </BasicLayout>
  );
}
