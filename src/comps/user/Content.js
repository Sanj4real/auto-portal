import { Row, Col } from "antd";
import Link from "next/link";
import OrderTable from "./OrderTable";
import { useEffect, useState } from "react";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
  useQueryClient,
} from "react-query";
import { isAuthenticated } from "src/helpers/token";
import { getUser } from "src/api/user/user";
import { Tabs } from "antd";
const { TabPane } = Tabs;

export default function ContentUser() {
  const { data: userData } = useQuery("user", () => getUser(), {
    enabled: isAuthenticated(),
  });

  // if query data is already mention use QueryClient
  const queryClient = useQueryClient();

  const countWish = queryClient.getQueryData("wishlistscount");
  const countCart = queryClient.getQueryData("cartsCount");
  const [user, setUser] = useState();

  // order
  const [Order, setOrder] = useState();

  const USERLEFT = [
    {
      title: "My Order",
      value: Order?.totalCount,
      path: "userDashboard/order/Order",
    },
    {
      title: "My Wishlist",
      value: countWish?.data?.count,
      path: "./wishlist",
    },
    {
      title: "My Cart",
      value: countCart?.data?.count,
      path: "./cart",
    },
    {
      title: "My Profile",
      value: "Click",
      path: "userDashboard/profile",
    },
  ];

  useEffect(() => {
    setUser(userData?.data);
  }, [userData]);

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div>
      <div className=" mb-4">
        <Row gutter={12}>
          {/* <Col sm={12} md={12}>
            <div className="text-center p-5">
              <div className="h-20 w-20 overflow-hidden mx-auto text-center">
                <img
                  src={`${baseUrl}/${user?.avatar}`}
                  className="transition-all mx-auto h-full w-full rounded-[100%] object-cover"
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-lg font-medium capitalize mt-1 text-white">
                  Welcome, {user?.firstName}
                </h2>
                <p className="text-sm font-normal text-gray-50 my-2">
                  {user?.email} <br />
                  {user?.phone}
                </p>
                <div className="flex space-x-4 items-center justify-center">
                  <Link href="/start">
                    <a className=" hover:underline text-sm font-medium capitalize text-gray-50">
                      Start auto Portal
                    </a>
                  </Link>
                  <Link href="/info">
                    <a className=" hover:underline text-sm font-medium capitalize text-gray-50">
                      Sell on AutoExpert
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </Col> */}
          {USERLEFT.map((item, index) => (
            <Col sm={12} md={6} key={index} item={item} className="mb-4">
              <ul>
                <li className="flex justify-center items-center bg-hoverbgColor h-32 text-center  w-full m-0 border border-bgGround rounded-md">
                  <Link href={item?.path}>
                    <a className="group transition-all">
                      <h4 className="text-base font-medium  text-white ">
                        {item?.title}
                      </h4>
                      <h3 className="text-sm text-gray-50 font-normal">
                        {item?.value}
                      </h3>
                    </a>
                  </Link>
                </li>
              </ul>
            </Col>
          ))}
        </Row>
      </div>

      <div>
        <Row gutter={20}>
          <Col sm={6} md={12}>
            <div
              style={{
                boxShadow: "2px 9px 22px rgba(211, 211, 211, .6)",
                background: "#fff",
                padding: "15px",
              }}
              className="rounded-md"
            >
              <h4 className="mb-2 text-base capitalize font-medium py-1 border-b border-bgGround">
                My Activity
              </h4>
              <Tabs defaultActiveKey="1" onChange={onChange}>
                <TabPane tab="Buy(0)" key="1" className="text-sm">
                  <h6 className="text-sm font-normal">NO Records Found</h6>
                </TabPane>
                <TabPane tab="Sell(9)" key="2" className="text-sm">
                  Content of Tab Pane 2
                </TabPane>
              </Tabs>
            </div>
          </Col>
          <Col sm={18} md={12}>
            <OrderTable Order={Order} setOrder={setOrder} />
          </Col>
        </Row>
      </div>
      <style jsx>
        {`
          :global(.ant-tabs-tab-btn) {
            font-size: 14px;
            font-weight: 500;
            text-transform: capitalize;
          }
        `}
      </style>
    </div>
  );
}
