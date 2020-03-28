import React from "react";
import Box from "./Box";
import "./style.css";
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

  handleAllClicked=()=>
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
  renderBox=(index)=>{
    return(
    <Box className="btn"
        handleClick={() => this.handleClick(event, index)}
        value={this.state.data[index]}
        disabled={this.state.gameOver?"disabled":''}
    />
    )
  }
  render() 
  {
    const winner=this.gameWinner()
    const status
    if (winner) {
      status = `The winner is ${winner}!`
    } 
    else if(!winner && this.handleAllClicked()) {
      status = 'Game drawn!'
    }
    else {
      status = `Now ${(this.state.isX ? 'X' : 'O')}'s turn.`
    }

    const lead
    if(this.state.xWin !==0 || this.state.oWin !==0)
    {
      if(this.state.xWin>this.state.oWin)
      {
        lead='X in Lead...'
      }
      else if(this.state.xWin<this.state.oWin)
      {
        lead="O in Lead..."
      }
      else if(this.state.xWin===this.state.oWin)
      {
        lead="Game Draw..Lets play one more"
      }
    }
    
    return (
      <div className="container">
        
        <div className="row justify-content-center">
          <h1>---<span className="text-danger">X</span>&nbsp;vs&nbsp;<span className="text-success">O</span>---</h1>
        </div>
        <br/>
        <div className="row justify-content-center text-danger"><h3>{status}</h3></div>
       
        <div className="row" style={{padding:"10px", display: "flex",alignItems: "center"}} >
        
          <table border="1" className="scoreBoard offset-1 col-10 offset-sm-2 col-sm-3">
              <tr>
                <th colSpan="2" className="text-info">
                  ScoreBoard
                </th>
              </tr>
              <tr>
                <td style={{width:"50%"}}><b>X</b></td>
                <td><b>O</b></td>
              </tr>
              <tr className="font-weight-bold">
                <td>
                  {this.state.xWin==0?"--":this.state.xWin}
                </td>
                <td>
                  {this.state.oWin==0?"--":this.state.oWin}
                </td>
              </tr>
            
          </table>
      
          <div className="col-10 offset-1 offset-sm-0 col-sm-6" style={{padding:"15px"}}>
            <div className="row justify-content-center">
              {this.renderBox(0)}
              {this.renderBox(1)}
              {this.renderBox(2)}
            </div>
            <div className="row justify-content-center" >
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
        </div>
        <div className="row justify-content-center">
          <p style={{fontSize:"25px"}} className="text-success">
            <i>{lead}</i>
          </p>
        </div>
        
        <div className="row justify-content-center">
          <button className="btn btn-warning text-white font-weight-bold" onClick={this.handleRestart}>Start New Game</button>
        </div>
      </div>
    );
  }
}
export default Board;
