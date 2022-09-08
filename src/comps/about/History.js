import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";

export default function History() {
  const SlickSetting = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const SLICKCONTENT = [
    {
      src: "/about/img-1.webp",
      item: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      to: "/about",
    },
    {
      src: "/about/img-2.webp",
      item: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      to: "/about",
    },
    {
      src: "/about/img-3.webp",
      item: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      to: "/about",
    },
    {
      src: "/about/img-4.webp",
      item: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      to: "/about",
    },
  ];

  return (
    <div>
      <div className="py-[90px]">
        <div className="container">
          <div className="mb-8">
            <h5 className="text-sm text-gray-700 font-medium  mb-1">
              Our History
            </h5>
            <h3 className="text-xl  leading-9 font-semibold mb-4">
              A global creative community
            </h3>
          </div>
          <div>
            <Slider {...SlickSetting}>
              {SLICKCONTENT.map((item, index) => (
                <div key={index} className="px-3">
                  <div className="">
                    <div className="relative h-40 rounded-sm overflow-hidden">
                      <Link href={item.to}>
                        <a className="group">
                          <Image
                            src={item.src}
                            alt="image"
                            layout="fill"
                            objectFit="cover"
                            className="group-hover:scale-105 group-hover:transition-all group-hover:ease-in group-hover:duration-350"
                          />
                        </a>
                      </Link>
                    </div>
                    <h3 className="text-lg mt-3 mb-2 font-medium leading-6">
                      {item.item}
                    </h3>
                    <Link href={item.to}>
                      <a className="text-base font-normal leading-6 text-[#1A63F4]">
                        Read More
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
