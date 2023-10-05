import React, { useEffect, useState } from "react";
import "./disFoundation.css";

const DispFoundation = ({ name, link, des, imgUrl, index }) => {
  return (
    <div className="divBlock" key={index}>
      <div className="displayContent">
        <div className="innerStyle">
          <h1>{name}</h1>
          <p>{des}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="Btn">Click Here for more</button>
          </a>
        </div>
      </div>
      <div className="displayImage">
        <img src={imgUrl} alt="1" />
      </div>
    </div>
  );
};

export default DispFoundation;
