import { Flex, Row ,Col} from "antd"

import Card from "./MainCard/Card"
import google from "../assets/google.png"
import netflix from "../assets/netflix.png"
import airbnb from "../assets/airbnb.png"

const cardClassName = "w-full h-[200px] flex flex-col justify-items-center mt-3 md:px-20 lg:px-0";
const cardClassNameImg = "h-10 md:h-16";
const classNameImgBox = "w-full flex justify-center items-center gap-3";

const Brands = () => {
  return (
    <Flex vertical className="text-center !bg-background" style={{marginTop:'10rem'}}>
        <h1 className="font-semibold text-[36px] leading-[32px] tracking-[0.2px] align-middle text-[#1F2E35] font-poppins mb-10 ">Most Brands</h1>
      <Row  className="text-center" gutter={[32,32]}>
        <Col sm={24} xl={8}>
          <Card className={cardClassName} classNameImg={cardClassNameImg} classNameText="text-center" classNameImgBox={classNameImgBox} img={google} subtitle={'Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, '}   />
        </Col>
        <Col sm={24} xl={8}>
          <Card className={cardClassName} classNameImg={cardClassNameImg} classNameText="text-center" classNameImgBox={classNameImgBox} img={netflix} subtitle={'Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, '}   />
        </Col>
        <Col sm={24} xl={8}>
          <Card className={cardClassName} classNameImg={cardClassNameImg} classNameText="text-center" classNameImgBox={classNameImgBox} img={airbnb} subtitle={'Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, '}   />
        </Col>
      </Row>
    </Flex>
  )
}

export default Brands