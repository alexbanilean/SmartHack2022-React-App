import React from 'react'
import { Feature, Navbar } from './components'
import { Footer, What, Header, FAQ, Wallet} from './containers'
import './App.css'
import { useMetaMask } from "metamask-react";
import { useMetaMask } from "metamask-react";

function metaMask(){
  
  const { status, connect, account, chainId, ethereum } = useMetaMask();
  
  ethereum.request({method: "eth_requestAccounts"}).then(accounts => {
          let account = accounts[0];
          console.log(account);
          localStorage.setItem("account", account);
          ethereum.request({method: "eth_getBalance", params: [account, "latest"]}).then(result => {
                console.log(result);
          })
    })

}

const App = () => {
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