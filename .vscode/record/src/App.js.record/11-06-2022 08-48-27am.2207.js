import React from 'react'
import { Feature, Navbar } from './components'
import { Footer, What, Header, FAQ, Wallet} from './containers'
import './App.css'
import { useMetaMask } from "metamask-react";


const App = () => {
  const { status, connect, account, chainId, ethereum } = useMetaMask();
  // const x = useMetaMask();

  const { status, connect, account, chainId, ethereum } = useMetaMask();

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