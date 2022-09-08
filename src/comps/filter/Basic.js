import { Row, Col, Input, Form, } from "antd";

export default function BasicSteps() {
  const [form] = Form.useForm();

  return (
    <div className="">
      <h3 className="text-xl text-gray-700 font-medium mb-12 inline-block ">
        What do you want to sell?
      </h3>
      <div>
        <Form form={form} layout="vertical" autoComplete="off">
          <Row gutter={[24]}>
            <Col xs={24} sm={12} md={12}>
              <Form.Item
                label="Select Your Location"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Select Location",
                  },
                ]}
              >
                <Input
                  type="text"
                  size="large"
                  placeholder="Select Location"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}
