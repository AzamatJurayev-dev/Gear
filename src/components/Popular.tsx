import { Flex, Row ,Col} from "antd"

import popular1 from "../assets/popular1.png"
import { PopularCard } from "./maincards/PopularCard"
import figma from "../assets/figma.png"
import inlogo from "../assets/inlogo.png"

const Popular = () => {
  return (
    <Flex vertical style={{padding:'0 8rem',}} className="text-center">
        <h1 className="txt mb-20">Most Popular</h1>
      <Row style={{margin:'60px 0'}} className="text-start" gutter={[32,32]}>
        <Col sm={24} xl={8}><PopularCard img={popular1} title={'Adobe XD'} subtitle={'Adobe XD adalah alat desain berbasis vektor untuk membuat desain website dan aplikasi.'} /></Col>
        <Col sm={24} xl={8}><PopularCard img={figma} title={'Figma'} subtitle={'Figma adalah alat desain berbasis vektor untuk membuat desain website dan aplikasi.'} /></Col>
        <Col sm={24} xl={8}><PopularCard img={inlogo} title={'InVision'} subtitle={'InVision adalah alat desain berbasis vektor untuk membuat desain website dan aplikasi.'} /></Col>
      </Row>
    </Flex>
  )
}

export default Popular