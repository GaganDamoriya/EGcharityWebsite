import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbarHeader">
      <div className="navbar">
        <div className="logo" onClick={() => navigate("/")}>
          <span> Lets</span>
          <span>HELP</span>
          <span className="dot">.</span>
        </div>
        <div className="btn_div">
          <button
            className="donatebtn"
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </button>
          <button className="donatebtn" onClick={() => navigate("/donate")}>
            Donate
          </button>
        </div>
      </div>
      <div className="slidingtxt">
        <div className="content">
          <span style={{ gap: 50 }}>
            <span style={{ color: "yellow" }}>contact us:</span>
            <span style={{ fontSize: 15, color: "orange" }}>9999911111</span>
          </span>
          <span style={{ gap: 50 }}>
            <span style={{ color: "yellow" }}>contact us: </span>
            <span style={{ fontSize: 15, color: "orange" }}>
              letshelp@mail.com
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
