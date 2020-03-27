import React, { Component } from "react";
import { render } from "react-dom";
import SinglePlayer from "./SPBoard";
import TwoPlayer from './TPBoard'
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    return (
      <div>
        <SinglePlayer />
        <TwoPlayer />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
