import { Flex } from "antd"
import { BrandCard } from "./maincards/BrandCard"

import google from "../assets/google.png"
import netflix from "../assets/netflix.png"
import airbnb from "../assets/airbnb.png"

const Brands = () => {
  return (
    <Flex vertical style={{padding:'0 8rem', margin:'100px 0px'}} className="text-center">
        <h1 className="txt mb-20">Most Brands</h1>
      <Flex gap={32} style={{marginTop:'60px'}} className="text-start">
        <BrandCard img={google} subtitle="Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, "/>
        <BrandCard img={netflix} subtitle="Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, "/>
        <BrandCard img={airbnb} subtitle="Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, "/>
      </Flex>
    </Flex>
  )
}

export default Brands