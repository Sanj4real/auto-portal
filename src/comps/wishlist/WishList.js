import Link from "next/link";
import { Row, Col } from "antd";
import { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useQuery, useQueryClient } from "react-query";
import { baseUrl } from "src/helpers/constants";
import { message } from "antd";
import { useMutation } from "react-query";
import { wishListApi } from "src/api/wishlist/wishlist";

export default function WishData({ Wish }) {
  const queryClient = useQueryClient();

  const wishMutation = useMutation(async (id) => {
    return await wishListApi.remove({ id }).then(() => {
      message.success("product removed");
      queryClient.invalidateQueries("wish");
      queryClient.invalidateQueries("wishCount");
    });
  });

  return (
    <ul>
      {Wish &&
        Wish.length &&
        Wish.map((item, index) => (
          <li className=" py-3 mb-3" key={item?.id}>
            <Row>
              <Col xs={4} sm={3} lg={3}>
                <div className="h-16 w-auto">
                  <img
                    // src={item?.product.images.url}
                    src={`${baseUrl}/${item?.product?.image?.url}`}
                    className="object-contain h-full w-full"
                    alt="xzczczx"
                  />
                </div>
              </Col>
              <Col xs={16} sm={18} lg={18}>
                <div className="px-5">
                  <h4>
                    <Link href="">
                      <a className="text-base font-medium text-[#333] ">
                        {item?.product?.name}
                      </a>
                    </Link>
                  </h4>
                  <div>
                    <h4 className="text-sm font-normal text-gray-600">
                      Rs. {item?.product?.salePrice}
                    </h4>
                  </div>
                </div>
              </Col>
              <Col xs={4} sm={3} lg={3}>
                <div className="text-sm">
                  <AiFillDelete
                    onClick={() => {
                      wishMutation.mutate(item?.id);
                    }}
                  />
                </div>
              </Col>
            </Row>
          </li>
        ))}
    </ul>
  );
}
