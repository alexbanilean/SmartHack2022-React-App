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

  if (x.status === "initializing") return <div>Synchronisation with MetaMask ongoing...</div>

  if (status === "unavailable") return <div>MetaMask not available :</div>

  if (status === "notConnected") return <button onClick={connect}>Connect to MetaMask</button>

  if (status === "connecting") return <div>Connecting...</div>

  if (status === "connected") return <div>Connected account {account} on chain ID {chainId}</div>

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