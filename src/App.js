import React from 'react'
import { Feature, Navbar } from './components'
import { Footer, What, Header, FAQ, Wallet} from './containers'
import './App.css'
import { useState } from 'react'
import { useMetaMask } from "metamask-react";


const App = () => {
  const { status, connect, account, chainId, ethereum } = useMetaMask();
  const [editingForm, setEditingForm] = useState(false);

  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar status = {status} connect = {connect}/>
          {editingForm ? null: <Header account = {account}/>}

          {/* <Header account = {account}/> */}
        </div>
        <What />
        <Footer />
    </div>
  )
}

export default App