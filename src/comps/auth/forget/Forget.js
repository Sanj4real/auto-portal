import { Col, Row } from "antd";
import Image from "next/image";
import Social from "../social/Social";
import ForgetForm from "./ForgetForm";

export default function Forget( {children} ) {
  return (
    <>
      <div className="relative">
        <div className="hidden md:block absolute top-[100px] right-[53px]">
          <Image src="/signup/img-1.svg" height="125" width="115" />
        </div>
        <Row>
          <Col className="hidden md:block" md={12}>
            <Social />
          </Col>
          <Col xs={24} sm={24} md={12}>
            {
              children
            }
            {/* <ForgetForm /> */}
          </Col>
        </Row>
      </div>
    </>
  );
}
