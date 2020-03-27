import React from "react";
import Box from "./TPBox";

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      data: Array(9).fill(null),
      xWin:0,
      oWin:0,
      gameOver:false,
      isX:true
    };
  }
  handleClick = (event, index) => {

    event.preventDefault();
    
    if (this.state.data[index] === null) {
      const data = this.state.data;
      this.state.isX? data[index] = "X" : data[index] = "O"
      this.setState({
        data: data,
        isX:!this.state.isX
      });
    }
    const winner =this.gameWinner()
    if(winner==="X"){
     this.setState({xWin:this.state.xWin+1,gameOver:true})
          setTimeout(()=>{ this.setState({data: Array(9).fill(null),gameOver:false,isX:true})},2000)
    }
    else if(winner==="O")
    {
       this.setState({oWin:this.state.oWin+1,gameOver:true})
          setTimeout(()=>{ this.setState({data: Array(9).fill(null),gameOver:false,isX:true})},2000)
    }
    else{

    }
     if(this.handleAllClicked())
    {
      this.setState({gameOver:true})
       setTimeout(()=>{ this.setState({data: Array(9).fill(null),gameOver:false,isX:true})},2000)
    }

  }
  handleRestart=()=>{
    this.setState({
       data: Array(9).fill(null),
       gameOver:false,
       xWin:0,
       oWin:0
    })
  }
  gameWinner=()=>
  {
    
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
        if (data[a] && data[a] === data[b] && data[a] === data[c]) {
         return data[a]
        }
    }
   
  }
  handleAllClicked()
  {
    const data=this.state.data
    const count=0;
    for(var i=0;i<data.length;i++)
    {
      if(data[i]!==null)
      {
        count++;
      }
    }
    if(count===9)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  render() {
    const winner=this.gameWinner()
    
    const status
     if (winner) {
            status = `The winner is: ${winner}!`
        } else if(!winner && this.handleAllClicked()) {
           status = 'Game drawn!'
        } else {
            status = `It is ${(this.state.isX ? 'X' : 'O')}'s turn.`
        }
    
    
    return (
      <div >
        {status}
        
       <p>---No of Wins---<br/>X:{this.state.xWin}-- O:{this.state.oWin}</p>
         <div>
        <div className="board-row">
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
        <div className="board-row">
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
        <div className="board-row">
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
        </div>
       
        <button onClick={this.handleRestart}>New Game</button>
      </div>
    );
  }
}
export default Board;
