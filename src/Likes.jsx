import React, { useState } from 'react'

export default function App(){
  const [ counter, setCounter ] = useState(0)

  const handleIncrease = () => {
    setCounter(previousState => previousState + 1)
  }

  const handleDecrease = () => {
    setCounter(previousState => previousState - 1)
  }

  const handleInput = () => {
    alert('Thank you for visiting my page')
  }

  return (
    <>
      <h1 align="center">Number of likes: {counter}</h1>
      <button
        onClick={handleIncrease}
      >Like 1
      </button>
      <button
        onClick={handleDecrease}
      >Unlike 1</button>
      <button
        onClick={handleIncrease}
      >Like 2
      </button>
      <button
        onClick={handleDecrease}
      >Unlike 2</button>
      <button
        onClick={handleInput}
      >Finished?</button>
    </>
    
  )
  }