import { Flex, Row ,Col} from "antd"

import Card from "./MainCard/Card"
import adobe from "../assets/adobe.png"
import figma from "../assets/figma.png"
import inlogo from "../assets/inlogo.png"

const cardClassName = "p-5 shadow-[0_0_4px_#00000040] rounded-lg flex flex-col gap-4 md:px-10 lg:mx-0";
const classNameImg = "w-full object-cover";
const Popular = () => {
  return (
    <Flex vertical className="text-center">
        <h1 className="font-semibold text-[36px] leading-[32px] tracking-[0.2px] align-middle text-[#1F2E35] font-poppins mb-10">Most Popular</h1>
      <Row  className="text-start" gutter={[32,32]}>
        <Col sm={24} xl={8}><Card className={cardClassName} classNameImg={classNameImg} img={adobe} title={'Figma'} subtitle={'Figma adalah alat desain berbasis vektor untuk membuat desain website dan aplikasi.'}   /></Col>
        <Col sm={24} xl={8}><Card className={cardClassName} classNameImg={classNameImg} img={figma} title={'Figma'} subtitle={'Figma adalah alat desain berbasis vektor untuk membuat desain website dan aplikasi.'}   /></Col>
        <Col sm={24} xl={8}><Card className={cardClassName} classNameImg={classNameImg} img={inlogo} title={'Figma'} subtitle={'Figma adalah alat desain berbasis vektor untuk membuat desain website dan aplikasi.'}   /></Col>
      </Row>
    </Flex>
  )
}

export default Popular