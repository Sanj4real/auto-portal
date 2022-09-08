import { Form, Input, Button } from "antd";

const ContactCss = {
  boxShadow: `0px 4px 20px rgba(0, 0, 0, 0.1)`,
  borderRadius: `10px`,
  padding: `50px 60px`,
};

export default function ContactForm() {
  const [form] = Form.useForm(); //for form validation using hooks

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="" style={ContactCss}>
      <div className="mb-[26px]">
        <h3 className="text-3xl font-semibold text-[#313D50] mb-[15px]">
          Support Request
        </h3>
        <p className="text-base font-normal text-[#313D50]">
          It is suggested that you log in to your account for better user
          experience. You will be able to reference an existing order.
        </p>
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
              label="Full Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Enter Title here",
                },
              ]}
            >
              <Input type="text" size="large" placeholder="Enter Title here" />
            </Form.Item>
          </div>
          <div>
            <Form.Item
              label="Email Address"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Enter Email Address ",
                },
                {
                  type: "email",
                  message: "Please enter valid email",
                },
              ]}
            >
              <Input size="large" placeholder="Enter Email Address" />
            </Form.Item>
          </div>
          <div>
            <Form.Item
              label="Subject of your  Enquiry"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Enter Title here",
                },
              ]}
            >
              <Input type="text" size="large" placeholder="Enter Title here" />
            </Form.Item>
          </div>
          <div>
            <Form.Item name="textArea" label="Description">
              <Input.TextArea placeholder="Enter Text here" />
            </Form.Item>
          </div>

          <div>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button mb-4 bg-primary-400 font-normal text-sm capitalize border-0 py-[15px] px-[20px] h-auto "
              >
                Submit A Request
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}
