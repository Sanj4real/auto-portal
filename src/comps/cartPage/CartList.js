import { Table, Space, Rate, InputNumber } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useMutation, useQueryClient } from "react-query";
import { cartApi } from "src/api/cart/cart";
import { messages } from "src/helpers/message";

export default function CartList({ cart, setSubTotal }) {
  const [quantity, setQuantity] = useState({});

  function changeHandler(value, cartId) {
    setQuantity({ ...quantity, [cartId]: value });
  }
  const queryClient = useQueryClient();
  const cartsMutation = useMutation(async (id) => {
    return await cartApi.remove({ id }).then(() => {
      messages.success("Item succesfully removed from carts");
      queryClient.invalidateQueries("cartsCount");
    });
  });

  let total = {};
  let subtotal = 0;

  useEffect(() => {
    let t = Object.values(total);
    t.forEach((i) => {
      subtotal = subtotal + i;
    });
    setSubTotal(subtotal);
  }, [total]);

  const columns = [
    {
      title: () => {
        return (
          <h2 className=" text-mbase font-medium capitalize">Product Name</h2>
        );
      },
      dataIndex: "name",
      render: (text, record) => (
        <div className="flex items-center ">
          <img
            src={record.img.src ? record.img.src : record.img}
            alt=""
            className="h-[80px] w-[80px] object-cover rounded-[4px]"
          />
          <div className="pl-[30px]">
            <div className="block mb-2  text-sm font-medium capitalize">
              <Link href="/detailspage">
                <a>{record.name}</a>
              </Link>
            </div>
            <div className="flex items-center">
              <Rate
                className="text-sm"
                disabled
                defaultValue={record.rateNum}
              />
              <h3 className="text-sm  font-medium">({record.rateNum})</h3>
            </div>
          </div>
        </div>
      ),
      fixed: "left",
    },
    {
      title: () => {
        return (
          <h2 className=" text-mbase text-gray-900 font-medium capitalize">
            Price
          </h2>
        );
      },
      dataIndex: "price",
      render: (text, record) => (
        <h3 className=" text-sm font-medium">{record.price}</h3>
      ),
    },
    {
      title: () => {
        return (
          <h2 className=" text-mbase text-gray-900 font-medium capitalize">
            Quantity
          </h2>
        );
      },
      dataIndex: "quantity",
      render: (text, record) => {
        return (
          <InputNumber
            onChange={(value) => changeHandler(value, record.key)}
            min={record?.minQuantity || 1}
            max={record?.maxQuantity}
            defaultValue={record?.quantity}
          />
        );
      },
    },
    {
      title: () => {
        return (
          <h2 className=" text-mbase text-gray-900 font-medium capitalize">
            Subtotal
          </h2>
        );
      },
      dataIndex: "subtotal",
      render: (text, record) => {
        console.log("record is>>>", record);
        total = {
          ...total,
          [record.key]:
            +record.price *
            (quantity[record.key] ? +quantity[record.key] : +record.quantity),
        }; // console.log("console ")
        return (
          <h3 className=" text-sm font-medium">
            {+record.price *
              (quantity[record.key] ? +quantity[record.key] : +record.quantity)}
          </h3>
        );
      },
    },
    {
      title: "",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a
            onClick={() => cartsMutation.mutate(record.key)}
            className="text-red-600 hover:bg-hoverbgColor"
          >
            <AiFillDelete />
          </a>
        </Space>
      ),
    },
  ];

  const data = (cart || []).map((item, index) => {
    return {
      key: item?.id,
      name: item?.product?.name,
      price: item?.product?.salePrice,
      // subtotal: +item?.product?.salePrice * + item?.quantity,
      img: !!item?.product?.images?.length
        ? `https://api.ktmkart.com${item?.product?.images[0]?.url}`
        : "/images/noimage.png",
      rateNum: "4",
      quantity: item?.quantity,
      minQuantity: item?.product?.minQuantity,
      maxQuantity: item?.product?.maxQuantity,
    };
  });

  return (
    <div>
      <Table
        columns={columns}
        scroll={{ x: true }}
        pagination={{ pageSize: 50 }}
        dataSource={data}
        rowKey="key"
        className="overflow"
      />
    </div>
  );
}
