import React from 'react'

const Square = ({ value, onClick, index }) => {
  return (
    <div className='sqaure' onClick={() => onClick(index)}>{value}</div>
  )
}

export default Square