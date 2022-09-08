import { Row, Col, Input, Form, Radio, Select, AutoComplete } from "antd";
import { AiFillBulb } from "react-icons/ai";

export default function BudgetSteps() {
  const [form] = Form.useForm();
  const { Option } = Select;

  // const onChange = (e) => {
  //   console.log(`radio checked:${e.target.value}`);
  // };

  const OWNERFIRST = [
    {
      title: "First Owner",
      value: "a",
    },
    {
      title: "Second Owner",
      value: "b",
    },
    {
      title: "Third Owner",
      value: "c",
    },
    {
      title: "Fouth Owner",
      value: "d",
    },
    {
      title: "Fifth Owner",
      value: "e",
    },
    {
      title: "Sixth Owner",
      value: "f",
    },
    {
      title: "Seventh Owner",
      value: "g",
    },
  ];

  const OWNERSECOND = [
    {
      title: "Owned",
      value: "aa",
    },
    {
      title: "On Load",
      value: "bb",
    },
    {
      title: "On Lease",
      value: "cc",
    },
  ];

  const CONDITION = [
    {
      title: "Excellent",
      value: "aaa",
    },
    {
      title: "Very Good",
      value: "bbb",
    },
    {
      title: "Fair",
      value: "ccc",
    },
    {
      title: "Poor",
      value: "ddd",
    },
  ];
  const EXCOLOR = [
    {
      title: "#000",
      value: "c1",
    },
    {
      title: "#5b92e5",
      value: "c2",
    },
    {
      title: "#e2365d",
      value: "c3",
    },
    {
      title: "#6173b3",
      value: "c4",
    },
    {
      title: "#2d0064",
      value: "c5",
    },
    {
      title: "#dfff3d",
      value: "c6",
    },
  ];
  const INCOLOR = [
    {
      title: "#000",
      value: "cc1",
    },
    {
      title: "#ccc",
      value: "cc2",
    },
    {
      title: "#dfff3d",
      value: "cc3",
    },
    {
      title: "#2d0064",
      value: "cc4",
    },
  ];

  const THINGSTOKNOW = [
    {
      title:
        " Your vehicle is listed in Live Auction and you start receiving Bids from Droom Certified Dealers",
    },
    {
      title: " Bids can even go higher than your Selling Price",
    },
    {
      title: "  Dealers can buy your vehicle anytime at Selling Price",
    },
  ];

  const options = [
    {
      value: "Fuel Type",
    },
  ];
  const option = [
    {
      value: "Fuel ",
    },
  ];
  const optio = [
    {
      value: "Fue Type",
    },
  ];

  return (
    <div className="">
      <h3 className="text-xl text-gray-700 font-medium mb-12 inline-block">
        Share Your Car Details
      </h3>
      <div>
        <Form form={form} layout="vertical" autoComplete="off">
          <Row gutter={[24]}>
            <Col xs={24} sm={12} md={12}>
              <Form.Item label="Registration Number" name="name">
                <Input
                  type="text"
                  size="large"
                  placeholder="EX - DL05-AA-1111"
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={12}>
              <Form.Item label="Kilometers Driven" name="km">
                <Input type="number" size="large" placeholder="1232" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={16}>
              <div className="p-1 flex space-x-3 items-center bg-[#f1f3f5] text-[15px]">
                <AiFillBulb className="text-[#ffd517]" />
                <h4 className="text-[14px] italic">
                  Exact Kilometers will help us suggest you a better price for
                  your vehicle
                </h4>
              </div>
            </Col>
            <Col xs={24} sm={12} md={22}>
              <div className="items-center text-[15px] mt-6">
                <h4 className="text-lg mb-4 capitalize font-medium">
                  Number of Owners
                </h4>
                <div>
                  <Radio.Group defaultValue="a">
                    {OWNERFIRST.map((item, index) => (
                      <Radio.Button
                        key={index}
                        value={item.value}
                        className="mr-4 mb-4 text-sm py-[9px] px-5 h-auto leading-normal text-[#212121]"
                      >
                        {item.title}
                      </Radio.Button>
                    ))}
                  </Radio.Group>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={12} md={12}>
              <div className="items-center text-[15px] mt-6">
                <h4 className="text-lg mb-4 capitalize font-medium">
                  Ownership Type
                </h4>
                <div>
                  <Radio.Group defaultValue="a">
                    {OWNERSECOND.map((item, index) => (
                      <Radio.Button
                        key={index}
                        value={item.value}
                        className="mr-4 mb-4 text-sm py-[9px] px-5 h-auto leading-normal text-[#212121]"
                      >
                        {item.title}
                      </Radio.Button>
                    ))}
                  </Radio.Group>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={12} md={12}>
              <div className="items-center text-[15px] mt-6">
                <h4 className="text-lg mb-4 capitalize font-medium">
                  Condition Grading
                </h4>
                <div>
                  <Radio.Group defaultValue="a">
                    {CONDITION.map((item, index) => (
                      <Radio.Button
                        key={index}
                        value={item.value}
                        className="mr-4 mb-4 text-sm py-[9px] px-5 h-auto leading-normal text-[#212121]"
                      >
                        {item.title}
                      </Radio.Button>
                    ))}
                  </Radio.Group>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={12} md={12}>
              <div className="items-center text-[15px] mt-6">
                <h4 className="text-lg mb-4 capitalize font-medium">
                  Exterior Color
                </h4>
                <div>
                  <Radio.Group defaultValue="a">
                    {EXCOLOR.map((item, index) => (
                      <Radio.Button
                        key={index}
                        value={item.value}
                        className="mr-4 mb-4 py-[9px] px-5 h-auto"
                      >
                        <div
                          className={`  h-8 w-8 m-auto rounded-full inline-block`}
                          style={{
                            background: `${item.title}`,
                          }}
                        ></div>
                      </Radio.Button>
                    ))}
                  </Radio.Group>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={12} md={12}>
              <div className="items-center text-[15px] mt-6">
                <h4 className="text-lg mb-4 capitalize font-medium">
                  Interior Color
                </h4>
                <div>
                  <Radio.Group defaultValue="a">
                    {INCOLOR.map((item, index) => (
                      <Radio.Button
                        key={index}
                        value={item.value}
                        className="mr-4 mb-4 py-[9px] px-5 h-auto"
                      >
                        <div
                          className={`m-auto h-8 w-8 rounded-full  inline-block`}
                          style={{
                            background: `${item.title}`,
                          }}
                        ></div>
                      </Radio.Button>
                    ))}
                  </Radio.Group>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <div className="items-center text-[15px] mt-6">
                <h4 className="text-lg mb-4 capitalize font-medium">
                  Fuel Type
                </h4>
                <div>
                  <Form.Item name="fuel">
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
                </div>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <div className="items-center text-[15px] mt-6">
                <h4 className="text-lg mb-4 capitalize font-medium">
                  Transmission Type
                </h4>
                <div>
                  <Form.Item name="transmission">
                    <AutoComplete
                      className="w-1/2"
                      options={optio}
                      placeholder="Eg: Maruti Suziki Alto VXI 2021"
                      filterOption={(inputValue, option) =>
                        option.value
                          .toUpperCase()
                          .indexOf(inputValue.toUpperCase()) !== -1
                      }
                    />
                  </Form.Item>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <div className="items-center text-[15px] mt-6">
                <h4 className="text-lg mb-4 capitalize font-medium">
                  Body Type
                </h4>
                <div>
                  <Form.Item name="body">
                    <AutoComplete
                      className="w-1/2"
                      options={option}
                      placeholder="Eg: Maruti Suziki Alto VXI 2021"
                      filterOption={(inputValue, option) =>
                        option.value
                          .toUpperCase()
                          .indexOf(inputValue.toUpperCase()) !== -1
                      }
                    />
                  </Form.Item>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <div className="items-center text-[14px] font-medium mt-6">
                <h4 className="text-lg font-medium mb-1 capitalize">
                  Selling Price
                </h4>
                <i className="mb-4 block">
                  (Auto Expert Suggested Price for your Maruti Suzuki Baleno is{" "}
                  <span className="text-[#d80005] text-base font-semibold">
                    ₹ 25952
                  </span>{" "}
                  Use this price to sell quickly)
                </i>

                <div>
                  <Form.Item name="price">
                    <Input
                      type="text"
                      size="large"
                      placeholder="EX - 2,50,000"
                    />
                  </Form.Item>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <div className="items-center text-[15px] mt-6 bg-[#f1f3f5] p-6">
                <h4 className="text-lg flex mb-3 items-center font-medium capitalize">
                  <AiFillBulb className="text-[#ffd517] mr-3" />
                  What Happens After Listing is Activated
                </h4>
                <div className="">
                  <ul>
                    {THINGSTOKNOW.map((item, index) => (
                      <li
                        key={index}
                        item={item}
                        className="list-disc ml-6 mb-1"
                      >
                        {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}
