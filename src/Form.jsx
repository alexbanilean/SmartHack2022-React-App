import React from 'react'
import { useState } from 'react'


const Form = (props) => {

  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [supply, setSupply] = useState("");
  const [decimals, setDecimals] = useState("");

  const handleSubmit = (event) => {
    // post to backend
    event.preventDefault();
    console.log(name, symbol, supply, decimals, props.address);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("nume", name);
    urlencoded.append("simbol", symbol);
    urlencoded.append("supply", supply);
    urlencoded.append("decimals", decimals);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    fetch("http://localhost:7545/create_token/" + props.account, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    //     event.preventDefault();

    //     const requestOptions = {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify(event)
    //   };
    //   fetch('http://localhost:8080/create_token/' + props.account, requestOptions)
    //       .then(response => response.json())
    //       .then(data => this.setState({ tokenAddress: data }));

    // if(alert(`Crypto coin ${name} starts creating...`)){

    // }
    // else{ 
    //     alert(`Crypto coin succesfully created.`)    
    //     window.location.reload();
    // }
  }
    
  return (
    <form onSubmit={handleSubmit}>
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