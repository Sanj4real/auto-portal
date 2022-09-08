import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import { Alert } from "antd";
import { useState, useEffect } from "react";
import { useQuery, QueryClient } from "react-query";
import { baseUrl } from "src/helpers/constants";
// api
import { getTestimonial } from "src/api/homepage";

const Testimonial = () => {
  // const queryClient = QueryClient();

  const [review, setReview] = useState([]);

  const { data: reviews, isLoading } = useQuery("reviews", getTestimonial, {
    enabled: true,
  });

  useEffect(() => {
    console.log("testimonial", reviews);
    setReview(reviews?.data);
  }, [reviews]);

  if (isLoading) {
    return <Alert message="No brands yet" type="warning" />;
  }

  return (
    <section className="mt-[4rem]">
      <div className="container">
        <div className="maintitle--blue text-center mb-12  max-w-3xl mx-auto">
          <h2 className="font-semibold text-lg mb-8">
            From Our <span>Customers</span>
          </h2>
          <p className="text-mbase font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
            neque enim vitae nullam. Convallis ut velit, curabitur id neque.
            Consequat
          </p>
        </div>
        <div className="testimonial-slider">
          <Splide
            renderControls={() => (
              <div className="splide__arrows">
                <button className="splide__arrow splide__arrow--prev">
                  <Image
                    src="/images/circle-left.png"
                    alt="left"
                    width="40"
                    height="40"
                  />
                </button>
                <button className="splide__arrow splide__arrow--next">
                  <Image
                    src="/images/circle-right.png"
                    alt="left"
                    width="40"
                    height="40"
                  />
                </button>
              </div>
            )}
            options={{
              perPage: 1,
              perMove: 1,
              arrows: true,
              pagination: false,
              autoHeight: true,
            }}
          >
            {(Array.isArray(review?.productReviews)
              ? review?.productReviews
              : []
            ).map((item, index) => {
              return (
                <SplideSlide key={index} index={item}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
                    <div className="testimonial-sliderimg relative">
                      <div className="relative ml-auto">
                        <img
                          alt="Mountains"
                          src={
                            item?.productReviewImages
                              ? `${baseUrl}/${item?.productReviewImages[0]?.url}`
                              : "/images/noimage.png"
                          }
                          className="rounded-lg object-contain h-[200px] w-full"
                        />
                      </div>
                    </div>
                    <div className="pt-2 lg:pt-4">
                      <h3 className="font-medium text-base lg:text-lg mb-6 ">
                        {item?.message}
                      </h3>
                      <div className="font-inter relative before:font-extrabold before:text-7xl before:content-['“'] before:absolute before:-top-2 before:left-0 before:text-[#ceccd5]">
                        <div className="pl-9">
                          <p className="text-mbase font-normal  capitalize">
                            {item?.user?.firstName}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
