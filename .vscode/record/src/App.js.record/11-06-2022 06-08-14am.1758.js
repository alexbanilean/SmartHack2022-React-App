import React from 'react'
import { Feature, Navbar } from './components'
import { Footer, What, Header, FAQ, Wallet} from './containers'
import './App.css'
import { useState } from 'react'

import { useMetaMask } from "metamask-react";

const App = () => {

  const x = useMetaMask();

  //const [status, setStatus] = useState("Hello"); 

  //setStatus("yay");

  // aici sunt in x
  // const status = x.status;
  // const connect = x.connect;
  // const account = x.account;
  // const chainId = x.chainId;
  // const ethereum = x.ethereum;

  const result = "";

  if (x.status === "initializing") result = <div>Synchronisation with MetaMask ongoing...</div>;

  if (x.status === "unavailable") result = <div>MetaMask not available :</div>

  if (x.status === "notConnected") result = <button onClick={x.connect}>Connect to MetaMask</button>

  if (x.status === "connecting") result = <div>Connecting...</div>

  if (x.status === "connected") result =  <div>Connected account {x.account} on chain ID {x.chainId}</div>

  alert(rsult)

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