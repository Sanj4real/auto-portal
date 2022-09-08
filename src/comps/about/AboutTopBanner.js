import { Row, Col, Divider } from "antd";
import Image from "next/image";

export default function AboutTopBanner() {
  return (
    <div>
      <div className="text-center lg:max-w-2xl m-auto">
        <h5 className="text-sm text-gray-700 font-medium  mb-1">About us</h5>
        <h1 className="text-2xl leading-6 font-semibold">
          We help people bring their creative ideas to life
        </h1>
      </div>
      <div className="py-[56px]">
        <Row gutter={{ xs: 8, sm: 16, md: 24 }} className="items-center">
          <Col xs={24} sm={12} lg={12}>
            <div className="">
              <h2 className="text-xl  leading-6 font-semibold mb-2">
                CarPortal offers the complete Digital marketing Services to grow
                your Business.
              </h2>
              <p className="text-base text-gray-700 leading-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It is a
                long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout.
              </p>
            </div>
          </Col>
          <Col xs={24} sm={12} lg={12}>
            <div className="relative text-center">
              <Image
                src="/about/image 66.svg"
                alt="Picture in about "
                width={250}
                height={250}
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
