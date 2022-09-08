import { Row, Col } from "antd";
import Image from "next/image";

export default function Community() {
  const COMMUNITY = [
    {
      title: "Lorem Ipsume",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
    {
      title: "Lorem Ipsume",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
    {
      title: "Lorem Ipsume",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
    {
      title: "Lorem Ipsume",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
  ];

  const CommunityValue = ({ item }) => {
    return (
      <div>
        <img src="/about/image 66.svg" alt="" height="66" width="66" />
        <h4 className="text-lg mt-3 mb-2 font-semibold leading-6">
          {item.title}
        </h4>
        <p className="text-base font-normal text-gray-700 leading-6">
          {item.paragraph}
        </p>
      </div>
    );
  };

  // slick-slider
  const SlickSettings = {
    dots: true,
    indifinite: true,
    speed: 500,
    slidesToShow: 4,
    SliderToScroll: 1,
  };

  const FEATURE_IMAGE = [
    {
      src: "/about/featureIn/2.png",
    },
    {
      src: "/about/featureIn/3.png",
    },
    {
      src: "/about/featureIn/4.png",
    },
    {
      src: "/about/featureIn/5.png",
    },
    {
      src: "/about/featureIn/5.png",
    },
  ];

  return (
    <div>
      <div className="py-[120px] bg-[#F4F6FE]">
        <div className="container">
          <div className="pb-[90px]">
            <h5 className="text-sm text-gray-700 font-medium  mb-1">
              Our Community
            </h5>
            <h3 className="text-xl  leading-6 font-semibold mb-1">
              A global creative community
            </h3>
            <p className="text-base text-gray-700 leading-6">
              We connect customers to world-class assets by Envato authors
              around the globe.
            </p>
          </div>
          <div className="mb-[120px]">
            <Row gutter={{ xs: 8, sm: 16, lg: 24 }}>
              {COMMUNITY.map((item, index) => (
                <Col key={index} xs={24} sm={12} lg={6}>
                  <CommunityValue item={item} />
                </Col>
              ))}
            </Row>
          </div>
          <div>
            <div className="text-left sm:text-center mb-[44px] ">
              <h5 className="text-sm text-gray-700 font-medium  mb-1">
                We are
              </h5>
              <h3 className="text-xl leading-6 font-semibold">Featured in</h3>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row sm:flex-wrap ">
                {FEATURE_IMAGE.map((item, index) => (
                  <div
                    key={index}
                    className="sm:w-2/4 md:w-2/6 lg:w-1/5 text-center"
                  >
                    <div className="group">
                      <Image
                        src={item.src}
                        alt=""
                        height="90"
                        width="90"
                        objectFit="contain"
                        className="grayscale ... group-hover:grayscale-0 opacity-75"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
