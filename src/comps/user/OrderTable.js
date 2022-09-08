import { Table } from "antd";
import Link from "next/link";
import {
  useQuery,
  QueryClient,
  useQueryClient,
  useMutation,
} from "react-query";
import { getOrder } from "src/api/order";
import { isAuthenticated } from "src/helpers/token";
import { useState, useEffect } from "react";
import Loader from "src/helpers/loader";
import Moment from "src/helpers/moment";

export default function OrderTable({ Order, setOrder }) {
  const { data: orderData } = useQuery("orders", getOrder, {
    enabled: isAuthenticated(),
  });

  const [dataInTable, setDataInTable] = useState([]);

  useEffect(() => {
    console.log("orderId is", orderData);
    setOrder(orderData?.data);
  }, [orderData]);

  useEffect(() => {
    Order?.orderItems &&
      Order?.orderItems.length &&
      Order?.orderItems.forEach((item) => {
        Order?.orderItems.push({
          key: `${item?.id}`,
          // order: item?.id,
          name: `${item?.name}`,
          date: Moment(item?.createdOn),
          status: item?.status,
          action: `View Order`,
        });
        setDataInTable(Order?.orderItems);
      });
  }, [Order]);

  const columns = [
    {
      title: () => {
        return (
          <h2 className=" text-sm font-medium capitalize p-0 m-0">Order Id</h2>
        );
      },
      dataIndex: "order",
      width: 90,
      render: (text, record) => (
        <h5 className="text-sm font-normal text-gray-600 capitalize">
          {record.id}
        </h5>
      ),
    },
    {
      title: () => {
        return (
          <h2 className=" text-sm font-medium capitalize p-0 m-0">
            Order Name
          </h2>
        );
      },
      dataIndex: "name",
      width: 280,
      render: (text, record) => (
        <Link href="/detail">
          <a
            target="_blank"
            className="text-sm leading-[1.3] text-gray-600 capitalize font-medium hover:underline"
          >
            {record?.product?.name}
          </a>
        </Link>
      ),
    },
    {
      title: () => {
        return (
          <h2 className=" text-sm font-medium capitalize p-0 m-0">Date</h2>
        );
      },
      dataIndex: "date",
      width: 120,
      render: (text, record) => (
        <h5 className="text-sm font-normal text-gray-600 capitalize">
          {Moment(record?.createdOn)}
        </h5>
      ),
    },
    {
      title: () => {
        return (
          <h2 className=" text-sm font-medium capitalize p-0 m-0">Status</h2>
        );
      },
      dataIndex: "status",
      render: (text, record) => (
        <Link href="#!">
          <a className="text-sm font-normal text-gray-600 capitalize">
            {record?.status}
          </a>
        </Link>
      ),
      width: 100,
    },
    {
      title: () => {
        return (
          <h2 className=" text-sm font-medium capitalize p-0 m-0">Action</h2>
        );
      },
      dataIndex: "action",
      width: 120,
      render: (text, record) => (
        <Link href="#!">
          <a className="text-sm font-normal text-gray-600 capitalize">
            view Order
          </a>
        </Link>
      ),
    },
  ];

  return (
    <>
      <div
        style={{
          boxShadow: "2px 9px 22px rgba(211, 211, 211, .6)",
          background: "#fff",
          padding: "15px",
        }}
      >
        <h4 className="mb-2 text-base capitalize font-medium py-2 border-b border-bgGround">
          My Order
        </h4>
        {orderData ? (
          <Table
            columns={columns}
            dataSource={dataInTable}
            pagination={{ pageSize: 30 }}
            scroll={{ y: 280 }}
            className="text-center custom-pagination"
          />
        ) : (
          <Loader></Loader>
        )}
      </div>
      <style jsx>
        {`
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
          :global(.ant-table-thead > tr > th) {
            padding: 12px 0 !important;
            background: transparent !important;
          }
        `}
      </style>
    </>
  );
}
