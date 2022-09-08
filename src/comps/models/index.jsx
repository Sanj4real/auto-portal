import { Splide, SplideSlide } from "@splidejs/react-splide";
import Link from "next/link";
import Image from "next/image";

const Models = () => {
  const MODALSLIDER = [
    {
      modal: "Modern New Car",
      title: " Sporty Ferrari Limited Edition",
      price: "Rs 250,00000.99",
      backgroundImage: "/images/modern1.jpg",
    },
    {
      modal: "Modern New Car",
      title: " Sporty Ferrari Limited Edition",
      price: "Rs 250,00000.99",
      backgroundImage: "/categories/img-7.webp",
    },
  ];

  return (
    <section className="pt-[4rem]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_32%] gap-5">
          <div className="model__slider">
            <Splide
              renderControls={() => (
                <div className="splide__arrows">
                  <button className="splide__arrow splide__arrow--prev">
                    <Image
                      src="/images/leftarrow.png"
                      alt="left"
                      width="9"
                      height="18"
                    />
                  </button>
                  <button className="splide__arrow splide__arrow--next">
                    <Image
                      src="/images/rightarrow.png"
                      alt="left"
                      width="9"
                      height="18"
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
                    perPage: 2,
                  },
                  1024: {
                    perPage: 1,
                  },
                  1200: {
                    perPage: 1,
                  },
                  2560: {
                    perPage: 1,
                  },
                },
              }}
            >
              {MODALSLIDER.map((item, index) => (
                <SplideSlide key={index}>
                  <div
                    className="relative h-[240px] lg:h-[500px] group custom rounded-lg overflow-hidden"
                    style={{
                      backgroundImage: `url(${item.backgroundImage})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center center",
                      backgroundSize: "cover",
                    }}
                  >
                    <Link href="/details">
                      <a className="z-50 relative">
                        <div className=" pl-6 pt-12 md:pt-16 text-gray-100  w-full z-30 ">
                          <h3 className="text-xl font-medium mb-2 text-gray-50 ">
                            {item.modal}
                          </h3>
                          <p className="text-base mb-2 z-50">{item.title}</p>
                          <p className="text-base font-medium">{item.price}</p>
                        </div>
                      </a>
                    </Link>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>

          <div className="block md:flex md:space-x-5 lg:space-x-0 lg:block">
            <div
              className="relative group  w-full h-[240px] custom rounded-lg overflow-hidden"
              style={{
                backgroundImage: "url('/images/modern2.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                zIndex: "-1",
              }}
            >
              <Link href="/details">
                <a className="z-50 relative">
                  <div className=" pl-6 pt-12 md:pt-16 text-gray-100  w-full z-50">
                    <h3 className="text-xl font-medium mb-2 text-gray-50 ">
                      Modern New Car
                    </h3>
                    <p className="text-base mb-2 z-50">
                      Sporty Ferrari Limited Edition
                    </p>
                    <p className="text-base font-medium">Rs 250,00000.99</p>
                  </div>
                </a>
              </Link>
            </div>

            <div className="bg-[#081828] mt-5 md:mt-0 lg:mt-5 lg:ml-0 md:w-full h-[240px] rounded ">
              <div className="pl-6  pt-12 md:pt-16 text-gray-50">
                <h3 className="text-xl font-medium mb-2 text-gray-100">
                  Weekly Sale
                </h3>
                <p className="mb-5 text-base">
                  Saving up to 50% off all Maruti cars this week.
                </p>
                <Link href="#">
                  <a className="btn btn-primary hover:text-gray-100">
                    View Details
                  </a>
                </Link>
              </div>
            </div>
          </div>
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
        `}
      </style>
    </section>
  );
};

export default Models;
