import React, { useState } from 'react';
import Board from './Board';
import './style.css';
const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [xTurn, setXTurn] = useState(true);
  const [winner, setWinner] = useState('');

  const winnerCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
  ]

  const restartGame = () => {
    setSquares(Array(9).fill(''));
    setXTurn(true);
    setWinner(false)
  }


  const checkWinner = (cells) => {
    let turn = xTurn ? 'x' : 'o';
    let flag = winnerCombinations.some(comb => comb.every(index => cells[index] === turn))
    if (flag) {
      setWinner(true)
      return flag;
    }
    //  return  winnerCombinations.some(comb=> {
    //     let [a,b,c] = comb;
    //     if(squares[a] && squares[a] == squares[b] && squares[a]===squares[c]) return squares[a];
    //   })
  }


  const handleClick = (i) => {
    if (squares[i]) return
    let turn = xTurn ? 'x' : 'o';
    let cells = [...squares];
    cells[i] = turn;
    setSquares(cells);
    if (!checkWinner(cells)) setXTurn(!xTurn);
  }


  return (
    <>
      <Board turn={xTurn ? 'x' : 'o'} squares={squares} handleClick={handleClick} />
      <div className={`winning-box ${winner ? 'show' : ''}`}>
        <div className='winning-text'>Winner is {xTurn ? 'x' : 'o'}</div>
        <button className='restart' onClick={restartGame}>Restart</button>
      </div>
    </>
  )
}

export default Game