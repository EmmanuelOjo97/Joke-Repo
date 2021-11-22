import React from "react";
import { checkboxes } from "../data/checkboxes";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import { Grid } from "@mui/material";

export const Checkbox = ({ handleCheckBox }) => {
  return (
    <div>
      <RadioGroup onChange={(e) => handleCheckBox(e)}>
        <Grid container>
          {checkboxes.map((radio) => {
            return (
              <Grid item xs={4}>
                <FormControlLabel
                  value={radio.category}
                  control={<Radio />}
                  label={radio.category}
                />
              </Grid>
            );
          })}
        </Grid>
      </RadioGroup>
    </div>
  );
};

export default Checkbox;
