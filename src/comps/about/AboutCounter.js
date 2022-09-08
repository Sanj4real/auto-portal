import { Row, Col, Divinder } from "antd";

export default function AboutCounter() {
  const ABOUTCOUNTER = [
    {
      largeTitle: "100%",
      smallTitle: "customer satisfaction",
    },
    {
      largeTitle: "2+ million",
      smallTitle: "in total community earning",
    },
    {
      largeTitle: "600+",
      smallTitle: "in total community earning",
    },
    {
      largeTitle: "100%",
      smallTitle: "in total community earning",
    },
  ];

  const AboutCounterVar = ({ item }) => {
    return (
      <div className="p-4 text-center">
        <h3 className="text-xl mb-2 font-semibold leading-6">
          {" "}
          {item.largeTitle}{" "}
        </h3>
        <h5 className="text-base font-normal text-gray-700 leading-6">
          {item.smallTitle}
        </h5>
      </div>
    );
  };

  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
        {ABOUTCOUNTER.map((item, index) => (
          <Col key={index} xs={24} sm={12} lg={6}>
            <AboutCounterVar item={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
