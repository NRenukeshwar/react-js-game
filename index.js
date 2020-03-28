import React, { Component } from "react";
import { render } from "react-dom";
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
import SinglePlayer from "./SPBoard";
import TwoPlayer from './TPBoard';
import Header from './Header'
import Home from './Home';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    return (
    <div className="body h-100">
     
        <Header/>
        <Switch>
          <Route exact path="/"> <Home/></Route>
          <Route path="/singlePlayer"> <SinglePlayer/></Route>
          <Route path="/twoPlayers"> <TwoPlayer/></Route>
        </Switch>
      
      </div>
    );
  }
}

render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));
