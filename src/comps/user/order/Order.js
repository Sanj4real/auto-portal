import { Tabs, Row, Col, Checkbox, Tag, Pagination } from "antd";
import Link from "next/link";
import { getOrder, remove, getOrderCount } from "src/api/order";
import { isAuthenticated } from "src/helpers/token";
import { useState, useEffect } from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { baseUrl } from "src/helpers/constants";
import { message } from "antd";
import Moment from "src/helpers/moment";
import Loader from "src/helpers/loader";
import { FcCancel } from "react-icons/fc";
import { GrFormView } from "react-icons/gr";

export default function Order() {
  const { TabPane } = Tabs;
  const queryClient = useQueryClient();
  // pagination
  const [page, setPage] = useState(1);
  const [orderData, setOrderData] = useState([]);
  const [pagination, setPagination] = useState({
    limit: 10,
    skip: 0,
  });
  const [OrderCount, setOrderCount] = useState(0);
  const allOrderStatus = ["all", "approved", "pending", "rejected"];

  useEffect(() => {
    getOrder({ limit: pagination.limit, skip: pagination.skip }).then((res) => {
      setOrderData(res?.data);
      setOrderCount(res?.data?.totalCount);
    });
  }, [pagination]);

  // mutation
  const orderMutation = useMutation(async (id) => {
    return await remove({ id }).then(() => {
      message.success("order cancelled succesfully");
      queryClient.invalidateQueries("ordersCounts");
    });
  });

  const changePage = (current, size) => {
    if (!current) {
      current = page;
    }
    setPagination({
      limit: size,
      skip: (current - 1) * size,
    });
  };
  // tab
  const tabData = (status) => {
    if (Array.isArray(orderData.orderItems)) {
      if (orderData.orderItems.length) {
        const filteredItems =
          status === "all"
            ? orderData.orderItems
            : orderData.orderItems.filter((item) => item?.status === status);
        if (filteredItems.length) {
          return filteredItems.map((item, index) => (
            <Col span={24} key={index}>
              <div className="flex w-full space-x-6 boxShadow p-4  mb-5 ">
                <div>
                  <img
                    src={
                      item?.product?.images
                        ? `${baseUrl}/${item?.product?.images[0]?.url}`
                        : "/images/noimage.png"
                    }
                    alt=""
                    className="h-14 w-24 object-contain mr-3"
                  />
                </div>
                <div className="lg:w-[30rem]">
                  <h4>
                    <Link href={"/product-details/" + item?.product?.slug}>
                      <a className="text-base font-medium capitalize hover:text-hoverColor hover:underline">
                        {item?.product?.name}
                      </a>
                    </Link>
                  </h4>
                  <div className="text-sm font-normal text-paraColor my-3">
                    <span className="py-1 px-3 bg-paraColor text-[#fff] text-xs font-light rounded-xl mr-2">
                      {item?.currency}
                    </span>{" "}
                    {item?.payment_type}
                  </div>
                  <div className="mb-3">
                    {(() => {
                      switch (item?.status) {
                        case "rejected":
                          return (
                            <span className="py-1 px-4 bg-red-800 text-xs text-[#fff] rounded-xl font-light">
                              {item?.status}
                            </span>
                          );
                        case "pending":
                          return (
                            <span className="py-1 px-4 bg-orange-400 text-xs text-[#fff] rounded-xl font-light">
                              {item?.status}
                            </span>
                          );
                        case "approved":
                          return (
                            <span className="py-1 px-4 bg-green-800 text-xs text-[#fff] rounded-xl font-light">
                              {item?.status}
                            </span>
                          );
                      }
                    })()}
                  </div>
                  <div>
                    <small className="  font-normal capitalize text-xs">
                      {Moment(item?.createdOn)}
                    </small>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-normal">
                    <span className="text-base capitalize font-medium">
                      Quantity
                    </span>{" "}
                    <br /> {item?.quantity}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-normal">
                    <span className="text-base capitalize font-medium">
                      Price
                    </span>{" "}
                    <br /> {item?.product?.salePrice}
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-4">
                    <span>
                      <Link
                        href={`/userDashboard/order/History?id=${item?.id}`}
                      >
                        <a className=" font-medium text-green-800">
                          <GrFormView
                            className="text-xl"
                            title="View History"
                          />
                        </a>
                      </Link>
                    </span>
                    <span>
                      <a
                        className=" font-medium text-red-800"
                        onClick={() => {
                          orderMutation.mutate(item?.id);
                        }}
                      >
                        <FcCancel className="text-xl" title="Cancel" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          ));
        } else {
          return <h5 className="text-center mt-2">No orders found</h5>;
        }
      }
    }
  };

  return (
    <>
      <h4 className="mb-6 text-lg font-medium  capitalize">My Order</h4>

      <div>
        <Tabs defaultActiveKey="1">
          {/* <TabPane tab={`All (${OrderCount})`} key="1">
            {tabData("All")}
          </TabPane>
          <TabPane tab="Approved" key="2">
            {tabData("approved")}
          </TabPane>
          <TabPane tab="Pending" key="4">
            {tabData("pending")}
          </TabPane>
          <TabPane tab="Rejected" key="5">
            {tabData("rejected")}
          </TabPane> */}
          {/* item.charAt(0).toUpperCase()}${item.slice(1) */}
          {allOrderStatus.map((item, index) => {
            return (
              <TabPane
                tab={`${item} ${item === "all" ? OrderCount : ""}`}
                key={index}
              >
                {tabData(item)}
              </TabPane>
            );
          })}
        </Tabs>
      </div>
      <style jsx>
        {`
          :global(.ant-tabs-tab-btn) {
            font-size: 16px;
            text-transform: capitalize;
          }
          :global(.ant-tabs-nav) {
            margin-bottom: 22px;
          }
          :global(.custom-select .ant-select-selector) {
            padding: 0 12px 0 0 !important;
            border-radius: 4px !important;
            height: auto !important;
            line-height: normal !important;
          }
          :global(.custom-pagination .ant-select-selector) {
            padding: 0 12px 0 0 !important;
            border-radius: 4px !important;
            height: auto !important;
            line-height: normal !important;
          }
        `}
      </style>
    </>
  );
}
