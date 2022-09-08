import { Breadcrumb, Row, Col } from "antd";
import { IoHomeSharp } from "react-icons/io5";
import PayCart from "./PayCart";
import PayList from "./PayList";

export default function Pay() {
  return (
    <>
      <section className="py-6  lg:pt-8 lg:pb-0">
        <div className="container">
          <Breadcrumb separator=">">
            <Breadcrumb.Item href="/">
              <IoHomeSharp className="inline-block" />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
              <span>Cart List</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="text-gray-600 text-sm font-medium">
              Payment
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </section>

      <div className="container pt-0 pb-[15px] lg:pt-[49px] border-b border-b-[#E6EAF0]">
        <h3 className="capitalize text-xl text-gray-900 font-medium">
          Select Payment Method
        </h3>
        <p className="text-700 text-sm text-gray-700 font-normal">
          There are 3 products in your cart
        </p>
      </div>

      <div className="container ">
        <div className=" py-5 lg:pt-[60px] lg:pb-[30px]">
            <Row gutter={20}>
                <Col  xs={24} sm={24} md={14} lg={16} xl={16}>
                    <PayList />
                </Col>
                <Col xs={24} sm={24} md={10} lg={8} xl={8}>
                    <PayCart />
                </Col>
            </Row>
        </div>
      </div>
    </>
  );
}
