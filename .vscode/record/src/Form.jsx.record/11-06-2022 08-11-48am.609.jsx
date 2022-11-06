import React from 'react'
import { useState } from 'react'
import './form.css'


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
    <div className='form-bckg'>
        <form onSubmit={handleSubmit} className="form-container">
        <div className='form-title'>Create token form</div>
        <label>Enter token name&#160;:&#160;
            <input type="text" onChange={(e) => setName(e.target.value)} />
        </label>
        <label>Enter token symbol&#160;:&#160;
            <input type="text" onChange={(e) => setSymbol(e.target.value)} />
        </label>
        <label>Enter token supply&#160;:&#160;
            <input type="text" onChange={(e) => setSupply(e.target.value)} />
        </label>
        <label>Enter token decimals&#160;:&#160;
            <input type="text" onChange={(e) => setDecimals(e.target.value)} />
        </label>
        <label className="submit">
            <input type="submit" />
        </label>
        </form>
    </div>
  )
}

export default Form