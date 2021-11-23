import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { Grid } from "@mui/material";

const MyJokeCard = styled(Card)({
  background: "#FFEE58",
  width: "65%",
});

function JokeCard({ setup, loading, punchline, showJoke, showPunchline }) {
  return (
    <MyJokeCard className="joke">
      <Typography className="joke-content">{setup}</Typography>
      {!loading ? (
        <Button
          onClick={() => showJoke()}
          className="fetch-btn"
          variant="outlined"
          color="secondary"
        >
          {!showPunchline ? (
            <Typography>Show me the joke</Typography>
          ) : (
            <Typography>Hide joke</Typography>
          )}
        </Button>
      ) : null}

      <Grid container marginTop="50px" justifyContent="center" xs={12}>
        {showPunchline ? <Typography>{punchline}</Typography> : null}
      </Grid>
    </MyJokeCard>
  );
}

export default JokeCard;
