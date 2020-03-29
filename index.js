import React from "react";
import { render } from "react-dom";
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
import SinglePlayer from "./components/SPBoard";
import TwoPlayer from './components/TPBoard';
import Header from './components/Header'
import Home from './components/Home';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function App()
{
    return (
    <div className="body h-100">
     
        <Header/>
        <Switch>
          <Route exact path="/"> <Home/></Route>
          <Route path="/singlePlayer"> <SinglePlayer/></Route>
          <Route path="/twoPlayers"> <TwoPlayer/></Route>
        </Switch>
      
      </div>
    )
}

render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));
