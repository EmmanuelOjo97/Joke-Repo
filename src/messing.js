import React from "react";
import { useState, useEffect } from "react";
import Checkbox from "./Checkbox";
import { checkboxes } from "./checkboxes";
import "./App.css";

export default function Messing() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBox = (e) => {
    // setIsChecked(!isChecked);
    // console.log(isChecked);

    console.log(e.target.value);
    // setCategory(e.target.value);
    // console.log(category);
    // setAnyChecked(false);
    if (isChecked === true) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  };

  return (
    <div>
      {/* {checkboxes.map((category, index) => {
        return (
          <Checkbox
            key={index}
            category={category.category}
            handleCheckBox={handleCheckBox}
          />
        );
      })} */}
      <Checkbox handleCheckBox={handleCheckBox} checkboxes={checkboxes} />
    </div>
  );
}
