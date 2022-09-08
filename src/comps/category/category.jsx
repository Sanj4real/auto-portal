import Link from "next/link";
import Outerlayout from "../outer-layout/Outerlayout";
import { Alert } from "antd";
import Slider from "react-slick";
import { getCategory } from "src/api/homepage";
import { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useRouter } from "next/router";

const Category = () => {
  const router = useRouter();

  const Categorylist = ({ id, image, slug, name, isActive }) => {
    if (!isActive) {
      return null;
    }
    return (
      <div key={id} className="text-center ">
        {/* <Link href={`${handleClick}`}> */}
        <Link href={`/product-list/${id}`}>
          <a className=" group  rounded-full w-[100px]  h-[100px] lg:h-[110px] lg:w-[110px] mx-auto relative overflow-hidden bg-[#f1f6fb] inline-flex justify-center items-center">
            <img
              src={image ? image : "/images/noimage.png"}
              alt="img"
              className="h-full transition-all w-auto object-contain group-hover:scale-110"
            />
          </a>
        </Link>
        <h5
          className="w-full mx-auto mt-2 text-center group-hover:text-hoverColor  transition-all  text-sm font-medium  capitalize  "
          style={{
            lineHeight: "1.3",
          }}
        >
          {name}
        </h5>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
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
  // react-query
  const { data: category } = useQuery("categories", getCategory, {
    enabled: true,
  });
  const [Category, setCategory] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setCategory(category?.data.slice(0, 14));
    }, 2000);
  }, [category]);

  return (
    <Outerlayout maintitle="Shop by Categories" className=" ">
      {Array.isArray(Category) && Category.length > 0 ? (
        <Slider {...settings}>
          {(Category || []).map((item, index) => {
            return (
              <div key={index} className="text-center ">
                <Categorylist {...item} />
              </div>
            );
          })}
        </Slider>
      ) : (
        <Alert message="No brands yet" type="warning" />
      )}
    </Outerlayout>
  );
};

export default Category;
