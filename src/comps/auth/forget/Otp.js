import { Form, Input, Button, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { resetPassword } from "src/api/auth";
import { message } from "antd";

export default function Otp() {
  const [form] = Form.useForm();
  const router = useRouter();

  const onSubmit = (values) => {
    console.log(values);
    resetPassword(values).then((res) => {
      if (!res) {
        return message.error("not sucess");
      }
      router.push("/login");
      message.success("sucess");
    });
  };

  return (
    <div className="h-auto relative overflow-hidden flex flex-col justify-center py-[100px] px-24 ">
      <div className="absolute bottom-0 right-[250px]">
        <Image src="/signup/img-2.svg" height="200" width="200" />
      </div>

      <div className="mb-6 text-center hidden md:block">
        <h2 className="text-[36px] leading-[46px] font-bold mb-6 text-gray-900">
          Reset Password
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
            <Form.Item label="Phone Number" name="phone">
              <Input
                // onChange={changeHandler}
                placeholder="Your Phone NUmber is ..."
              />
            </Form.Item>
          </div>
          <div>
            <Form.Item label="OTP" name="otpKey">
              <Input
                // onChange={changeHandler}
                placeholder="Your OTP is ..."
              />
            </Form.Item>
          </div>
          <div>
            <Form.Item label="Password" name="password">
              <Input.Password
                // onChange={changeHandler}
                placeholder="Your password is ..."
              />
            </Form.Item>
          </div>
          <div>
            <Form.Item label="Confirm Password" name="confirmPassword">
              <Input.Password
                // onChange={changeHandler}
                placeholder="Confirm Your Password ..."
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
                  <a className="text-primary-400 ml-3 capitalize">Login now</a>
                </Link>
              </div>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}
