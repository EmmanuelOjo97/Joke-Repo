import React from "react";
// import { checkboxes } from "./checkboxes";

export const Checkbox = ({ checkboxes, handleCheckBox }) => {
  return (
    <div>
      {/* <input
        type="radio"
        value={category}
        name={category}
        onChange={(e) => handleCheckBox(e)}
      />
      <label>{category}</label>
      <h1>hi</h1> */}

      {checkboxes.map((poop, index) => {
        const { category } = poop;
        return (
          <div>
            <input
              type="radio"
              value={category}
              name={category}
              onChange={(e) => handleCheckBox(e)}
            />
            <label>{category}</label>
          </div>
        );
      })}
      <h1>hi</h1>
    </div>
  );
};

export default Checkbox;
