import BasicLayout from "src/layouts/Basic";
import Register from "src/comps/auth/register/Register";

export default function LoginPage() {
    return (
        <div>
            <BasicLayout>
                <Register></Register>
            </BasicLayout>
        </div>
    );
}
