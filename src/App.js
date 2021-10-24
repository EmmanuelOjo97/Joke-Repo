import react from "react";
import { useState, useEffect } from "react";
import { checkboxes } from "./checkboxes";
// import Checkbox from "./Checkbox";

function App() {
  const [loading, setLoading] = useState(true);
  const [jokes, setJokes] = useState({});
  const [showPunchline, setShowPunchline] = useState(false);
  const [anyChecked, setAnyChecked] = useState(true);
  const [category, setCategory] = useState(
    "Programming,Miscellaneous,Pun,Spooky,Christmas"
  );
  // const [isChecked, setIsChecked] = useState(false);
  // const [checkedState, setCheckedState] = useState(
  //   new Array(checkboxes.length).fill(false)
  // );

  const whydawg = "Pun";
  const fetchJoke = async () => {
    try {
      setLoading(false);
      const response = await fetch(
        `https://v2.jokeapi.dev/joke/${
          anyChecked === true
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
  // "Programming,Miscellaneous,Pun,Spooky,Christmas"

  // if (loading) {
  //   return <h1>loading jokes</h1>;
  // }
  console.log(jokes);
  const setup = jokes.setup;
  const punchline = jokes.delivery;

  const showJoke = () => {
    setShowPunchline(!showPunchline);
  };
  const handleCheckBox = (e) => {
    // setIsChecked(!isChecked);
    // console.log(isChecked);

    console.log(e.target.value);
    setCategory(e.target.value);
    console.log(category);
    setAnyChecked(false);
  };

  const handleAnyCategory = (e) => {
    if (anyChecked === true) {
      setAnyChecked(false);
    }
    setAnyChecked(true);
  };

  return (
    <div>
      <h1>Tell me a Joke</h1>
      <input
        type="checkbox"
        value="Any"
        id="anyJoke"
        onChange={(e) => handleAnyCategory(e)}
      />
      <label htmlFor="anyJoke">Any</label>
      {checkboxes.map((checker, index) => {
        return (
          <div key={index}>
            <input
              type="checkbox"
              value={checker.category}
              name="pooper"
              onChange={(e) => handleCheckBox(e)}
            />
            <label htmlFor="">{checker.category}</label>
          </div>
        );
      })}
      <button
        onClick={() => {
          fetchJoke();
        }}
      >
        Tell me a joke
      </button>
      <p>{setup}</p>
      {/* <p>{punchline}</p> */}
      {!loading ? (
        <button onClick={() => showJoke()}>
          {!showPunchline ? "Show me the joke" : "hide joke"}
        </button>
      ) : null}

      {showPunchline ? <p>{punchline}</p> : null}
    </div>
  );
}

export default App;
