import React from 'react'

import { Feature, Navbar } from './components'
import { Footer, What, Header, FAQ, Wallet} from './containers'
import './App.css'

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <What />
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <Footer />
    </div>
  )
}

export default App