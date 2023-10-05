import React from "react";
import "./fail.css";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Failed = (props) => {
  const navigate = useNavigate();
  props.funcNav(false);

  return (
    <div className="failed">
      <div className="contentfail">
        <div className="failIcon">
          <AiOutlineClose className="icon" size="20px" color="white" />
        </div>
        <span>Something Went wrong</span>
      </div>
      <button className="btn" onClick={() => navigate("/donate")}>
        Try Again
      </button>
    </div>
  );
};

export default Failed;
