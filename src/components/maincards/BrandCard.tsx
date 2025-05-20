import { Flex } from "antd";
type Cardtypes = {
  img?: string;
  subtitle?: string;
};
export const BrandCard = ({ img, subtitle }: Cardtypes) => {
  return (
    <Flex vertical align="center" className="brand text-center" gap={16}>
      <img src={img} alt="" className="w-[120px]"/>
      <p className="cardtext">{subtitle}</p>
    </Flex>
  );
};
