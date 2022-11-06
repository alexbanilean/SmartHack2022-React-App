import React from 'react'
import { Feature, Navbar } from './components'
import { Footer, What, Header, FAQ, Wallet} from './containers'
import './App.css'
<<<<<<< HEAD
=======
import { useState } from 'react'
>>>>>>> 660a18291e115aeaf566559707de407624a21f53
import { useMetaMask } from "metamask-react";


const App = () => {
  const { status, connect, account, chainId, ethereum } = useMetaMask();
  // const x = useMetaMask();

<<<<<<< HEAD
  const { status, connect, account, chainId, ethereum } = useMetaMask();
=======
  // const [status, setStatus] = useState("Hello"); 

  // setStatus("yay");

  // aici sunt in x
  // const status = x.status;
  // const connect = x.connect;
  // const account = x.account;
  // const chainId = x.chainId;
  // const ethereum = x.ethereum;
>>>>>>> 660a18291e115aeaf566559707de407624a21f53

  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar status = {status} connect = {connect}/>
<<<<<<< HEAD
          <Header />
=======
          <Header account = {account}/>
>>>>>>> 660a18291e115aeaf566559707de407624a21f53
        </div>
        <What />
        <Footer />
    </div>
  )
}

export default App