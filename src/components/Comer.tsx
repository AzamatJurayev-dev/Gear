import { Flex } from "antd"
import { ComerCard } from "./maincards/ComerCard"

import framer from "../assets/framer.png"
import whimsical from "../assets/whimsical.png"
import mind from "../assets/mind.png"
import zapier from "../assets/zapier.png"

const Comer = () => {
  return (
    <Flex vertical style={{padding:'0 8rem'}} className="text-center">
        <h1 className="txt mb-20">Most Comer</h1>
      <Flex gap={32} style={{margin:'60px 0'}} className="text-start">
        <ComerCard img={framer} title={'Adobe XD'} subtitle={'Adobe XD adalah alat desain berbasis vektor untuk membuat desain website dan aplikasi.'} />
        <ComerCard img={whimsical} title={'Adobe XD'} subtitle={'Adobe XD adalah alat desain berbasis vektor untuk membuat desain website dan aplikasi.'} />
        <ComerCard img={mind} title={'Adobe XD'} subtitle={'Adobe XD adalah alat desain berbasis vektor untuk membuat desain website dan aplikasi.'} />
        <ComerCard img={zapier} title={'Adobe XD'} subtitle={'Adobe XD adalah alat desain berbasis vektor untuk membuat desain website dan aplikasi.'} />
      </Flex>
    </Flex>
  )
}

export default Comer