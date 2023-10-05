import React from "react";
import { MdOutlineDone } from "react-icons/md";
import "./succes.css";

const Sucess = (props) => {
  props.funcNav(false);

  return (
    <div className="successDiv">
      <div className="successContent">
        <div className="successIcon">
          <MdOutlineDone className="icon" size="20px" color="white" />
        </div>
        <span>Payment Successful</span>
      </div>
    </div>
  );
};

export default Sucess;
