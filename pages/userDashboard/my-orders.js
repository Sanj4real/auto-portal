import UserDashboard from "src/comps/user/User"
import BasicLayout from "src/layouts/Basic";

export default function myOrders() {
    return (
        <BasicLayout>
            <UserDashboard>
                My Orders
            </UserDashboard>
        </BasicLayout>
    )
}
