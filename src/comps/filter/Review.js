import { Row, Col, Form } from "antd";

export default function Review() {
  const [form] = Form.useForm();

  const LIST = [
    {
      title: "Product",
      detail: "1421270091",
    },
    {
      title: "Kms Driven",
      detail: "1,213",
    },
    {
      title: "Fuel type",
      detail: "Petrol",
    },
    {
      title: "Condition",
      detail: "Used  (Excellent)",
    },
    {
      title: "Location",
      detail: "Delhi",
    },
    {
      title: "DLID",
      detail: "1421270091",
    },
  ];

  return (
    <div className="">
      <Form form={form} layout="vertical" autoComplete="off">
        <Row gutter={[24]}>
          <Col xs={24} sm={12} md={18}>
            <div className="items-center text-[15px] mt-6">
              <h4 className="text-lg mb-4 font-medium capitalize">
                Your Listing Summary is ₹ 2,343 Selling price
              </h4>
              <div>
                <ul>
                  {LIST.map((item, index) => (
                    <li key={index} item={item} className="relative ml-3 text-base font-normal mb-1 flex space-x-4 items-center">
                      <b className='w-1/6 text-base font-medium'>{item.title}</b>
                      {item.detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
