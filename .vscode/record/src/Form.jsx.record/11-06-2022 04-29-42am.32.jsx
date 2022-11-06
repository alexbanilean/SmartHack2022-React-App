import React from 'react'
import { useState } from 'react'

const Form = () => {

  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }
    
  return (
    <form onSubmit={}>
      <label>Enter your name:
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </label>
      <input type="submit" />
    </form>
  )
}

export default Form