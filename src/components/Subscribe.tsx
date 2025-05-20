import { Button, Flex, Input } from "antd"

const Subscribe = () => {
  return (
    <Flex vertical gap={20} align="center" style={{margin:'60px 0', padding:'60px' ,background:'#E6EEFF'}} >
        <h1 className="font-semibold text-[36px] leading-[32px] tracking-[0.2px] align-middle text-[#1F2E35] font-poppins">Subscribe</h1>
        <p className="subtext">Subscribe to get exclusive news & offer</p>
        <Flex gap={20}>
            <Input style={{padding:'0 20px'}} placeholder="Email address" />
            <Button type="primary">Subscribe</Button>
        </Flex>
    </Flex>
  )
}

export default Subscribe