import Outerlayout from "../outer-layout/Outerlayout";
import Link from "next/link";
import Image from "next/image";
import { DealsSeed } from "src/seeds";
import { Row, Col, Alert } from "antd";

import {} from "antd";

// slickSlider
import Slider from "react-slick";

const Deals = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    gap: "20px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 592,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Outerlayout maintitle="Hot Deals">
      {Array.isArray(DealsSeed) && DealsSeed.length > 0 ? (
        <Row gutter={20}>
          {(DealsSeed || []).map((item, index) => (
            <Col sm={8} md={8} lg={8}>
              <div key={index} item={item} className="w-full mb-4 md:mb-0">
                <Link href="/list">
                  <a className="group">
                    <div className="relative overflow-hidden w-full lg:h-[240px]  text-center rounded-md">
                      <img
                        alt={item.alt}
                        src={item.img}
                        className="h-full w-full object-fill transition-all "
                      />
                    </div>
                  </a>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      ) : (
        <Alert message="No brands yet" type="warning" />
      )}
    </Outerlayout>
  );
};

export default Deals;
