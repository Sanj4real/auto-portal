import ContactForm from "./ContactForm";
import { Row, Col } from "antd";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  const SOCIALMEDIA = [
    {
      icon: <FaFacebookF size={20} />,
      href: "#!",
    },
    {
      icon: <FaLinkedinIn size={20} />,
      href: "#!",
    },
    {
      icon: <FaTwitter size={20} />,
      href: "#!",
    },
    {
      icon: <FaInstagram size={20} />,
      href: "#!",
    },
  ];

  const SocialMedia = ({ item }) => {
    return (
      <li className="h-8 w-8 bg-gray-800 text-gray-100 p-2 inline-block mr-3 last:mr-0">
        <Link href={item.href}>
          <a target="_blank">{item.icon}</a>
        </Link>
      </li>
    );
  };

  return (
    <div className="py-[60px] md:pt-[90px] md:pb-[115px]">
      <div className="container">
        <div className="mb-[30px] md:mb-[90px] text-center capitalize max-w-2xl m-auto">
          <h5 className="text-lg text-gray-700 font-medium leading-[26px] mb-[30px]">
            Contact us
          </h5>
          <h2 className="text-[48px] leading-[54px] font-bold">
            Submit Your Request
          </h2>
        </div>
        <div className="">
          <Row className="items-center">
            <Col span={12}>
              <div>
                <h3 className="text-3xl leading-[34px] font-bold text-[#313D50] mb-[12px]">
                  Postal Address
                </h3>
                <p className="text-base font-normal text-[#596579]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="my-6 md:my-8 lg:my-[50px]">
                <h3 className="text-3xl leading-[34px] font-bold text-[#313D50] mb-[12px]">
                  Car Postal HQ
                </h3>
                <p className="text-base font-normal text-[#596579]">
                  121 King Street, Melbourne Victoria 3000 Australia See Map
                </p>
                <Link href="#!">
                  <a>See Map</a>
                </Link>
              </div>
              <div>
                <h3 className="text-3xl leading-[34px] font-bold  mb-[15px]">
                  Social Media
                </h3>
                <ul>
                  {SOCIALMEDIA.map((item, index) => (
                    <SocialMedia key={index} item={item} />
                  ))}
                </ul>
              </div>
            </Col>
            <Col span={12}>
              <ContactForm />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
