import {
  Breadcrumb,
  Modal,
  Row,
  Col,
  Form,
  Input,
  Button,
  AutoComplete,
  message,
} from "antd";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Link from "next/link";
import { useState, useEffect } from "react";
import RequirementList from "./RequirementList";
import BreadCrumb from "src/helpers/breadcrumb";

export default function Requirement() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    message.success("value submitted");
    console.log("Success:", values);
  };

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

  const [IsModal, setIsModal] = useState(false);

  const showModal = () => {
    setIsModal(true);
  };

  const handleOk = () => {
    setIsModal(false);
  };

  const handleCancel = () => {
    setIsModal(false);
  };

  const [requirement, setRequirement] = useState("");

  const handleRequirement = () => {};

  useEffect(() => {
    setRequirement();
  }, []);

  return (
    <>
      <BreadCrumb component=" Requirements" />
      <div className="container">
        <div className="bg-footerColor mb-4 min-h-[200px] rounded-md flex items-center justify-between relative">
          <div className="flex justify-between items-center py-5 px-7 w-full">
            <div>
              <h4 className=" text-lg text-slate-50 font-medium">
                Welcome Sanjay,
              </h4>
              <p className=" text-slate-50 text-sm font-normal ">
                2 Requirement
              </p>
            </div>
            <div>
              <Link href="#!">
                <a
                  className="text-sm text-slate-50 font-medium flex space-x-2 items-center"
                  onClick={showModal}
                >
                  <AiOutlinePlusCircle className="mr-1" /> Add Requirement
                </a>
              </Link>
            </div>
          </div>
        </div>
        <RequirementList />

        {/* modal */}
        <Modal
          title="Add Requirements"
          visible={IsModal}
          footer={null}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div>
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              autoComplete="off"
            >
              <Row gutter={[24]}>
                <Col xs={24} sm={12} md={12}>
                  <Form.Item
                    label="Requirement Field"
                    name="title"
                    className=""
                  >
                    <Input
                      type="text"
                      size="large"
                      placeholder="EX - Car, Used, Delhi"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={12}>
                  <AutoComplete
                    style={{
                      width: 200,
                    }}
                    options={options}
                    placeholder="try to type `b`"
                    filterOption={(inputValue, option) =>
                      option.value
                        .toUpperCase()
                        .indexOf(inputValue.toUpperCase()) !== -1
                    }
                  />
                </Col>
                <Col xs={24} sm={12} md={12}>
                  <Form.Item label="Vehicle Buy" name="createdOn">
                    <Input
                      type="date"
                      size="large"
                      placeholder="EX - 3th June 2010"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={12}>
                  <Form.Item label="Vehicle Number" name="ridNo">
                    <Input
                      type="text"
                      size="large"
                      placeholder="EX - RID-#829834"
                    />
                  </Form.Item>
                </Col>
                {/* <Col xs={24} sm={12} md={12}>
                <Form.Item label="Requirement Score" name="name">
                  <Input
                    type="number"
                    size="large"
                    placeholder="EX - 97%"
                  />
                </Form.Item>
                </Col> */}
                <Col xs={24} sm={12} md={12}>
                  <Form.Item label="Price Range" name="priceRange">
                    <Input
                      type="text"
                      size="large"
                      placeholder="EX - Price Range"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={12}>
                  <Form.Item label="Distance Travelled" name="kmDriven">
                    <Input
                      type="text"
                      size="large"
                      placeholder="EX - Km Druven"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={12}>
                  <Form.Item label="Vehicle Used" name="ageVehicle">
                    <Input
                      type="text"
                      size="large"
                      placeholder="EX - Age of Vehicle"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={12}>
                  <Form.Item label="Vehicle Status" name="freePay">
                    <Input
                      type="text"
                      size="large"
                      placeholder="EX - unlock fee payment pending"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={12}>
                  <Form.Item label="Modal Name" name="modalName">
                    <Input type="text" size="large" placeholder="EX - Bajaj" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={12}>
                  <Form.Item label="Modal Name" name="matchFound">
                    <Input type="number" size="large" placeholder="EX - ?" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="bg-hoverColor py-2 px-6 h-auto text-base border-0 "
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Modal>
        <style jsx>
          {`
            :global(.ant-select-selector) {
              padding: 0.75rem 1.25rem !important;
              border-radius: 0 !important;
            }
          `}
        </style>
      </div>
    </>
  );
}
