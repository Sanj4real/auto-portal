import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { customerRegister } from "src/api/auth";
import { messages } from "src/helpers/message";
import errorHandler from "src/helpers/errorHandler";

import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function RegisterForm() {
  const [form] = Form.useForm(); //for form validation using hooks
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = (values) => {
    setLoading(true);
    customerRegister(values)
      .then((response) => {
        setLoading(false);
        if (!response) {
          return messages.error("Invalid OTP provided");
        }
        router.push("/login");
        messages.success("Registration successfull. Please proceed to login");
      })
      .catch((err) => {
        setLoading(false);
        errorHandler(err);
      });
  };

  // social-links
  const MOBILESOCIAL = [
    {
      icon: <FaLinkedinIn size={20} />,
      href: "#!",
    },
    {
      icon: <FaTwitter size={20} />,
      href: "#!",
    },
    {
      icon: <FaFacebookF size={20} />,
      href: "#!",
    },
  ];

  return (
    <div className="h-auto relative overflow-hidden flex flex-col justify-center pt-20 px-4 pb-16 lg:py-[190px] lg:px-24 ">
      <div className="absolute bottom-0 right-[250px]">
        <Image src="/signup/img-2.svg" height="200" width="200" />
      </div>

      <div className="mb-6 text-center hidden md:block">
        <h2 className="text-[36px] leading-[46px] font-bold mb-6 text-gray-900">
          Register Now
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
          Create your Account
        </h5>
      </div>

      <div className="">
        <Form
          layout="vertical"
          form={form}
          initialValues={{}}
          autoComplete="off"
          onFinish={onSubmit}
        >
          <div>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter your email ",
                },
                {
                  type: "email",
                  message: "Please enter valid email",
                },
              ]}
            >
              <Input size="large" placeholder="email@domain.com" />
            </Form.Item>
          </div>
          <div>
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[
                {
                  required: true,
                  message: "Please enter your first name ",
                },
              ]}
            >
              <Input name="firstName" size="large" placeholder="First Name" />
            </Form.Item>
          </div>
          <div>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[
                {
                  required: true,
                  message: "Please enter your Lastname ",
                },
              ]}
            >
              <Input name="lastName" size="large" placeholder="Last Name" />
            </Form.Item>
          </div>
          <div>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please enter your username ",
                },
              ]}
            >
              <Input name="username" size="large" placeholder="username" />
            </Form.Item>
          </div>

          <div>
            <Form.Item
              label="OTP Key"
              name="otpKey"
              rules={[
                {
                  required: true,
                  message: "Please enter OTP sent to your phone",
                },
              ]}
            >
              <Input name="otpKey" size="large" placeholder="OTP key" />
            </Form.Item>
          </div>
          <div>
            <Form.Item
              label="Phone Number"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please enter your phone number ",
                },
              ]}
            >
              <Input name="phone" size="large" placeholder="phone number" />
            </Form.Item>
          </div>

          <div>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password placeholder="Password..." />
            </Form.Item>
          </div>
          <div>
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: "Please Confirm Password",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Confirm Password..." />
            </Form.Item>
          </div>

          <div className="text-center sm:text-gray-400 sm:text-base">
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button mb-4 bg-primary-400 font-normal text-base md:text-sm capitalize border-0 py-[15px] px-[20px] h-auto w-full"
                loading={loading}
              >
                Sign up
              </Button>
              Or
              <div className="md:block mt-4 text-base text-gray-600 hidden">
                Already a user?
                <Link href="/login">
                  <a className="text-primary-400 ml-3 capitalize">Sign In</a>
                </Link>
              </div>
              <div className="block mt-4 text-base text-center text-gray-600 md:hidden">
                <div className="mb-[60px]">
                  <ul className="flex space-x-3 items-center justify-center">
                    {MOBILESOCIAL.map((item, index) => (
                      <li key={index} item={item} className="">
                        <Link href={item.href}>
                          <a className="h-14 w-14 rounded-[50%] flex items-center justify-center text-[#5065F6] transition-all bg-[#F4F7FB] hover:bg-[#5065F6] hover:text-[#F4F7FB]">
                            {item.icon}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                Already have an account?
                <Link href="/login">
                  <a className="text-primary-400 ml-3 capitalize">Sign In</a>
                </Link>
              </div>
            </Form.Item>
          </div>
        </Form>
      </div>
      <style jsx>
        {`
          :global(.ant-form-item-control-input-content) {
            padding: 0 !important;
          }
          :global(.ant-input-affix-wrapper) {
            padding: 0 !important;
          }
          :global(.ant-input) {
            padding: 0.75rem 1.25rem !important;
          }
        `}
      </style>
    </div>
  );
}
