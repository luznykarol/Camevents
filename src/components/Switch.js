import React from "react";

const Switch = ({ handleChange, isChecked }) => {
  return (
    <div className="inline-flex justify-between items-center">
      <label
        className={`font-semibold text-sm mr-4 ${
          isChecked ? "text-grey-500" : "text-cam-white"
        }`}>
        Monthly
      </label>
      <div className="switch">
        <input onChange={handleChange} type="checkbox" id="switch" />
        <label htmlFor="switch" />
      </div>
      <label
        className={`font-semibold text-sm ml-4 ${
          isChecked ? "text-cam-white" : "text-grey-500"
        }`}>
        Yearly
      </label>
    </div>
  );
};

export default Switch;
