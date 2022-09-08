import UserDashboard from "src/comps/user/User"
import BasicLayout from "src/layouts/Basic";
import MyAuto from "src/comps/user/MyAuto";
import Head from "next/head";


export default function myauto() {
    return (
        <>
        <Head>
            <title>My Auto</title>
        </Head>
        <BasicLayout>
        <UserDashboard>
            <MyAuto />
        </UserDashboard>
    </BasicLayout>
    </>
    )
}
