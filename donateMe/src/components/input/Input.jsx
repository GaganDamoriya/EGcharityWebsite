import React, { useState } from "react";
import "./input.css";

const Input = ({ field, index, onCheckboxChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  // Callback function to handle checkbox changes
  const handleCheckboxClick = () => {
    setIsChecked(!isChecked); // Toggle checkbox state
    if (onCheckboxChange) {
      onCheckboxChange(!isChecked); // Pass the new checkbox state to the parent component
    }
  };

  return (
    <div className="field_items">
      <label htmlFor={index} className="fields">
        <input
          type="checkbox"
          id={index}
          checked={isChecked}
          onChange={handleCheckboxClick}
          style={{ width: 30, height: 30 }}
        />
        {field}
      </label>
    </div>
  );
};

export default Input;
