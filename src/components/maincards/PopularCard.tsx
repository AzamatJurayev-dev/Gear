import { Flex } from "antd"
type Cardtypes = {
    img?: string;
    title?: string;
    subtitle?: string;
}
export const PopularCard = ({img, title , subtitle}:Cardtypes ) => {
  return (
    <Flex vertical className="popular" gap={16}>
          <img src={img} alt="" />
          <h1 className="title">{title}</h1>
          <p className="cardtext">{subtitle}</p>
        </Flex>
  )
}
