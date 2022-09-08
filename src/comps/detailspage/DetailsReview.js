import { Row, Col, Rate } from "antd";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";
import { MdVerifiedUser } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
// api
import { getReviewList } from "src/api/review";
// react-query
import { useQuery, QueryClient } from "react-query";
import { useState, useEffect } from "react";
// moment
import Moment from "src/helpers/moment";


export default function DetailsReview({ reviewApi }) {
  const { data: reviewList, fetch } = useQuery("reviewList", getReviewList, {
    enabled: true,
  });
  const [ReviewData, setReviewData] = useState([]);

  useEffect(() => {
    setReviewData(reviewList?.data);
  }, [reviewList]);

  return (
    <div>
      <div className="mb-10 ">
        <h4 className=" text-base capitalize  font-medium">
          Customer Review and Rating{" "}
          <span className="text-primary-400">(102,046)</span>
        </h4>
      </div>
      <Row gutter={20}>
        {(Array.isArray(ReviewData) ? ReviewData : []).map((item, index) => {
          return (
            <Col span={6} item={item} key={index}>
              <div className="bg-gray-100 mb-5">
                <div className="relative h-[200px]">
                  <Image
                    src={`/categories/img-8.webp`}
                    title="review"
                    layout="fill"
                  />
                </div>
                <div className="mb-4 p-4 bg-bgGround">
                  <div className="flex justify-between items-center">
                    <h5 className="text-sm font-normal text-gray-700 ">
                      Review on
                      <Link href="/details">
                        <a className="uppercase text-primary ml-4 font-medium">
                          Product one{" "}
                        </a>
                      </Link>
                    </h5>
                    <div>
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                  <div
                    className="my-2
                  "
                  >
                    <Rate
                      disabled
                      defaultValue={item?.rating}
                      className="text-sm"
                    />
                  </div>
                  <div className="flex items-center">
                    <h6 className="text-sm text-gray-600 font-medium capitalize mr-3">
                      By {item?.user?.firstName}
                    </h6>
                    <div className="text-[#0E9E49] text-sm capitalize flex items-center">
                      <MdVerifiedUser className="mr-2" />
                      Verified {item?.user?.user_role[0]}
                    </div>
                  </div>
                  <div className="my-2">
                    <h3 className="text-sm text-gray-700 font-normal">
                      {item?.message}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center ">
                      <div className="mr-[10px] h-8 w-8 flex items-center justify-center rounded-lg border border-bgGround">
                        <AiOutlineLike />
                      </div>
                      <h5 className="text-sm font-normal text-gray-700">
                        5 people helpful
                      </h5>
                    </div>
                    <div className="text-sm text-gray-700 font-normal">
                      {Moment(item?.createdOn)}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
      <div className="text-center">
        <div className="py-3 px-5 rounded-sm m-auto inline-block border group border-hoverColor hover:bg-hoverbgColor hover:text-gray-50 text-center capitalize">
          <Link href="#!">
            <a className="text-sm text-hoverColor group-hover:text-gray-50 font-medium">
              See More Review
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
