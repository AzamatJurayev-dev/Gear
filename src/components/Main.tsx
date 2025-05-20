// import { Button, Flex } from "antd";
import Hero from "../assets/Hero.png";
// import oval from "../assets/oval.png";
// import oval2 from "../assets/oval2.png";
// import xd from "../assets/xd.png";
// import invision from "../assets/invision.png";

import { Button, Col, Row } from "antd";

const Main = () => {
  return (
  <div>
      <Row>
      <Col  lg={12} sm={24}>
         <h1 className="heading">
          Tools untuk Designer, Developer, dan Business Owner
        </h1>
        <p className="subtext">
          Informasi tentang tool-tool design dan developer yang terbaru dan
          terpopular di seluruh dunia.
        </p>
        <Button type="primary" size="large" className="rounded-full">
          Explore now
        </Button>
      </Col> 
      <Col lg={12} sm={24}>
        <div className="w-full">
          <img src={Hero} alt="" className="w-full object-cover" />
        </div>
      </Col>
    </Row>
  </div>
  );
};

export default Main;


{/* <Flex
      align="center"
      justify="space-between"
      gap={60}
      style={{ padding: "0 10rem", height: "90vh" }}
    >
      <Flex vertical gap={20} align="start">
        <h1 className="heading">
          Tools untuk Designer, Developer, dan Business Owner
        </h1>
        <p className="subtext">
          Informasi tentang tool-tool design dan developer yang terbaru dan
          terpopular di seluruh dunia.
        </p>
        <Button type="primary" size="large" className="rounded-full">
          Explore now
        </Button>
        <Flex className="tools" gap={40}>
          <Flex gap={80}>
            <Flex align="center">
              <img src={oval} alt="" />
              <img src={oval2} alt="" />
            </Flex>
            <p>
              <span>4.00</span>+User
            </p>
          </Flex>
          <Flex gap={80}>
            <Flex align="center">
              <img src={invision} alt="" />
              <img src={xd} alt="" />
            </Flex>
            <p>
              <span>100</span>+Tools
            </p>
          </Flex>
        </Flex>
      </Flex>
      <div className="w-260">
        <img src={Hero} alt="" />
      </div>
    </Flex> */}