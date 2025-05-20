import { Button, Flex, Input } from "antd"

const Subscribe = () => {
  return (
    <Flex vertical gap={20} align="center" style={{margin:'60px 8rem', padding:'60px' ,background:'#E6EEFF'}} >
        <h1 className="heading">Subscribe</h1>
        <p className="subtext">Subscribe to get exclusive news & offer</p>
        <Flex gap={20}>
            <Input style={{padding:'0 20px'}} placeholder="Email address" />
            <Button type="primary">Subscribe</Button>
        </Flex>
    </Flex>
  )
}

export default Subscribe