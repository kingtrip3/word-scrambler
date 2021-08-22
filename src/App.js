import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: false,
    };
  }

  componentDidMount() {
    const url = new URL("https://api.hatchways.io/assessment/sentences/1");

    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((result) => {
      result.json().then((resp) => {
        this.setState({ data: resp });
      });
    });
  }

  render() {
    // setting data into an array
    const data = this.state.data;
    var array = { data: { sentence: "I love learning code" } };
    console.log(array);

    // shuffle function
    function randomArrayShuffle(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }
    var alphabet = ["a", "b", "c", "d", "e"];
    randomArrayShuffle(alphabet);

    // Displays sentence from fetched api urlk
    console.warn("data");
    return (
      <div>
        {/* {data ? (
          <div>
            <h1 className="title">{data.data.sentence}</h1>
          </div>
        ) : (
          <h1>Please wait...</h1>
        )} */}
      </div>
    );
  }
}

export default App;
