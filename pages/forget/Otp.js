import BasicLayout from 'src/layouts/Basic'
import Forget from 'src/comps/auth/forget/Forget'
import Otp from 'src/comps/auth/forget/Otp'
import ForgetForm from 'src/comps/auth/forget/ForgetForm'

export default function index() {
    return (
        <BasicLayout>
            <Forget>
                <Otp />
            </Forget>
        </BasicLayout>
    )
}