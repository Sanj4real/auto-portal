import { Tabs, Row, Col, Checkbox } from "antd";
import Link from "next/link";
const { TabPane } = Tabs;

const ANALYSE = [
  {
    value: "9",
    name: "Total Listing",
    color: "#fee",
    src: "/graph/red-graph.png",
  },
  {
    value: "1",
    name: "Active Listing",
    color: "#f1f5ff",
    src: "/graph/blue-graph.png",
  },
  {
    value: "9",
    name: "Listing Sold",
    color: "#eefffa",
    src: "/graph/green-graph.png",
  },
];

const title = () => {
  <h1>hello</h1>;
};

export default function Quick() {
  return (
    <div>
      <h4 className="mb-6 text-2xl  capitalize">My Listing</h4>
      <ul className="mb-6">
        {ANALYSE.map((item, index) => (
          <li
            key={index}
            item={item}
            className=" inline-flex space-x-4 mr-5 p-4 rounded-md "
            style={{
              background: `${item.color}`,
            }}
          >
            <div className="text-sm font-normal">
              <h5 className="text-xl font-medium">{item.value}</h5>
              {item.name}
            </div>
            <div className="custom-svg">
              <img src={item.src} alt="" />
            </div>
          </li>
        ))}
      </ul>
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Active" key="1">
            <Checkbox.Group
              style={{
                width: "100%",
              }}
            >
              <Row>
                <Col span={24}>
                  <Checkbox
                    value="A"
                    className="py-4 boxShadow p-4 items-center mb-5"
                  >
                    <div className="flex space-x-5 ">
                      <div>
                        <img
                          src="/images/car.png"
                          alt=""
                          className="h-14 w-24 object-contain mr-3"
                        />
                      </div>
                      <div>
                        <h4>
                          <Link href="#!">
                            <a className="text-xl hover:text-hoverColor">
                              Yamaha FZ S v2.0 150cc-Ltd. Edition 2018
                            </a>
                          </Link>
                        </h4>
                        <div className="text-sm font-normal text-paraColor my-3">
                          <span className="py-1 px-3 bg-paraColor text-[#fff] text-xs font-light rounded-xl mr-2">
                            Used
                          </span>{" "}
                          25,000 Km, Patrol
                        </div>
                        <div className="mb-3">
                          <span className="py-1 px-4 bg-orange-400 text-xs text-[#fff] rounded-xl font-light mr-2">
                            Qs
                          </span>
                          <span className="py-1 px-4 bg-green-800 text-xs text-[#fff] rounded-xl font-light">
                            Active
                          </span>
                        </div>
                        <div>
                          <small className="  font-normal capitalize text-sm">
                            Active since 21 Fec 2022 06:27
                          </small>
                        </div>
                      </div>
                      <div>
                        <div className="text-xl font-normal">
                          <span className="text-base capitalize text-paraColor font-medium">
                            Price
                          </span>{" "}
                          <br /> Rs. 480000
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span>
                            <Link href="#!">
                              <a className="text-base font-normal">View</a>
                            </Link>
                          </span>
                          <span>
                            <Link href="#!">
                              <a className="text-base font-normal">Edit</a>
                            </Link>
                          </span>
                          <span>
                            <Link href="#!">
                              <a className="text-base font-normal">
                                Deactivate
                              </a>
                            </Link>
                          </span>
                          <span>
                            <Link href="#!">
                              <a className="text-base font-normal">
                                Mark as sold offline
                              </a>
                            </Link>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox
                    value="B"
                    className="py-4 boxShadow p-4 items-center mb-5"
                  >
                    <div className="flex space-x-5 ">
                      <div>
                        <img
                          src="/images/car1.jpg"
                          alt=""
                          className="h-14 w-24 object-contain mr-3"
                        />
                      </div>
                      <div>
                        <h4>
                          <Link href="#!">
                            <a className="text-xl hover:text-hoverColor">
                              Yamaha FZ S v2.0 150cc-Ltd. Edition 2018
                            </a>
                          </Link>
                        </h4>
                        <div className="text-sm font-normal text-paraColor my-3">
                          <span className="py-1 px-3 bg-paraColor text-[#fff] text-xs font-light rounded-xl mr-2">
                            Used
                          </span>{" "}
                          25,000 Km, Patrol
                        </div>
                        <div className="mb-3">
                          <span className="py-1 px-4 bg-orange-400 text-xs text-[#fff] rounded-xl font-light mr-2">
                            Qs
                          </span>
                          <span className="py-1 px-4 bg-green-800 text-xs text-[#fff] rounded-xl font-light">
                            Active
                          </span>
                        </div>
                        <div>
                          <small className="  font-normal capitalize text-sm">
                            Active since 21 Fec 2022 06:27
                          </small>
                        </div>
                      </div>
                      <div>
                        <div className="text-xl font-normal">
                          <span className="text-base capitalize text-paraColor font-medium">
                            Price
                          </span>{" "}
                          <br /> Rs. 480000
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span>
                            <Link href="#!">
                              <a className="text-base font-normal">View</a>
                            </Link>
                          </span>
                          <span>
                            <Link href="#!">
                              <a className="text-base font-normal">Edit</a>
                            </Link>
                          </span>
                          <span>
                            <Link href="#!">
                              <a className="text-base font-normal">
                                Deactivate
                              </a>
                            </Link>
                          </span>
                          <span>
                            <Link href="#!">
                              <a className="text-base font-normal">
                                Mark as sold offline
                              </a>
                            </Link>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </TabPane>
          <TabPane tab="Sold" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Draft" key="3">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="Others" key="4">
            <Checkbox.Group
              style={{
                width: "100%",
              }}
            >
              <Row>
                <Col span={24}>
                  <Checkbox
                    value="A"
                    className="py-4 boxShadow p-4 items-center mb-5"
                  >
                    <div className="flex space-x-5 ">
                      <div>
                        <img
                          src="/images/car.png"
                          alt=""
                          className="h-14 w-24 object-contain mr-3"
                        />
                      </div>
                      <div>
                        <h4>
                          <Link href="#!">
                            <a className="text-xl hover:text-hoverColor">
                              Yamaha FZ S v2.0 150cc-Ltd. Edition 2018
                            </a>
                          </Link>
                        </h4>
                        <div className="text-sm font-normal text-paraColor my-3">
                          <span className="py-1 px-3 bg-paraColor text-[#fff] text-xs font-light rounded-xl mr-2">
                            Used
                          </span>{" "}
                          25,000 Km, Patrol
                        </div>
                        <div className="mb-3">
                          <span className="py-1 px-4 bg-orange-400 text-xs text-[#fff] rounded-xl font-light mr-2">
                            Qs
                          </span>
                          <span className="py-1 px-4 bg-green-800 text-xs text-[#fff] rounded-xl font-light">
                            Active
                          </span>
                        </div>
                        <div>
                          <small className="  font-normal capitalize text-sm">
                            Active since 21 Fec 2022 06:27
                          </small>
                        </div>
                      </div>
                      <div>
                        <div className="text-xl font-normal">
                          <span className="text-base capitalize text-paraColor font-medium">
                            Price
                          </span>{" "}
                          <br /> Rs. 480000
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center space-x-3">
                          <span>
                            <Link href="#!">
                              <a className="text-base font-normal">Activate</a>
                            </Link>
                          </span>
                          <span>
                            <Link href="#!">
                              <a className="text-base font-normal">Edit</a>
                            </Link>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </TabPane>
        </Tabs>
      </div>
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
