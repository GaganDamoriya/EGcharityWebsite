import React from "react";
import "./footer.css";
import { BiLogoGmail } from "react-icons/bi";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="divFooter">Follow us on</div>
      <div className="clkLinks">
        <AiFillLinkedin className="icons" />
        <BiLogoGmail className="icons" />
        <AiOutlineTwitter className="icons" />
        <AiFillFacebook className="icons" />
      </div>
      <div className="copyright">© All copyright since 2023 </div>
    </div>
  );
};

export default Footer;
