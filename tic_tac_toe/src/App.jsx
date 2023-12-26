import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const onSquareClickHandler = (i) => {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  };
  return (
    <>
      <div className="board-row">
        <Square
          value={squares[0]}
          onSquareClick={() => onSquareClickHandler(0)}
        />
        <Square
          value={squares[1]}
          onSquareClick={() => onSquareClickHandler(1)}
        />
        <Square
          value={squares[2]}
          onSquareClick={() => onSquareClickHandler(2)}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          onSquareClick={() => onSquareClickHandler(3)}
        />
        <Square
          value={squares[4]}
          onSquareClick={() => onSquareClickHandler(4)}
        />
        <Square
          value={squares[5]}
          onSquareClick={() => onSquareClickHandler(5)}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          onSquareClick={() => onSquareClickHandler(6)}
        />
        <Square
          value={squares[7]}
          onSquareClick={() => onSquareClickHandler(7)}
        />
        <Square
          value={squares[8]}
          onSquareClick={() => onSquareClickHandler(8)}
        />
      </div>
    </>
  );
}
