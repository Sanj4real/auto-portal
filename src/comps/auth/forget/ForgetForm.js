import { Form, Input, Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { message } from "antd";
import { forgetPassword } from "src/api/auth";
import { useRouter } from "next/router";

export default function ForgetForm() {
  const [form] = Form.useForm();
  const router = useRouter();

  const onSubmit = (values) => {
    console.log(values);
    forgetPassword(values.email).then((res) => {
      if (!res) {
        return message.error("not sucessed");
      }

      router.push("/forget/ResetPassword");
       message.success("email submitted");
    });
  };
  return (
    <>
      <div className="h-auto relative overflow-hidden flex flex-col justify-center py-[100px] px-24 ">
        <div className="absolute bottom-0 right-[250px]">
          <Image src="/signup/img-2.svg" height="200" width="200" />
        </div>

        <div className="mb-6 text-center hidden md:block">
          <h2 className="text-[36px] leading-[46px] font-bold mb-6 text-gray-900">
            Forget Password
          </h2>
          <h5 className="text-2xl font-semibold text-gray-700">
            Get started absolutely free
          </h5>
        </div>

        <div className="mb-6 text-left block md:hidden">
          <div className="relative h-[120px] mb-[60px] w-48 mx-auto">
            <Image src="/logo/logo.png" layout="fill" alt="logo" />
          </div>
          <h5 className="text-lg font-semibold text-gray-900 mb-6">
            Login to your Account
          </h5>
        </div>

        <div className="">
          <Form
            layout="vertical"
            form={form}
            // initialValues={{}}
            autoComplete="off"
            onFinish={onSubmit}
          >
            <div>
              <Form.Item
                label="Email"
                name="email"
                // rules={[
                //   {
                //     required: true,
                //     type: "number",
                //     message: "Please enter valid email",
                //   },
                // ]}
              >
                <Input
                  // onChange={changeHandler}
                  placeholder="Email Address is ..."
                />
              </Form.Item>
            </div>

            <div className="text-center sm:text-base">
              <Form.Item>
                <Button
                  type="submit"
                  htmlType="submit"
                  // loading={loading}
                  className="mb-4 bg-primary-400 text-slate-50 font-normal text-base md:text-sm capitalize border-0 py-[15px] px-[20px] h-auto w-full"
                >
                  Reset Now
                </Button>
                Or
                <div className="md:block mt-4 text-base text-gray-600 hidden">
                  Have Account ?
                  <Link href="/login">
                    <a className="text-primary-400 ml-3 capitalize">
                      Login now
                    </a>
                  </Link>
                </div>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
