import Outerlayout from "../outer-layout/Outerlayout";
import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import Link from "next/link";

const Shop = () => {
  // tab
  const [tab, setTab] = useState("hatchback");
  const toggleTab = (index) => {
    setTab(index);
  };

  const SLIDES = [
    {
      title: "slide 1",
      status: "30000+ available",
      price: "10.5 Lakhs",
      backgroundImage: "/categories/img-1.webp",
    },
    {
      title: "slide 2",
      status: "30000+ available",
      price: "10.5 Lakhs",
      backgroundImage: "/categories/img-2.webp",
    },
    {
      title: "slide 3",
      status: "30000+ available",
      price: "10.5 Lakhs",
      backgroundImage: "/categories/img-3.webp",
    },
    {
      title: "slide 4",
      status: "30000+ available",
      price: "10.5 Lakhs",
      backgroundImage: "/categories/img-4.webp",
    },
    {
      title: "slide 5",
      status: "30000+ available",
      price: "10.5 Lakhs",
      backgroundImage: "/categories/img-5.webp",
    },
  ];
  const SLIDESTWO = [
    {
      title: "slide 1",
      status: "30000+ available",
      price: "10.5 Lakhs",
      backgroundImage: "/categories/img-8.webp",
    },
    {
      title: "slide 2",
      status: "30000+ available",
      price: "10.5 Lakhs",
      backgroundImage: "/categories/img-7.webp",
    },
    {
      title: "slide 3",
      status: "30000+ available",
      price: "10.5 Lakhs",
      backgroundImage: "/categories/img-6.webp",
    },
    {
      title: "slide 4",
      status: "30000+ available",
      price: "10.5 Lakhs",
      backgroundImage: "/categories/img-5.webp",
    },
    {
      title: "slide 5",
      status: "30000+ available",
      price: "10.5 Lakhs",
      backgroundImage: "/categories/img-4.webp",
    },
  ];

  return (
    <Outerlayout maintitle="Shop By Body Parts" category="true">
      <>
        <ul className="flex flex-wrap border-b border-solid border-[#D0D7E2] mb-10">
          <li
            className={`cursor-pointer font-medium px-6 py-2.5 grow sm:grow-0 text-center
              ${
                tab == "hatchback"
                  ? "active text-primary-900 border-b-2 border-solid border-primary"
                  : "text-gray-600"
              }`}
            onClick={() => {
              toggleTab("hatchback");
            }}
          >
            Hatchback
          </li>
          <li
            className={`cursor-pointer font-medium px-6 py-2.5 grow sm:grow-0 text-center
              ${
                tab == "sedan"
                  ? "active text-primary-900 border-b-2 border-solid border-primary"
                  : "text-gray-600"
              }`}
            onClick={() => {
              toggleTab("sedan");
            }}
          >
            Sedan
          </li>
        </ul>
        <div className="tab-content__shop">
          <div className={tab === "hatchback" ? `block` : `hidden`}>
            <Splide
              renderControls={() => (
                <div className="splide__arrows">
                  <button className="splide__arrow splide__arrow--prev">
                    <Image
                      src="/images/left.png"
                      alt="left"
                      width="26"
                      height="26"
                    />
                  </button>
                  <button className="splide__arrow splide__arrow--next">
                    <Image
                      src="/images/right.png"
                      alt="left"
                      width="26"
                      height="26"
                    />
                  </button>
                </div>
              )}
              options={{
                perPage: 1,
                arrows: true,
                pagination: false,
                gap: "20px",
                breakpoints: {
                  575: {
                    perPage: 1,
                  },
                  767: {
                    perPage: 3,
                  },
                  1024: {
                    perPage: 3,
                  },
                  1200: {
                    perPage: 3,
                  },
                  2560: {
                    perPage: 4,
                  },
                },
              }}
            >
              {SLIDES.map((item, index) => (
                <SplideSlide key={index}>
                  <div className="relative group custom rounded-lg overflow-hidden">
                    <Link href="/details">
                      <a>
                        <Image
                          src={item.backgroundImage}
                          className="transition-all group-hover:scale-105 w-full"
                          alt="image"
                          height="240"
                          width="345"
                        />
                        <div className=" absolute bottom-5 text-gray-50 left-[15px] w-full z-20 ">
                          <h3 className="text-xs text-gray-50">{item.title}</h3>
                          <p className="text-[13px] leading-[20px] font-medium mb-1">
                            {item.status}
                          </p>
                          <p className="text-[13px] leading-[20px] font-semibold">
                            {item.price}
                          </p>
                        </div>
                      </a>
                    </Link>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
          <div className={tab === "sedan" ? `block` : `hidden`}>
            <Splide
              renderControls={() => (
                <div className="splide__arrows">
                  <button className="splide__arrow splide__arrow--prev">
                    <Image
                      src="/images/left.png"
                      alt="left"
                      width="26"
                      height="26"
                    />
                  </button>
                  <button className="splide__arrow splide__arrow--next">
                    <Image
                      src="/images/right.png"
                      alt="left"
                      width="26"
                      height="26"
                    />
                  </button>
                </div>
              )}
              options={{
                perPage: 4,
                arrows: true,
                pagination: false,
                gap: "20px",
                breakpoints: {
                  575: {
                    perPage: 1,
                  },
                  767: {
                    perPage: 3,
                  },
                  1024: {
                    perPage: 2,
                  },
                  1200: {
                    perPage: 3,
                  },
                  2560: {
                    perPage: 4,
                  },
                },
              }}
            >
              {SLIDESTWO.map((item, index) => (
                <SplideSlide key={index}>
                  <div className="relative image-slides group custom rounded-lg overflow-hidden">
                    <Link href="">
                      <a className="h-[240px] w-full lg:w-[354px] ">
                        <Image
                          src={item.backgroundImage}
                          className="transition-all group-hover:scale-105"
                          alt="image"
                          // height="240"
                          layout="fill"
                          // width="345"
                        />
                        <div className="absolute bottom-5 text-gray-50 left-[15px] w-full z-20 ">
                          <h3 className="text-xs text-gray-50">{item.title}</h3>
                          <p className="text-[13px] leading-[20px] font-medium mb-1">
                            {item.status}
                          </p>
                          <p className="text-[13px] leading-[20px] font-semibold">
                            {item.price}
                          </p>
                        </div>
                      </a>
                    </Link>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
        <style jsx>
          {`
            .custom::before {
              content: "";
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: 1;
              background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0) 0%,
                #000000 100%
              );
            }
            .custom span {
              width: 100% !important;
            }
          `}
        </style>
      </>
    </Outerlayout>
  );
};

export default Shop;
