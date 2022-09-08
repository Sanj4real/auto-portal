import { Row, Col, Form, Input, Button } from "antd";
// import {  useQuery ,QueryClient } from "react-query";
import { message } from "antd";
import { changePassword } from "src/api/auth";
import { removeToken } from "src/helpers/token";
import { useRouter } from "next/router";

function PasswordReset() {
  const [form] = Form.useForm();
  const router = useRouter();
  const onFinish = (values) => {
    console.log(values);
    changePassword(values)
      .then((res) => {
        if (!res) {
          form.resetFields();
          return message.error("Invalid old password");
        }
        message.success("Password Change, please proceed to login");
        removeToken();
        router.push("/login");
      })
      .catch((err) => {});
  };
  return (
    <div className="">
      <h2 className="text-lg font-medium capitalize mb-4 ">Change Password</h2>
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        autoComplete="off"
      >
        <Row gutter={[24]}>
          <Col xs={24} sm={12} md={12}>
            <Form.Item
              label="Old Password"
              name="oldPassword"
              rules={[
                {
                  required: true,
                  message: "Please input your Old password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={12}>
            <Form.Item
              label="New Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={12}>
            <Form.Item
              name="confirmPassword"
              label="confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
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
              <Input.Password />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={24}>
            <Button
              type="primary"
              htmlType="submit"
              className="transition-all text-hoverbgColor hover:bg-hoverbgColor hover:text-slate-50 mr-2 capitalize border border-[#5065F6] py-[7px] px-5 h-auto hover:bg-transparent hover:border-[#5065F6]"
            >
              Cancel
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-[#5065F6] mr-2 text-slate-50 capitalize transition-all border border-transparent py-[7px] px-5 h-auto hover:bg-transparent hover:border-[#5065F6] hover:text-[#5065F6] "
            >
              Save
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default PasswordReset;
