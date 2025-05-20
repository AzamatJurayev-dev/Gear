import { Flex } from "antd"
type Cardtypes = {
    img?: string;
    title?: string;
    subtitle?: string;
}
export const ComerCard = ({img, title , subtitle}:Cardtypes ) => {
  return (
    <Flex vertical className="comer" gap={16}>
          <img src={img} alt="" />
          <h1 className="title">{title}</h1>
          <p className="cardtext">{subtitle}</p>
        </Flex>
  )
}
