import { Flex } from "antd"
import TestCard from "./maincards/TestCard"
import hero1 from "../assets/hero1.png"
import hero2 from "../assets/hero2.png"
import hero3 from "../assets/hero3.png"


const Testimonial = () => {
  return (
    <Flex vertical style={{padding:'0 8rem'}} className="text-center">
        <h1 className="txt mb-20">Most Testimonial</h1>
      <Flex gap={32} style={{margin:'60px 0'}} className="text-start">
        <TestCard subtitle="Gear Menyediakan informasi tools yang powerful untuk Designer, Developer, dan juga Business Owner agar bisa lebih produktif" heroImg={hero1} heroName="Wahid Ari" heroJob="Designer"/>
        <TestCard subtitle="Gear Menyediakan informasi tools yang powerful untuk Designer, Developer, dan juga Business Owner agar bisa lebih produktif" heroImg={hero2} heroName="Wahid Ari" heroJob="Designer"/>
        <TestCard subtitle="Gear Menyediakan informasi tools yang powerful untuk Designer, Developer, dan juga Business Owner agar bisa lebih produktif" heroImg={hero3} heroName="Wahid Ari" heroJob="Designer"/>
      </Flex>
    </Flex>
  )
}

export default Testimonial