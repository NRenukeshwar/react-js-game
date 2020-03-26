import React from "react";
import Box from "./Box";

class Board extends React.Component {
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

  render() {
    
    const msg=this.state.gameOver?"Game Completed ":'Lets play...'
    return (
      <div>
        {msg}
       <p>No of Wins:{this.state.won}</p>

        <div class="board-row">
          <Box
            handleClick={() => this.handleClick(event, 0)}
            value={this.state.data[0]}
            disabled={this.state.gameOver?"disabled":''}
          />
          <Box
            handleClick={() => this.handleClick(event, 1)}
            value={this.state.data[1]}
            disabled={this.state.gameOver?"disabled":''}
          />
          <Box
            handleClick={() => this.handleClick(event, 2)}
            value={this.state.data[2]}
            disabled={this.state.gameOver?"disabled":''}
          />
        </div>
        <div class="board-row">
          <Box
            handleClick={() => this.handleClick(event, 3)}
            value={this.state.data[3]}
            disabled={this.state.gameOver?"disabled":''}
          />
          <Box
            handleClick={() => this.handleClick(event, 4)}
            value={this.state.data[4]}
            disabled={this.state.gameOver?"disabled":''}
          />
          <Box
            handleClick={() => this.handleClick(event, 5)}
            value={this.state.data[5]}
            disabled={this.state.gameOver?"disabled":''}
          />
        </div>
        <div class="board-row">
          <Box
            handleClick={() => this.handleClick(event, 6)}
            value={this.state.data[6]}
            disabled={this.state.gameOver?"disabled":''}
          />
          <Box
            handleClick={() => this.handleClick(event, 7)}
            value={this.state.data[7]}
            disabled={this.state.gameOver?"disabled":''}
          />
          <Box
            handleClick={() => this.handleClick(event, 8)}
            value={this.state.data[8]}
            disabled={this.state.gameOver?"disabled":''}
          />
        </div>
        <button onClick={this.handleRestart}>New Game</button>
      </div>
    );
  }
}
export default Board;
