import { AiFillCar } from "react-icons/ai";
import { Form, Input, Button, Select, Space } from "antd";
import { ImCancelCircle } from "react-icons/im";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
const { Option } = Select;

export default function MyAuto() {
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  const LIST = [
    {
      item: "Researching",
    },
    {
      item: "Buying",
    },
    {
      item: "Maintaining",
    },
    {
      item: "Disposing",
    },
  ];
  const INFO = [
    {
      title: "Name",
      name: "Gopal Rimal",
    },
    {
      title: "Age",
      name: "28",
    },
    {
      title: "Location",
      name: "delhi",
    },
  ];

  return (
    <div>
      <div className="py-5 px-6 mb-5 bg-bgGround flex space-x-4 ">
        <AiFillCar className="text-2xl text-hoverColor" />
        <div>
          <h4 className="mb-2 text-2xl  capitalize">
            Complete LifeCycle Managment of your family of Vehicle
          </h4>
          <ul>
            {LIST.map((item, index) => (
              <li
                className="text-sm font-light mr-6 capitalize inline-block"
                key={index}
                item={item}
              >
                {item.item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="py-5 px-6 mb-5 "
        style={{
          boxShadow: "0 0 13px 0 rgb(125 125 125 / 10%)",
        }}
      >
        <div className="mb-6">
          <ul>
            {INFO.map((item, index) => (
              <li
                className="text-base font-normal mr-6 capitalize inline-block"
                key={index}
                item={item}
              >
                <span className="text-paraColor mr-2">{item.title}:</span>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Form
            name="dynamic_form_nest_item"
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.List name="users">
              {(fields, { add, remove }) => (
                <>
                  <Form.Item>
                    <div className="w-16 h-16 inline-flex items-center justify-center border mb-6 border-[#000] border-dashed group hover:border-hoverColor rounded-full ">
                      <AiFillCar
                        onClick={() => add()}
                        className="w-6 h-6 group-hover:text-hoverColor"
                      />
                    </div>
                    <h4 className="text-base">Add Vehicles</h4>
                  </Form.Item>

                  {fields.map(({ key, name, ...restField }) => (
                    <div
                      key={key}
                      className="bg-bgGround w-[50%] p-3 relative mb-4"
                    >
                      <h4 className="text-lg mb-6 capitalize">
                        Vehicle Details
                      </h4>
                      <Form.Item
                        {...restField}
                        name={[name, "name"]}
                        rules={[
                          {
                            required: true,
                            message: "Kindly Select a Vehicle",
                          },
                        ]}
                      >
                        <Input placeholder="Search Your Vehicle" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, "value"]}
                        rules={[
                          {
                            required: true,
                            message: "Invalid Registration Number",
                          },
                        ]}
                      >
                        <Input placeholder="Enter Vehicle Registration No." />
                      </Form.Item>
                      <Space>
                        <Form.Item
                          {...restField}
                          name={[name, "speed"]}
                          rules={[
                            {
                              required: true,
                              message: "Missing last name",
                            },
                          ]}
                        >
                          <Input
                            placeholder="
                            KMs Driven (per months)"
                          />
                        </Form.Item>
                        <Form.Item {...restField} name={[name, "number"]}>
                          <Select
                            defaultValue="lucy"
                            style={{
                              width: "100%",
                              display: "block",
                            }}
                          >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                          </Select>
                        </Form.Item>
                      </Space>
                      <div
                        className="absolute top-0 right-0 "
                        onClick={() => remove(name)}
                      >
                        <ImCancelCircle className="text-xl hover:text-hoverColor font-light hover:cursor-pointer" />
                      </div>
                    </div>
                  ))}
                </>
              )}
            </Form.List>
            <Form.Item>
              <Button
                type="primary"
                className="siteButton rounded-sm text-sm"
                htmlType="submit"
                style={{
                  borderRadius: "4px !important",
                }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

      <style jsx>
        {`
          :global(.ant-btn.ant-btn-block) {
            width: auto !important;
            height: 5rem !important;
          }
          :global(.ant-select-single:not(.ant-select-customize-input)
              .ant-select-selector) {
            padding: 0 !important;
            width: 13rem !important;
          }
          :global(.ant-input) {
            background: #fff !important;
          }
          :global(.ant-select-selector) {
            background: #fff !important;
          }
        `}
      </style>
    </div>
  );
}
