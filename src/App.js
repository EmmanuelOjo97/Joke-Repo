import react from "react";
import { useState } from "react";
// import { checkboxes } from "./checkboxes";
import "./App.css";
import { Checkbox } from "./components/Checkbox";
import FetchButton from "./components/FetchButton";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import { makeStyles } from "@mui/styles";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import JokeCard from "./components/JokeCard";

const MyComp = styled(Card)({
  background: "#FFEE58",
});

const theme = createTheme({
  typography: {
    fontFamily: "Mochiy Pop One",
  },
});

const useStyles = makeStyles({
  root: {
    spacing: "0",
    direction: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#212121",
  },
});

function App() {
  const classes = useStyles();

  const [loading, setLoading] = useState(true);
  const [jokes, setJokes] = useState({});
  const [showPunchline, setShowPunchline] = useState(false);
  const [anyChecked, setAnyChecked] = useState(true);
  const [category, setCategory] = useState(
    "Programming,Miscellaneous,Pun,Spooky,Christmas"
  );

  const fetchJoke = async () => {
    try {
      setLoading(false);
      const response = await fetch(
        `https://v2.jokeapi.dev/joke/${
          category === "Any"
            ? "Programming,Miscellaneous,Pun,Spooky,Christmas"
            : category
        }?type=twopart`
      );
      const newJoke = await response.json();
      setJokes(newJoke);
      setShowPunchline(false);
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  };

  console.log(jokes);
  const setup = jokes.setup;
  const punchline = jokes.delivery;

  const showJoke = () => {
    setShowPunchline(!showPunchline);
  };
  const handleCheckBox = (e) => {
    console.log(e.target.value);
    setCategory(e.target.value);
    console.log(category);
    setAnyChecked(false);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <MyComp>
          <Grid container className={classes.root}>
            <Typography sx={{ fontSize: 50 }} className={classes.text}>
              Tell me a Joke
            </Typography>
          </Grid>

          <br />
          <Grid container className={classes.root} marginLeft="30px">
            <Checkbox handleCheckBox={handleCheckBox} />
          </Grid>

          <Grid container className={classes.root} marginTop="50px">
            <FetchButton fetchJoke={fetchJoke} />
          </Grid>
          <Grid container className={classes.root} marginTop="50px">
            <JokeCard
              setup={setup}
              loading={loading}
              showPunchline={showPunchline}
              showJoke={showJoke}
              punchline={punchline}
            />
          </Grid>
        </MyComp>
      </ThemeProvider>
    </div>
  );
}

export default App;
