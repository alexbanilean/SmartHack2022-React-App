import React from 'react'
import { useState } from 'react'

const Form = () => {

  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if(alert(`The name you entered was: ${name}`)){

    }
    else{ 
        alert()    
        window.location.reload();
    }
  }
    
  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </label>
      <input type="submit" />
    </form>
  )
}

export default Form