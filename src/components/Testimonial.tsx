import { Flex, Row ,Col, Rate} from "antd"

import Card from "./MainCard/Card"
import hero1 from "../assets/hero1.png"
import hero2 from "../assets/hero2.png"
import hero3 from "../assets/hero3.png"


const cardClassName = "flex flex-col-reverse border border-[#DEDEDE] p-5 gap-5";
const cardImgClassName = "h-[64px]";
const classNameImgBox = "w-full flex justify-start items-center gap";

const Popular = () => {
  return (
    <Flex vertical className="text-center">
        <h1 className="font-semibold text-[36px] leading-[32px] tracking-[0.2px] align-middle text-[#1F2E35] font-poppins mb-10">Most Popular</h1>
      <Row  className="text-start" gutter={[32,32]}>
        <Col sm={24} xl={8}><Card className={cardClassName} classNameImg={cardImgClassName} classNameImgBox={classNameImgBox} img={hero1} rate={<Rate defaultValue={4}/>} subtitle={'Figma adalah alat desain berbasis vektor untuk membuat desain website dan aplikasi.'}   /></Col>
        <Col sm={24} xl={8}><Card className={cardClassName} classNameImg={cardImgClassName} classNameImgBox={classNameImgBox} img={hero2} rate={<Rate defaultValue={4}/>} subtitle={'Figma adalah alat desain berbasis vektor untuk membuat desain website dan aplikasi.'}   /></Col>
        <Col sm={24} xl={8}><Card className={cardClassName} classNameImg={cardImgClassName} classNameImgBox={classNameImgBox} img={hero3} rate={<Rate defaultValue={4}/>} subtitle={'Figma adalah alat desain berbasis vektor untuk membuat desain website dan aplikasi.'}   /></Col>
      </Row>
    </Flex>
  )
}

export default Popular