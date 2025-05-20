import { Flex } from "antd"
import logo from '../assets/logo.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'


const Footer = () => {
  return (
    <>
    <Flex justify="space-between" style={{padding:'3rem 8rem'}} className="cardtext border-t border-zinc-200">
        <Flex vertical gap={20}>
        <img src={logo} alt="" className="h-11 w-10"/>
            <Flex className="media"> 
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={twitter} alt="" />
            </Flex>
        </Flex>
        <Flex vertical gap={16}>
            <h1 className="footer-heading">Resource</h1>
            <p>About Us</p>
            <p>Blog</p>
            <p>Contact</p>
            <p>FAQ</p>
        </Flex>
        <Flex vertical  gap={16}>
            <h1 className="footer-heading">Legal Stuff</h1>
            <p>Disclaimer </p>
            <p>Financing</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
        </Flex>
        <Flex vertical gap={16}>
            <h1 className="footer-heading">Office</h1>
            <p>m@buildwithangga.com</p>
            <p>Jln. Wahid Hasyim No 10D</p>
            <p>Jakarta, Indonesia</p>
        </Flex>
    </Flex>
    <p className="text-center !mb-6"> Made With Love By Gear All Right Reserved </p>
    </>
  )
}

export default Footer