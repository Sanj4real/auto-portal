import Link from "next/link";
import { baseUrl } from "src/helpers/constants";
import { isAuthenticated } from "src/helpers/token";
import { Button } from "antd";
// ICON
import { MdCompareArrows } from "react-icons/md";
import { BiGasPump } from "react-icons/bi";
import { FaRoad, FaUserAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import {
  BsListCheck,
  BsFillGridFill,
  BsFillHeartFill,
  BsThreeDotsVertical,
} from "react-icons/bs";

const GridData = ({
  id,
  images,
  slug,
  name,
  salePrice,
  isActive,
  isVerified,
  variants,
}) => {
  return (
    <div id={id} className="bg-bgGround border border-bgGround mb-[15px] ">
      <div className="group relative bg-white  overflow-hidden h-[190px]">
        <Link href={"/product-details/" + slug} passHref>
          <a className="group h-[190px]" target="_blank">
            <img
              src={
                images ? `${baseUrl}/${images[0]?.url}` : "/images/noimage.png"
              }
              alt={name}
              className="h-full w-full object-cover flex items-center text-center transition-all group-hover:scale-105 "
            />
          </a>
        </Link>
        <div>
          <ul className="absolute left-1 bottom-1 text-base flex space-x-1 items-center">
            <li
              className=" py-2 px-3 m-0  inline-flex space-x-2 bg-hoverColor opacity-70 rounded-sm text-xs text-white items-center hover"
              onClick={() => {
                !isAuthenticated()
                  ? (message.warning("You need to login first"),
                    router.push("/login"))
                  : wishAddMutate.mutate({
                      productSlug: slug,
                      productVariantSku: variants[0]?.sku,
                    });
              }}
            >
              <BsFillHeartFill /> <span> Wishlist</span>
            </li>
            <li className=" py-2 px-3 inline-flex bg-hoverColor opacity-70 rounded-sm text-white">
              <MdCompareArrows />
            </li>
          </ul>
          <ul className="absolute right-1 bottom-1">
            <li className="py-2 px-3 inline-flex bg-hoverColor opacity-70 rounded-sm text-white">
              <BsThreeDotsVertical />
            </li>
          </ul>
        </div>
        {/* <div
            className={`absolute top-2 left-1 text-xs capitalize rounded-md py-1 px-2 text-white ${
              isActive ? "bg-hoverColor" : "bg-red-600"
            }`}
          >
            {`${isActive ? "available" : "out of stocks"}`}
          </div> */}
      </div>
      <div className="p-3 h-full ">
        <div className="flex items-center space-x-3">
          <h5 className="text-sm font-normal  ">Rs: {salePrice}</h5>
          <h5 className="line-through text-xs font-normal text-red-600">
            Rs. 2000
          </h5>
        </div>
        <Link href={"/product-details/" + slug}>
          <a
            className="group hover:underline hover:underline-[#212121]"
            target="_blank"
          >
            <h4 className="text-mbase font-medium mt-1 mb-3 leading-[1.3] group-hover:text-hoverColor capitalize">
              {name}
            </h4>
          </a>
        </Link>
        <ul className="flex items-center justify-between mb-3">
          <li>
            <div className="text-center text-hoverbgColor">
              <FaRoad className="mx-auto text-sm text-hoverbgColor" />
              <p className="mt-1 text-xs font-normal">22km</p>
            </div>
          </li>
          <li>
            <div className="text-center text-hoverbgColor">
              <GoLocation className="mx-auto text-sm text-hoverbgColor" />
              <p className="mt-1 text-xs font-normal">Nepal</p>
            </div>
          </li>
          <li>
            <div className="text-center text-hoverbgColor">
              <BiGasPump className="mx-auto text-sm text-hoverbgColor" />
              <p className="mt-1 text-xs font-normal">Diesel</p>
            </div>
          </li>
          <li>
            <div className="text-center text-hoverbgColor">
              <FaUserAlt className="mx-auto text-sm text-hoverbgColor" />
              <p className="mt-1 text-xs font-normal">First Owner</p>
            </div>
          </li>
        </ul>
        <Button className="h-auto py-1 rounded-sm leading-auto bg-[#0953a0] text-white hover:border-[#0953a0] hover:text-[#0953a0] hover:opacity-1 block w-full">
          Buy Now
        </Button>
      </div>
    </div>
  );
};

const ListData = ({
  id,
  images,
  slug,
  name,
  salePrice,
  isActive,
  isVerified,
  variants,
}) => {
  return (
    <ul>
      <li
        id={id}
        className="bg-bgGround block  border border-bgGround mb-[22px]"
      >
        <div className="flex space-x-4 ">
          <div className="group relative bg-white  py-3">
            <Link href={"/product-details/" + slug}>
              <a className="group ">
                <img
                  src={
                    images
                      ? `${baseUrl}/${images[0]?.url}`
                      : "/images/noimage.png"
                  }
                  alt={name}
                  className="min-h-44 w-48 object-contain transition-all group-hover:scale-105"
                />
              </a>
            </Link>
            {/* <ul className="absolute top-2 right-1 text-lg">
                <li className=" p-2 m-0 ">
                  <BsShare />
                </li>
                <li className=" p-2 m-0 ">
                  <BsFillHeartFill />
                </li>
              </ul> */}
            <div>
              <ul className="absolute left-1 bottom-1 text-base flex space-x-1 items-center">
                <li
                  className=" py-2 px-3 m-0  inline-flex space-x-2 bg-hoverColor opacity-70 rounded-sm text-xs text-white items-center"
                  onClick={() => {
                    !isAuthenticated()
                      ? (message.warning("You need to login first"),
                        router.push("/login"))
                      : wishAddMutate.mutate({
                          productSlug: slug,
                          productVariantSku: variants[0]?.sku,
                        });
                  }}
                >
                  <BsFillHeartFill /> <span> Wishlist</span>
                </li>
                <li className=" py-2 px-3 inline-flex bg-hoverColor opacity-70 rounded-sm text-white">
                  <MdCompareArrows />
                </li>
              </ul>
              <ul className="absolute right-1 bottom-1">
                <li className="py-2 px-3 inline-flex bg-hoverColor opacity-70 rounded-sm text-white">
                  <BsThreeDotsVertical />
                </li>
              </ul>
            </div>
            {/* <div
                className={`absolute top-2 left-1 text-xs capitalize rounded-md py-1 px-2 text-white ${
                  isActive ? "bg-hoverColor" : "bg-red-600"
                }`}
              >
                {`${isActive ? "available" : "out of stocks"}`}
              </div> */}
          </div>
          <div className="p-3 h-full flex-1">
            <Link href={"/product-details/" + slug}>
              <a className="group hover:underline hover:underline-[#212121]">
                <h4 className="text-lg font-medium  leading-[1.3] group-hover:text-hoverColor capitalize">
                  {name}
                </h4>
              </a>
            </Link>
            <div className="flex items-center space-x-3 my-3">
              <h5 className="text-base font-normal  leading-[1.3]">
                Rs: {salePrice}
              </h5>
              <h5 className="line-through text-sm font-normal text-red-600">
                Rs. 2000
              </h5>
            </div>
            <ul className="flex items-center space-x-6 mb-4">
              <li>
                <div className="text-center text-hoverbgColor">
                  <FaRoad className="mx-auto text-sm text-hoverbgColor" />
                  <p className="mt-1 text-xs font-normal">22km</p>
                </div>
              </li>
              <li>
                <div className="text-center text-hoverbgColor">
                  <GoLocation className="mx-auto text-sm text-hoverbgColor" />
                  <p className="mt-1 text-xs font-normal">Nepal</p>
                </div>
              </li>{" "}
              <li>
                <div className="text-center text-hoverbgColor">
                  <BiGasPump className="mx-auto text-sm text-hoverbgColor" />
                  <p className="mt-1 text-xs font-normal">Diesel</p>
                </div>
              </li>
              <li>
                <div className="text-center text-hoverbgColor">
                  <FaUserAlt className="mx-auto text-sm text-hoverbgColor" />
                  <p className="mt-1 text-xs font-normal">First Owner</p>
                </div>
              </li>
            </ul>
            <Button className="h-auto py-1  leading-auto bg-[#0953a0] text-white rounded-sm hover:border-[#0953a0] hover:text-[#0953a0] hover:opacity-1 text-sm ">
              Buy Button
            </Button>
          </div>
        </div>
      </li>
    </ul>
  );
};

export const Data = {
  GridData,
  ListData,
};
