import { Flex, Row ,Col} from "antd"

import Card from "./MainCard/Card"

import framer from "../assets/framer.png"
import whimsicial from "../assets/whimsical.png"
import mind from "../assets/mind.png"
import zapier from "../assets/zapier.png"

const textClassName = "text-start";
const classNameImgBox ="w-full"
const classNameImg = "w-full object-cover";
const BoxStyle = "w-full flex flex-col gap-4"
const Comer = () => {
  return (
    <Flex vertical className="text-center" style={{margin:'100px 0'}}>
        <h1 className="font-semibold text-[36px] leading-[32px] tracking-[0.2px] align-middle text-[#1F2E35] font-poppins mb-10">Most Comer</h1>
      <Row  gutter={[32,32]}>
        <Col sm={24} xl={6} md={12}><Card  className={BoxStyle} classNameText={textClassName} classNameImgBox={classNameImgBox} classNameImg={classNameImg} img={framer} title={'Figma'} subtitle={'Figma adalah alat desain berbasis vektor untuk membuat desain website dan aplikasi.'}   /></Col>
        <Col sm={24} xl={6} md={12}><Card  className={BoxStyle} classNameText={textClassName} classNameImgBox={classNameImgBox} classNameImg={classNameImg} img={whimsicial} title={'Figma'} subtitle={'Figma adalah alat desain berbasis vektor untuk membuat desain website dan aplikasi.'}   /></Col>
        <Col sm={24} xl={6} md={12}><Card  className={BoxStyle} classNameText={textClassName} classNameImgBox={classNameImgBox} classNameImg={classNameImg} img={mind} title={'Figma'} subtitle={'Figma adalah alat desain berbasis vektor untuk membuat desain website dan aplikasi.'}   /></Col>
        <Col sm={24} xl={6} md={12}><Card  className={BoxStyle} classNameText={textClassName} classNameImgBox={classNameImgBox} classNameImg={classNameImg} img={zapier} title={'Figma'} subtitle={'Figma adalah alat desain berbasis vektor untuk membuat desain website dan aplikasi.'}   /></Col>
      </Row>
    </Flex>
  )
}

export default Comer