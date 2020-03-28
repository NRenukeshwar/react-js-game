import React from "react";
import Box from "./Box";
import "./style.css";
class SPBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      data: Array(9).fill(null),
      won:0,
      gameOver:false
    };
  }
  handleClick = (event, index) => {

    event.preventDefault();

    if (this.state.data[index] === null) {
      const data = this.state.data;
      data[index] = "X";
      this.setState({
        data: data
      });
    }
    this.gameOver(event)
    
  }
  handleRestart=()=>{
    this.setState({
      data: Array(9).fill(null),
      gameOver:false,
      won:0
    })
  }
  gameOver=(event)=>
  {
    event.preventDefault()
    const rows = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    const data=this.state.data
    
    for (let i = 0; i < rows.length; i++) {
      const [a, b, c] = rows[i]
      if (data[a] === "X" && data[b] === "X" && data[c] === "X") {
        this.setState({won:this.state.won+1,gameOver:true})
        setTimeout(()=>{ this.setState({data: Array(9).fill(null),gameOver:false})},1000)
      }
    }
   
  }
  
  renderBox=(index)=>{
    return(
    <Box
        handleClick={() => this.handleClick(event, index)}
        value={this.state.data[index]}
        disabled={this.state.gameOver?"disabled":''}
    />
    )
  }

  render() {
    
    const msg=this.state.gameOver?'You won ':'Lets play...'
    return (
      <div className="container">
        <div className="row justify-content-center text-primary" style={{padding:"10px"}}>
          <h4>{msg}</h4>
        </div>
        <div style={{padding:"10px"}}>
          <div className="row justify-content-center">
            {this.renderBox(0)}
            {this.renderBox(1)}
            {this.renderBox(2)}
          </div>
          <div className="row justify-content-center">
            {this.renderBox(3)}
            {this.renderBox(4)}
            {this.renderBox(5)}
          </div>
          <div className="row justify-content-center">
            {this.renderBox(6)}
            {this.renderBox(7)}
            {this.renderBox(8)}
          </div>
        </div>
        <div className="row justify-content-center text-success" style={{padding:"10px"}}>
          <h4>Number of Wins: {this.state.won}</h4>
        </div>
      
        <div className="row justify-content-center">
          <button className="btn btn-warning text-white font-weight-bold" onClick={this.handleRestart}>Start New Game</button>
        </div>
      </div>
    );
  }
}
export default SPBoard;
