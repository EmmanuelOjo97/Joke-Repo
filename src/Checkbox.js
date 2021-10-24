import React from "react";

export const Checkbox = ({ category, handleCheckBox }) => {
  return (
    <div>
      <input
        type="checkbox"
        value={category}
        name={category}
        onChange={() => this.handleCheckBox()}
      />
      <label> {category}</label>
    </div>
  );
};

export default Checkbox;
