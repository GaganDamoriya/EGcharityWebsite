import React, { useState } from "react";
import "./donate.css";
import { donationField } from "../utils/donationfields";
import Input from "../components/input/Input";
import DonationAmount from "../components/donation_amount/DonationAmount";

const Donate = (props) => {
  const [selectedNames, setSelectedNames] = useState([]);

  // Callback function to handle checkbox changes
  const handleCheckboxChange = (name, isChecked) => {
    if (isChecked) {
      // If the checkbox is checked, add the name to the selectedNames array
      setSelectedNames([...selectedNames, name]);
    } else {
      // If the checkbox is unchecked, remove the name from the selectedNames array
      setSelectedNames(selectedNames.filter((n) => n !== name));
    }
  };

  console.log(selectedNames);

  props.funcNav(false);
  return (
    <div className="donationbox">
      <div className="list">
        <span className="heading">
          ❝ Your generous donation greatly supports our cause. ❞
        </span>
        <div className="list_elment">
          {donationField.map((field, index) => {
            return (
              <Input
                field={field.name}
                index={index}
                onCheckboxChange={(isChecked) =>
                  handleCheckboxChange(field.name, isChecked)
                }
              />
            );
          })}
        </div>
      </div>
      <div className="pay_amount">
        <div style={{ marginBottom: 5 }}>
          <span className="heading">Donate in ❝</span>
          <span>
            {selectedNames.map((name, index) => (
              <span key={index}>{name},</span>
            ))}
          </span>
          <span>❞</span>
        </div>
        <div>
          <DonationAmount />
        </div>
      </div>
    </div>
  );
};

export default Donate;
