import { useState } from 'react';
import { Header } from './components/Header';
import { TurnsBoard } from './components/TurnsBoard';
import { Square } from './components/Square';
import { ScoreBoard } from './components/ScoreBoard';

function App() {
  const TURNS = {
    X: '✕',
    O: '○'
  };

  // index of the squares
  const WINNER_OPTIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);
  const [mssg, setMssg] = useState('The turn is for');
  const [countTurns, setCountTurns] = useState(0);
  const [score_x, setScore_x] = useState(0);
  const [score_o, setScore_o] = useState(0);

  const restart = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    setMssg('The turn is for');
    setCountTurns(0);
  };

  const resetBoard = () => {
    setScore_x(0);
    setScore_o(0);
  };

  const checkWinner = (boardToCheck) => {
    for (const threeinline of WINNER_OPTIONS) {
      const [a, b, c] = threeinline;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    return null;
  };

  const updateBoard = (index) => {
    // Squares cannot be marked if they have already been marked or if there is a winner
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newWinner = checkWinner(newBoard);

    if (newWinner !== null) {
      setWinner(newWinner);
      setMssg('The winner is');

      if (turn === TURNS.X) {
        const newScore_x = score_x + 1;
        setScore_x(newScore_x);
      } else {
        const newScore_o = score_o + 1;
        setScore_o(newScore_o);
      }
    } else {
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
      setTurn(newTurn);
      setCountTurns(countTurns + 1);

      if (countTurns === 8) {
        setMssg("It's a draw");
      }
    }
  };

  return (
    <>
      <Header />
      <main className="h-full w-full pt-20 pb-14 grid lg:grid-flow-col lg:max-w-7xl lg:min-h-screen lg:m-auto lg:pt-40 lg:pb-40 lg:content-center">
        <TurnsBoard turn={turn} TURNS={TURNS} restart={restart} mssg={mssg} />
        <section className="max-w-xl h-fit m-auto grid grid-cols-3 gap-4 lg:gap-10">
          {board.map((_, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
              </Square>
            );
          })}
        </section>
        <ScoreBoard TURNS={TURNS} score_x={score_x} score_o={score_o} resetBoard={resetBoard} />
      </main>
    </>
  );
}

export default App;
