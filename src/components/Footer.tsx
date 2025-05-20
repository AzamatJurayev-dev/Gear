import { Row, Col } from "antd";
import logo from "../assets/logo.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";

const Footer = () => {
  return (
    <>
      <div className="border-t border-zinc-200 py-12 px-6 md:px-32 text-[#1F2E35] font-poppins">
        <Row gutter={[32, 32]}>
          {/* Logo + Social Media */}
          <Col xs={24} sm={12} md={6}>
            <div className="flex flex-col gap-5">
              <img src={logo} alt="logo" className="h-11 w-10" />
              <div className="flex gap-4">
                <img src={facebook} alt="facebook" className="h-6 w-6" />
                <img src={instagram} alt="instagram" className="h-6 w-6" />
                <img src={twitter} alt="twitter" className="h-6 w-6" />
              </div>
            </div>
          </Col>

          {/* Resource */}
          <Col xs={24} sm={12} md={6}>
            <div className="flex flex-col gap-4 ont-poppins font-normal text-[16px] leading-[150%] tracking-[0] text-[#475E69]">
              <h1 className="text-lg font-semibold">Resource</h1>
              <p>About Us</p>
              <p>Blog</p>
              <p>Contact</p>
              <p>FAQ</p>
            </div>
          </Col>

          {/* Legal Stuff */}
          <Col xs={24} sm={12} md={6}>
            <div className="flex flex-col gap-4 ont-poppins font-normal text-[16px] leading-[150%] tracking-[0] text-[#475E69]">
              <h1 className="text-lg font-semibold">Legal Stuff</h1>
              <p>Disclaimer</p>
              <p>Financing</p>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
          </Col>

          {/* Office */}
          <Col xs={24} sm={12} md={6}>
            <div className="flex flex-col gap-4 ont-poppins font-normal text-[16px] leading-[150%] tracking-[0] text-[#475E69]">
              <h1 className="text-lg font-semibold">Office</h1>
              <p>m@buildwithangga.com</p>
              <p>Jln. Wahid Hasyim No 10D</p>
              <p>Jakarta, Indonesia</p>
            </div>
          </Col>
        </Row>
      </div>

      <p className="text-center text-sm mb-6 text-[#1F2E35]">
        Made With Love By Gear – All Rights Reserved
      </p>
    </>
  );
};

export default Footer;
