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
    var str = { data: { sentence: "I love learning code" } };
    var s = str.innerHTML;
    var myArr = [];
    var newArr = "";
    var word = s.replace(/[\r\n]/g, "").split("");

    // mapping through sentence to scramble
    word.map(function (v) {
      v.split("").map(function () {
        var hash = Math.floor(Math.random() * v.length);
        newArr += v[hash];
        v = v.replace(v.chartAt(hash), "");
      });
      myArr.push(newArr);
      newArr = "";
    });

    console.log(myArr);

    // Displays sentence from fetched api urlk
    console.warn("data");
    return (
      <div>
        {data ? (
          <div>
            <h1 className="title">{data.data.sentence}</h1>
          </div>
        ) : (
          <h1>Please wait...</h1>
        )}
      </div>
    );
  }
}

export default App;
