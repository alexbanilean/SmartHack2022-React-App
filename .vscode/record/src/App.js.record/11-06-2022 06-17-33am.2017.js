import React from 'react'
import { Feature, Navbar } from './components'
import { Footer, What, Header, FAQ, Wallet} from './containers'
import './App.css'
import { useState } from 'react'

import { useMetaMask } from "metamask-react";

window.MyVars = {
    status: ''
}

const App = () => {

  const x = useMetaMask();

  //const [status, setStatus] = useState("Hello"); 

  stra

  // aici sunt in x
  // const status = x.status;
  // const connect = x.connect;
  // const account = x.account;
  // const chainId = x.chainId;
  // const ethereum = x.ethereum;

  let result = "";

  if (x.status === "initializing") result = `Synchronisation with MetaMask ongoing...`;

  if (x.status === "unavailable") result = `MetaMask not available`;

  if (x.status === "notConnected") x.connect;

  if (x.status === "connecting") result = `Connecting...`;

  if (x.status === "connected") result =  `Connected account ${x.account} on chain ID ${x.chainId}`;

  // alert(result);
  // console.log(result);

  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <What />
        <Footer />
    </div>
  )
}

export default App