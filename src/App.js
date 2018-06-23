import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';



class App extends Component {

  render() {
    return (
      <div>
      <h1 align="center"><strong>Welcome to TicTacToe</strong></h1>
      <br></br><br></br><br></br>

      <h2 align="center">This is a two players game</h2>
      <br></br><br></br><br></br>
      <Link to= "game"><p class="wrap"><button class="button">PROCEED</button></p></Link>
      {this.props.children}
      </div>
    );
  }
}


export default App;
