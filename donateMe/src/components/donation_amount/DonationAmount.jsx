import React, { useState } from "react";
import "./donationAmnt.css";
import { useNavigate } from "react-router-dom";
const DonationAmount = () => {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(true);

  const [formData, setformData] = useState({
    amount: 1,
    name: "",
    phone: "",
    address: "",
    email: "",
  });
  const handleclick = () => {
    navigate("/paymentportal", { state: { formData } });
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "radio" && name === "isAnonymous") {
      setIsAnonymous(value === "true");
      setShowDetails(value === "false");
    } else {
      setformData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <div className="donationContent">
      <div>
        <input
          className="inputAmount"
          type="number"
          name="amount"
          placeholder="Donation Amount"
          value={formData.amount}
          onChange={handleChange}
        />
      </div>
      <div className="slider-parent">
        <input
          className="radio-input"
          type="range"
          name="amount"
          min="1"
          max="100"
          value={formData.amount}
          onChange={handleChange}
        />
        <div className="buble">{formData.amount}</div>
      </div>
      <div className="radio-container">
        <input
          className="radio-input"
          type="radio"
          name="isAnonymous"
          value="true"
          checked={isAnonymous}
          onChange={handleChange}
        />
        Anonymous
        <input
          type="radio"
          name="isAnonymous"
          value="false"
          checked={!isAnonymous}
          onChange={handleChange}
        />
        Not Anonymous
      </div>
      {showDetails && (
        <div className="display_items">
          <input
            className="inputAmount"
            name="name"
            type="text"
            value={formData.name}
            placeholder="Name"
            onChange={handleChange}
          />
          <input
            className="inputAmount"
            name="phone"
            type="tel"
            value={formData.phone}
            placeholder="phone"
            onChange={handleChange}
          />
          <input
            className="inputAmount"
            name="email"
            type="email"
            value={formData.email}
            placeholder="email"
            onChange={handleChange}
          />
          <textarea
            className="inputAmount"
            name="address"
            placeholder="Address"
            value={formData.address}
            cols="30"
            rows="10"
            onChange={handleChange}
          >
            Address
          </textarea>
        </div>
      )}
      <div>
        <button className="payBtn" onClick={handleclick}>
          PAY
        </button>
      </div>
    </div>
  );
};

export default DonationAmount;
