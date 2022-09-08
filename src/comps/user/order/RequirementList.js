import { AiFillEdit, AiOutlineCalendar } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import Link from "next/link";
import { BiRupee } from "react-icons/bi";
import { GiPathDistance } from "react-icons/gi";
import { Row, Col, Button, Modal } from "antd";
import ReactPlayer from "react-player/lazy";
import { useState } from "react";
import CountUp from "react-countup";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function RequirementList() {
  const WORKS = [
    {
      text: "Create vehicle requirements and get perfect matches, or search from the largest collection of automobiles and find your dream vehicle",
      svg: "/work/1.png",
      value: "1",
    },
    {
      text: "Unlock match for final inspection and certification before you buy",
      svg: "/work/2.png",
      value: "2",
    },
    {
      text: "Buy with confidence with only 3% as fully refundable token amount",
      svg: "/work/3.png",
      value: "3",
    },
    {
      text: "Make 97% remaining payment on vehicle delivery at your doorstep",
      svg: "/work/4.png",
      value: "4",
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

  const REQUIREMENT = [
    {
      title: "Car, Used, Delhi",
      path: "/finderVehicle",
      requireNumber: 90,
      freePay: "unlock fee payment pending",
      ridNo: "RID -#829785",
      createdOn: "3jun, 2020",
      priceRange: "50 k - 1 Lakh",
      kmDriven: "Any",
      ageVehicle: "Less than 1 year",
      modalName: "Bahubali B10",
      matchFound: 22,
    },
    {
      title: "Car, Used, Nepal",
      path: "/finderVehicle",
      requireNumber: 80,
      freePay: "unlock fee payed",
      ridNo: "RID -#29785",
      createdOn: "1jun, 2020",
      priceRange: "30 k - 1 Lakh",
      kmDriven: "Any",
      ageVehicle: "Less than 2 year",
      modalName: "Baahubaali B10",
      matchFound: 18,
    },
  ];

  return (
    <div>
      {REQUIREMENT.map((item, index) => (
        <div
          className="py-6 px-8 mt-6 shadow-boxShadow"
          key={index}
          item={item}
          style={{
            boxShadow: "0 0 13px 0 rgb(125 125 125 / 10%)",
          }}
        >
          <div className="flex items-center justify-between">
            <h4 className="text-lg capitalize font-medium">
              Requirement: {item.title}
              <Link href={item.path}>
                <a
                  className="ml-3 text-sm font-normal text-hoverColor"
                  // onClick={showModal}
                >
                  Edit <AiFillEdit className="inline-block" />
                </a>
              </Link>
            </h4>
            <div>
              <ul className="p-0 m-0 flex items-center space-x-3">
                <li className="text-sm font-light text-right m-0">
                  Requirement <b className="block font-medium text-sm">Score</b>
                </li>
                <li className="w-[45px] h-[45px] flex items-center justify-center text-base rounded-full">
                  {/* <CountUp  duration={2} suffix='%' end={item.requireNumber}/> */}
                  <CircularProgressbar
                    value={item.requireNumber}
                    text={`${item.requireNumber}%`}
                  />
                </li>
              </ul>
            </div>
          </div>
          <h5 className="text-notifyColor text-sm font-normal capitalize flex items-center ">
            <TiTick className="mr-1" />
            {item.freePay}
          </h5>
          <ul className="my-2 text-paraColor text-sm font-normal">
            <li className="">{item.ridNo}</li>
            <li className="">{item.createdOn}</li>
          </ul>
          <div className="mb-4">
            <ul className="flex space-x-12">
              <li className="inline-block">
                <div className="flex space-x-2">
                  <BiRupee className="text-hoverColor " />
                  <ul>
                    <li className=" text-sm font-medium">{item.priceRange}</li>
                    <li className="small text-paraColor text-sm font-light">
                      price Range
                    </li>
                  </ul>
                </div>
              </li>
              <li className="inline-block">
                <div className="flex space-x-2">
                  <GiPathDistance className="text-hoverColor " />
                  <ul>
                    <li className=" text-sm font-medium">{item.kmDriven}</li>
                    <li className="small text-paraColor text-sm font-light">
                      Km Driven
                    </li>
                  </ul>
                </div>
              </li>
              <li className="inline-block">
                <div className="flex space-x-2">
                  <AiOutlineCalendar className="text-hoverColor " />
                  <ul>
                    <li className=" text-sm font-medium">{item.ageVehicle}</li>
                    <li className="small text-paraColor text-sm font-light">
                      Age of vehicle
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex space-x-12 pb-6 mb-4 border-b">
            <h5 className="text-sm font-medium">Make Modal:</h5>
            <span
              className="uppercase text-[11px] font-light py-[1px] px-3  rounded-xl "
              style={{ background: "rgb(162 173 189 / 0.7)" }}
            >
              {item.modalName}
            </span>
          </div>
          <div className="text-base font-medium">
            <h4 className="text-hoverColor">{item.matchFound}</h4>
            Your Matches Found
          </div>
        </div>
      ))}

      <div className="text-center my-8">
        <Button className="siteButton"> No More Requirements </Button>
      </div>

      <div className="mt-16 mb-6">
        <h2 className="text-2xl font-medium mb-9 capitalize text-center">
          {" "}
          How AutoPortal works{" "}
        </h2>
        <Row gutter={30}>
          <Col span={12}>
            <div>
              <ul>
                {WORKS.map((item, index) => (
                  <li
                    className="relative mb-6 before:absolute before:border-l before:border-paraColor before:left-[32px] before:top-[20%] before:h-full before:w-1"
                    key={index}
                    item={item}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-hoverColor h-[60px] w-[60px] flex items-center justify-center mr-2 py-0 px-[11.2px] z-10 text-[22px] bg-[#fff]">
                        {item.value}
                      </span>
                      <h4 className="text-base font-normal w-[80%]">
                        {item.text}
                      </h4>
                      <img
                        src={item.svg}
                        alt=""
                        className="h-[90px] w-[90px] ml-2 object-contain"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col span={12}>
            <div className="p-6">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                width="100%"
                // height='100%'
              />
            </div>
          </Col>
        </Row>
      </div>

      {/* <Modal
        title="Basic Modal"
        visible={IsModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some content...</p>
      </Modal> */}
    </div>
  );
}
