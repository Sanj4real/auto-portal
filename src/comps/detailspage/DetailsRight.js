import Link from "next/link";
import { useRouter } from "next/router";
import { BsFillCartCheckFill } from "react-icons/bs";
import { GiClick } from "react-icons/gi";
import { isAuthenticated } from "src/helpers/token";
import { useState, useEffect } from "react";
import { message, Button } from "antd";
// add button
import { cartApi } from "src/api/cart/cart";

import { useMutation, useQueryClient } from "react-query";

export default function DetailsRight({
  name,
  price,
  prev,
  detailsInfo,
  detailsData,
}) {
  const router = useRouter();
  // wishListAdd
  const queryClient = useQueryClient();
  // debugger;
  const cartAddMutate = useMutation(
    async ({ productSlug, productVariantSku }) => {
      return await cartApi.add({ productSlug, productVariantSku }).then(() => {
        message.success("Product added to cart successfully!");
        queryClient.invalidateQueries("cart");
        queryClient.invalidateQueries("cartListCount");
      });
    }
  );
  return (
    <div className=" pt-4 pb-12 px-0 md:p-6 h-full">
      {console.log("wishlistData is", cartAddMutate)}
      <h3 className="text-lg md:text-[17px] lg:text-lg font-medium capitalize mb-1">
        {name}
      </h3>
      <div className="flex items-center space-x-4">
        <h3 className="text-sm md:text-mbase lg:text-base capitalize text-hoverColor font-normal ">
          Rs. {price}
        </h3>
        <h4 className="text-xs md:text-sm  line-through font-normal">
          Rs. {prev}
        </h4>
      </div>
      <ul className="my-4 px-2 md:px-0">
        {detailsInfo.map((item, index) => (
          <li
            key={index}
            item={item}
            className="inline-flex w-full md:w-1/2  items-center mb-2"
          >
            <div className="text-sm capitalize w-3/5 font-normal">
              {item?.title}
            </div>
            <div className="float-right text-sm capitalize text-gray-900 font-medium">
              {item?.desc}
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-0 md:mt-6 block space-x-4 capitalize">
        <Button
          className="py-3 h-auto leading-auto px-6 border-0 rounded-sm inline-flex items-center  bg-bgGround text-sm font-normal transition-all hover:bg-hoverColor hover:text-white"
          onClick={() => {
            !isAuthenticated()
              ? (message.warning("You need to login first"),
                router.push("/login"))
              : cartAddMutate.mutate({
                  productSlug: detailsData?.slug,
                  productVariantSku: detailsData?.variants[0]?.sku,
                });
          }}
        >
          <BsFillCartCheckFill className="h-4 w-4 mr-1" />
          Add to cart
        </Button>
        <Button
          className="py-3 h-auto leading-auto px-6 border-0 rounded-sm inline-flex items-center  bg-bgGround text-sm font-normal transition-all hover:bg-hoverColor hover:text-white"
          onClick={() => {
            !isAuthenticated()
              ? (message.warning("You need to login first"),
                router.push("/login"))
              : router.push("/cart");
          }}
        >
          <GiClick className="h-4 w-4 mr-1" />
          Buy Now
        </Button>
      </div>
    </div>
  );
}
