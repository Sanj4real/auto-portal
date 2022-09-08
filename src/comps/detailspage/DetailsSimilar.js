import { Row, Col } from "antd";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

export default function DetailsSimilar({ similarProd }) {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    // arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 592,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <h4 className="mb-6 text-base capitalize  font-medium">Similar Car</h4>
      {Array.isArray(similarProd) && similarProd.length > 0 ? (
        <Slider {...settings}>
          {(similarProd || []).map((item, index) => {
            return (
              <div key={index} className="border border-bgGround mb-6">
                <Link href="#!">
                  <a className="group" target="_blank">
                    <div className="relative  ">
                      <img
                        src={item?.src}
                        className="h-[160px] md:h-[170px] lg:h-[200px] object-cover w-full"
                        title="image"
                      />
                    </div>
                    <div className="p-4 md:p-4">
                      <div>
                        <ul className="flex items-center space-x-2 md:space-x-3 lg:space-x-4 mb-2">
                          <li className="text-xs text-gray-700 py-[2px] px-[6px] bg-[#E1E4FE] rounded-">
                            {item?.speed}
                          </li>
                          <li className="text-xs text-gray-700 py-[2px] px-[6px] bg-[#E1E4FE] rounded-">
                            {item?.date}
                          </li>
                          <li className="text-xs text-gray-700 py-[2px] px-[6px] bg-[#E1E4FE] rounded-">
                            {item?.prodName}
                          </li>
                        </ul>
                        <h3 className="mb-2 text-base text-gray-700 capitalize font-medium group-hover:underline group-hover:text-hoverbgColor">
                          {item?.title}
                        </h3>
                        <h3 className="text-sm text-gray-700 capitalize font-normal">
                          {item?.price}
                        </h3>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            );
          })}
        </Slider>
      ) : (
        <Alert message="No brands yet" type="warning" />
      )}

      {/* <Row gutter={20}>
        {similarProd.map((item, index) => (
          <Col
            span={12}
            md={{ span: 8 }}
            lg={{ span: 6 }}
            key={index}
            item={item}
          >
            <div className="border border-bgGround mb-6">
              <Link href="/details">
                <a className="group">
                  <div className="h-[200px] relative  ">
                    <Image src={item.src} layout="fill" title="image" />
                  </div>
                  <div className="p-4">
                    <div>
                      <ul className="flex items-center space-x-4 mb-2">
                        <li className="text-xs text-gray-700 py-[2px] px-[6px] bg-[#E1E4FE] rounded-">
                          {item.speed}
                        </li>
                        <li className="text-xs text-gray-700 py-[2px] px-[6px] bg-[#E1E4FE] rounded-">
                          {item.date}
                        </li>
                        <li className="text-xs text-gray-700 py-[2px] px-[6px] bg-[#E1E4FE] rounded-">
                          {item.prodName}
                        </li>
                      </ul>
                      <h3 className="mb-2 text-base text-gray-700 capitalize font-medium group-hover:underline group-hover:text-hoverbgColor">
                        {item.title}
                      </h3>
                      <h3 className="text-sm text-gray-700 capitalize font-normal">
                        {item.price}
                      </h3>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </Col>
        ))}
      </Row> */}
      <style jsx>
        {`
          :global(.slick-slide) {
            padding: 0 10px;
          }

          :global(.slick-list) {
            margin: 0 -10px;
          }
        `}
      </style>
    </div>
  );
}
