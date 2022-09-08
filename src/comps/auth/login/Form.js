import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import Link from "next/link";
import Image from "next/image";
import { customerAuthLogin, getTokenApi } from "src/api/auth";
import { useState } from "react";
import { useQuery } from "react-query";
import Cookies from "js-cookie";
import errorHandler from "src/helpers/errorHandler";
import { messages } from "src/helpers/message";
import { setToken, removeToken, isAuthenticated } from "src/helpers/token";
import { useRouter } from "next/router";
import { getUser } from "src/api/user/user";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useEffect } from "react";

export default function LoginForm({ setLoginModel }) {
  const router = useRouter();
  console.log(router);
  const [form] = Form.useForm(); //for form validation using hooks
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const { data: userData, refetch: refetchUser } = useQuery(
    "user",
    () => getUser(),
    { enabled: isAuthenticated() }
  );

  const { data, refetch } = useQuery("auth", customerAuthApiHandler, {
    enabled: false,
  });
  const onSubmit = async (values) => {
    if (values.username) {
      values.username = values.username.trim();
    }
    setLoading(true);
    setCredentials(values);
    await refetch();
  };
  // queryCLIENT.GETQUERYDATA('USER)

  useEffect(() => {
    // Cookies.set('userData',JSON.stringify(userData))
    Cookies.set("userData", JSON.stringify(userData));
  }, [userData]);

  var loginresponse = {};
  function customerAuthApiHandler() {
    customerAuthLogin({
      username: credentials.username,
      password: credentials.password,
    })
      .then((response) => {
        try {
          if (!response) {
            setLoading(false);
            return messages.error("Invalid credentials");
          }
          const { code } = response.data;
          getTokenApi({ code, username: credentials.username })
            .then(async (response) => {
              loginresponse = response;
              const { accessToken, expiresIn, refreshToken } = response.data;
              const expiresAtStr = JSON.stringify(
                (expiresIn || 1000) * 1000 + new Date().getTime()
              );
              if (setLoginModel) setLoginModel(false);
              setToken({ accessToken, expiresAtStr, refreshToken });
              setLoading(false);
              messages.success("Logged in Successfully");
              await refetchUser();
              (await setLoginModel)
                ? router.push(router.route)
                : router.push("/userDashboard");
            })
            .catch((err) => {
              removeToken();
              if (setLoginModel) setLoginModel(false);

              setLoading(false);
              errorHandler(err);
            });
        } catch (err) {
          removeToken();

          if (setLoginModel) setLoginModel(false);
          setLoading(false);
          errorHandler(err);
        }
      })
      .catch((err) => {
        removeToken();
        if (setLoginModel) setLoginModel(false);

        setLoading(false);
        errorHandler(err);
      });
    return loginresponse;
  }

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
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
    <div
      className={`h-auto relative overflow-hidden flex flex-col justify-center ${
        router.pathname === "/login" ? "py-8 md:py-10 lg:py-16 xl:py-24" : ""
      } px-4 md:px-10 lg:px-16 xl:px-24`}
    >
      {/* <div className="h-auto relative overflow-hidden flex flex-col justify-center pt-20 px-4 pb-16 lg:py-[190px] lg:px-24 "> */}
      <div className="absolute bottom-0 right-[250px]">
        <Image src="/signup/img-2.svg" height="200" width="200" />
      </div>

      <div className="mb-6 text-center hidden md:block">
        <h2 className="text-xl  font-medium mb-2 ">Sign In</h2>
        <h5 className="text-base font-medium text-gray-700">
          Get started absolutely free
        </h5>
      </div>

      <div className="mb-6 text-left block md:hidden">
        {/* <div className="relative h-[120px] mb-[60px] w-48 mx-auto">
          <Image src="/logo/logo.png" layout="fill" alt="logo" />
        </div> */}
        <h5 className="text-xl font-medium  mb-4">Login to your Account</h5>
      </div>

      <div className="mb-6 md:mb-0">
        <Form
          layout="vertical"
          form={form}
          initialValues={{}}
          autoComplete="off"
          onFinish={onSubmit}
        >
          <div>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please enter your Username ",
                },
                // {
                //   type: "text",
                //   message: "Please enter valid Username",
                // },
              ]}
            >
              <Input
                name="username"
                size="large"
                onChange={changeHandler}
                placeholder="email@domain.com"
              />
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
            >
              <Input.Password
                name="password"
                onChange={changeHandler}
                placeholder="Password..."
              />
            </Form.Item>
          </div>

          <div className="">
            <Row>
              <Col span={12}>
                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
              </Col>
              <Col span={12} className="text-right">
                <Form.Item>
                  <Link href="/forget">
                    <a className="text-sm capitalize font-normal text-hoverColor hover:underline">
                      Forget Password?
                    </a>
                  </Link>
                </Form.Item>
              </Col>
            </Row>
          </div>

          <div className="text-center sm:text-gray-400 sm:text-base">
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                className="login-form-button mb-4 bg-hoverColor font-normal text-base md:text-sm capitalize border-0 py-3 px-4 h-auto w-full"
              >
                Log in
              </Button>
              Or
              <div className="md:block mt-4 text-base text-gray-600 hidden">
                Already a user?
                <Link href="/register/sendotp">
                  <a className="text-hoverColor ml-3 capitalize">
                    register now!
                  </a>
                </Link>
              </div>
              <div className="block mt-4 text-base text-center text-gray-600 md:hidden">
                <div className="mb-8">
                  <ul className="flex space-x-3 items-center justify-center">
                    {MOBILESOCIAL.map((item, index) => (
                      <li key={index} item={item} className="">
                        <Link href={item.href}>
                          <a className="h-12 w-12 md:h-14 md:w-14 p-4 rounded-[50%] flex items-center justify-center text-hoverColor transition-all bg-[#F4F7FB] hover:bg-hoverbgColor hover:text-[#F4F7FB]">
                            {item.icon}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                Don't have an account?
                <Link href="/register">
                  <a className="text-hoverColor hover:underline ml-3 capitalize">
                    Sign up
                  </a>
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
