import Hero from "../assets/Hero.png";


import { Button, Col, Row } from "antd";

const Main = () => {
  return (
  <div className="md:my-20 my-6">
      <Row gutter={[20,20]} align="middle"> 
      <Col  lg={12} sm={24}>
         <h1 className="font-poppins  font-semibold md:text-[40px] text-[30px] leading-[61px] tracking-[0.2px] align-middle !text-secondary">
          Tools untuk Designer, Developer, dan Business Owner
        </h1>
        <p className="font-poppins mr-25 bg-primary font-normal text-[18px] leading-[36.5px] tracking-[0.2px] align-middle text-secondary">
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
