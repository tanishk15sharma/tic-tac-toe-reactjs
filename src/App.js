import React, { useState, useEffect } from "react";
import "./App.css";
import Square from "./SquareComponent";

const initialState = ["", "", "", "", "", "", "", "", ""];

function App() {
  const [gameState, setGameState] = useState(initialState);
  const [isxChance, setIsxChance] = useState(false);

  const onSquareClick = (index) => {
    let stringOfArr = Array.from(gameState);
    stringOfArr[index] = isxChance ? "0" : "X";
    setGameState(stringOfArr);
    setIsxChance(!isxChance);
    // console.log(stringOfArr[index]);
    // console.log(index);
  };

  useEffect(() => {
    let winner = checkWinner();
    if (winner) {
      alert(`Boooom ! ${winner} has won the GAME. Play Again !`);
    }
    // console.log(winner);
  }, [gameState]);

  const checkWinner = () => {
    const options = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    console.log(
      "Class: App, Function: checkWinner ==",
      gameState[0],
      gameState[1],
      gameState[2]
    );

    for (let i = 0; i < options.length; i++) {
      const [a, b, c] = options[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  };

  return (
    <div className="app-header">
      <h1 className="gameName">Tic Tac Toe </h1>

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
      <button onClick={() => setGameState(initialState)} className="re-btn">
        RESTART
      </button>
      <p className="footer">Tanishk Sharma © reactJS </p>
    </div>
  );
}

export default App;
