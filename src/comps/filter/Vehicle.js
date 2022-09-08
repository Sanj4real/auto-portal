import { Row, Col, Form, Select } from "antd";
import { AutoComplete } from "antd";

export default function VehicleSteps() {
  const [form] = Form.useForm();
  const { Option } = Select;

  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }

  const options = [
    {
      value: "Burns Bay Road",
    },
    {
      value: "Downing Street",
    },
    {
      value: "Wall Street",
    },
  ];


  return (
    <div className="">
      <h3 className="text-xl text-gray-700 font-medium mb-12 inline-block">
        Let's Sell Your Car
      </h3>
      <div>
        <Form form={form} layout="vertical" autoComplete="off">
          <Row gutter={[24]}>
            <Col xs={24} sm={12} md={12}>
              <Form.Item
                label="Enter Your Vehicle Details"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Vehicle Details",
                  },
                ]}
              >
                <AutoComplete
                  className="w-1/2"
                  options={options}
                  placeholder="Eg: Maruti Suziki Alto VXI 2021"
                  filterOption={(inputValue, option) =>
                    option.value
                      .toUpperCase()
                      .indexOf(inputValue.toUpperCase()) !== -1
                  }
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}
