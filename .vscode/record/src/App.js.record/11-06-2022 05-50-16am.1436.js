import React from 'react'
import { Feature, Navbar } from './components'
import { Footer, What, Header, FAQ, Wallet} from './containers'
import './App.css'

import { useMetaMask } from "metamask-react";

const App = () => {

  const x = useMetaMask();

  const [address, setAddresss] = useState("");

  // aici sunt in x
  const status = x.status;
  const connect = x.connect;
  const account = x.account;
  const chainId = x.chainId;
  const ethereum = x.ethereum;
  const address = x.address;

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