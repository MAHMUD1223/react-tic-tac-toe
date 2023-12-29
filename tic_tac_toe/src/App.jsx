import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className='square' onClick={onSquareClick}>
      {value}
    </button>
  );
}
export default function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const onSquareClickHandler = (i) => {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };
  return (
    <>
      <div className='board-row'>
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
      <div className='board-row'>
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
      <div className='board-row'>
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

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
