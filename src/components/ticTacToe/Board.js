import React from 'react'
import Square from './Square';

const Board = ({ squares, handleClick, turn }) => {
    return (
        <div className={`board ${turn}`}>
            {squares.map((square, index)=> <Square index={index} value={square} onClick={handleClick}/>)}
        </div>
    )
}

export default Board;