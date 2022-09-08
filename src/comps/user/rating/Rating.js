import { Tabs, Checkbox, Row, Col, Rate, Pagination } from "antd";
import { getReview } from "src/api/review";
import { useQuery, QueryClient } from "react-query";
import { baseUrl } from "src/helpers/constants";
import { useState, useEffect } from "react";
import Moment from "src/helpers/moment";
import Loader from "src/helpers/loader";
import { isAuthenticated } from "src/helpers/token";
import ReactPaginate from "react-paginate";

export default function Rating() {
  const { data: userReview } = useQuery("reviews", getReview, {
    enabled: isAuthenticated(),
  });

  const [Review, setReview] = useState([]);

  useEffect(() => {
    console.log("ypur review are", userReview);
    setReview(userReview?.data);
  }, [userReview]);

  useEffect(() => {
    console.log("total reviews are", Review);
  }, [Review]);

  const { TabPane } = Tabs;

  // pagination

  return (
    <div>
      <h4 className="mb-5 text-xl capitalize font-semibold py-1 border-b border-[rgba(0,0,0,.1)]">
        Rating
      </h4>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Buyer Rating" key="1" className="text-2xl">
          <Checkbox.Group
            style={{
              width: "100%",
            }}
          >
            <Row>
              {/* checked whether review is avilable  */}
              {userReview && userReview?.data ? (
                Review && Review.length ? (
                  <Col span={24}>
                    {(Review || []).map((item, index) => (
                      <div
                        key={index}
                        className="flex space-x-2 lg:space-x-3 mb-4 lg:mb-6 p-3 lg:py-5 lg:px-5 border border-[rgba(0,0,0,.1)]"
                      >
                        <div className="lg:w-[15%] text-center">
                          <img
                            src={`${baseUrl}/${item?.user?.avatar}`}
                            alt=""
                            className="h-[70px] w-[70px] object-cover rounded-full"
                          />
                          <div className="text-mbase text-left  lg:mt-2">
                            <i className="block text-sm font-normal">
                              Submitted by -
                            </i>
                            <h4 className="text-lg font-medium">
                              {item?.user?.firstName}
                            </h4>
                          </div>
                        </div>
                        <div className="lg:w-[75%]">
                          <div className="flex space-x-8 items-center text-left justify-between mb-2 lg:mb-3">
                            <div>
                              <Rate disabled defaultValue={item.rating} />
                              <h6 className="inline ml-6 font-medium">
                                {item.rating} ratings
                              </h6>
                            </div>
                            <h6 className="text-base font-normal">
                              {Moment(item.createdOn)}
                            </h6>
                          </div>
                          <h4 className="text-lg font-normal">
                            {item.message}
                          </h4>
                        </div>
                      </div>
                    ))}
                  </Col>
                ) : (
                  <div>
                    <h3>No Reviews found</h3>
                  </div>
                )
              ) : (
                <Loader> </Loader>
              )}
              <Pagination total={12} />
            </Row>
          </Checkbox.Group>
        </TabPane>
        <TabPane tab="Seller Rating" key="2">
          <Checkbox.Group
            style={{
              width: "100%",
            }}
          >
            <Row>
              <Col span={24}>
                <h4 className="text-lg font-normal capitalize">
                  No Rating and Reviews
                </h4>
              </Col>
            </Row>
          </Checkbox.Group>
        </TabPane>
      </Tabs>

      <style jsx>
        {`
          :global(.ant-tabs-tab-btn) {
            font-size: 16px;
            text-transform: capitalize;
          }
          :global(.ant-tabs-nav) {
            margin-bottom: 22px;
          }
        `}
      </style>
    </div>
  );
}
