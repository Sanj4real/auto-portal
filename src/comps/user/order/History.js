import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getOrderHistory } from "src/api/order";
import { Row, Col, Timeline } from "antd";
import Head from "next/head";
import { baseUrl } from "src/helpers/constants";
import Moment from "src/helpers/moment";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";

export default function History() {
  // history-id((url))
  const router = useRouter();
  const [orderHistory, setOrderHistory] = useState();

  useEffect(() => {
    router.query?.id &&
      getOrderHistory(router.query?.id).then((res) => {
        setOrderHistory(res?.data);
      });
  }, [router.query]);

  useEffect(() => {
    console.log(orderHistory);
  }, [orderHistory]);

  const PRODUCTINFO = [
    {
      name: "Tracking code",
      info: `${orderHistory?.tracking_code}`,
    },
    {
      name: "Order Status",
      info: `${orderHistory?.status}`,
    },

    // {
    //   name: "Status",
    //   info: () => {
    //     (() => {
    //       switch (orderHistory?.status) {
    //         case "rejected":
    //           return (
    //             <span className="py-1 px-4 bg-red-800 text-xs text-[#fff] rounded-xl font-light">
    //               {orderHistory?.status}
    //             </span>
    //           );
    //         case "pending":
    //           return (
    //             <span className="py-1 px-4 bg-orange-400 text-xs text-[#fff] rounded-xl font-light">
    //               {orderHistory?.status}
    //             </span>
    //           );
    //         case "approved":
    //           return (
    //             <span className="py-1 px-4 bg-green-800 text-xs text-[#fff] rounded-xl font-light">
    //               {orderHistory?.status}
    //             </span>
    //           );
    //       }
    //     })();
    //   },
  ];

  const TIMELINE = [
    {
      item: "Created at ",
      time: `${Moment(orderHistory?.createdOn)}`,
    },
    ...(orderHistory?.orderHistory || []).map((item, index) => {
      return {
        item: `${item?.status} at`,
        time: `${Moment(item?.createdOn)}`,
      };
    }),
  ];

  // link-back

  // const handleBack = () => {
  //   router.go(-1);
  // };

  return (
    <>
      <Head></Head>
      <Row>
        <Col span={24}>
          <div className="mb-5 text-xl capitalize py-1 border-b border-[rgba(0,0,0,.1)] flex items-center justify-between">
            <h4 className=" font-semibold text-lg">My Order History</h4>
            <Link href="Order">
              <a className="font-medium text-sm py-1 px-2 border-1 border-footerBg flex items-center hover:border-hoverColor">
                <AiOutlineArrowLeft className="mr-2 " />
                GO Back
              </a>
            </Link>
          </div>
          <Row>
            <Col span={18}>
              <h5 className="mb-2 capitalize text-lg font-medium">
                {orderHistory?.product?.name}
              </h5>
              <ul>
                {PRODUCTINFO.map((item, index) => (
                  <li className="mb-1 text-base last:mb-0 ">
                    <b className="mr-2 font-normal">{item.name}:</b>
                    {item.info}
                  </li>
                ))}
              </ul>
            </Col>
            <Col>
              <img
                src={`${baseUrl}/${orderHistory?.product?.images[0]?.url}`}
                alt=""
                className="lg:h-44 lg:w-44 object-contain "
              />
            </Col>
          </Row>
          <h4 className="mb-5 text-lg capitalize font-semibold py-1 border-b border-[rgba(0,0,0,.1)]">
            My Order Timeline
          </h4>
          <Timeline>
            {TIMELINE.map((item, index) => (
              <Timeline.Item
                key={index}
                item={item}
                className="text-base font-normal"
              >
                <b className="mr-2 font-medium">{item.item}</b>
                {item.time}
              </Timeline.Item>
            ))}
          </Timeline>
        </Col>
        {/* <Col span={6}>
          <h4 className="mb-5 text-xl capitalize font-semibold py-1 border-b border-[rgba(0,0,0,.1)]">
            My Order Timeline
          </h4>
          <Timeline>
            {TIMELINE.map((item, index) => (
              <Timeline.Item
                key={index}
                item={item}
                className="text-base font-normal"
              >
                <b className="mr-2 font-medium">{item.item}</b>
                {item.time}
              </Timeline.Item>
            ))}
          </Timeline>
        </Col> */}
      </Row>
    </>
  );
}
