import React from 'react'

import { Article, Brand, CTA, Feature, Navbar } from './components'
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
        <Brand />
        <Footer />
    </div>
  )
}

export default App