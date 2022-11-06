import React from 'react'
import { Feature, Navbar } from './components'
import { Footer, What, Header, FAQ, Wallet} from './containers'
import './App.css'
import { useState, useEffect } from 'react';
import ethers from 'ethers';

const App = () => {

  const { status, connect, account, chainId, ethereum } = useMetaMask();
  // const x = useMetaMask();

  // const [status, setStatus] = useState("Hello"); 

  // setStatus("yay");

  // aici sunt in x
  // const status = x.status;
  // const connect = x.connect;
  // const account = x.account;
  // const chainId = x.chainId;
  // const ethereum = x.ethereum;

  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar status = {status} connect = {connect}/>

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