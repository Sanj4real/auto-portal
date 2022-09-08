import BasicLayout from "src/layouts/Basic";
import UserDashboard from "src/comps/user/User";
import UserProfile from "src/comps/user/userProfile/UserProfile";

export default function index() {
  return (
    <BasicLayout>
      <UserDashboard>
        <UserProfile />
      </UserDashboard>
    </BasicLayout>
  );
}
