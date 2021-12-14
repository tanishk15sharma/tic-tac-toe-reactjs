import "./App.css";
import Square from "./SquareComponent";

function App() {
  return (
    <div className="app-header">
      <h1>Tic Tac Toe </h1>

      <div className="row jc-center">
        <Square className="b-bottom-right" />
        <Square className="b-bottom-right " />
        <Square className="b-bottom" />
      </div>
      <div className="row jc-center">
        <Square className="b-bottom-right" />
        <Square className="b-bottom-right " />
        <Square className="b-bottom" />
      </div>
      <div className="row jc-center">
        <Square className="b-right" />
        <Square className="b-right" />
        <Square />
      </div>
      <button>RESTART</button>
      <p>Tanishk Sharma © reactJS </p>
    </div>
  );
}

export default App;
