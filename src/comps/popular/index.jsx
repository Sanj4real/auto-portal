import Outerlayout from "../outer-layout/Outerlayout";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Alert } from "antd";
// react-slider
import Slider from "react-slick";
// react-query
import { useQuery, useQueryClient } from "react-query";
import { getBrands } from "src/api/homepage";

const Popular = () => {
  // react-query
  const { data: brand } = useQuery("brands", getBrands, {
    enabled: true,
  });

  const [Brands, setBrands] = useState([]);

  useEffect(() => {
    console.log(brand);
    setTimeout(() => {
      setBrands(brand?.data);
    }, 2000);
  }, [brand]);

  const BrandItem = ({ image, id, name, desc, isActive }) => {
    return (
      <div key={id} className="  text-center ">
        <Link href={`/brands/${id}`}>
          <a className="relative flex mx-auto group justify-center items-center w-full h-[180px] md:w-[100px]  md:h-[100px] lg:h-[85px] lg:w-[130px]  rounded-sm  bg-[#f1f6fb] py-4 px-5">
            <img
              src={image ? image : "/images/noimage.png"}
              alt={name}
              className="h-full transition-all w-auto object-contain group-hover:scale-110"
            />
          </a>
        </Link>
      </div>
    );
  };

  // react-slider
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,
    className: "slides",
    // rows: 2,
    // slidesPerRow: 2,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 592,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Outerlayout maintitle="Shop By Popular Brands">
      {Array.isArray(Brands) && Brands.length > 0 ? (
        <Slider {...settings}>
          {(Brands || []).map((item, index) => {
            return (
              <div key={index} className="  text-center ">
                <BrandItem {...item} />
              </div>
            );
          })}
        </Slider>
      ) : (
        <Alert message="No brands yet" type="warning" />
      )}

      <style jsx>
        {`
          :global(.slick-dots) {
            bottom: unset;
          }
          :global(.slick-prev) {
            left: 3% !important;
            z-index: 1;
          }
          :global(.slick-next) {
            right: 3% !important;
            z-index: 1;
          }
          .slides {
            position: relative;
          }
          .slides .slick-prev,
          .slides slick-next {
            position: absolute;
            top: 50%;
          }
          .slides .slick-prev {
            left: 5%;
          }
          .slides .slick-next {
            right: 5%;
          }
        `}
      </style>
    </Outerlayout>
  );
};

export default Popular;
