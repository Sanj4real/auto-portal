import BasicLayout from 'src/layouts/Basic'
import UserDashboard from 'src/comps/user/User'
import PasswordReset from 'src/comps/user/password/Password'

export default function index() {
    return (
        <BasicLayout>
            <UserDashboard>
                <PasswordReset />
            </UserDashboard>
        </BasicLayout>
    )
}
