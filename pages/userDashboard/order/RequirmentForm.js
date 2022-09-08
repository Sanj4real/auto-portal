import BasicLayout from "src/layouts/Basic";
import UserDashboard from "src/comps/user/User";
import RequirementForm from "src/comps/user/order/RequirementForm";

export default function index() {
  return (
    <BasicLayout>
      <UserDashboard>
        <RequirementForm />
      </UserDashboard>
    </BasicLayout>
  );
}
