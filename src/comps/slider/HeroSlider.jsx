import { Splide } from "@splidejs/react-splide";
import { Input, Space } from "antd";

const { Search } = Input;

const onSearch = (value) => console.log(value);

const HeroSlider = ({ children }) => {
  return (
    <div className="relative">
      <div className="block lg:hidden absolute top-2.5 left-2.5 right-2.5 z-10">
        <Space
          direction="vertical"
          className="w-full rounded-3xl overflow-hidden"
        ></Space>
      </div>
      <div className="overlay block lg:hidden"></div>
      <div className="home_hero_slider">
        <Splide
          options={{
            perPage: 1,
            arrows: false,
            height: 580,
            direction: "ttb",
            breakpoints: {
              576: {
                height: "55vh",
                perPage: 1,
              },
              767: {
                height: "60vh",
                perPage: 1,
              },
              1020: {
                height: "65vh",
                perPage: 1,
              },
            },
          }}
        >
          {children}
        </Splide>
      </div>
      <style jsx>
        {`
          :global(.ant-input-wrapper input) {
            padding: 18px 15px 18px 15px;
            padding-right: 3.75rem;
            background: #fff !important;
          }
          :global(.ant-input-group-addon .ant-input-search-button) {
            border: 0;
            background: #5065f6;
            color: #fff;
            border-radius: 50% !important;
            height: 50px;
            width: 50px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 5px;
            z-index: 9;
          }
          :global(.ant-input-group-addon .ant-input-search-button svg path) {
            fill: #fff;
          }
        `}
      </style>
    </div>
  );
};

export default HeroSlider;
