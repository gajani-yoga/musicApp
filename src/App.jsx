import React, { useState } from 'react'

export default function App(){
  const [inputText, setInputText] = useState('')
  const [submitValue, setSubmitValue] = useState('')

  const handleInput = (e) => {
    setInputText(e.target.value)
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitValue(inputText)
  }


  return (
    <>
      <header align = "center">My favourute Music Albums</header>
      
    <div id="1">
        Test
    </div>
      
    </>
    
  )
  }