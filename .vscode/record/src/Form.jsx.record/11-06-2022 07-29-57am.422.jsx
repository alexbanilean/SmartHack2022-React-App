import React from 'react'
import { useState } from 'react'


const Form = (props) => {

  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [supply, setSupply] = useState("");
  const [decimals, setDecimals] = useState("");
  const [tokenAddress, setTokenAddress] = useState("");

  const handleSubmit = (event) => {
        event.preventDefault();

        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(event)
      };
      fetch('http://localhost:8080/create_token/' + props.account, requestOptions)
          .then(response => response.json())
          .then(data => this.setState({ tokenAddress: data }));

    if(alert(`Crypto coin ${name} starts creating...`)){

    }
    else{ 
        alert(`Crypto coin succesfully created.`)    
        window.location.reload();
    }
  }
    
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label>Enter token name:
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </label>
      <label>Enter token symbol:
        <input type="text" onChange={(e) => setSymbol(e.target.value)} />
      </label>
      <label>Enter token supply:
        <input type="text" onChange={(e) => setSupply(e.target.value)} />
      </label>
      <label>Enter token decimals:
        <input type="text" onChange={(e) => setDecimals(e.target.value)} />
      </label>
      <input type="submit" />
    </form>
  )
}

export default Form