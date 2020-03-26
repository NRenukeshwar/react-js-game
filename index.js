import React, { Component } from "react";
import { render } from "react-dom";
import SinglePlayer from "./BoardComponent";
import "./style.css";
class App extends Component {
  render() {
    return (
      <div>
        <SinglePlayer />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
