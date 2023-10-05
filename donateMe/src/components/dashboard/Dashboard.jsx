import React, { useState } from "react";
import "./dash.css";
import { donationField } from "../../utils/donationfields";
import DispFoundation from "../dispFoundation/DispFoundation";
import letshelplogo from "../../assets/letshelplogo.png";

const Dashboard = () => {
  const [showMore, setShowMore] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const data = {
    d1: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of type
    and scrambled it to make a type specimen book. It has survived not
    only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s
    with the release of Letraset sheets containing Lorem Ipsum passages,
    and more recently with desktop publishing software like Aldus
    PageMaker including versions of Lorem Ipsum.`,
    d2: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of type
    and scrambled it to make a type specimen book. It has survived not
    only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s
    with the release of Letraset sheets containing Lorem Ipsum passages,
    and more recently with desktop publishing software like Aldus
    PageMaker including versions of Lorem Ipsum.`,
  };
  return (
    <div className="dashboard">
      <div className="heroBanner">
        <div className="heroBannerCon">
          <span className="lgo1">#Letshelp</span>
          <span className="lgo2">Empower Change Together</span>
          <span className="lgo3">Join us in making a difference.</span>
        </div>
        <div className="heroImg">
          <img src={letshelplogo} alt="letshelp" />
        </div>
      </div>
      <div className="dashBox">
        <div>
          <h2>Donate Through us</h2>

          <p>
            {showMore ? data.d1 : `${data.d1.substring(0, 250)}...`}
            <button
              className="moreinfoBtn"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show less" : "Show more"}
            </button>
          </p>

          <button className="donBtn">Donate</button>
        </div>
        <div>
          <h2>Donate directly</h2>
          <p>
            {showMore2 ? data.d1 : `${data.d1.substring(0, 250)}...`}
            <button
              className="moreinfoBtn"
              onClick={() => setShowMore2(!showMore2)}
            >
              {showMore2 ? "Show less" : "Show more"}
            </button>
          </p>
          <button className="donBtn">Donate</button>
        </div>
      </div>
      {donationField.map((foundation, index) => {
        return (
          <DispFoundation
            key={index}
            name={foundation.name}
            link={foundation.link}
            des={foundation.des}
            imgUrl={foundation.imgUrl}
          />
        );
      })}
    </div>
  );
};

export default Dashboard;
