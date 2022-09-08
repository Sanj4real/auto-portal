import BasicLayout from "src/layouts/Basic";
import HeroSlider from "src/comps/slider/HeroSlider";
import { SplideSlide } from "@splidejs/react-splide";
import SearchTab from "src/comps/search/SearchTab";
import Category from "src/comps/category/category";
import Fullimg from "src/comps/fullimg/Fullimg";
import Deals from "src/comps/deals/Deals";
import Popular from "src/comps/popular";
import Shop from "src/comps/shop";
import Suggestion from "src/comps/suggestion";
import Experts from "src/comps/experts";
import Buysell from "src/comps/buy-sell";
import Jumbotron from "src/comps/jumbotron";
import Models from "src/comps/models";
import Offer from "src/comps/offer";
import Testimonial from "src/comps/testimonial";
import Faq from "src/comps/faq";
import Budget from "src/comps/budget/Budget";
import { SP } from "next/dist/shared/lib/utils";

import { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { getBanner } from "src/api/homepage";
import { backgroundSize } from "tailwindcss/defaultTheme";

const SLIDER = [
  {
    src: "/images/carimg.webp",
    smDesc: "120+ CARS TYPE AND BRANDS",
    title: "Search Your Best Car",
    desc: " There are many variations of passages of Lorem Ipsum available, but the majority have",
  },
];

export default function Home() {
  // usequery
  const { data: bannerData } = useQuery("banners", getBanner, {
    enabled: true,
  });

  const [Banner, setBanner] = useState();

  useEffect(() => {
    setBanner(bannerData?.data);
  }, [bannerData]);
  return (
    <BasicLayout>
      <div className="heroslider relative">
        <HeroSlider>
          {(Banner || []).map((item, index) => (
            <SplideSlide key={index} item={item}>
              <div
                className="bg-center bg-contain bg-no-repeat h-[55vh]  md:h-[65vh] lg:h-[75vh] w-auto"
                style={{
                  backgroundImage: `url(${item?.images[0]})`,
                  // objectFit: "contain",
                  backgroundPosition: "center center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </SplideSlide>
          ))}
        </HeroSlider>

        <div className="md:-mt-44 z-10 relative container  hidden lg:block">
          <div
            className="heroslider__search   bg-[#f1f6fb]  lg:py-8 lg:mx-4 lg:px-8"
            style={{
              background: "#f1f6fb",
            }}
          >
            <SearchTab />
          </div>
        </div>
      </div>

      <Category />
      <Fullimg />
      <Deals />
      <Popular />
      <Shop />
      <Models />
      <Jumbotron />
      <Budget />
      <Fullimg />
      <Buysell />
      <Suggestion />
      <Experts />
      <Offer />
      <Testimonial />
      <Faq />
    </BasicLayout>
  );
}
