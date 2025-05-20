import { Flex, Rate } from "antd"

type Cardtypes = {
    subtitle?: string;
    heroImg?: string;
    heroName?: string;
    heroJob?: string;
}

const TestCard = ({subtitle,heroImg,heroName,heroJob}:Cardtypes ) => {
  return (
    <Flex vertical className="test" gap={20}>
        <Rate allowHalf defaultValue={4}/>
        <p>{subtitle}</p>
        <Flex gap={20} align="center">
            <img src={heroImg} alt="" />
            <Flex vertical >
                <h2>{heroName}</h2>
                <p>{heroJob}</p>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default TestCard