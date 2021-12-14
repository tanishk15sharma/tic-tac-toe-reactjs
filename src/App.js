import React, { useState } from "react";
import "./App.css";
import Square from "./SquareComponent";

const initialState = ["", "", "", "", "", "", "", "", ""];

function App() {
  const [gameState, setGameState] = useState(initialState);

  const onSquareClick = (index) => {
    console.log(index);
  };

  return (
    <div className="app-header">
      <h1>Tic Tac Toe </h1>

      <div className="row jc-center">
        <Square
          className="b-bottom-right"
          value={gameState[0]}
          onClick={() => {
            onSquareClick(0);
          }}
        />
        <Square
          className="b-bottom-right "
          value={gameState[1]}
          onClick={() => {
            onSquareClick(1);
          }}
        />
        <Square
          className="b-bottom"
          value={gameState[2]}
          onClick={() => {
            onSquareClick(2);
          }}
        />
      </div>
      <div className="row jc-center">
        <Square
          className="b-bottom-right"
          value={gameState[3]}
          onClick={() => {
            onSquareClick(3);
          }}
        />
        <Square
          className="b-bottom-right "
          value={gameState[4]}
          onClick={() => {
            onSquareClick(4);
          }}
        />
        <Square
          className="b-bottom"
          value={gameState[5]}
          onClick={() => {
            onSquareClick(5);
          }}
        />
      </div>
      <div className="row jc-center">
        <Square
          className="b-right"
          value={gameState[6]}
          onClick={() => {
            onSquareClick(6);
          }}
        />
        <Square
          className="b-right"
          value={gameState[7]}
          onClick={() => {
            onSquareClick(7);
          }}
        />
        <Square
          value={gameState[8]}
          onClick={() => {
            onSquareClick(8);
          }}
        />
      </div>
      <button>RESTART</button>
      <p>Tanishk Sharma © reactJS </p>
    </div>
  );
}

export default App;
