import React from 'react'
import { useState } from 'react'
import './Form.css'

const Form = () => {

  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if(alert(`Crypto coin ${name} starts creating...`)){

    }
    else{ 
        alert(`Crypto coin succesfully created.`)    
        window.location.reload();
    }
  }
    
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label>Enter your crypto coin name:
        <input type="text" value="CryptoMint" onChange={(e) => setName(e.target.value)} />
      </label>
      <label>Enter your crypto coin symbol:
        <input type="text" value="C" onChange={(e) => setSymbol(e.target.value)} />
      </label>
      <input type="submit" />
    </form>
  )
}

export default Form