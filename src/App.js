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
    let url = "https://api.hatchways.io/assessment/sentences/1";
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
    const data = this.state.data;

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
