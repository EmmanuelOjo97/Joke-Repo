import React from "react";
import { Button } from "@mui/material";

function FetchButton({ fetchJoke }) {
  return (
    <div>
      <Button
        onClick={() => {
          fetchJoke();
        }}
        className="fetch-btn"
        variant="outlined"
        color="secondary"
      >
        Tell me a joke
      </Button>
    </div>
  );
}

export default FetchButton;
