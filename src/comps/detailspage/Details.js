import { Row, Col } from "antd";
import ImageGallery from "./ImageGallery";
import DetailsRight from "./DetailsRight";
import DetailsFaq from "./DetailsFaq";
import DetailsSimilar from "./DetailsSimilar";
import DetailsReview from "./DetailsReview";
import { useEffect, useState } from "react";
import BreadCrumb from "src/helpers/breadcrumb";
import { useRouter } from "next/router";
import HEAD from "src/helpers/head";
import Moment from "src/helpers/moment";
// api
import { getCategoryDetails, getBrandsDetails } from "../../api/homepage";

export default function Details() {
  const router = useRouter();
  const [detailsData, setDetailsData] = useState([]);

  useEffect(() => {
    router?.query?.id &&
      getCategoryDetails(router?.query?.id).then((res) => {
        setDetailsData(res?.data);
      });
  }, [router.query]);

  useEffect(() => {
    console.log("values of datas are", detailsData);
  }, [detailsData]);

  const DETAILSINFO = [
    {
      title: "Make Year:",
      desc: Moment(detailsData?.createdOn),
    },
    {
      title: "Kilometer Run :",
      desc: "120,00KM",
    },
    {
      title: "Location :",
      desc: "Kathmandu",
    },
    {
      title: "Fuel :",
      desc: "Diesel",
    },
    {
      title: "Mode :",
      desc: "Automatic",
    },
    {
      title: "Owner Till Now :",
      desc: "1",
    },
  ];

  const SPECIFICATION = [
    {
      title: "Dimension & Capacity:",
      info: "4.69×1.69×1.94 m",
    },
    {
      title: "Length:",
      info: "120 sq ft",
    },
    {
      title: "Width:",
      info: "4.69×1.69×1.94 m",
    },
    {
      title: "Height:",
      info: "4.69×1.69×1.94 m",
    },
    {
      title: "Seating Capacity:",
      info: "4.69×1.69×1.94 m",
    },
    {
      title: "Ground Clearance :",
      info: "4.69×1.69×1.94 m",
    },
    {
      title: "No of seating row :",
      info: "4.69×1.69×1.94 m",
    },
    {
      title: "Fuel tank Capacity :",
      info: "4.69×1.69×1.94 m",
    },
    {
      title: "Ground Clearance :",
      info: "4.69×1.69×1.94 m",
    },
    {
      title: "Ground Clearance :",
      info: "4.69×1.69×1.94 m",
    },
    {
      title: "Ground Clearance :",
      info: "4.69×1.69×1.94 m",
    },
    {
      title: "Ground Clearance :",
      info: "4.69×1.69×1.94 m",
    },
  ];

  const MORESPEC = [
    {
      title: "Fuel Type :",
      info: "Diesel",
    },
    {
      title: "Max Power :",
      info: "140km/h 6000rwp",
    },
    {
      title: "Max Torque :",
      info: "14 torque",
    },
    {
      title: "Max Power (bhp@rpm)",
      info: "160km/h bhp",
    },
    {
      title: "Max Torque (Nm@rpm)",
      info: "16RPM",
    },
    {
      title: "Max Torque (Nm@rpm)",
      info: "16RPM",
    },
    {
      title: "Max Torque (Nm@rpm)",
      info: "16RPM",
    },
    {
      title: "Max Torque (Nm@rpm)",
      info: "16RPM",
    },
  ];

  const SIMILARPROD = [
    {
      src: "/categories/img-1.webp",
      speed: "1400km",
      date: "2014",
      prodName: "Benzine",
      title: "Audi A1 Citycarver S Tronic",
      price: "Rs 24,00000",
    },
    {
      src: "/categories/img-2.webp",
      speed: "1400km",
      date: "2014",
      prodName: "Benzine",
      title: "Audi A1 Citycarver S Tronic",
      price: "Rs 24,00000",
    },
    {
      src: "/categories/img-3.webp",
      speed: "1400km",
      date: "2014",
      prodName: "Benzine",
      title: "Audi A1 Citycarver S Tronic",
      price: "Rs 24,00000",
    },
    {
      src: "/categories/img-4.webp",
      speed: "1400km",
      date: "2014",
      prodName: "Benzine",
      title: "Audi A1 Citycarver S Tronic",
      price: "Rs 24,00000",
    },
    {
      src: "/categories/img-5.webp",
      speed: "1400km",
      date: "2014",
      prodName: "Benzine",
      title: "Audi A1 Citycarver S Tronic",
      price: "Rs 24,00000",
    },
    {
      src: "/categories/img-6.webp",
      speed: "1400km",
      date: "2014",
      prodName: "Benzine",
      title: "Audi A1 Citycarver S Tronic",
      price: "Rs 24,00000",
    },
    {
      src: "/categories/img-7.webp",
      speed: "1400km",
      date: "2014",
      prodName: "Benzine",
      title: "Audi A1 Citycarver S Tronic",
      price: "Rs 24,00000",
    },
    {
      src: "/categories/img-8.webp",
      speed: "1400km",
      date: "2014",
      prodName: "Benzine",
      title: "Audi A1 Citycarver S Tronic",
      price: "Rs 24,00000",
    },
  ];

  return (
    <>
      <HEAD
        title={detailsData?.name}
        desc={detailsData?.description}
        img={detailsData?.images}
        detailsData={detailsData}
      />
      <BreadCrumb component={detailsData?.name} />
      <div className="container">
        <Row gutter={20}>
          <Col xs={24} sm={24} md={8} lg={10} xl={12}>
            <div className="relative bg-bgGround p-3">
              <ImageGallery galleryApi={detailsData} />
            </div>
          </Col>
          <Col xs={24} sm={24} md={16} lg={14} xl={12}>
            <DetailsRight
              name={detailsData?.name}
              price={detailsData?.salePrice}
              prev="2000"
              detailsInfo={DETAILSINFO}
              detailsData={detailsData}
            />
          </Col>
        </Row>
        <div className="my-6">
          <div className=" block border border-bgGround p-4 md:p-6 ">
            <h4 className="mb-[15px] text-base capitalize font-medium">
              Car Specification
            </h4>
            <div>
              <ul className="flex flex-wrap justify-between">
                {SPECIFICATION.map((item, index) => (
                  <li
                    key={index}
                    item={item}
                    className="flex  items-center mb-[14px] w-full md:w-[48%] lg:w-[30%] justify-between"
                  >
                    <div className="text-gray-700 text-sm capitalize w-30 font-normal">
                      {item.title}
                    </div>
                    <div className="text-sm capitalize  font-medium">
                      {item.info}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <DetailsFaq moreSpec={MORESPEC} />
        <DetailsSimilar similarProd={SIMILARPROD} />
        <div className="mb-6 ">
          <DetailsReview reviewApi={detailsData} />
        </div>
      </div>
    </>
  );
}
