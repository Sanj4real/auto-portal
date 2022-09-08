import { Row, Col, Form, Input, Button } from "antd";
import { useState, useEffect } from "react";
import { updateProfileApi } from "../../../api/user/user";
import { message } from "antd";
import { useRouter } from "next/router";

export default function UserForm({ userData: user, refetch }) {
  const [form] = Form.useForm();
  const router = useRouter();
  const onFinish = (values) => {
    if (values?.address) values.address = +values.address;
    console.log(`value is`, values);
    updateProfileApi(values).then((res) => {
      message.success("profile updated successfully");
      refetch();
      router.push("/userDashboard");
    });
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    console.log("name,value", name, value);
  };

  return (
    <div className="mt-6 lg:mt-[62px]">
      {user && (
        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          autoComplete="off"
        >
          <Row gutter={[24]}>
            <Col xs={24} sm={12} md={12}>
              <Form.Item label="First Name" name="firstName">
                <Input defaultValue={user?.firstName} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={12}>
              <Form.Item label="Last Name" name="lastName">
                <Input defaultValue={user?.lastName} />
              </Form.Item>
            </Col>
            {/* <Col xs={24} sm={12} md={12}>
            <Form.Item label="Organization Name">
              <Input name='username' defaultValue={user?.username } />
            </Form.Item>
          </Col> */}
            <Col xs={24} sm={12} md={12}>
              <Form.Item label="Address" name="address">
                <Input defaultValue={user?.address} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={12}>
              <Form.Item label="Email Address" name="email">
                <Input defaultValue={user?.email} type="email" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={12}>
              <Form.Item label="Phone Number" name="phone">
                <Input defaultValue={user?.phone} type="number" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-[#5065F6] mr-2 text-slate-50 capitalize transition-all border border-transparent py-[7px] px-5 h-auto hover:bg-transparent hover:border-[#5065F6] hover:text-[#5065F6] "
            >
              Save
            </Button>
            {/* <Button
            type="primary"
            htmlType="submit"
            className="bg-[#5065F6] text-slate-50 capitalize transition-all border border-transparent py-[7px] px-5 h-auto hover:bg-transparent hover:border-[#5065F6] hover:text-[#5065F6] "
          >
            Undo Changes
          </Button> */}
          </Form.Item>
        </Form>
      )}
    </div>
  );
}
