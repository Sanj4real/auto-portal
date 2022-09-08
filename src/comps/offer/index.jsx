import Outerlayout from "../outer-layout/Outerlayout";
import Image from "next/image";
import Link from "next/link";
import { Button } from "antd";
import Item from "antd/lib/list/Item";
import { GiRoad } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsFillFileEarmarkSpreadsheetFill } from "react-icons/bs";

const Offer = () => {
  const OFFERBLOCK = [
    {
      src: "/images/offer.jpg",
      price: "NRs. 200000",
      past: "26000",
      title: "Audi A1 Citycarver Sonic Tronic Model 1368 2016",
      Distance: "1400km",
      Location: "Kathmandu",
      Owner: "First Owner",
      First: "Last Owner",
    },
    {
      src: "/images/offer.jpg",
      price: "NRs. 200000",
      past: "26000",
      title: "Audi A1 Citycarver Sonic Tronic Model 1368 2016",
      Distance: "1400km",
      Location: "Kathmandu",
      Owner: "First Owner",
      First: "Last Owner",
    },
    {
      src: "/images/offer.jpg",
      price: "NRs. 200000",
      past: "26000",
      title: "Audi A1 Citycarver Sonic Tronic Model 1368 2016",
      Distance: "1400km",
      Location: "Kathmandu",
      Owner: "First Owner",
      First: "Last Owner",
    },
    {
      src: "/images/offer.jpg",
      price: "NRs. 200000",
      past: "26000",
      title: "Audi A1 Citycarver Sonic Tronic Model 1368 2016",
      Distance: "1400km",
      Location: "Kathmandu",
      Owner: "First Owner",
      First: "Last Owner",
    },
  ];

  return (
    <Outerlayout maintitle="Second Hand Offer Vehicles" category="true">
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
        {OFFERBLOCK.map((Item, index) => (
          <div key={index} className="border border-[#E6EAF0] rounded-sm">
            <div className="relative w-full h-[200px]">
              <Image
                alt="Mountains"
                src={Item.src}
                layout="fill"
                objectFit="cover"
                className="rounded-tl-lg rounded-tr-lg"
              />
            </div>
            <div className="p-[14px]">
              <Link href="/details">
                <a className="group">
                  <p className="mb-2 flex items-center ">
                    <b className="text-green-100 text-sm font-medium  mr-[12px]">
                      {Item.price}
                    </b>
                    <del className="text-warning text-sm font-normal">
                      {Item.past}
                    </del>
                  </p>
                  <h3 className="text-base mb-3 font-medium capitalize leading-[1.3] group-hover:text-hoverColor">
                    {Item.title}
                  </h3>
                  <div className="flex justify-between flex-wrap">
                    <div className="text-center mb-3 text-lg ">
                      <GiRoad className="mx-auto text-base" />
                      <p className="mt-2 text-sm font-medium">
                        {Item.Distance}
                      </p>
                    </div>
                    <div className="text-center mb-2 text-lg ">
                      <GoLocation className="mx-auto text-base" />
                      <p className="mt-2 text-sm font-medium">
                        {Item.Location}
                      </p>
                    </div>
                    <div className="text-center mb-2 text-lg ">
                      <AiOutlineUserAdd className="mx-auto text-base" />
                      <p className="mt-2 text-sm font-medium">{Item.Owner}</p>
                    </div>
                    {/* <div className="text-center mb-2 text-lg ">
                  <BsFillFileEarmarkSpreadsheetFill className="mx-auto" />
                  <p className="mt-2 text-base font-medium">{Item.First}</p>
                </div> */}
                  </div>
                </a>
              </Link>
              <Link href="/finderVehicle">
                <a className="mt-3 leading-auto  h-auto  btn border-0 bg-hoverColor text-white hover:border-none hover:bg-hoverbgColor  w-full block text-lg hover:text-white">
                  Buy Now
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Outerlayout>
  );
};

export default Offer;
