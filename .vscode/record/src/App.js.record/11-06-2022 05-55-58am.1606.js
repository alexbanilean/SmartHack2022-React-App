import React from 'react'
import { Feature, Navbar } from './components'
import { Footer, What, Header, FAQ, Wallet} from './containers'
import './App.css'
import { useState } from 'react'

import { useMetaMask } from "metamask-react";

const App = () => {

  const x = useMetaMask();

  const [status, setStatus] = useState("Hello"); 
  
  // aici sunt in x
  // const status = x.status;
  // const connect = x.connect;
  // const account = x.account;
  // const chainId = x.chainId;
  // const ethereum = x.ethereum;

  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar status = {status} setStatus = {setStatus}/>
          <Header />
        </div>
        <What />
        <Footer />
    </div>
  )
}

export default App